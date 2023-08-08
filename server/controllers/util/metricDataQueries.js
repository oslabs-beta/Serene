// { functionName, stat, sortBy, period, startDate } = req.body;

let idCount = 0;
//needs to be filtered after receiving data from front end: funciton name, metric name,time period (seconds), date range, scan by (sort by oldest to newest or newest to oldest)

const formattedStartDate = dateConverter(startDate); // pass in start date from frontend to format into usable date

//START TIME AND END TIME
const dateConverter = (date) => {
  if(date[1] === 'w'){
    const startDate = Date();
    startDate.setDate(startDate.getDate() - 7);
    return startDate;
  } else if(date[1] === 'h'){
    const fraction = Number(date[0]) / 24
    const startDate = Date();
    startDate.setDate(startDate.getDate() - fraction);
    return startDate;
  } else{
    const startDate = Date();
    startDate.setDate(startDate.getDate() - Number(date[0]));
    return startDate;
  }
}


let period; //delete this once req.body is functional
let finalPeriod;
const timePeriodConverter = (period) => {
  if(period === '1 second' || period === '5 seconds' || period === '10 seconds' || period === '30 seconds') {
    if(period.length === 8) {
      finalPeriod = Number(period[0]);
    } else {
      finalPeriod = Number(period[0]) + Number(period[1]);
    }
  } 
  if(period === '1 minute' || period === '5 minutes' || period === '15 minutes') {
    if(period.length === 8) {
      finalPeriod = Number(period[0]);
    } else {
      finalPeriod = Number(period[0]) + Number(period[1]);
    }
  };
  return finalPeriod;
};

const queryCreator = (functionName, stat, sortBy, period, startDate) => {

}

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
              Value: 'secondFunction', // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: 900, // required (also req.body)
        Stat: 'Average', // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: 'Lambda Duration secondFunction', //function and MetricName need to be dynamic
    },
  ],
  StartTime: sevenDaysAgo, // `${formattedStartDate}`
  EndTime: new Date(), // required (will always be now)
  ScanBy: 'TimestampDescending' || 'TimestampAscending',
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
              Value: 'secondFunction', // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: 900, // required (also req.body)
        Stat: 'Average', // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: 'Lambda Invocations secondFunction', //function and MetricName need to be dynamic
    },
  ],
  StartTime: sevenDaysAgo, // `${formattedStartDate}`
  EndTime: new Date(), // required (will always be now)
  ScanBy: 'TimestampDescending' || 'TimestampAscending',
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
              Value: 'secondFunction', // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: 900, // required (also req.body)
        Stat: 'Average', // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: 'Lambda Throttles secondFunction', //function and MetricName need to be dynamic
    },
  ],
  StartTime: sevenDaysAgo, // `${formattedStartDate}`
  EndTime: new Date(), // required (will always be now)
  ScanBy: 'TimestampDescending' || 'TimestampAscending',
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
              Value: 'secondFunction', // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: 900, // required (also req.body)
        Stat: 'Average', // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: 'Lambda Errors secondFunction', //function and MetricName need to be dynamic
    },
  ],
  StartTime: sevenDaysAgo, // `${formattedStartDate}`
  EndTime: new Date(), // required (will always be now)
  ScanBy: 'TimestampDescending' || 'TimestampAscending',
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
              Value: 'secondFunction', // required  //function name - needs to be actual function name from front end. req.queried
            },
          ],
        },
        Period: 900, // required (also req.body)
        Stat: 'Average', // required (Average, min/max, sum, sample count, etc) (also req.body)
      },
      Label: 'Lambda Concurrent Executions secondFunction', //function and MetricName need to be dynamic
    },
  ],
  StartTime: sevenDaysAgo, // `${formattedStartDate}`
  EndTime: new Date(), // required (will always be now)
  ScanBy: 'TimestampDescending' || 'TimestampAscending',
  LabelOptions: {
    // LabelOptions
    Timezone: '-0400', //comes from region
  },
};

idCount += 1;

module.exports = metricDataQueries;
