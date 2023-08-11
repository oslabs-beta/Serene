const { CloudWatchLogsClient, DescribeLogStreamsCommand, GetLogEventsCommand } = require('@aws-sdk/client-cloudwatch-logs');
// const AWS = require('aws-sdk')

const cloudWatchLogController = {};

//functions get sent to user from lambdaController. once user selects function, function name gets sent to backend as a req.query
//req.query gets added onto logName
cloudWatchLogController.viewFunctionStreams = async (req, res, next) => {
  const { funcName } = req.body;
  try {
    // console.log('working')
    // console.log('creds: ', res.locals.creds)
    // const {funcLogName, streamName, region} = req.body;
    const cloudWatchLogs = new CloudWatchLogsClient({ region: res.locals.creds.region, credentials: res.locals.creds.roleCreds });
    // const cloudWatchLogs = new CloudWatchClient({ region: res.locals.creds.region, credentials: res.locals.creds.roleCreds })
    // console.log('cloudWatchLogs: ', cloudWatchLogs);
    
    const logName = `/aws/lambda/${funcName}`
    console.log('logName: ', logName)
    // const logName = `/aws/lambda/testingfunc`  //req.query from frontend
    // const cloudWatchLogs = new CloudWatchLogs({ region: region, credentials: res.locals.creds });
    // console.log('cloudWatchLogs: ', cloudWatchLogs);

    const input = {
      logGroupName: logName
    }
    const command = new DescribeLogStreamsCommand(input);
    const logStreamsRes = await cloudWatchLogs.send(command);
    // console.log('logStreamRes: ', logStreamRes);
    const logStreamNames = []
    // logStreamRes is an object with the logStreams array on it
    logStreamsRes.logStreams.forEach(log => {
      // push each logStreamName into our logStreamNames array to be sent to frontend
      logStreamNames.push(log.logStreamName);
    })
    // console.log('logStreamNames: ', logStreamNames);
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
  const { streamName, logName } = req.body;
  try{
    const cloudWatchLogs = new CloudWatchLogsClient({ region: res.locals.creds.region, credentials: res.locals.creds.roleCreds });
    console.log('logName', logName)
    // const streamName = '2023/08/05/[$LATEST]ed93cc4e073e46f9961dfbe77ba457a9' // req.query
    const logGroupName = `/aws/lambda/${logName}`
    console.log('logGroupName: ', logGroupName)

    const input = {
      logGroupName: logGroupName,
      logStreamName: streamName,
      startFromHead: true
    }

    const command = new GetLogEventsCommand(input);

    // const getLogEvents = await cloudWatchLogs.getLogEvents({logStreamName: streamName, logGroupName: logGroupName}) // logGroupIdentifier or logGroupName

    const getLogEvents = await cloudWatchLogs.send(command);

    console.log('getLogEvents: ', getLogEvents)
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