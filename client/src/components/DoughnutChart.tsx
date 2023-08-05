import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

type Props = {};

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutGraph = (props: Props) => {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  return (
    <div>
      <Doughnut
        data={{
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map((row) => row.count),
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 153, 51, 0.6)',
                'rgba(255, 204, 0, 0.6)',
                'rgba(204, 255, 0, 0.6)',
                'rgba(0, 255, 204, 0.6)',
                'rgba(0, 204, 255, 0.6)',
              ],
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          cutout: 50, // Change this to a number between 0 and 100
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutGraph;
