const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const awsRouter = require('./routes/awsRouter.js');
const userRouter = require('./routes/userRouter.js');
const cloudWatchRouter = require('./routes/cloudWatchRouter.js')
const path = require('path');
const cookieParser = require('cookie-parser');

// add the beginning of your app entry
// import 'vite/modulepreload-polyfill'

const PORT = 3000;
console.log('In server.js before mongoDB connection')
mongoose.connect(process.env.ACCESS_KEY, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route handlers go here
app.use('/api/aws', awsRouter);
app.use('/api/user', userRouter);
app.use('/api/cloudwatch', cloudWatchRouter);


app.use(express.static('../client'))

//404 handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found')
})

//global error handler
app.use((err, req, res, next) => {
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

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// export const handler = app;
module.exports = app;