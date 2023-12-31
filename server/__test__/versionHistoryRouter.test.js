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

describe(' GET testing version history', () => {
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


describe(' GET testing version history', () => {
  it('should return status of 400 (invalid funcName)', async () => {
    const reqBody = {
      funcName: "thisNameDoesNotExist"
    }
    const res = await request(app)
      .get('/api/versions/versionList')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(400)
  })
})





describe('GET testing version details', () => {
  it('it should return an object', async () => {
    const reqBody = {
      functionArn: "arn:aws:lambda:us-east-1:097265058099:function:secondFunction:1"
    }
    const res = await request(app)
      .get('/api/versions/functionVersion')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(200)
    expect(typeof res.body).toBe('object')
    expect(Object.keys(res.body).length).toEqual(5)
  })
})


describe('GET testing version details', () => {
  it('it should return status 400 (invalid ARN)', async () => {
    const reqBody = {
      functionArn: "absolutelyFalseArnThisDoesNotWork"
    }
    const res = await request(app)
      .get('/api/versions/functionVersion')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(400)
  })
})


describe('GET testing aliases', () => {
  it('should return status of 200 and an array of objects', async () => {
    const reqBody = {
      funcName: 'secondFunction'
    }
    const res = await request(app)
      .get('/api/versions/getAlias')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(200)
    expect(typeof res.body).toBe('object')
    expect(Object.keys(res.body).length).toEqual(3)
  })
})


describe('GET testing aliases', () => {
  it('should return status 400 (invalid funcName)', async () => {
    const reqBody = {
      funcName: 'thisFunctionDoesNotExist'
    }
    const res = await request(app)
      .get('/api/versions/getAlias')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(400)
  })
})
