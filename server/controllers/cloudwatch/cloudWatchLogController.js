const { CloudWatchLogs } = require('@aws-sdk/client-cloudwatch-logs');
// const AWS = require('aws-sdk')

const cloudWatchLogController = {};

//functions get sent to user from lambdaController. once user selects function, function name gets sent to backend as a req.query
//req.query gets added onto logName
cloudWatchLogController.viewFunctionStreams = async (req, res, next) => {
  const { region, funcName } = req.body;
  try {
<<<<<<< HEAD:server/controllers/cloudWatchLogController.js
    // console.log('working')
    // console.log('creds: ', res.locals.creds)
    // const {funcLogName, streamName, region} = req.body;
    const cloudWatchLogs = new CloudWatchLogs({ region: `us-east-1`, credentials: res.locals.creds });
    console.log('cloudWatchLogs: ', cloudWatchLogs);
    
    // const logName = `/aws/lambda/${funcLogName}`
    const logName = `/aws/lambda/testingfunc`  //req.query from frontend
=======
    const cloudWatchLogs = new CloudWatchLogs({ region: region, credentials: res.locals.creds });
    console.log('cloudWatchLogs: ', cloudWatchLogs);
    
    const logName = `/aws/lambda/${funcName}`  //req.query from frontend

>>>>>>> backend:server/controllers/cloudwatch/cloudWatchLogController.js
    ///grabs logstreams + last event time for each log group
    const logStreamRes = await cloudWatchLogs.describeLogStreams({logGroupIdentifier: logName}) // logGroupIdentifier or logGroupName

    const logStreamNames = []
    
    // logStreamRes is an object with the logStreams array on it
    logStreamRes.logStreams.forEach(log => {
      // push each logStreamName into our logStreamNames array to be sent to frontend
      logStreamNames.push(log.logStreamName);
    })

    //grabs timestamp and message for each logstream

    console.log('logStreamRes: ', logStreamRes);
    
    console.log('logStreamNames: ', logStreamNames);
    res.locals.logStreamNames = logStreamNames;
    return next();

    // NEED TO CONFIGURE FOR REQ.QUERY OF THE FUNC NAME STILL

  } catch (error) {
    return next({
      log: `The following error occured: ${error}`,
      status: 400,
      message: { err: 'An error occured while trying to view the user\'s lambda function' }
    });
  }
}


cloudWatchLogController.viewStreamInfo = async (req, res, next) => {
  const { region, streamName, logName } = req.body;
  try{
<<<<<<< HEAD:server/controllers/cloudWatchLogController.js
    const {funcLogName, streamName, region} = req.body;
    console.log(req.body)
    const cloudWatchLogs = new CloudWatchLogs({ region: region, credentials: res.locals.creds });
    // const streamName = '2023/08/05/[$LATEST]ed93cc4e073e46f9961dfbe77ba457a9' // req.query
    const logName = `/aws/lambda/${funcLogName}` 
=======
    const cloudWatchLogs = new CloudWatchLogs({ region: region, credentials: res.locals.creds });
    // const streamName = '2023/08/05/[$LATEST]ed93cc4e073e46f9961dfbe77ba457a9' // req.query
    // const logName = '/aws/lambda/secondFunction' 
>>>>>>> backend:server/controllers/cloudwatch/cloudWatchLogController.js
    const getLogEvents = await cloudWatchLogs.getLogEvents({logStreamName: streamName, logGroupName: logName}) // logGroupIdentifier or logGroupName
    // console.log('getLogEvents: ', getLogEvents)
    const { events } = getLogEvents;
    events.forEach(event => {
      const timeStampDate = new Date(event.timestamp);
      event.timestamp = timeStampDate.toString();

      const ingestionDate = new Date(event.ingestionTime);
      event.ingestionTime = ingestionDate.toString();
    })
    console.log('events: ', events);
    res.locals.events = events;
    return next();

    // STILL NEED TO REQ.QUERY FOR THE LOGNAME AND STREAMNAME

  } catch(err){
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to view the user\'s lambda function stream info' }
    });
  }
}


module.exports = cloudWatchLogController;