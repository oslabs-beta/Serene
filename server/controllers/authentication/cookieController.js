const User = require('../../models/userModel.js');


const cookieController = {}

cookieController.newSession = async(req, res, next) => {
  if(req.cookies.SSID) {
    return next()
  }
  const hours = 1;
  const maxAgeInsMs = hours * 60 * 60 * 1000;
  res.cookie('SSID', res.locals.username, { maxAge: maxAgeInsMs, httpOnly: true })
  return next()
}

cookieController.setSSIDCookie = async (req, res, next) => {
  const { username } = req.body;

  const foundUser = await User.findOne({ username: username });
  
  if(foundUser){
    res.locals.ssid = foundUser._id;
    return next();
  }
}


module.exports = cookieController;