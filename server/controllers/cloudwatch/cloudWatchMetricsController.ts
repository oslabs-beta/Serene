// import necessary AWS commands
import { GetMetricDataCommand, CloudWatchClient } from '@aws-sdk/client-cloudwatch';

import { CloudWatchMetricsController, MetricBody } from '../../types';

const cloudWatchMetricsController = {} as CloudWatchMetricsController;

/*
Notes:
-This one is rough on TS so anys have been used
*/

// takes in funcName, sortBy, period, and startDate as a way for user to format their metrics
// sends back a nested object with all the proper metrics for the user's desired function
cloudWatchMetricsController.getMetrics = async (req, res, next) => {
  const { funcName, sortBy, period, startDate }: MetricBody = req.body;

  // format inputted startDate and period
  const formattedStartDate: Date = dateConverter(startDate);
  const newPeriod: number = timePeriodConverter(period);
  try{
    const client: CloudWatchClient = new CloudWatchClient({region: res.locals.creds.region, credentials: res.locals.creds.roleCreds })

    // createQuery is a pretty brute force way to send the proper data but it does work
    const metricObj: any = createQuery(funcName, sortBy, newPeriod, formattedStartDate)
    
    // create and send the commands for each metric from the client
    const getDurationMetrics = new GetMetricDataCommand(metricObj.duration)
    const getInvocationsMetrics = new GetMetricDataCommand(metricObj.invocations)
    const getThrottlesMetrics = new GetMetricDataCommand(metricObj.throttles)
    const getErrorsMetrics = new GetMetricDataCommand(metricObj.errors)
    const getConcurrentExeMetrics = new GetMetricDataCommand(metricObj.concurrentExecutions)
    
    const getDurationMetricsResponse = await client.send(getDurationMetrics);
    const getInvocationsMetricsResponse = await client.send(getInvocationsMetrics);
    const getThrottlesMetricsResponse = await client.send(getThrottlesMetrics);
    const getErrorsMetricsResponse = await client.send(getErrorsMetrics);
    const getConcurrentExeMetricsResponse = await client.send(getConcurrentExeMetrics);

    res.locals.metrics = {
      duration: getDurationMetricsResponse.MetricDataResults,
      invocations: getInvocationsMetricsResponse.MetricDataResults,
      throttles: getThrottlesMetricsResponse.MetricDataResults,
      errors: getErrorsMetricsResponse.MetricDataResults,
      concurrentExecutions: getConcurrentExeMetricsResponse.MetricDataResults
    }
    
    console.log('res.locals.metrics: ', res.locals.metrics)
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to view the user\'s lambda function metrics' }
    });
  }
}

// converts startDate to a usable format
const dateConverter = (date) => {
  if(date[1] === 'w'){
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    return startDate;
  } else if(date[1] === 'h'){
    const fraction = Number(date[0]) / 24
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - fraction);
    return startDate;
  } else{
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - Number(date[0]));
    return startDate;
  }
  // const startDate = new Date();
  // startDate.setDate(startDate.getDate() - 3);
  // console.log(startDate);
  // return startDate;
}

// converts period to a usable format
const timePeriodConverter = (period) => {
  let finalPeriod;
  if(period === '1 second' || period === '5 seconds' || period === '10 seconds' || period === '30 seconds') {
    if(period.length === 8) {
      finalPeriod = Number(period[0]);
    } else {
      finalPeriod = (Number(period[0].concat(period[1])));
    }
  } 
  if(period === '1 minute' || period === '5 minutes' || period === '15 minutes') {
    if(period.length === 8 || period.length === 9) {
      finalPeriod = Number(period[0]) * 60;
    } else {
      finalPeriod = (Number(period[0].concat(period[1]))) * 60;
    }
  };
  if(period === '1 hour' || period === '6 hours') {
      finalPeriod = Number(period[0]) * 3600;
  };
  if(period === '1 day' || period === '7 days' || period === '30 days') {
    if(period.length === 5 || period.length === 6) {
      finalPeriod = Number(period[0]) * 86400;
    } else {
      finalPeriod = (Number(period[0].concat(period[1]))) * 86400;
    }
};
  return finalPeriod;
};

let idCount = 0;

// creates and returns an object with 5 different properties (one for each metric)
// the function will input the desired formatting into the object allowing it to be dynamic
// this particular AWS method is very strict in how it is formatted and we determined this to be a decent workaround for allowing user manipulation of the data
const createQuery = (funcName, sortBy, period, startDate) => {
  if(!funcName || !sortBy || !period || !startDate){
    return 'ERROR: invalid funcName, sortBy, period, or startDate'
  }
  const metricDataQueries = {} as any;

  console.log(funcName, sortBy, period, startDate)

  //METRICS
  metricDataQueries.duration = {
    // GetMetricDataInput
    MetricDataQueries: [
    // MetricDataQueries // required
      {
        Id: `duration${idCount}`, // required
        MetricStat: {
          Metric: {
            Namespace: 'AWS/Lambda', // doesn't seem to correspond to res object (can be anything)
            MetricName: 'Duration', // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
            Dimensions: [
              {
                Name: `FunctionName`, // required  - can be hardcoded as funciton name
                Value: `${funcName}`, // required  //function name - needs to be actual function name from front end. req.queried
              },
            ],
          },
          Period: period, // required (also req.body)
          Stat: 'Average', // required (Average, min/max, sum, sample count, etc) (also req.body)
        },
        Label: `Lambda Duration ${funcName}`, //function and MetricName need to be dynamic
      },
    ],
    StartTime: startDate,
    EndTime: new Date(), // required (will always be now)
    ScanBy: `${sortBy}`,
    LabelOptions: {
      // LabelOptions
      Timezone: '-0400', //comes from region
    },
  };

  metricDataQueries.invocations = {
    // GetMetricDataInput
    MetricDataQueries: [
      // MetricDataQueries // required
      {
        Id: `invocations${idCount}`, // required
        MetricStat: {
          Metric: {
            Namespace: 'AWS/Lambda', // doesn't seem to correspond to res object (can be anything)
            MetricName: 'Invocations', // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
            Dimensions: [
              {
                Name: `FunctionName`, // required  - can be hardcoded as funciton name
                Value: `${funcName}`, // required  //function name - needs to be actual function name from front end. req.queried
              },
            ],
          },
          Period: period, // required (also req.body)
          Stat: `Sum`, // required (Average, min/max, sum, sample count, etc) (also req.body)
        },
        Label: `Lambda Invocations ${funcName}`, //function and MetricName need to be dynamic
      },
    ],
    StartTime: startDate,
    EndTime: new Date(), // required (will always be now)
    ScanBy: `${sortBy}`,
    LabelOptions: {
      // LabelOptions
      Timezone: '-0400', //comes from region
    },
  };

  metricDataQueries.throttles = {
    // GetMetricDataInput
    MetricDataQueries: [
      // MetricDataQueries // required
      {
        Id: `throttles${idCount}`, // required
        MetricStat: {
          Metric: {
            Namespace: 'AWS/Lambda', // doesn't seem to correspond to res object (can be anything)
            MetricName: 'Throttles', // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
            Dimensions: [
              {
                Name: `FunctionName`, // required  - can be hardcoded as funciton name
                Value: `${funcName}`, // required  //function name - needs to be actual function name from front end. req.queried
              },
            ],
          },
          Period: period, // required (also req.body)
          Stat: `Sum`, // required (Average, min/max, sum, sample count, etc) (also req.body)
        },
        Label: `Lambda Throttles ${funcName}`, //function and MetricName need to be dynamic
      },
    ],
    StartTime: startDate,
    EndTime: new Date(), // required (will always be now)
    ScanBy: `${sortBy}`,
    LabelOptions: {
      // LabelOptions
      Timezone: '-0400', //comes from region
    },
  };

  metricDataQueries.errors = {
    // GetMetricDataInput
    MetricDataQueries: [
      // MetricDataQueries // required
      {
        Id: `errors${idCount}`, // required
        MetricStat: {
          Metric: {
            Namespace: 'AWS/Lambda', // doesn't seem to correspond to res object (can be anything)
            MetricName: 'Errors', // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
            Dimensions: [
              {
                Name: `FunctionName`, // required  - can be hardcoded as funciton name
                Value: `${funcName}`, // required  //function name - needs to be actual function name from front end. req.queried
              },
            ],
          },
          Period: period, // required (also req.body)
          Stat: `Sum`, // required (Average, min/max, sum, sample count, etc) (also req.body)
        },
        Label: `Lambda Errors ${funcName}`, //function and MetricName need to be dynamic
      },
    ],
    StartTime: startDate,
    EndTime: new Date(), // required (will always be now)
    ScanBy: `${sortBy}`,
    LabelOptions: {
      // LabelOptions
      Timezone: '-0400', //comes from region
    },
  };

  metricDataQueries.concurrentExecutions = {
    // GetMetricDataInput
    MetricDataQueries: [
      // MetricDataQueries // required
      {
        Id: `concurrentExections${idCount}`, // required
        MetricStat: {
          Metric: {
            Namespace: 'AWS/Lambda', // doesn't seem to correspond to res object (can be anything)
            MetricName: 'Concurrent Executions', // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
            Dimensions: [
              {
                Name: `FunctionName`, // required  - can be hardcoded as funciton name
                Value: `${funcName}`, // required  //function name - needs to be actual function name from front end. req.queried
              },
            ],
          },
          Period: period, // required (also req.body)
          Stat: `SampleCount`, // required (Average, min/max, sum, sample count, etc) (also req.body)SampleCount
        },
        Label: `Lambda Concurrent Executions ${funcName}`, //function and MetricName need to be dynamic
      },
    ],
    StartTime: startDate, // `${formattedStartDate}`
    EndTime: new Date(), // required (will always be now)
    ScanBy: 'TimestampDescending' || 'TimestampAscending',
    LabelOptions: {
      // LabelOptions
      Timezone: '-0400', //comes from region
    },
  };

  idCount += 1;

  return metricDataQueries;
}

export default cloudWatchMetricsController;