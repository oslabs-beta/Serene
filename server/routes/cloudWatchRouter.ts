// boilerplate
import express from 'express';
import { Request, Response, Router } from 'express';

// import middlware
import cloudWatchLogController from '../controllers/cloudwatch/cloudWatchLogController';
import stsController from '../controllers/stsController';
import cloudWatchMetricsController from '../controllers/cloudwatch/cloudWatchMetricsController';

// initialize router
const cloudWatchRouter: Router = express.Router();

// view function streams - user needs to specify function name
cloudWatchRouter.post('/getLogs', stsController.getCredentials, cloudWatchLogController.viewFunctionStreams, (req: Request, res: Response) => {
  // send a 200 status and a list of the log stream names (array of strings)
  return res.status(200).json(res.locals.logStreamNames);
});

// view timestamp and message - user needs to specify function name and stream name
cloudWatchRouter.post('/getStreamDetails', stsController.getCredentials, cloudWatchLogController.viewStreamInfo, (req: Request, res: Response) => {
  // send a 200 status and an list of log events (array of objects)
  return res.status(200).json(res.locals.events);
});

// 1st req body { region, roleArn } // 2nd req body { funcName, sortBy, period, startDate, region }
cloudWatchRouter.post('/getMetrics', stsController.getCredentials, cloudWatchMetricsController.getMetrics, (req: Request, res: Response) => {
  // send a 200 status and a list of metrics (nested object)
  return res.status(200).json(res.locals.metrics);
});

export default cloudWatchRouter;
