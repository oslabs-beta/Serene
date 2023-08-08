const express = require('express');
const stsController = require('../controllers/stsController.js');
const lambdaController = require('../controllers/lambda/lambdaController.js')
const lambdaRouter = express.Router();

//routers go here
lambdaRouter.get('/functions', stsController.getCredentials, lambdaController.getFunctions, (req, res) => {
  return res.status(200).json(res.locals.functions);
});

module.exports = lambdaRouter;