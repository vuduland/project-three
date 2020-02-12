var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({

    username: {
        type: String,
        trim: true
        required: "Username is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function(input){
                return input.length >= 6;
            },
            "Password should be longer"
        ]
    },
    email: {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
