const mongoose = require('mongoose');

const PinSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String
  },
  picUrl: {
    type: String
  },
  type: {
    type: String,
    default: 'Trash'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('pin', PinSchema);
