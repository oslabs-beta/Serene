const request = require('supertest');
const express = require('express');
const mongoose = require("mongoose");
const { describe, beforeEach, expect, test, jest: requiredJest } = require('@jest/globals');

const app = require('../server.js');

// const app = express();

// app.use(bodyParser.json());
// app.use(express.json());

// const userRouter = require('../routes/userRouter.js');

// app.get('/api/user', (req, res) => res.status(200).json({ please: 'work' }))

// app.use('/api/user', userRouter);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 400,
//     message: { err: 'An error occurred' },
//   };

//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj);
//   res.status(errorObj.status).json(errorObj.message);
// });

// beforeEach(done => {
//   done()
// })

afterAll(() => {
  // Closing the DB connection allows Jest to exit successfully.
  // mongoose.connection.close()
  // await app.close();
  mongoose.disconnect();
  app.close();
})

// user signup test
describe('test user signup', () => {

  it('Signup - Create User', async () => {
    const requestBody = {
      username: 'testUsername',
      password: 'testPassword',
      ARN:  'testARN',
      region: 'testRegion'
    }
    console.log('in test block')
    const res = await request(app)
      .post('/api/user/signup')
      .send(requestBody)
      // expect(res.status).toBe(200)
      // .expect('Content-Type', 'application/json; charset=utf-8')
    console.log(res.body)
    expect(res.status).toEqual(200)
      // .expect(response)
      // .end(done)
    
  })
})