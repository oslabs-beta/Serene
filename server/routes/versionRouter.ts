import express from 'express';
import { Request, Response, Router } from 'express';
import versionHistoryController from '../controllers/versions/versionHistoryController';
import stsController from '../controllers/stsController'

const versionRouter: Router = express.Router();

// gets all versions of a lambda function -- based on user cookie
versionRouter.get('/versionList', stsController.getCredentials, versionHistoryController.viewVersionList, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.versionList)
})

// gets information on a specific function version -- based on user cookie
versionRouter.get('/functionVersion', stsController.getCredentials, versionHistoryController.viewFunctionVersion, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.versionInfo);
})

// gets alias information for a specific lambda function -- takes the funcName in req.body
versionRouter.get('/getAlias', stsController.getCredentials, versionHistoryController.getAlias, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.aliasList);
})

export default versionRouter;