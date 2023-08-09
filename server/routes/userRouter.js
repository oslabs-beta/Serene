const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/authentication/cookieController.js');

//routers go here
userRouter.post('/signup', userController.createUser, cookieController.setSSIDCookie, (req, res) => {
  return res.status(200).json(res.locals.ssid);
});

userRouter.get('/', userController.getAllUsers, (req,res) => {
  return res.status(200).json(res.locals.allUsers);
}) 

userRouter.post('/login', userController.login, cookieController.setSSIDCookie, (req, res) => {
  return res.status(200).json({
    message: 'Login successful!',
    username: res.locals.username,
  });
});

module.exports = userRouter;
