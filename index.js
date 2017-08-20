'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3003;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:32768/boardgameapp', (err, res) => {
    if (err){
        throw err;
    }else{
        console.log("Connected to database");
        
        app.listen(port, function(){
            console.log("Server is running on "+port);
        });
    }
});