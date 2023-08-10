const User = require('../../models/userModel.js');
const Session = require('../../models/sessionModel.js')

const cookieController = {}

cookieController.setSSIDCookie = async(req, res, next) => {
  const { username } = req.body;

  const foundUser = await User.findOne({ username });

  if(foundUser){
    res.locals.ssid = foundUser._id;
    return next();
  }
}

cookieController.newSession = async(req, res, next) => {
  try{
    console.log('in newSession controller')
    const foundUser = await User.findOne({ username: res.locals.username })
    console.log('req.cookies (line 21): ', req.cookies)
    if(req.cookies.SSID) {
      console.log('in req.cookies.ssid')
      const sessionObj = {
        cookieID: `${foundUser._id}`
      }
      await Session.create(sessionObj)
      return next()
    } else{
      res.cookie('SSID', res.locals.ssid, { httpOnly: true });
      console.log('req.cookies (line 31): ', req.cookies)
    }
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
  res.clearCookie('SSID');
  return next();
}


module.exports = cookieController;