const express = require('express');
import { Request, Response, Router } from 'express';
const cloudWatchLogController = require('../controllers/cloudwatch/cloudWatchLogController.js');
const stsController = require('../controllers/stsController.js');
const cloudWatchRouter: Router = express.Router();
const cloudWatchMetricsController = require('../controllers/cloudwatch/cloudWatchMetricsController.js');

//view function streams - user needs to specify function name
cloudWatchRouter.post('/getLogs', stsController.getCredentials, cloudWatchLogController.viewFunctionStreams, (req: Request, res: Response) => {
    return res.status(200).json(res.locals.logStreamNames);
});

//view timestamp and message - user needs to specify function name and stream name
cloudWatchRouter.post('/getStreamDetails', stsController.getCredentials, cloudWatchLogController.viewStreamInfo, (req: Reqeust, res: Response) => {
  return res.status(200).json(res.locals.events);
});

// 1st req body { region, roleArn } // 2nd req body { funcName, sortBy, period, startDate, region }
cloudWatchRouter.post('/getMetrics', stsController.getCredentials, cloudWatchMetricsController.getMetrics, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.metrics);
});

module.exports = cloudWatchRouter;
