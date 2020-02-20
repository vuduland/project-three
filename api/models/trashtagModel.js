const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
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
  }
});

const Tag = mongoose.model('TrashTag', TagSchema);

module.exports = Tag;
