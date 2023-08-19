import express from 'express';
import { Request, Response, Router } from 'express';
import userController from '../controllers/userController.ts';
import cookieController from '../controllers/authentication/cookieController.js';

const userRouter: Router = express.Router();

// signup path -- takes a username, password, ARN, and region in req.body (all strings)
userRouter.post('/signup', userController.createUser, cookieController.setSSIDCookie, cookieController.newSession, (req: Request, res: Response) => {
  if(req.body.username === '' || req.body.password === '') {
    return res.status(400);
  } else {
    const hours: number = 1;
    const maxAgeInMs: number = hours * 60 * 60 * 1000;
    res.cookie('SSID', res.locals.ssid, {maxAge: maxAgeInMs, httpOnly: true}).sendStatus(200);
  }
});

// gets all users
userRouter.get('/', userController.getAllUsers, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.allUsers);
})


// authenticates user login -- takes username and password in req.body
userRouter.post('/login', userController.login, cookieController.setSSIDCookie, cookieController.newSession, (req: Request, res: Response) => {
  if(req.body.username === '' || req.body.password === '') {
    return res.status(400);
  } else {
    const hours: number = 1;
    const maxAgeInMs:number = hours * 60 * 60 * 1000;
    res.cookie('SSID', res.locals.ssid, {maxAge: maxAgeInMs, httpOnly: true }).sendStatus(200);
  }
});

// logs user out and deletes the current cookie
userRouter.post('/logout', cookieController.endSession, (req: Request, res: Response) => {
  return res.end('done');
});

// updates user -- takes newArn and newRegion in req.body
userRouter.patch('/edit', userController.updateUser, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.updatedUser);
});

export default userRouter;