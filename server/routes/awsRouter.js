const express = require('express');
const stsController = require('../controllers/stsController');
const awsRouter = express.Router();

//routers go here
awsRouter.get('/funcs', stsController.getCredentials, (req, res) => {
  return res.status(200).json(res.locals.stsClient);
});

module.exports = awsRouter;