const express = require('express');
import { Request, Response, Router } from 'express';
const warmingController = require('../controllers/warming/warmingController.js');
const stsController = require('../controllers/stsController.js');
const warmingRouter: Router = express.Router();

warmingRouter.get('/functions', stsController.getCredentials, warmingController.warmFunction, (req: Request, res: Response) => {
  res.status(200).json(res.locals.statusCodeRes)
})



module.exports = warmingRouter;