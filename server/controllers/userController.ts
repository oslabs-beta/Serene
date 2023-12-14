// boilerplate
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';

// import Schema
import User from '../models/userModel';
// import types
import { UserController, ServerError, CreateUserInfo, UserInfo, Login, UpdatedUserInfo } from '../types';


const userController = {} as UserController;

// takes in a username, password, ARN, and region from the user
// creates a user in MongoDB
// returns the newly created user's username
userController.createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password, ARN, region }: CreateUserInfo = req.body;

  // encrypt the password using bcrypt
  const hashedPassword: string = await bcrypt.hash(password, 10);

  try {
    // create the user in MongoDB with the username, hashedPassword, ARN, and region
    const newUser: UserInfo = await User.create({username, password: hashedPassword, ARN, region });
    // send back the username as the signUpUsername
      // (wanted to differentiate btwn signup and login usernames)
    res.locals.signUpUsername = newUser.username;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to create a new user' }
    });
  };
};

userController.getAllUsers = async (req: Request,res: Response,next: NextFunction) => {
  try {
    // find all users in Mongo and send them back
    const allUsers = await User.find({});
    res.locals.allUsers = allUsers;
    return next()
  }
  catch (err) {
    return next({
      log: `The following error occured: ${err} in getAllUsers`,
      status: 400,
      message: { err: 'An error occured while trying to get all users' }
    });
  };
};

// takes in the username and password from user
// verifies if the account exists or not
// returns the current user's username if successful
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
      });
    };
    // if userResult has a value, move on to below comparisons
    // pull pw from mongo and use bcrypt.compare to compare hashed pw with inputted pw
    const hashedPassword = userResult.password;
    const isPasswordMatch: boolean = await bcrypt.compare(password, hashedPassword);
    if(!isPasswordMatch) {
      return next({
        log: `The following error occured: invalid username or password`,
        status: 400,
        message: 'invalid username or password'
      });
    };
    // console.log('passwords match!')
    res.locals.loginUsername = userResult.username;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured in login: ${err}`,
      status: 400,
      message: { err: `An error occured while trying to login` }
    });
  };
};


// takes in the fields to update from the user
// finds the user's account in MongoDB based on the current cookie
// updates the user's information and returns the updated user
userController.updateUser = async (req, res, next) => {
  const { newARN, newRegion }: UpdatedUserInfo = req.body;
  try {
    // filter: _id
    // new information: ARN, region
    if(newARN && newRegion){
      const updated: UserInfo = await User.findOneAndUpdate(
        { _id: req.cookies.SSID },
        { ARN: newARN, region: newRegion },
        { new: true }
      );
      res.locals.updatedUser = updated;
      return next();
    };

    if(newARN && !newRegion){
      const updated: UserInfo = await User.findOneAndUpdate(
        { _id: req.cookies.SSID },
        { ARN: newARN },
        { new: true }
      );
      res.locals.updatedUser = updated;
      return next();
    };

    if(!newARN && newRegion){
      const updated: UserInfo = await User.findOneAndUpdate(
        { _id: req.cookies.SSID },
        { region: newRegion },
        { new: true }
      );
      res.locals.updatedUser = updated;
      return next();
    }
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: `An error occured while trying to update a user` }
    });
  };
};

// deletes the current user from MongoDB based on cookie
userController.deleteUser = async(req, res, next) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.cookies.SSID });
  
    res.locals.deletedUser = deletedUser;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: `An error occured while trying to delete a user` }
    });
  };
};

export default userController;