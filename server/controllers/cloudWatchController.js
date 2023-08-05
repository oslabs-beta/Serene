const { CloudWatchLogs } = require('@aws-sdk/client-cloudwatch-logs');
const { timeStamp } = require('console');
// const AWS = require('aws-sdk')



const cloudWatchController = {};

//functions get sent to user from lambdaController. once user selects function, function name gets sent to backend as a req.query
//req.query gets added onto logName
cloudWatchController.viewFunctionStreams = async (req, res, next) => {
  try {
    // console.log('working')
    // console.log('creds: ', res.locals.creds)
    const cloudWatchLogs = new CloudWatchLogs({ region: 'us-east-1', credentials: res.locals.creds });
    console.log('cloudWatchLogs: ', cloudWatchLogs);
    

    const logName = '/aws/lambda/secondFunction'  //req.query from frontend

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


cloudWatchController.viewStreamInfo = async (req, res, next) => {
  try{
    const cloudWatchLogs = new CloudWatchLogs({ region: 'us-east-1', credentials: res.locals.creds });

    const streamName = '2023/08/05/[$LATEST]ed93cc4e073e46f9961dfbe77ba457a9' // req.query

    const logName = '/aws/lambda/secondFunction' 

    const getLogEvents = await cloudWatchLogs.getLogEvents({logStreamName: streamName, logGroupName: logName}) // logGroupIdentifier or logGroupName

    // console.log('getLogEvents: ', getLogEvents)

    const { events } = getLogEvents;

    events.forEach(event => {
      const timeStampDate = new Date(event.timestamp);
      event.timestamp = timeStampDate;

      const ingestionDate = new Date(event.ingestionTime);
      event.ingestionTime = ingestionDate;
    })

    console.log('events: ', events);

    res.locals.events = events;
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to view the user\'s lambda function stream info' }
    });
  }
}


module.exports = cloudWatchController;