const request = require('supertest');
const express = require('express');
const mongoose = require("mongoose");
const { describe, beforeEach, expect, test, jest: requiredJest } = require('@jest/globals');
const dotenv = require('dotenv').config();

const app = require('../server.js');

afterAll(() => {
  mongoose.disconnect();
  app.close();
})

/*
lambdaRouter Testing Suite:
-Test lambdaRouter get with valid creds
-Test lambdaRouter get with invalid creds
*/


describe('test GET request for lambda function list', () => {
  xit('should return an array of objects (functions)', async () => {
    const res = await request(app)
      .get('/api/lambda/functions')
      .set('Cookie', `SSID=64d51ed8a4b2f36d496865a0`)
    console.log('res.body', res.body)
    expect(res.status).toEqual(200);
    expect(res.body.length).toBe(2);
  })
})

describe('test GET for lambda function list (invalid creds)', () => {
  xit('should try to return an array but return a status of 400 instead', async () => {
    const res = await request(app)
      .get('/api/lambda/functions')
      .set('Cookie', 'SSID=64dac7ac144ec92c900cf30f')
    expect(res.status).toEqual(400);
  })
})


