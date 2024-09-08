// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import firebase from './Firebase/firebase';
import './Firebase/database.json'; // Import Firebase Realtime Database

const PumpButton = () => {
  const [data, setData] = useState(null);
  const [manual1, setManual1] = useState(false);
  const [manual2, setManual2] = useState(false);

  // Initialize Firebase (replace with your config)
  const firebaseConfig = {
    apiKey: "AIzaSyDhtfw6gwSz-9btNU5xGJ38pvPrnQwgiis",
    authDomain: "soilsense-3ca63.firebaseapp.com",
    databaseURL: "",
    projectId: "soilsense-3ca63",
    storageBucket: "soilsense-3ca63.appspot.com",
    messagingSenderId: "337097967994",
    appId: "1:337097967994:web:44b65de2d29f172bbd2ec3",
    measurementId: "G-GMNSR7TM0M"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const database = firebase.database();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await database.ref().get();
        const data = snapshot.val();
        setData(data);
        setManual1(data.Manual1);
        setManual2(data.Manual2);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
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

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: '#1F2026', padding: '20px' }}>
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
            Status: {manual1 ? 'Manual (ON)' : `Auto (${data.Pump_Status1})`}
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
            Status: {manual2 ? 'Manual (ON)' : `Auto (${data.Pump_Status2})`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PumpButton;
