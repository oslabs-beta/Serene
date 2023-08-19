"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var userRouter = express.Router();
var userController = require('../controllers/userController.ts');
var cookieController = require('../controllers/authentication/cookieController.js');
userRouter.post('/signup', userController.createUser, cookieController.setSSIDCookie, cookieController.newSession, function (req, res) {
    if (req.body.username === '' || req.body.password === '') {
        return res.status(400);
    }
    else {
        console.log('in last middleware');
        var hours = 1;
        var maxAgeInMs = hours * 60 * 60 * 1000;
        res.cookie('SSID', res.locals.ssid, { maxAge: maxAgeInMs, httpOnly: true }).sendStatus(200);
    }
});
userRouter.get('/', userController.getAllUsers, function (req, res) {
    return res.status(200).json(res.locals.allUsers);
});
userRouter.post('/login', userController.login, cookieController.setSSIDCookie, cookieController.newSession, function (req, res) {
    if (req.body.username === '' || req.body.password === '') {
        return res.status(400);
    }
    else {
        console.log('in last middleware');
        var hours = 1;
        var maxAgeInMs = hours * 60 * 60 * 1000;
        res.cookie('SSID', res.locals.ssid, { maxAge: maxAgeInMs, httpOnly: true }).sendStatus(200);
        console.log('cookie should be created');
        // return res.status(200);
    }
});
userRouter.post('/logout', cookieController.endSession, function (req, res) {
    return res.end('done');
});
userRouter.patch('/edit', userController.updateUser, function (req, res) {
    return res.status(200).json(res.locals.updatedUser);
});
module.exports = userRouter;
