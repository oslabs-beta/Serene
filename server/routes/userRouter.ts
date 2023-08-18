const express = require('express');
import { Request, Response, Router } from 'express';
const userRouter: Router = express.Router();
// const userController: userController = require('../controllers/userController.js');
import * as userController from '../controllers/userController';
const cookieController = require('../controllers/authentication/cookieController.js');

// type userController = {
//   createUser: Function,
//   getAllUsers: Function,
//   login: Function,
//   updateUser: Function
// }

//routers go here
userRouter.post('/signup', userController.createUser, cookieController.setSSIDCookie, cookieController.newSession, (req: Request, res: Response) => {
  if(req.body.username === '' || req.body.password === '') {
    return res.status(400);
  } else {
    console.log('in last middleware');
    const hours: number = 1;
    const maxAgeInMs: number = hours * 60 * 60 * 1000;
    res.cookie('SSID', res.locals.ssid, {maxAge: maxAgeInMs, httpOnly: true}).sendStatus(200);
  }
});

userRouter.get('/', userController.getAllUsers, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.allUsers);
}) 

userRouter.post('/login', userController.login, cookieController.setSSIDCookie, cookieController.newSession, (req: Request, res: Response) => {
  if(req.body.username === '' || req.body.password === '') {
    return res.status(400);
  } else {
    console.log('in last middleware');
    const hours: number = 1;
    const maxAgeInMs:number = hours * 60 * 60 * 1000;
    res.cookie('SSID', res.locals.ssid, {maxAge: maxAgeInMs, httpOnly: true }).sendStatus(200);
    console.log('cookie should be created');
    // return res.status(200);
  }
});

userRouter.post('/logout', cookieController.endSession, (req: Request, res: Response) => {
  return res.end('done');
});

userRouter.patch('/edit', userController.updateUser, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.updatedUser);
});

module.exports = userRouter;
