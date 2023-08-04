const express = require('express');
const cloudWatchController = require('../controllers/cloudWatchController.js');
const stsController = require('../controllers/stsController.js');
const cloudWatchRouter = express.Router();

cloudWatchRouter.get('/logs', stsController.getCredentials, cloudWatchController.viewFunctions, (req, res) => {
  return res.status(200).json(res.locals.creds);
});

module.exports = cloudWatchRouter;
