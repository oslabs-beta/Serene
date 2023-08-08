const { GetMetricDataCommand, CloudWatchClient } = require('@aws-sdk/client-cloudwatch');
const metricDataQueries = require('./util/metricDataQueries.js');
const cloudWatchMetricsController = {};

cloudWatchMetricsController.getMetrics = async (req, res, next) => {
  try{
    const client = new CloudWatchClient({region: 'us-east-1', credentials: res.locals.creds})
    console.log('metricDataQueries: ', metricDataQueries)
    //METRIC NAME
    // const { metricName } = req.body;
    //PERIOD - 1S, 5S, 10S, 30S, 1M, 5M, 15M, 1HR, 6HRS, 1D, 7D, 30D

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