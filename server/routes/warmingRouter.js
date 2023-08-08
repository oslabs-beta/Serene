const express = require('express');
const warmingRouter = express.Router();
const warmingController = require('../controllers/warming/warmingController.js');
const stsController = require('../controllers/stsController.js');

warmingRouter.get('/functions', stsController.getCredentials, warmingController.warmFunction, (req, res) => {
  res.status(200).json(res.locals.statusCodeRes)
})



module.exports = warmingRouter;