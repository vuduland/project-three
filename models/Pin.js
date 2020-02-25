const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
  address: {
    type: String,
    trim: true
  },
  lat: {
    type: String,
    trim: true,
    required: [true, 'Latitutde is Required']
  },
  long: {
    type: String,
    trim: true,
    required: [true, 'Longitude is Required']
  },
  date: {
    type: Date,
    trim: true
  },
  trashed: {
    type: Boolean,
    default: true
  }
});

const Pin = mongoose.model('Pin', PinSchema);

module.exports = Pin;
