const express = require('express');
import { Request, Response, Router } from 'express';
const versionHistoryController = require('../controllers/versions/versionHistoryController.js');
const stsController = require('../controllers/stsController.js')

const versionRouter: Router = express.Router();


versionRouter.get('/versionList', stsController.getCredentials, versionHistoryController.viewVersionList, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.versionList)
})

versionRouter.get('/functionVersion', stsController.getCredentials, versionHistoryController.viewFunctionVersion, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.versionInfo);
})
//versionHistoryController.viewVersionList, 
versionRouter.get('/getAlias', stsController.getCredentials, versionHistoryController.getAlias, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.aliasList);
})

module.exports = versionRouter;