// boilerplate
import express from 'express';
import { Request, Response, Router } from 'express';

// import middlware
import stsController from '../controllers/stsController';
import lambdaController from '../controllers/lambda/lambdaController';

// initialize router
const lambdaRouter: Router = express.Router();

// view all lambda functions -- goes based on user cookie
lambdaRouter.get('/functions', stsController.getCredentials, lambdaController.getFunctions, (req: Request, res: Response) => {
  // send a 200 status and a list of functions (array of objects)
  return res.status(200).json(res.locals.functions);
});

export default lambdaRouter;