import User from '../../models/userModel';
import Session from '../../models/sessionModel';

import { CookieController, UserInfo } from '../../types'

const cookieController = {} as CookieController;

//if user exists, finds user by username and grabs id
cookieController.setSSIDCookie = async(req, res, next) => {
  if(res.locals.loginUsername) {

    const foundUser: UserInfo = await User.findOne({ username: res.locals.loginUsername });

    res.locals.ssid = foundUser._id;
    return next();
  } else {
    const foundUser: UserInfo = await User.findOne({ username: res.locals.signUpUsername });
    res.locals.ssid = foundUser._id;
    return next();
  }
}

//
cookieController.newSession = async(req, res, next) => {
  try{
    const foundUser: UserInfo = await User.findOne({ username: res.locals.loginUsername || res.locals.signUpUsername })
    console.log('req.cookies (line 24): ', req.cookies.SSID)
    // if(req.cookies.SSID) {
    //   console.log('in req.cookies.ssid')
    //   const sessionObj = {
    //     cookieID: `${foundUser._id}`,
    //     createdAt: new Date()
    //   }
    //   const newSession = await Session.create(sessionObj)
    //   console.log('newSession: ', newSession)
    //   return next()
    // }
    res.locals.newCookie = req.cookies.SSID
    return next()
  } catch(err){
    return next({
      log: `The following error occured: ${err} in newSession`,
      status: 400,
      message: { err: 'An error occured while trying to create a session' }
    })
  }
}

cookieController.endSession = async (req, res, next) => {
  try{
    res.clearCookie('SSID');
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err} in endSession`,
      status: 400,
      message: { err: 'An error occured while trying to end a session' }
    })
  }
}


export default cookieController;