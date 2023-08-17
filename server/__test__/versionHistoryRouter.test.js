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

describe('testing version history GET', () => {
  it('should return an object', async () => {
    const reqBody = {
      funcName: "secondFunction"
    }
    const res = await request(app)
      .get('/api/versions/versionList')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(200)
    expect(typeof res.body).toBe('object')
    expect(Object.keys(res.body).length).toEqual(4)
  })
})