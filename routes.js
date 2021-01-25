const express = require('express');
const routers = express.Router();


// User Controller 
const userController = require('./controller/userController')
routers.post('/signup', userController.signUpUser);
routers.post('/login', userController.loginUser);



// Tweetes Controller 
const TweeteController = require('./controller/tweetesController')
routers.post('/addtweete', TweeteController.addTweete);
routers.get('/gitalltweete', TweeteController.gitAllTweetes);


module.exports = routers;