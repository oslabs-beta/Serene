import { CloudWatchLogsClient, DescribeLogStreamsCommand, GetLogEventsCommand, DescribeLogStreamsCommandOutput, GetLogEventsCommandOutput } from '@aws-sdk/client-cloudwatch-logs';

import { CloudWatchLogController, FuncNameBody, FunctionArnBody, StreamInfoBody } from '../../types'

const cloudWatchLogController = {} as CloudWatchLogController;

/*
Notes:
-Event list in last middlware is type any for now
*/

//functions get sent to user from lambdaController. once user selects function, function name gets sent to backend as a req.query
//req.query gets added onto logName
cloudWatchLogController.viewFunctionStreams = async (req, res, next) => {
  const { funcName }: FuncNameBody = req.body;
  try {
    // console.log('working')
    // console.log('creds: ', res.locals.creds)
    // const {funcLogName, streamName, region} = req.body;
    const cloudWatchLogs: CloudWatchLogsClient = new CloudWatchLogsClient({ region: res.locals.creds.region, credentials: res.locals.creds.roleCreds });
    // const cloudWatchLogs = new CloudWatchClient({ region: res.locals.creds.region, credentials: res.locals.creds.roleCreds })
    // console.log('cloudWatchLogs: ', cloudWatchLogs);
    
    const logName: string = `/aws/lambda/${funcName}`
    // const logName = `/aws/lambda/testingfunc`  //req.query from frontend
    // const cloudWatchLogs = new CloudWatchLogs({ region: region, credentials: res.locals.creds });
    // console.log('cloudWatchLogs: ', cloudWatchLogs);

    const input = {
      logGroupName: logName
    }
    const command: DescribeLogStreamsCommand = new DescribeLogStreamsCommand(input);
    const logStreamsRes: DescribeLogStreamsCommandOutput = await cloudWatchLogs.send(command);
    // console.log('logStreamRes: ', logStreamRes);
    const logStreamNames: string[] = [];

    // logStreamRes is an object with the logStreams array on it
    logStreamsRes.logStreams.forEach(log => {
      // push each logStreamName into our logStreamNames array to be sent to frontend
      logStreamNames.push(log.logStreamName);
    })

    res.locals.logStreamNames = logStreamNames;
    return next();
  } catch (error) {
    return next({
      log: `The following error occured: ${error}`,
      status: 400,
      message: { err: 'An error occured while trying to view the user\'s lambda function' }
    });
  }
}


cloudWatchLogController.viewStreamInfo = async (req, res, next) => {
  const { streamName, logName }: StreamInfoBody = req.body;
  try{
    const cloudWatchLogs: CloudWatchLogsClient = new CloudWatchLogsClient({ region: res.locals.creds.region, credentials: res.locals.creds.roleCreds });

    // const streamName = '2023/08/05/[$LATEST]ed93cc4e073e46f9961dfbe77ba457a9' // req.query

    const logGroupName: string = `/aws/lambda/${logName}`

    const input = {
      logGroupName: logGroupName,
      logStreamName: streamName,
      startFromHead: true
    }

    const command: GetLogEventsCommand = new GetLogEventsCommand(input);

    // const getLogEvents = await cloudWatchLogs.getLogEvents({logStreamName: streamName, logGroupName: logGroupName}) // logGroupIdentifier or logGroupName

    const getLogEvents: GetLogEventsCommandOutput = await cloudWatchLogs.send(command);

    // const { events } = getLogEvents;
    const eventList: any[] = getLogEvents.events

    eventList.forEach(event => {
      const timeStampDate = new Date(event.timestamp);
      event.timestamp = timeStampDate.toString();

      const ingestionDate = new Date(event.ingestionTime);
      event.ingestionTime = ingestionDate.toString();
    })
    
    res.locals.events = eventList;
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


export default cloudWatchLogController;