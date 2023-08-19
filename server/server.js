"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
// require in routers
var lambdaRouter = require('./routes/lambdaRouter.js');
var userRouter = require('./routes/userRouter.js');
var cloudWatchRouter = require('./routes/cloudWatchRouter.js');
var versionRouter = require('./routes/versionRouter.js');
var warmingRouter = require('./routes/warmingRouter.js');
// require cookies
var cookieParser = require('cookie-parser');
var app = express();
// add the beginning of your app entry
// import 'vite/modulepreload-polyfill'
var PORT = 3000;
mongoose.connect(process.env.ACCESS_KEY, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', function () {
  console.log('Connected to Database');
});
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//route handlers go here
app.use('/api/lambda', lambdaRouter);
app.use('/api/user', userRouter);
app.use('/api/cloudwatch', cloudWatchRouter);
app.use('/api/versions', versionRouter);
app.use('/api/warming', warmingRouter);
app.use(express.static('../client'));
//404 handler
app.use('*', function (req, res) {
    res.status(404).send('Not Found');
});
//global error handler
app.use(function (err, req, res, next) {
    var defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
    };
    var errorObj = Object.assign({}, defaultErr, err);
    res.status(errorObj.status).json(errorObj.message);
});
var server = app.listen(PORT, function () { return console.log("listening on port ".concat(PORT)); });
// export const handler = app;
module.exports = server;
