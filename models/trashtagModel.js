var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TagSchema = new Schema({

    address: {
        type: String,
        trim: true
    },
    lat: {
        type: String,
        trim: true,
        required: "Latitutde is Required"
    },
    long: {
        type: String,
        trim: true,
        required: "Longitude is Required"
    },
    date: {
        type: Date,
        trim: true
    }
});

var Tag = mongoose.model("TrashTag", TagSchema);

module.exports = Tag;
