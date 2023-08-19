"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var stsController = require('../controllers/stsController.js');
var lambdaController = require('../controllers/lambda/lambdaController.js');
var lambdaRouter = express.Router();
//routers go here
lambdaRouter.get('/functions', stsController.getCredentials, lambdaController.getFunctions, function (req, res) {
    return res.status(200).json(res.locals.functions);
});
module.exports = lambdaRouter;
