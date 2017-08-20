'user strict'

var moongose = require('mongoose');
var Schema = mongoose.Schema;

var BoardgameSchema = Schema({
    name: String,
    numPlayer: Number,
    description: String,
    image: String
})

module.exports = mongoose.model('Boardgame', BoardgameSchema);