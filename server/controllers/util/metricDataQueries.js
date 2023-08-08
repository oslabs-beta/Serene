let idCount = 0;
const queryCreator = {}

queryCreator.createQuery = (funcName, stat, sortBy, period, startDate) => {
const metricDataQueries = {};

//METRICS
metricDataQueries.duration = {
  // GetMetricDataInput
  MetricDataQueries: [
  // MetricDataQueries // required
    {
      Id: `duration${idCount}`, // required
      MetricStat: {
        Metric: {
          Namespace: 'AWS/Lambda', // doesn't seem to correspond to res object (can be anything)
          MetricName: 'Duration', // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
          Dimensions: [
            {
              Name: `FunctionName`, // required  - can be hardcoded as funciton name
              Value: `${funcName}`, // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: period, // required (also req.body)
        Stat: `${stat}`, // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: 'Lambda Duration secondFunction', //function and MetricName need to be dynamic
    },
  ],
  StartTime: `${startDate}`,
  EndTime: new Date(), // required (will always be now)
  ScanBy: `${sortBy}`,
  LabelOptions: {
    // LabelOptions
    Timezone: '-0400', //comes from region
  },
};

metricDataQueries.invocations = {
  // GetMetricDataInput
  MetricDataQueries: [
    // MetricDataQueries // required
    {
      Id: `invocations${idCount}`, // required
      MetricStat: {
        Metric: {
          Namespace: 'AWS/Lambda', // doesn't seem to correspond to res object (can be anything)
          MetricName: 'Invocations', // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
          Dimensions: [
            {
              Name: `FunctionName`, // required  - can be hardcoded as funciton name
              Value: `${funcName}`, // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: period, // required (also req.body)
        Stat: `${stat}`, // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: 'Lambda Invocations secondFunction', //function and MetricName need to be dynamic
    },
  ],
  StartTime: `${startDate}`,
  EndTime: new Date(), // required (will always be now)
  ScanBy: `${sortBy}`,
  LabelOptions: {
    // LabelOptions
    Timezone: '-0400', //comes from region
  },
};

metricDataQueries.throttles = {
  // GetMetricDataInput
  MetricDataQueries: [
    // MetricDataQueries // required
    {
      Id: `throttles${idCount}`, // required
      MetricStat: {
        Metric: {
          Namespace: 'AWS/Lambda', // doesn't seem to correspond to res object (can be anything)
          MetricName: 'Throttles', // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
          Dimensions: [
            {
              Name: `FunctionName`, // required  - can be hardcoded as funciton name
              Value: `${funcName}`, // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: period, // required (also req.body)
        Stat: `${stat}`, // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: 'Lambda Throttles secondFunction', //function and MetricName need to be dynamic
    },
  ],
  StartTime: `${startDate}`,
  EndTime: new Date(), // required (will always be now)
  ScanBy: `${sortBy}`,
  LabelOptions: {
    // LabelOptions
    Timezone: '-0400', //comes from region
  },
};

metricDataQueries.errors = {
  // GetMetricDataInput
  MetricDataQueries: [
    // MetricDataQueries // required
    {
      Id: `errors${idCount}`, // required
      MetricStat: {
        Metric: {
          Namespace: 'AWS/Lambda', // doesn't seem to correspond to res object (can be anything)
          MetricName: 'Errors', // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
          Dimensions: [
            {
              Name: `FunctionName`, // required  - can be hardcoded as funciton name
              Value: `${funcName}`, // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: period, // required (also req.body)
        Stat: `${stat}`, // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: 'Lambda Errors secondFunction', //function and MetricName need to be dynamic
    },
  ],
  StartTime: `${startDate}`,
  EndTime: new Date(), // required (will always be now)
  ScanBy: `${sortBy}`,
  LabelOptions: {
    // LabelOptions
    Timezone: '-0400', //comes from region
  },
};

metricDataQueries.concurrentExecutions = {
  // GetMetricDataInput
  MetricDataQueries: [
    // MetricDataQueries // required
    {
      Id: `concurrentExections${idCount}`, // required
      MetricStat: {
        Metric: {
          Namespace: 'AWS/Lambda', // doesn't seem to correspond to res object (can be anything)
          MetricName: 'Concurrent Executions', // CANNOT BE ANYTHING (DIRECTLY CORRESPONDS TO METRIC) - comes from front-end
          Dimensions: [
            {
              Name: `FunctionName`, // required  - can be hardcoded as funciton name
              Value: `${funcName}`, // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: period, // required (also req.body)
        Stat: `${stat}`, // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: 'Lambda Concurrent Executions secondFunction', //function and MetricName need to be dynamic
    },
  ],
  StartTime: startDate, // `${formattedStartDate}`
  EndTime: new Date(), // required (will always be now)
  ScanBy: 'TimestampDescending' || 'TimestampAscending',
  LabelOptions: {
    // LabelOptions
    Timezone: '-0400', //comes from region
  },
};

idCount += 1;

}

module.exports = queryCreator;
