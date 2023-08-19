// import specific AWS commands and types
import { CloudWatchLogsClient, DescribeLogStreamsCommand, GetLogEventsCommand, DescribeLogStreamsCommandOutput, GetLogEventsCommandOutput } from '@aws-sdk/client-cloudwatch-logs';
// import types
import { CloudWatchLogController, FuncNameBody, FunctionArnBody, StreamInfoBody } from '../../types'

const cloudWatchLogController = {} as CloudWatchLogController;


// takes in function name from user
// sends command and packages data into an array
cloudWatchLogController.viewFunctionStreams = async (req, res, next) => {
  const { funcName }: FuncNameBody = req.body;
  try {
    const cloudWatchLogs: CloudWatchLogsClient = new CloudWatchLogsClient({ region: res.locals.creds.region, credentials: res.locals.creds.roleCreds });
    // all log names will begin with this string, so add the function name from the user
    const logName: string = `/aws/lambda/${funcName}`

    const input = {
      logGroupName: logName
    }
    // create and send the command from the client
    const command: DescribeLogStreamsCommand = new DescribeLogStreamsCommand(input);
    const logStreamsRes: DescribeLogStreamsCommandOutput = await cloudWatchLogs.send(command);

    const logStreamNames: string[] = [];
    // logStreamRes is an object with the logStreams array on it
    logStreamsRes.logStreams.forEach(log => {
      // push each logStreamName into our logStreamNames array to be sent to frontend
      logStreamNames.push(log.logStreamName);
    })

    res.locals.logStreamNames = logStreamNames;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: `An error occured while trying to view the log streams for ${funcName}`}
    });
  }
}

// takes in the stream name and log name from the user
// sends command and packages data into an array
cloudWatchLogController.viewStreamInfo = async (req, res, next) => {
  const { streamName, logName }: StreamInfoBody = req.body;
  try{
    const cloudWatchLogs: CloudWatchLogsClient = new CloudWatchLogsClient({ region: res.locals.creds.region, credentials: res.locals.creds.roleCreds });

    const logGroupName: string = `/aws/lambda/${logName}`

    const input = {
      logGroupName: logGroupName,
      logStreamName: streamName,
      startFromHead: true
    }

    // create and send command from client
    const command: GetLogEventsCommand = new GetLogEventsCommand(input);
    const getLogEvents: GetLogEventsCommandOutput = await cloudWatchLogs.send(command);

    // const { events } = getLogEvents;
    const eventList: any[] = getLogEvents.events

    // formatting all the timestamps on the resulting data
    eventList.forEach(event => {
      const timeStampDate = new Date(event.timestamp);
      event.timestamp = timeStampDate.toString();

      const ingestionDate = new Date(event.ingestionTime);
      event.ingestionTime = ingestionDate.toString();
    })
    
    res.locals.events = eventList;
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to view the user\'s lambda function stream info' }
    });
  }
}


export default cloudWatchLogController;