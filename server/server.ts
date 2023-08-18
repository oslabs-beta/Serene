const express = require('express');
// const { req, res, next } = require('express')
import { Express, Request, Response, NextFunction, RequestHandler, Router } from 'express';
const app: Express = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// require in routers
const lambdaRouter: Router = require('./routes/lambdaRouter.js');
const userRouter: Router = require('./routes/userRouter.js');
const cloudWatchRouter: Router = require('./routes/cloudWatchRouter.js');
const versionRouter: Router = require('./routes/versionRouter.js')
const warmingRouter: Router = require('./routes/warmingRouter.js')

// require cookies
const cookieParser = require('cookie-parser');


// add the beginning of your app entry
// import 'vite/modulepreload-polyfill'

const PORT: number = 3000;
console.log('In server.js before mongoDB connection')
mongoose.connect(process.env.ACCESS_KEY, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
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
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

//global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  res.status(errorObj.status).json(errorObj.message);
});

const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// export const handler = app;
module.exports = server;