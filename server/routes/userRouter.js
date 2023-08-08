const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController.js');

//routers go here
userRouter.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.newUser);
});

userRouter.get('/', userController.getAllUsers, (req,res) => {
  return res.status(200).json(res.locals.allUsers);
}) 

userRouter.post('/login', userController.login, (req, res) => {
  return res.status(200).json({
    message: 'Login successful!',
    username: res.locals.username,
  });
});

module.exports = userRouter;
