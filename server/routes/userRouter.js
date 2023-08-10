const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/authentication/cookieController.js');

//routers go here
userRouter.post('/signup', userController.createUser, cookieController.setSSIDCookie, cookieController.newSession, (req, res) => {
  return res.status(200).json(res.locals.newCookie);
});

userRouter.get('/', userController.getAllUsers, (req,res) => {
  return res.status(200).json(res.locals.allUsers);
}) 

userRouter.post('/login', userController.login, cookieController.setSSIDCookie, cookieController.newSession, (req, res) => {
  if(req.body.username === '' || req.body.password === '') {
    return res.status(400)
  } else {
    res.cookie('SSID',res.locals.ssid, { httpOnly: true });
    return res.status(200).send('success');
  }
});

// userRouter.post('/logout', userController.endSession, (req, res) => {
//   return res.status(200).json({
//     message: 'Logout Successful'
//   });
// });

module.exports = userRouter;
