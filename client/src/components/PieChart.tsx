import React from 'react';
import {
  Chart,
  ArcElement,
  Legend,
  Tooltip,
  CategoryScale,
  Title,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

type Props = {};

Chart.register(ArcElement, Legend, Tooltip, CategoryScale, Title);

const PieChart = ({}: Props) => {
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
      <Pie
        data={{
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map((row) => row.count),
              backgroundColor: ['gray', 'darkgray', 'lightpink'],
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            x: {
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

export default PieChart;
