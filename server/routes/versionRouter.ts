// boilerplate
import express from 'express';
import { Request, Response, Router } from 'express';

// import middleware
import versionHistoryController from '../controllers/versions/versionHistoryController';
import stsController from '../controllers/stsController';

// initialize router
const versionRouter: Router = express.Router();

// gets all versions of a lambda function -- based on user cookie
versionRouter.post('/versionList', stsController.getCredentials, versionHistoryController.viewVersionList, (req: Request, res: Response) => {
  // send a 200 status and a list of versions (array of objects)
  return res.status(200).json(res.locals.versionList)
});

// gets information on a specific function version -- based on user cookie
versionRouter.post('/functionVersion', stsController.getCredentials, versionHistoryController.viewFunctionVersion, (req: Request, res: Response) => {
  // send a 200 status and the version info (nested object)
  return res.status(200).json(res.locals.versionInfo);
});

// gets alias information for a specific lambda function -- takes the funcName in req.body
versionRouter.post('/getAlias', stsController.getCredentials, versionHistoryController.getAlias, (req: Request, res: Response) => {
  // send a 200 status and a list of aliases (array of objects)
  return res.status(200).json(res.locals.aliasList);
});

export default versionRouter;