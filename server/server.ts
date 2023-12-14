// boilerplate
import express, { ErrorRequestHandler, Express, Request, Response, NextFunction, RequestHandler, Router } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
const dotenv = require('dotenv').config();
import path from 'path';

// require in routers
import lambdaRouter from './routes/lambdaRouter';
import userRouter from './routes/userRouter';
import cloudWatchRouter from './routes/cloudWatchRouter';
import versionRouter from './routes/versionRouter';
import warmingRouter from './routes/warmingRouter';

// import necessary types
import { ServerError } from './types.js';

// require cookies
const cookieParser = require('cookie-parser');
// intialize our app
const app: Express = express();
// declare our port
const PORT: number = 3000;

// grab our access key from .env and connect to MongoDB
const ACCESS_KEY: string = process.env.ACCESS_KEY!

mongoose.connect(ACCESS_KEY, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions);

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// parse cookies and incoming requests
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route handlers go here
app.use('/api/lambda', lambdaRouter);
app.use('/api/user', userRouter);
app.use('/api/cloudwatch', cloudWatchRouter);
app.use('/api/versions', versionRouter);
app.use('/api/warming', warmingRouter);

// serve static files
app.use(express.static('./dist')); // ../client/dist 

app.use('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html')); 
});

// global error handler
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: ServerError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj: ServerError = Object.assign({}, defaultErr, err);
  res.status(errorObj.status).json(errorObj.message);
});

// listen and export app/server
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export default server;