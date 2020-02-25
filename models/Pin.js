const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
  address: {
    type: String
  },
  lat: {
    type: String,
    required: [true, 'Latitude is Required']
    // default: // add current location here?
  },
  long: {
    type: String,
    required: [true, 'Longitude is Required']
  },
  date: {
    type: Date
  }
});

module.exports = mongoose.model('pin', PinSchema);
