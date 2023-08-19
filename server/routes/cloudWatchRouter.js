"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var cloudWatchLogController = require('../controllers/cloudwatch/cloudWatchLogController.js');
var stsController = require('../controllers/stsController.js');
var cloudWatchRouter = express.Router();
var cloudWatchMetricsController = require('../controllers/cloudwatch/cloudWatchMetricsController.js');
//view function streams - user needs to specify function name
cloudWatchRouter.post('/getLogs', stsController.getCredentials, cloudWatchLogController.viewFunctionStreams, function (req, res) {
    return res.status(200).json(res.locals.logStreamNames);
});
//view timestamp and message - user needs to specify function name and stream name
cloudWatchRouter.post('/getStreamDetails', stsController.getCredentials, cloudWatchLogController.viewStreamInfo, function (req, res) {
    return res.status(200).json(res.locals.events);
});
// 1st req body { region, roleArn } // 2nd req body { funcName, sortBy, period, startDate, region }
cloudWatchRouter.post('/getMetrics', stsController.getCredentials, cloudWatchMetricsController.getMetrics, function (req, res) {
    return res.status(200).json(res.locals.metrics);
});
module.exports = cloudWatchRouter;
