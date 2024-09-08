import React from 'react';
import Dashboard from './components/Dashboard.js';
import Waterlevel from './components/Waterlevel.js';
import './App.css'; // Optional: Create a CSS file for global styling

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Waterlevel />
    </div>
  );
}

export default App;
