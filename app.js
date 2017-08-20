'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//routes
var userRoutes = require('./routes/user');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//headers

//bases routes
app.use('/api', userRoutes);

module.exports = app;
