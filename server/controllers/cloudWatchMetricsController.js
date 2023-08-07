const { GetMetricDataCommand, CloudWatchClient } = require('@aws-sdk/client-cloudwatch');

const cloudWatchMetricsController = {};

cloudWatchMetricsController.getMetrics = async (req, res, next) => {
  try{
    const client = new CloudWatchClient({region: 'us-east-1', credentials: res.locals.creds})

    // console.log('client: ', client)

    // const params = {
    //   MetricDataQueries: [
    //     {
    //       Id: "testId",
    //       MetricStat: {
    //         Metric: {
    //           Namespace: "Invocations"
    //         }
    //       }          
    //     }
    //   ]
    // };
    let testIdCount = 0;
    
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    sevenDaysAgo.toString()

    const now = new Date();
    // now.setDate(now.getDate() - 1);
    now.toString();

    const input = { // GetMetricDataInput
      MetricDataQueries: [ // MetricDataQueries // required
        {
          Id: `testId${testIdCount}`, // required
          MetricStat: { 
            Metric: {
              Namespace: "AWS/Lambda", // doesn't seem to correspond to res object (can be anything)
              MetricName: "Duration", // corresponds to label (can be anything)
              Dimensions: [
                {
                  Name: `FunctionName`, // required  - can be hardcoded as funciton name
                  Value: "secondFunction", // required  //function name - needs to be actual function name from front end. req.queried
                },
              ],
            },
            Period: 900, // required
            Stat: "Average", // required
            // Unit: "Seconds"
          },
          // Expression: "STRING_VALUE",
          Label: "Lambda Duration secondFunction",
          // ReturnData: true || false,
          // Period: Number("int"),
          // AccountId: "STRING_VALUE",
        },
      ],
      StartTime: sevenDaysAgo, // required
      EndTime: now, // required
      // NextToken: "STRING_VALUE",
      // ScanBy: "TimestampDescending" || "TimestampAscending",
      // MaxDatapoints: Number("int"),
      LabelOptions: { // LabelOptions
        Timezone: "-0400",
      },
    };

    const getMetrics = new GetMetricDataCommand(input)
    
    const metricsResponse = await client.send(getMetrics);

    const metricsArray = metricsResponse.MetricDataResults;

    console.log('metricsArray: ', metricsArray);

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