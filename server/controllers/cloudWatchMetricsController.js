const { GetMetricDataCommand, CloudWatchClient } = require('@aws-sdk/client-cloudwatch');
const metricDataQueries = require('./util/metricDataQueries.js');
const queryCreator = require('./util/metricDataQueries.js');
const cloudWatchMetricsController = {};

//needs to be filtered after receiving data from front end: funciton name, metric name,time period (seconds), date range, scan by (sort by oldest to newest or newest to oldest)

 // pass in start date from frontend to format into usable date

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
  // const newDate = Date();
  // newDate.setDate(newDate.getDate() - 7)
  // return newDate;
}

const timePeriodConverter = (period) => {
  let finalPeriod = 900;
  // if(period === '1 second' || period === '5 seconds' || period === '10 seconds' || period === '30 seconds') {
  //   if(period.length === 8) {
  //     finalPeriod = Number(period[0]);
  //   } else {
  //     finalPeriod = Number(period[0]) + Number(period[1]);
  //   }
  // } 
  // if(period === '1 minute' || period === '5 minutes' || period === '15 minutes') {
  //   if(period.length === 8) {
  //     finalPeriod = Number(period[0]) * 60;
  //   } else {
  //     finalPeriod = (Number(period[0]) + Number(period[1])) * 60;
  //   }
  // };
  return finalPeriod;
};

cloudWatchMetricsController.getMetrics = async (req, res, next) => {
  const { funcName, stat, sortBy, period, startDate } = req.body;
  const formattedStartDate = dateConverter(startDate);
  const newPeriod = timePeriodConverter(period);
  try{
    const client = new CloudWatchClient({region: 'us-east-1', credentials: res.locals.creds})
    // console.log('metricDataQueries: ', metricDataQueries)
    //PERIOD - 1S, 5S, 10S, 30S, 1M, 5M, 15M, 1HR, 6HRS, 1D, 7D, 30D
    const metricObj = queryCreator.createQuery(funcName, stat, sortBy, newPeriod, formattedStartDate)

    console.log('metricObj: ', metricObj)
    //SCANBY - ASCENDING/DESCENDING TIME STAMP
    const getDurationMetrics = new GetMetricDataCommand(metricDataQueries.duration)
    const getInvocationsMetrics = new GetMetricDataCommand(metricDataQueries.invocations)
    const getThrottlesMetrics = new GetMetricDataCommand(metricDataQueries.throttles)
    const getErrorsMetrics = new GetMetricDataCommand(metricDataQueries.errors)
    const getConcurrentExeMetrics = new GetMetricDataCommand(metricDataQueries.concurrentExecutions)
    
    const getDurationMetricsResponse = await client.send(getDurationMetrics);
    const getInvocationsMetricsResponse = await client.send(getInvocationsMetrics);
    const getThrottlesMetricsResponse = await client.send(getThrottlesMetrics);
    const getErrorsMetricsResponse = await client.send(getErrorsMetrics);
    const getConcurrentExeMetricsResponse = await client.send(getConcurrentExeMetrics);

    console.log('duration: ', getDurationMetricsResponse.MetricDataResults)
    console.log('invocations: ', getInvocationsMetricsResponse.MetricDataResults)
    console.log('throttles: ', getThrottlesMetricsResponse.MetricDataResults)
    console.log('errors: ', getErrorsMetricsResponse.MetricDataResults)
    console.log('concurrentExecutions: ', getConcurrentExeMetricsResponse.MetricDataResults)
    // console.log(metricsResponse);
    
    res.locals.metrics = {
      duration: getDurationMetricsResponse.MetricDataResults,
      invocations: getInvocationsMetricsResponse.MetricDataResults,
      throttles: getThrottlesMetricsResponse.MetricDataResults,
      errors: getErrorsMetricsResponse.MetricDataResults,
      concurrentExecutions: getConcurrentExeMetricsResponse.MetricDataResults
    }

    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to view the user\'s lambda function metrics' }
    });
  }
}



module.exports = cloudWatchMetricsController;