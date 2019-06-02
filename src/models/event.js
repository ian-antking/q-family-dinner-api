const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  date: {
    type: Number,
    required: [true, 'date is required'],
  },
  address: {
    street: {
      type: String,
      required: [true, 'street is required'],
    },
    city: {
      type: String,
      required: [true, 'city is required'],
    },
    postcode: {
      type: String,
      required: [true, 'postcode is required'],
    },
  },
  menu: [{
    type: String,
  }],
});

const Event = mongoose.model('event', EventSchema);

module.exports = Event;
