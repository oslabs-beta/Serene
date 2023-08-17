const request = require('supertest');
const express = require('express');
const mongoose = require("mongoose");
const { describe, beforeEach, expect, test, jest: requiredJest } = require('@jest/globals');

const app = require('../server.js');

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
})

// user signup test
describe('test user signup', () => {

  it('should create a new user', async () => {
    const requestBody = {
      username: 'newTestUsername',
      password: 'testPassword',
      ARN:  'testARN',
      region: 'testRegion'
    }
    console.log('in test block')
    const res = await request(app)
      .post('/api/user/signup')
      .send(requestBody)
    console.log(res.body)
    expect(res.status).toEqual(200)
  })
})

describe('test signup with improper input', () => {
  it('should reject the user signup', async () => {
    const requestBody = {
      password: 'testPassword',
      ARN:  'testARN',
      region: 'testRegion'
    }
    const res = await request(app)
      .post('/api/user/signup')
      .send(requestBody)
    expect(res.status).toEqual(400)
  })
})

describe('test user login', () => {
  it('should verify the user', async () => {
    const requestBody = {
      username: 'testUsername',
      password: 'testPassword'
    }
    const res = await request(app)
      .post('/api/user/login')
      .send(requestBody)
    expect(res.status).toEqual(200)
  })
})

describe('test login with false credentials', () => {
  it('should reject the user login', async () => {
    const requestBody = {
      username: 'thisUsernameDoesNotExist',
      password: 'neitherDoesThisPassword'
    }
    const res = await request(app)
      .post('/api/user/login')
      .send(requestBody)
    expect(res.status).toEqual(400)
  })
})

// revisit
describe('test updating a user', () => {
  it('should successfully update a user', async () => {
    const filter = {
      _id: '64dac7ac144ec92c900cf30f'
    }
    const newStuff = {
      newRegion: 'newRegion',
      newARN: 'newARN'
    }
    const res = await request(app)
      .patch('/api/user/edit')
      .send(filter, newStuff)
    expect(res.status).toEqual(200)
  })
})