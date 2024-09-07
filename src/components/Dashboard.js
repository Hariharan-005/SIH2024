import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Data for Temperature Forecasting
  const temperatureData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Kelambakkam - Temperature (°C)',
        data: [34, 35, 35, 35, 35, 36, 36],
        borderColor: '#71F5DE',  // Curve line color
        backgroundColor: 'rgba(113, 245, 222, 0.7)', // Lighter shade under the curve
        borderWidth: 2, // Thinner curve line
        fill: origin, // Fill the area under the curve
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Data for Precipitation Forecasting
  const precipitationData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Kelambakkam - Precipitation (%)',
        data: [25, 16, 60, 25, 4, 2, 25],
        borderColor: '#71F5DE',
        backgroundColor: 'rgba(113, 245, 222, 0.7)', // Lighter shade under the curve
        borderWidth: 2, // Thinner curve line
        fill: true, // Fill the area under the curve
        tension: 0.4,
      },
    ],
  };

  // Chart configuration
  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#fff' },
      },
      y: {
        ticks: { color: '#fff' },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.chartCard}>
        <h3 style={styles.cardTitle}>Temperature Forecast - Kelambakkam</h3>
        <Line data={temperatureData} options={options} />
      </div>
      <div style={styles.chartCard}>
        <h3 style={styles.cardTitle}>Precipitation Forecast - Kelambakkam</h3>
        <Line data={precipitationData} options={options} />
      </div>
    </div>
  );
};

// Styling for the Dashboard
const styles = {
  container: {
    backgroundColor: '#1F2026',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100vh',
  },
  chartCard: {
    backgroundColor: '#2D2D34',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    width: '90%',
    maxWidth: '400px',
  },
  cardTitle: {
    color: '#fff',
    marginBottom: '10px',
    textAlign: 'center',
  },
};

export default Dashboard;
