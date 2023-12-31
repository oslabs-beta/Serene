// import models
import User from '../../models/userModel';
import Session from '../../models/sessionModel';

// import types
import { CookieController, UserInfo } from '../../types'

const cookieController = {} as CookieController;

// if user exists, finds user by username and grabs ID
// sends the ID back to be set as the cookie value
cookieController.setSSIDCookie = async(req, res, next) => {
  try {
    if(res.locals.loginUsername) {
      const foundUser: UserInfo = await User.findOne({ username: res.locals.loginUsername });
      res.locals.ssid = foundUser._id;
      return next();
    } else {
      const foundUser: UserInfo = await User.findOne({ username: res.locals.signUpUsername });
      res.locals.ssid = foundUser._id;
      return next();
    };
  } catch (err) {
    return next({
      log: `The following error occured: ${err} in setSSIDCookie`,
      status: 400,
      message: { err: 'An error occured while trying to set a cookie' }
    });
  };
};

// not sure if this is doing anything to be honest
cookieController.newSession = async(req, res, next) => {
  try{
    const foundUser: UserInfo = await User.findOne({ username: res.locals.loginUsername || res.locals.signUpUsername });
    console.log('req.cookies (line 24): ', req.cookies.SSID);
    res.locals.newCookie = req.cookies.SSID;
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err} in newSession`,
      status: 400,
      message: { err: 'An error occured while trying to create a session' }
    });
  };
};

// clears the cookie upon the user clicking the logout button
cookieController.endSession = async (req, res, next) => {
  try{
    res.clearCookie('SSID');
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err} in endSession`,
      status: 400,
      message: { err: 'An error occured while trying to end a session' }
    });
  };
};


export default cookieController;