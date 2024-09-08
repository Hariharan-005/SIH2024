import React from 'react';
import { Bar, Chart } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const HorizontalBarChart = () => {
  const data = {
    lavels: ['100','200','300','400','500'],
    datassets: [
      {
        label: 'WaterLevel',
        data: [300],
        backgroundColor: '#61DBFB'
      }
    ]
  }
  const options = {
    indexAxis: 'y'
  }
  return (
    <div>
    <Bar data={data} options={options}></Bar>
    </div>
  )
  }

export default HorizontalBarChart;