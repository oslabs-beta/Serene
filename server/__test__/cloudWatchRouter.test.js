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
cloudWatchRouter (cloudWatchLogController) Testing Suite:
-Test stream names array with valid input
-Test stream names array with wrong funcName
-Test stream names array with wrong credentials

cloudWatchRouter (cloudWatchMetricsController) Testing Suite:
-
*/


// cloudWatchLogsController Testing

describe('testing view function streams post', () => {
  it('should return an array of strings (stream names) and status of 200', async () => {
    const reqBody = {
      funcName: 'secondFunction'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getLogs')
      .set('Cookie', `SSID=64d51ed8a4b2f36d496865a0`)
      .send(reqBody)
    console.log('res.body', res.body);
    expect(res.status).toEqual(200);
    expect(res.body.length).toBeGreaterThan(1);
    expect(typeof res.body[0]).toBe('string')
  })
})

describe('testing view function streams post', () => {
  it('should try to return the stream array but return status of 400 (proper creds - wrong func name)', async () => {
    const reqBody = {
      funcName: 'thisFuncDoesNotExist'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getLogs')
      .set('Cookie', `SSID=64d51ed8a4b2f36d496865a0`)
      .send(reqBody)
    expect(res.status).toEqual(400);
  })
})


describe('testing view function streams post', () => {
  it('should return status 400 with improper credentials', async () => {
    const reqBody = {
      funcName: 'secondFunction'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getLogs')
      .set('Cookie', `SSID=64dac7ac144ec92c900cf30f`)
      .send(reqBody)
    expect(res.status).toEqual(400);
  })
})


describe('testing view stream info post', () => {
  it('should return status 200 and an array of stream logs', async () => {
    const reqBody = {
      streamName: '2023/08/09/[$LATEST]1dfeaa37a6f64189ac6bd8fceedfad52',
      logName: 'secondFunction'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getStreamDetails')
      .set('Cookie', `SSID=64d51ed8a4b2f36d496865a0`)
      .send(reqBody)
    expect(res.status).toEqual(200);
    expect(res.body.length).toBeGreaterThanOrEqual(3);
  })
})

describe('testing view stream info post', () => {
  it('should return status 400 (logName is invalid)', async () => {
    const reqBody = {
      streamName: '2023/08/09/[$LATEST]1dfeaa37a6f64189ac6bd8fceedfad52',
      logName: 'thisFuncDoesNotExist'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getStreamDetails')
      .set('Cookie', `SSID=64d51ed8a4b2f36d496865a0`)
      .send(reqBody)
    expect(res.status).toEqual(400);
  })
})

describe('testing view stream info post', () => {
  it('should return status 400 (streamName invalid)', async () => {
    const reqBody = {
      streamName: 'thisStreamNameDoesNotExist',
      logName: 'secondFunction'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getStreamDetails')
      .set('Cookie', `SSID=64d51ed8a4b2f36d496865a0`)
      .send(reqBody)
    expect(res.status).toEqual(400);
  })
})

describe('testing view stream info post', () => {
  it('should return status 400 (SSID invalid)', async () => {
    const reqBody = {
      streamName: '2023/08/09/[$LATEST]1dfeaa37a6f64189ac6bd8fceedfad52',
      logName: 'secondFunction'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getStreamDetails')
      .set('Cookie', `SSID=64dac7ac144ec92c900cf30f`)
      .send(reqBody)
    expect(res.status).toEqual(400);
  })
})



// cloudWatchMetricsController Testing


describe('testing view metrics post', () => {
  it('should return status 200 and an object', async () => {
    const reqBody = {
      funcName: 'secondFunction',
      sortBy: 'TimestampAscending',
      period: '15 minutes',
      startDate: '3d'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getMetrics')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(200)
    expect(typeof res.body).toBe('object')
  })
})


describe('testing view metrics post', () => {
  it('should return status 400 (invalid funcName)', async () => {
    const reqBody = {
      sortBy: 'TimestampAscending',
      period: '15 minutes',
      startDate: '3d'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getMetrics')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(400)
  })
})

describe('testing view metrics post', () => {
  it('should return status 400 (invalid sortBy)', async () => {
    const reqBody = {
      funcName: 'secondFunction',
      sortBy: 'notSorting',
      period: '15 minutes',
      startDate: '3d'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getMetrics')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(400)
  })
})

describe('testing view metrics post', () => {
  it('should return status 400 (invalid period)', async () => {
    const reqBody = {
      funcName: 'secondFunction',
      sortBy: 'TimestampAscending',
      period: 'notARealPeriod',
      startDate: '3d'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getMetrics')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(400)
  })
})

describe('testing view metrics post', () => {
  it('should return status 400 (invalid startDate)', async () => {
    const reqBody = {
      funcName: 'secondFunction',
      sortBy: 'TimestampAscending',
      period: '15 minutes',
      startDate: 'notARealDate'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getMetrics')
      .set('Cookie', 'SSID=64d51ed8a4b2f36d496865a0')
      .send(reqBody)
    expect(res.status).toEqual(400)
  })
})


describe('testing view metrics post', () => {
  it('should return status 400 (invalid credentials)', async () => {
    const reqBody = {
      funcName: 'secondFunction',
      sortBy: 'TimestampAscending',
      period: '15 minutes',
      startDate: '3d'
    }
    const res = await request(app)
      .post('/api/cloudwatch/getMetrics')
      .set('Cookie', 'SSID=64dac7ac144ec92c900cf30f')
      .send(reqBody)
    expect(res.status).toEqual(400)
  })
})