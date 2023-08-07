const metricDataQueries = {};

metricDataQueries.duration = { // GetMetricDataInput
  MetricDataQueries: [ // MetricDataQueries // required
    {
      Id: `metric${testIdCount}`, // required
      MetricStat: { 
        Metric: {
          Namespace: "AWS/Lambda", // doesn't seem to correspond to res object (can be anything)
          MetricName: "Duration",  // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
          Dimensions: [
            {
              Name: `FunctionName`, // required  - can be hardcoded as funciton name
              Value: "secondFunction", // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: 900, // required (also req.body)
        Stat: "Average", // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: "Lambda Duration secondFunction",  //function and MetricName need to be dynamic
    },
  ],
  StartTime: sevenDaysAgo, // required  - switchcase?/comes from front end
  EndTime: new Date(), // required (will always be now)
  ScanBy: "TimestampDescending" || "TimestampAscending",
  LabelOptions: { // LabelOptions
    Timezone: "-0400",  //comes from region 
  },
};

metricDataQueries.invocations = { // GetMetricDataInput
  MetricDataQueries: [ // MetricDataQueries // required
    {
      Id: `metric${testIdCount}`, // required
      MetricStat: { 
        Metric: {
          Namespace: "AWS/Lambda", // doesn't seem to correspond to res object (can be anything)
          MetricName: "Errors", // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
          Dimensions: [
            {
              Name: `FunctionName`, // required  - can be hardcoded as funciton name
              Value: "secondFunction", // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: 900000, // required (also req.body)
        Stat: "Average", // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: "Lambda Errors secondFunction",  //function and MetricName need to be dynamic
    },
  ],
  StartTime: sevenDaysAgo, // required  - switchcase?/comes from front end
  EndTime: new Date(), // required (will always be now)
  ScanBy: "TimestampDescending" || "TimestampAscending",
  LabelOptions: { // LabelOptions
    Timezone: "-0400",  //comes from region 
  },
};

metricDataQueries.throttles = { // GetMetricDataInput
  MetricDataQueries: [ // MetricDataQueries // required
    {
      Id: `metric${testIdCount}`, // required
      MetricStat: { 
        Metric: {
          Namespace: "AWS/Lambda", // doesn't seem to correspond to res object (can be anything)
          MetricName: "Duration", // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
          Dimensions: [
            {
              Name: `FunctionName`, // required  - can be hardcoded as funciton name
              Value: "secondFunction", // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: 900000, // required (also req.body)
        Stat: "Average", // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: "Lambda Duration secondFunction",  //function and MetricName need to be dynamic
    },
  ],
  StartTime: sevenDaysAgo, // required  - switchcase?/comes from front end
  EndTime: new Date(), // required (will always be now)
  ScanBy: "TimestampDescending" || "TimestampAscending",
  LabelOptions: { // LabelOptions
    Timezone: "-0400",  //comes from region 
  },
};

metricDataQueries.errors = { // GetMetricDataInput
  MetricDataQueries: [ // MetricDataQueries // required
    {
      Id: `metric${testIdCount}`, // required
      MetricStat: { 
        Metric: {
          Namespace: "AWS/Lambda", // doesn't seem to correspond to res object (can be anything)
          MetricName: "Duration", // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
          Dimensions: [
            {
              Name: `FunctionName`, // required  - can be hardcoded as funciton name
              Value: "secondFunction", // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: 900000, // required (also req.body)
        Stat: "Average", // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: "Lambda Duration secondFunction",  //function and MetricName need to be dynamic
    },
  ],
  StartTime: sevenDaysAgo, // required  - switchcase?/comes from front end
  EndTime: new Date(), // required (will always be now)
  ScanBy: "TimestampDescending" || "TimestampAscending",
  LabelOptions: { // LabelOptions
    Timezone: "-0400",  //comes from region 
  },
};

metricDataQueries.concurrentExecutions = { // GetMetricDataInput
  MetricDataQueries: [ // MetricDataQueries // required
    {
      Id: `metric${testIdCount}`, // required
      MetricStat: { 
        Metric: {
          Namespace: "AWS/Lambda", // doesn't seem to correspond to res object (can be anything)
          MetricName: "Duration", // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
          Dimensions: [
            {
              Name: `FunctionName`, // required  - can be hardcoded as funciton name
              Value: "secondFunction", // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: 900000, // required (also req.body)
        Stat: "Average", // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: "Lambda Duration secondFunction",  //function and MetricName need to be dynamic
    },
  ],
  StartTime: sevenDaysAgo, // required  - switchcase?/comes from front end
  EndTime: new Date(), // required (will always be now)
  ScanBy: "TimestampDescending" || "TimestampAscending",
  LabelOptions: { // LabelOptions
    Timezone: "-0400",  //comes from region 
  },
};



module.exports = metricDataQueries;