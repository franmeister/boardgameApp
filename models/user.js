'user strict'

var moongose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    rol: String,
    image: String
})

module.exports = mongoose.model('User', UserSchema);