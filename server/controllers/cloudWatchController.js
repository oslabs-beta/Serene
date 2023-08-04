const { CloudWatchLogs } = require('@aws-sdk/client-cloudwatch-logs')
// const AWS = require('aws-sdk')



const cloudWatchController = {};

//user selects function which gets sent to viewFunctions. viewFunction sends back log history of selected function
cloudWatchController.viewFunctions = async (req, res, next) => {
  try {
    // console.log('working')
    // console.log('creds: ', res.locals.creds)
    const cloudWatchLogs = new CloudWatchLogs({ region: 'us-east-1', credentials: res.locals.creds });
    console.log('cloudWatchLogs: ', cloudWatchLogs);

    const response = await cloudWatchLogs.describeLogGroups({ logGroupNamePrefix: '/aws/lambda' })

    console.log('response: ', response);

    return next();
  } catch (error) {
    return next({
      log: `The following error occured: ${error}`,
      status: 400,
      message: { err: 'An error occured while trying to view the user\'s lambda function' }
    });
  }
}




module.exports = cloudWatchController;