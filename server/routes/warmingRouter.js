"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var warmingController = require('../controllers/warming/warmingController.js');
var stsController = require('../controllers/stsController.js');
var warmingRouter = express.Router();
warmingRouter.get('/functions', stsController.getCredentials, warmingController.warmFunction, function (req, res) {
    res.status(200).json(res.locals.statusCodeRes);
});
module.exports = warmingRouter;
