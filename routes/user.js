'use strict'

var express = require('express');
var UserController = require('./../controllers/userController');

var api = express.Router();

api.get('/user', UserController.store);

module.exports = api;