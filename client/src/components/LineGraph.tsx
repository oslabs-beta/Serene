import {
  Chart,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

type Props = {
  TimeStamps: [];
  Values: [];
  metric: string;
};

Chart.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineGraph = ({ TimeStamps, Values, metric }: Props) => {
  const newTimeArr = TimeStamps.map((ts, index) => ({
    x: new Date(ts), // Parse date strings into Date objects
    y: Values[index],
  }));

  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              label: metric.toUpperCase(),
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
              labels: [
                '2023-08-06',
                '2023-08-07',
                '2023-08-08',
                '2023-08-09',
                '2023-08-10',
              ],

              grid: {
                display: true,
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        } as any}
      />
    </div>
  );
};

export default LineGraph;
