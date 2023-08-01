var express = require('express');
var userRouter = express.Router();
//routers go here
userRouter.post('/signup', userController.createUser, function (req, res) {
    return res.status(200).json(res.locals.newUser);
});
userRouter.post('/login', userController.login, function (req, res) {
    return res.status(200).json({
        message: 'Login successful!',
        username: res.locals.username
    });
});
module.exports = userRouter;