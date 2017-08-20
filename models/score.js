'user strict'

var moongose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = Schema({
    score: Number,
    player: { type: Schema.ObjectID, ref: 'User'},
    game: { type: Schema.ObjectID, ref: 'Game'}
})

module.exports = mongoose.model('Score', ScoreSchema);