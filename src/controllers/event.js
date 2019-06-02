const Event = require('../models/event');

exports.postEvent = (req, res) => {
  console.log(req.body);
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

exports.getEvents = (_, res) => {
  Event.find({}, (err, events) => {
    if (err) {
      res.status(500).json({ error: err });
    }
    res.status(200).json({ events: events });
  });
};
