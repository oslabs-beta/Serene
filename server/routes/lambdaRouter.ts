const express = require('express');
const stsController = require('../controllers/stsController.js');
const lambdaController = require('../controllers/lambda/lambdaController.js');
import { Request, Response, Router } from 'express';

const lambdaRouter: Router = express.Router();

//routers go here
lambdaRouter.get('/functions', stsController.getCredentials, lambdaController.getFunctions, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.functions);
});

module.exports = lambdaRouter;