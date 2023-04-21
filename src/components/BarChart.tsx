import { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { dataType } from '../types/DataChart';
import { BarChartTypes } from '../types/BarChart';

export function BarChart({ highest, dataJson }: BarChartTypes) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

  const handleChartUI = () => {
    ChartJS.defaults.elements.bar.borderRadius = 5;
    ChartJS.defaults.color = '#EC755D';
  };

  useEffect(() => {
    handleChartUI();
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false,
          border: {
            display: false,
          },
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
          drawTicks: false,
          border: {
            display: false,
          },
        },
      },
    },
  };

  const data: dataType = {
    labels: dataJson.map(({ day }) => day),
    datasets: [
      {
        data: dataJson.map(({ amount }) => amount),
        backgroundColor: function () {
          return dataJson.map(({ amount }) => {
            return amount !== highest ? '#EC755D' : '#76B5BC';
          });
        },
      },
    ],
  };
  return (
    <div className="mt-9">
      <Bar options={options} data={data} />
    </div>
  );
}
