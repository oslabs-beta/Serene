const { GetMetricDataCommand, CloudWatchClient } = require('@aws-sdk/client-cloudwatch');


const cloudWatchMetricsController = {};

cloudWatchMetricsController.getMetrics = async (req, res, next) => {
  try{
    const client = new CloudWatchClient({region: 'us-east-1', credentials: res.locals.creds})

    console.log('client: ', client)

    // const getMetrics = new GetMetricDataCommand()

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