import express from 'express';
import { Request, Response, Router } from 'express';
import cloudWatchLogController from '../controllers/cloudwatch/cloudWatchLogController';
import stsController from '../controllers/stsController';
import cloudWatchMetricsController from '../controllers/cloudwatch/cloudWatchMetricsController';

const cloudWatchRouter: Router = express.Router();

// view function streams - user needs to specify function name
cloudWatchRouter.post('/getLogs', stsController.getCredentials, cloudWatchLogController.viewFunctionStreams, (req: Request, res: Response) => {
    return res.status(200).json(res.locals.logStreamNames);
});

// view timestamp and message - user needs to specify function name and stream name
cloudWatchRouter.post('/getStreamDetails', stsController.getCredentials, cloudWatchLogController.viewStreamInfo, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.events);
});

// 1st req body { region, roleArn } // 2nd req body { funcName, sortBy, period, startDate, region }
cloudWatchRouter.post('/getMetrics', stsController.getCredentials, cloudWatchMetricsController.getMetrics, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.metrics);
});

export default cloudWatchRouter;
