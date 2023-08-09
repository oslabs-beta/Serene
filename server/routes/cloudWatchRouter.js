const express = require('express');
const cloudWatchLogController = require('../controllers/cloudwatch/cloudWatchLogController.js');
const stsController = require('../controllers/stsController.js');
const cloudWatchRouter = express.Router();
const cloudWatchMetricsController = require('../controllers/cloudwatch/cloudWatchMetricsController.js');

<<<<<<< HEAD
//view function streams - user needs to specify function name // need to GET user to get User info? Region? ARN?
cloudWatchRouter.get('/logs', stsController.getCredentials, cloudWatchLogController.viewFunctionStreams, (req, res) => {
=======
//view function streams - user needs to specify function name
cloudWatchRouter.get('/getLogs', stsController.getCredentials, cloudWatchLogController.viewFunctionStreams, (req, res) => {
>>>>>>> backend
  return res.status(200).json(res.locals.logStreamNames);
});

//view timestamp and message - user needs to specify function name and stream name
cloudWatchRouter.post('/getStreamDetails', stsController.getCredentials, cloudWatchLogController.viewStreamInfo, (req, res) => {
  return res.status(200).json(res.locals.events);
});

cloudWatchRouter.get('/getMetrics', stsController.getCredentials, cloudWatchMetricsController.getMetrics, (req, res) => {
  return res.status(200).json(res.locals.metrics);
});

module.exports = cloudWatchRouter;
