const express = require('express');
const cloudWatchController = require('../controllers/cloudWatchController.js');
const stsController = require('../controllers/stsController.js');
const cloudWatchRouter = express.Router();

//view function streams - user needs to specify function name
cloudWatchRouter.get('/logs', stsController.getCredentials, cloudWatchController.viewFunctionStreams, (req, res) => {
  return res.status(200).json(res.locals.logStreamNames);
});

//view timestamp and message - user needs to specify function name and stream name
cloudWatchRouter.get('/getStreamDetails', stsController.getCredentials, cloudWatchController.viewStreamInfo, (req, res) => {
  return res.status(200).json(res.locals.events);
});

module.exports = cloudWatchRouter;
