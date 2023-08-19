import User from '../models/userModel';
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';

import { UserController, ServerError, CreateUserInfo, UserInfo, Login, UpdatedUserInfo } from '../types';


const userController = {} as UserController

userController.createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password, ARN, region }: CreateUserInfo = req.body;

  const hashedPassword: number = await bcrypt.hash(password, 10);

  try {
    // create the user in MongoDB with the username, hashedPassword, ARN, and region
    const newUser: UserInfo = await User.create({username, password: hashedPassword, ARN, region });
    // send back the username as the signUpUsername
      // (wanted to differentiate btwn signup and login usernames)
    res.locals.signUpUsername = newUser.username;
    return next();
  } catch (error) {
    return next({
      log: `The following error occured: ${error}`,
      status: 400,
      message: { error: 'An error occured while trying to create a new user' }
    })
  }
}

userController.getAllUsers = async (req: Request,res: Response,next: NextFunction) => {
  try {
    // find all users in Mongo and send them back
    const allUsers = await User.find({});
    res.locals.allUsers = allUsers;
    return next()
  }
  catch (error) {
    return next({
      log: `The following error occured: ${error} in getAllUsers`,
      status: 400,
      message: { error: 'An error occured while trying to get all users' }
    })
  }
}

userController.login = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const { username, password }: Login = req.body;
    // find by username
    const userResult: UserInfo = await User.findOne({ username });

    // if userResult return nothing, throw err
    if(userResult === null || userResult === undefined) {
      return next({
        log: `The following error occured: input fields not filled properly`,
        status: 400,
        message: 'invalid username or password'
      })
    }
    console.log('past the conditional')
    // if userResult has a value, move on to below comparisons
    // pull pw from mongo and use bcrypt.compare to compare hashed pw with inputted pw
    const hashedPassword = userResult.password;
    const isPasswordMatch: boolean = await bcrypt.compare(password, hashedPassword);
    if(!isPasswordMatch) {
      return next({
        log: `The following error occured: invalid username or password`,
        status: 400,
        message: 'invalid username or password'
      })
    }
    // console.log('passwords match!')
    res.locals.loginUsername = userResult.username;
    return next()
  } catch (err) {
    return next({
      log: `The following error occured in login: ${err}`,
      status: 400,
      message: { err: `An error occured while trying to login` }
    })
  }
}

userController.updateUser = async (req, res, next) => {
  const { newARN, newRegion }: UpdatedUserInfo = req.body;
  try {
    const updated: UserInfo = await User.findOneAndUpdate(
      { _id: req.cookies.SSID },
      { ARN: newARN, region: newRegion },
      { new: true }
    );

    res.locals.updatedUser = updated;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: `An error occured while trying to update a user` }
    })
  }
}

export default userController;