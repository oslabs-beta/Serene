const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const {
  describe,
  beforeEach,
  expect,
  test,
  jest: requiredJest,
} = require('@jest/globals');

const app = require('../server.ts');

/*
userRouter Testing Suite: 
-Test user signup with valid inputs (should pass - does pass)
-Test user signup with invalid inputs (should fail - does fail)
-Test user login with valid inputs (should pass - does pass)
-Test user login with invalid inputs (should fail - does fail)
-Test updating user region and ARN (should pass - does pass)
  -Not sure if passing properly -- requires more testing
*/

afterAll(() => {
  // Closing the DB connection allows Jest to exit successfully.
  // mongoose.connection.close()
  // await app.close();
  mongoose.disconnect();
  app.close();
});

// user signup test
describe('test user signup', () => {
  it('should create a new user', async () => {
    const requestBody = {
      username: 'newTestUsername',
      password: 'testPassword',
      ARN: 'testARN',
      region: 'testRegion',
    };
    console.log('in test block');
    const res = await request(app).post('/api/user/signup').send(requestBody);
    console.log(res.body);
    expect(res.status).toEqual(200);
  });
});

describe('test user signup', () => {
  it('should reject the user signup', async () => {
    const requestBody = {
      password: 'testPassword',
      ARN: 'testARN',
      region: 'testRegion',
    };
    const res = await request(app).post('/api/user/signup').send(requestBody);
    expect(res.status).toEqual(400);
  });
});

describe('test user login', () => {
  it('should verify the user', async () => {
    const requestBody = {
      username: 'testUsername',
      password: 'testPassword',
    };
    const res = await request(app).post('/api/user/login').send(requestBody);
    expect(res.status).toEqual(200);
  });
});

describe('test user login', () => {
  it('should reject the user login', async () => {
    const requestBody = {
      username: 'thisUsernameDoesNotExist',
      password: 'neitherDoesThisPassword',
    };
    const res = await request(app).post('/api/user/login').send(requestBody);
    expect(res.status).toEqual(400);
  });
});

describe('test user update', () => {
  it('should successfully update a user', async () => {
    const newStuff = {
      newRegion: 'newRegion',
      newARN: 'newARN',
    };

    // Make the PATCH request to update the user
    const res = await request(app)
      .patch('/api/user/edit')
      .set('Cookie', `SSID=64dac7ac144ec92c900cf30f`) // Set the cookie with the user ID
      .send(newStuff);
    console.log('res.body: ', res.body);
    // Check the response and user properties
    expect(res.status).toEqual(200);
    expect(res.body.ARN).toBe('newARN'); // Assuming ARN is a property of the user
    expect(res.body.region).toBe('newRegion');
  });
});


describe('test user deletion', () => {
  it('should delete the user and return status 200', async () => {
    const res = await request(app)
      .delete('/api/user/delete')
      .set('Cooke', 'SSID=64d4d95291905a7b6650a125')
  })
  expect(res.status).toEqual(200);
})