const User = require('../../models/userModel.js');
const Session = require('../../models/sessionModel.js')

const cookieController = {}

cookieController.setSSIDCookie = async(req, res, next) => {
  if(res.locals.loginUsername) {
    console.log('hello in setssidcookie')
    // const { loginUsername } = req.body;
    
    const foundUser = await User.findOne({ username: res.locals.loginUsername });

    // console.log('foundUser setSSIDCookie: ', foundUser);

    res.locals.ssid = foundUser._id;
    return next();
  } else {
    const foundUser = await User.findOne({ username: res.locals.signUpUsername });
    res.locals.ssid = foundUser._id;
    return next();
  }
}

cookieController.newSession = async(req, res, next) => {
  // console.log('in new session controller but outside try block')
  try{
    console.log('in newSession controller')
    const foundUser = await User.findOne({ username: res.locals.loginUsername || res.locals.signUpUsername })
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
    console.log('cookie: ', req.cookies.SSID)
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
    console.log('ending session');
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


module.exports = cookieController;