const { GetMetricDataCommand, CloudWatchClient } = require('@aws-sdk/client-cloudwatch');
const metricDataQueries = require('./util/metricDataQueries.js');
const cloudWtatchMetricsController = {};
cloudWatchMetricsController.getMetrics = async (req, res, next) => {
  try{
    const client = new CloudWatchClient({region: 'us-east-1', credentials: res.locals.creds})
    let testIdCount = 0;
    
    //START TIME AND END TIME
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    sevenDaysAgo.toString()
    
    //METRIC NAME
    // const { metricName } = req.body;
    //PERIOD - 1S, 5S, 10S, 30S, 1M, 5M, 15M, 1HR, 6HRS, 1D, 7D, 30D

    //SCANBY - ASCENDING/DESCENDING TIME STAMP

    //needs to be filtered after receiving data from front end: funciton name, metric name,time period (seconds), date range, scan by (sort by oldest to newest or newest to oldest)

    const getMetrics = new GetMetricDataCommand(input)
    const getMetrics2 = new GetMetricDataCommand(params)
    
    const metricsResponse = await client.send(getMetrics);
    const metricsResponse2 = await client.send(getMetrics2);

    const metricsArray = metricsResponse.MetricDataResults;

    console.log('metricsArray: ', metricsArray, 'metricsArray2: ', metricsResponse2.MetricDataResults);

    // console.log(metricsResponse);
    testIdCount += 1;

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