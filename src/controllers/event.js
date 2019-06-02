const Event = require('../models/event');

exports.postEvent = (req, res) => {
  const event = new Event({
    date: req.body.date,
    address: {
      street: req.body.address.street,
      city: req.body.address.city,
      postcode: req.body.address.postcode,
    },
    menu: req.body.menu,
  });

  event.save().then(() => {
    res.status(200).json(event);
  }).catch(error => {
    res.status(500).json(error);
  });
};

exports.getEvents = (req, res) => {
  const options = { ...req.query };
  Event.find(options, (err, events) => {
    if (err) {
      res.status(500).json({ error: err });
    }
    res.status(200).json({ events: events });
  });
};

exports.updateEvent = (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, event) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(event);
    }
  });
};

exports.deleteEvent = (req, res) => {
  Event.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
};
