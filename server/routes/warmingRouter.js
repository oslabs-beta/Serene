const express = require('express');
// import { Request, Response, Router } from 'express';
const warmingController = require('../controllers/warming/warmingController.js');
const stsController = require('../controllers/stsController.js');
const warmingRouter = express.Router();

warmingRouter.post('/functions', stsController.getCredentials, warmingController.warmFunction, (req, res) => {
  res.status(200).json(res.locals.statusCodeRes)
})

module.exports = warmingRouter;