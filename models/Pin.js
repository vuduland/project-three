const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
  address: {
    type: String
  },
  location: {
    lat: {
      type: String,
      required: true
    },
    lng: {
      type: String,
      required: true
    }
  },
  id: {
    type: Schema.Types.ObjectId
  },
  type: {
    type: String,
    default: 'trashed' // alternate is cleaned
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('pin', PinSchema);
