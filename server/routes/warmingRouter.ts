// boilerplate
import express from 'express';
import { Request, Response, Router } from 'express';

// import middleware
import warmingController from '../controllers/warming/warmingController';
import stsController from '../controllers/stsController';

// initialize router
const warmingRouter: Router = express.Router();

// invokes the function at the user specified frequency and duration (req.body)
warmingRouter.post('/functions', stsController.getCredentials, warmingController.warmFunction, (req: Request, res: Response) => {
  // send a 200 status
  res.status(200)
});



export default warmingRouter;