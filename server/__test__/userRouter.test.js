const request = require('supertest');
const response = require('supertest');
const express = require('express');
const mongoose = require("mongoose");
const { describe, beforeEach, expect, test, jest: requiredJest } = require('@jest/globals');

const bodyParser = require('body-parser');
const app = express();

const server = 'http://localhost:3000'

app.use(bodyParser.json());

const userRouter = require('../routes/userRouter.js');

app.use('/api/user', userRouter);

// beforeEach(done => {
//   done()
// })

// afterEach(async () => {
//   // Closing the DB connection allows Jest to exit successfully.
//   // mongoose.connection.close()
//   await app.close();
// })

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
    return request(server)
      .post('/api/user/signup')
      .send(requestBody)
      // expect(res.status).toBe(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      // .expect(response)
  }, 100000)
})

