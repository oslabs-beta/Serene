const express = require('express');
const stsController = require('../controllers/stsController.js');
const lambdaController = require('../controllers/lambdaController.js')
const awsRouter = express.Router();

//routers go here
awsRouter.get('/funcs', stsController.getCredentials, lambdaController.getFunctions, (req, res) => {
  return res.status(200).json(res.locals.functions);
});

module.exports = awsRouter;