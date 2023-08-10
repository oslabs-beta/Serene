const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
  const { username, password, ARN, region } = req.body;
  // console.log('started createUser')
  const hashedPassword = await bcrypt.hash(password, 10);
  // console.log('hashed password')
  try {
    const newUser = await User.create({username, password: hashedPassword, ARN, region });
    res.locals.username = newUser.username;
    return next();
  } catch (error) {
    return next({
      log: `The following error occured: ${error}`,
      status: 400,
      message: { err: 'An error occured while trying to create a new user' }
    })
  }
}

userController.getAllUsers = async (req,res,next) => {
  try {
    const allUsers = await User.find({});
    res.locals.allUsers = allUsers;
    return next()
  }
  catch (error){
    return next({
      log: `The following error occured: ${error} in getAllUsers`,
      status: 400,
      message: { err: 'An error occured while trying to get all users' }
    })
  }
}

userController.login = async (req, res, next) => {
  try{
    //deconstruct req body
    const { username, password } = req.body;
    console.log('inlogincontroller')
    //find by username
    const userResult = await User.findOne({ username: username });
    //if userResult return nothing, throw err
    if(userResult === null || userResult === undefined) {
      return next({
        log: `The following error occured: ${error}`,
        status: 400,
        message: 'invalid username or password'
      }) 
    }
    //if userResult has a value, move on to below comparisons
    //pull pw from mongo and use bcrypt.compare to compare hashed pw with inputted pw
    const hashedPassword = userResult.password;
    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
    if(!isPasswordMatch) {
      return next({
        log: `The following error occured: ${error}`,
        status: 400,
        message: 'invalid username or password'
      }) 
    }
    console.log('passwords match!')
    res.locals.username = userResult.username;
    return next()
  } catch (err) {
    return next({
      log: `The following error occured: ${error}`,
      status: 400,
      message: { err: `An error occured while trying to login` }
    })
  }
}

module.exports = userController;