const express = require('express');
const routers = express.Router();


// User Controller 
const userController = require('./controller/userController')
routers.post('/signup', userController.signUpUser);
routers.post('/login', userController.loginUser);

module.exports = routers;