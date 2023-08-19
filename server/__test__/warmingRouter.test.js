const request = require('supertest');
const express = require('express');
const mongoose = require("mongoose");
const { describe, beforeEach, expect, test, jest: requiredJest } = require('@jest/globals');
const dotenv = require('dotenv').config();

const app = require('../server.ts');

afterAll(() => {
  mongoose.disconnect();
  app.close();
})

describe('testing warming router', () => {
  it('should return status of 200', async () => {
    const reqBody = {
      functionArn: 'arn:aws:lambda:us-east-1:097265058099:function:secondFunction'
    }
    const res = await request(app)
      .get('/api/warming/functions')
      .set('Cookie', `SSID=64d51ed8a4b2f36d496865a0`)
      .send(reqBody)
    expect(res.status).toEqual(200)
    expect(res.body).toEqual(200)
  })
})

describe('testing warming router', () => {
  it('should return status of 400', async () => {
    const reqBody = {
      functionArn: 'fakearn'
    }
    const res = await request(app)
      .get('/api/warming/functions')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(400);
  })
})