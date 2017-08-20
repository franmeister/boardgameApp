'user strict'

var moongose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = Schema({
    date: Date,
    numPlayer: Number,
    duration: String,
    score: { type: Schema.ObjectID, ref: 'Score'},
    boardgame: { type: Schema.ObjectID, ref: 'Boardgame'}
})

module.exports = mongoose.model('Game', GameSchema);