// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { database } from '../Firebase/firebase'; // Import the initialized database

// Registering required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Data for Temperature Forecasting
  const temperatureData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Kelambakkam - Temperature (°C)',
        data: [34, 35, 35, 35, 35, 36, 36],
        borderColor: '#71F5DE',  // Curve line color
        backgroundColor: 'rgba(113, 245, 222, 0.7)', // Lighter shade under the curve
        borderWidth: 1, // Thinner curve line
        fill: true, // Fill the area under the curve
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Data for Precipitation Forecasting
  const precipitationData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Kelambakkam - Precipitation (%)',
        data: [25, 16, 60, 25, 4, 2, 25],
        borderColor: '#71F5DE',
        backgroundColor: 'rgba(113, 245, 222, 0.7)', // Lighter shade under the curve
        borderWidth: 1, // Thinner curve line
        fill: true, // Fill the area under the curve
        tension: 0.4,
      },
    ],
  };

  // Data for Water Level
  const waterLevelData = {
    labels: ['Water Level'], // corrected 'lavels' to 'labels'
    datasets: [ // corrected 'datassets' to 'datasets'
      {
        label: 'WaterLevel',
        data: [500],
        backgroundColor: '#71F5DE'
      }
    ]
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

  // Options for water level chart
  const options1 = {
    indexAxis: 'y', // keep horizontal bars
  };

  return (
    <div style={styles.container}>
      <h2 style={{color:'white', margin: '20px', padding: '20px' }}>Soil Sense</h2>
      <div style={styles.chartCard}>
        <h3 style={styles.cardTitle}>Temperature Forecast - Kelambakkam</h3>
        <Line data={temperatureData} options={options} />
      </div>
      <div style={styles.chartCard}>
        <h3 style={styles.cardTitle}>Precipitation Forecast - Kelambakkam</h3>
        <Line data={precipitationData} options={options} />
      </div>
      <div style={styles.chartCard}>
        <h3 style={styles.cardTitle}>Water level in the tank</h3>
        <Bar data={waterLevelData} options={options1} />
      </div>
    </div>
  );
};

// Separate PumpButton component
const PumpButton = () => {
  const [data, setData] = useState({});
  const [manual1, setManual1] = useState(false);
  const [manual2, setManual2] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await database.ref().get();
      const data = snapshot.val() || {}; // Ensure you don't get undefined
      setData(data);
      setManual1(data.Manual1 || false);
      setManual2(data.Manual2 || false);
    };

    fetchData();
  }, []);

  const togglePump1 = () => {
    if (manual1) {
      database.ref().update({
        Manual1: false,
        Pump_Status1: data.Soil_Moisture1 > data.Trigger1 ? "OFF" : "ON",
      });
    } else {
      database.ref().update({
        Manual1: true,
        Pump_Status1: "ON",
      });
    }
    setManual1(!manual1);
  };

  const togglePump2 = () => {
    if (manual2) {
      database.ref().update({
        Manual2: false,
        Pump_Status2: data.Soil_Moisture2 > data.Trigger2 ? "OFF" : "ON",
      });
    } else {
      database.ref().update({
        Manual2: true,
        Pump_Status2: "ON",
      });
    }
    setManual2(!manual2);
  };

  // if (!data || Object.keys(data).length === 0) {
    // return <div>Loading...</div>;
  // }

  return (
    <div style={styles.container1}>
      <h2 style={{ color: '#71F5DE' }}>Pump Control Dashboard</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ backgroundColor: '#2D2D34', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: '#71F5DE' }}>Pump 1</h3>
          <button
            onClick={togglePump1}
            style={{
              backgroundColor: manual1 ? '#71F5DE' : '#2D2D34',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {manual1 ? 'Turn Off Pump 1' : 'Turn On Pump 1'}
          </button>
          <p style={{ color: '#fff' }}>
            Status: {manual1 ? 'Manual (ON)' : `Auto (${data.Pump_Status1 || 'OFF'})`}
          </p>
        </div>

        <div style={{ backgroundColor: '#2D2D34', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: '#71F5DE' }}>Pump 2</h3>
          <button
            onClick={togglePump2}
            style={{
              backgroundColor: manual2 ? '#71F5DE' : '#2D2D34',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {manual2 ? 'Turn Off Pump 2' : 'Turn On Pump 2'}
          </button>
          <p style={{ color: '#fff' }}>
            Status: {manual2 ? 'Manual (ON)' : `Auto (${data.Pump_Status2 || 'OFF'})`}
          </p>
        </div>
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
  container1: {
    backgroundColor: '#1F2026',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100vh',
  },
};

export { Dashboard };
