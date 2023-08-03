import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

type Props = {
  metric: string;
};

const Metric: React.FC<Props> = ({ metric }) => {
  const chartContainerRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    if (chartContainerRef.current) {
      new Chart(chartContainerRef.current, {
        type: 'bar',
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map((row) => row.count),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <button className="border-4 border-black my-4">Metric is {metric}</button>
      <br />
      <canvas ref={chartContainerRef} />
    </div>
  );
};

export default Metric;
