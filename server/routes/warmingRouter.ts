import express from 'express';
import { Request, Response, Router } from 'express';
import warmingController from '../controllers/warming/warmingController';
import stsController from '../controllers/stsController';

const warmingRouter = express.Router();

// invokes the function at the user specified frequency and duration (req.body)
warmingRouter.get('/functions', stsController.getCredentials, warmingController.warmFunction, (req: Request, res: Response) => {
  res.status(200).json(res.locals.statusCodeRes)
})



export default warmingRouter;