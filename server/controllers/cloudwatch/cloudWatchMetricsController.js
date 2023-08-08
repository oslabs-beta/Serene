const { GetMetricDataCommand, CloudWatchClient } = require('@aws-sdk/client-cloudwatch');
// const metricDataQueries = require('./util/metricDataQueries.js');
// const queryCreator = require('./util/metricDataQueries.js');
const cloudWatchMetricsController = {};

cloudWatchMetricsController.getMetrics = async (req, res, next) => {
  const { funcName, stat, sortBy, period, startDate } = req.body;
  const formattedStartDate = dateConverter(startDate);
  const newPeriod = timePeriodConverter(period);
  try{
    const client = new CloudWatchClient({region: 'us-east-1', credentials: res.locals.creds})
    console.log('In getMetrics before createQuery is invoked')
    //PERIOD - 1S, 5S, 10S, 30S, 1M, 5M, 15M, 1HR, 6HRS, 1D, 7D, 30D
    const metricObj = createQuery(funcName, stat, sortBy, newPeriod, formattedStartDate)
    //DATE - 1h, 3h, 12h, 1d, 3d, 1w
    // console.log('createQuery has been invoked')

    // console.log('metricObj: ', metricObj)
    //SCANBY - ASCENDING/DESCENDING TIME STAMP
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

    // console.log('duration: ', getDurationMetricsResponse.MetricDataResults)
    // console.log('invocations: ', getInvocationsMetricsResponse.MetricDataResults)
    // console.log('throttles: ', getThrottlesMetricsResponse.MetricDataResults)
    // console.log('errors: ', getErrorsMetricsResponse.MetricDataResults)
    // console.log('concurrentExecutions: ', getConcurrentExeMetricsResponse.MetricDataResults)
    // console.log(metricsResponse);
    
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

//START TIME AND END TIME
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

const timePeriodConverter = (period) => {
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

const createQuery = (funcName, stat, sortBy, period, startDate) => {
  const metricDataQueries = {};

  console.log(funcName, stat, sortBy, period, startDate)

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
          Stat: `${stat}`, // required (Average, min/max, sum, sample count, etc) (also req.body)
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
          Stat: `${stat}`, // required (Average, min/max, sum, sample count, etc) (also req.body)
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
          Stat: `${stat}`, // required (Average, min/max, sum, sample count, etc) (also req.body)
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
          Stat: `${stat}`, // required (Average, min/max, sum, sample count, etc) (also req.body)
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
          Stat: `${stat}`, // required (Average, min/max, sum, sample count, etc) (also req.body)
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

module.exports = cloudWatchMetricsController;