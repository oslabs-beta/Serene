import express from 'express';
import stsController from '../controllers/stsController'
import lambdaController from '../controllers/lambda/lambdaController'
import { Request, Response, Router } from 'express';

const lambdaRouter: Router = express.Router();

// view all lambda functions -- goes based on user cookie
lambdaRouter.get('/functions', stsController.getCredentials, lambdaController.getFunctions, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.functions);
});

export default lambdaRouter;