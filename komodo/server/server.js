"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
var awsRouter = require('./routes/awsRouter.ts');
var userRouter = require('./routes/userRouter.ts');
var path = require('path');
// add the beginning of your app entry
require("vite/modulepreload-polyfill");
var PORT = 3000;
mongoose.connect("".concat(process.env.ACCESS_KEY), { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', function () {
    console.log('Connected to Database');
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//route handlers go here
app.use('/aws', awsRouter);
app.use('/user', userRouter);
//404 handler
app.use('*', function (req, res) {
    res.status(404).send('Not Found');
});
//connect with index.html
app.get('/', function (req, res) {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
//global error handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    var defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
    };
    var errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj);
    res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, function () { return "listening on port ".concat(PORT); });
// export const handler = app;
