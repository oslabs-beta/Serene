import React from 'react';
import { Chart, LineElement, TimeScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

type Props = {
TimeStamps: [];
Values: [];
metric: string;
};

Chart.register(LineElement, TimeScale, LinearScale, PointElement, Tooltip, Legend);

const LineGraph = ({TimeStamps, Values, metric}: Props) => {

  // const data = [
  //   { year: 2010, count: 10 },
  //   { year: 2011, count: 20 },
  //   { year: 2012, count: 15 },
  //   { year: 2013, count: 25 },
  //   { year: 2014, count: 22 },
  //   { year: 2015, count: 30 },
  //   { year: 2016, count: 28 },
  // ];


  // console.log(`this is timestamp ${TimeStamps} and this is values in linegraph ${Values}`)
 
  // const options = {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit',
  //   hour12: true
  // }


//   const newTimeArr = [];

//   [...TimeStamps].reverse().map((ts, index ) => {
//     const convertedTime = new Date(ts)
//     const formattedTime = (convertedTime.toLocaleDateString('en-US', {weekday:"short", year:"numeric", day: 'numeric', month:"short", hour: "numeric",
//     minute: "numeric"}))
//     newTimeArr.push({x: formattedTime, y: Values[index]} )
//   })

// console.log(`this is newTimeArr ${JSON.stringify(newTimeArr)}`)

  const newTimeArr = TimeStamps.map((ts, index) => ({
    x: new Date(ts), // Parse date strings into Date objects
    y: Values[index],
  }));


// newTimeArr: [
//   { x: '10:10 AM', y: 8 },
//   { x: '10:18 AM', y: 15 },
//   { x: '10:35 AM', y: 5 },
// ],

  return (
    <div>
      <Line
        data={{
          // labels: newTimeArr.map((row) => row.x),
          // labels: ['2023-08-06','2023-08-07','2023-08-08','2023-08-09','2023-08-10']
          datasets: [
            {
              label: metric,
              data: newTimeArr,
              // data: newTimeArr,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            x: {
              type: 'time', 
               labels: ['2023-08-06','2023-08-07','2023-08-08','2023-08-09','2023-08-10'],
              // time: {
                // parser: 'MMM D, YYYY [at] h:mm A', // Adjust according to your timestamp format
              // },

              // type:'time',
              // time: {
              //   unit: 'day'
              // },


              grid: {
                display: true,
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
