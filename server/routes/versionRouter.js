"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var versionHistoryController = require('../controllers/versions/versionHistoryController.js');
var stsController = require('../controllers/stsController.js');
var versionRouter = express.Router();
versionRouter.get('/versionList', stsController.getCredentials, versionHistoryController.viewVersionList, function (req, res) {
    return res.status(200).json(res.locals.versionList);
});
versionRouter.get('/functionVersion', stsController.getCredentials, versionHistoryController.viewFunctionVersion, function (req, res) {
    return res.status(200).json(res.locals.versionInfo);
});
//versionHistoryController.viewVersionList, 
versionRouter.get('/getAlias', stsController.getCredentials, versionHistoryController.getAlias, function (req, res) {
    return res.status(200).json(res.locals.aliasList);
});
module.exports = versionRouter;
