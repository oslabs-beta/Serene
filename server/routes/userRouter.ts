// boilerplate
import express from 'express';
import { Request, Response, Router } from 'express';
// import middleware
import userController from '../controllers/userController';
import cookieController from '../controllers/authentication/cookieController';

// initialize router
const userRouter: Router = express.Router();

// signup path -- takes a username, password, ARN, and region in req.body (all strings)
userRouter.post('/signup', userController.createUser, cookieController.setSSIDCookie, cookieController.newSession, (req: Request, res: Response) => {
  // if username or password are empty, return 400 status
  if(req.body.username === '' || req.body.password === '') {
    return res.status(400);
  } else {
    const hours: number = 1;
    const maxAgeInMs: number = hours * 60 * 60 * 1000;
    // set a cookie named SSID with the value of the user's ID and send 200 status
    res.cookie('SSID', res.locals.ssid, {maxAge: maxAgeInMs, httpOnly: true}).sendStatus(200);
  }
});

// gets all users
userRouter.get('/', userController.getAllUsers, (req: Request, res: Response) => {
  // send 200 status and list of all users (array of objects)
  return res.status(200).json(res.locals.allUsers);
})


// authenticates user login -- takes username and password in req.body
userRouter.post('/login', userController.login, cookieController.setSSIDCookie, cookieController.newSession, (req: Request, res: Response) => {
  if(req.body.username === '' || req.body.password === '') {
    // if username or password are empty, send 400 status
    return res.status(400);
  } else {
    const hours: number = 1;
    const maxAgeInMs:number = hours * 60 * 60 * 1000;
    // set a cookie named SSID with the value being the current user's ID and send 200 status
    res.cookie('SSID', res.locals.ssid, {maxAge: maxAgeInMs, httpOnly: true }).sendStatus(200);
  }
});

// logs user out and deletes the current cookie
userRouter.post('/logout', cookieController.endSession, (req: Request, res: Response) => {
  // end current session
  return res.end('done');
});

// updates user -- takes newArn and newRegion in req.body
userRouter.patch('/edit', userController.updateUser, (req: Request, res: Response) => {
  // send a 200 status and the updated user
  return res.status(200).json(res.locals.updatedUser);
});

export default userRouter;