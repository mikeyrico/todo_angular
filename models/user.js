var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
