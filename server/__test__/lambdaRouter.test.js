const request = require('supertest');
const express = require('express');
const mongoose = require("mongoose");
const { describe, beforeEach, expect, test, jest: requiredJest } = require('@jest/globals');

const app = require('../server.js');

afterAll(() => {
  mongoose.disconnect();
  app.close();
})

/*
lambdaRouter Testing Suite:

*/

// figure out how to test when we are not sending a req.body (basically testing with cookies)
describe('test GET request for lambda function list', () => {
  it('should return an array of objects (functions)', async () => {

  })
})