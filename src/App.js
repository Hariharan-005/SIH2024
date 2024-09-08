import React from 'react';
import { Dashboard } from './components/Dashboard';
//import PumpButton from './PumpButton';
// import Waterlevel from './components/Waterlevel';
import './App.css'; // Optional: Create a CSS file for global styling

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <PumpButton />  */}
    </div>
  );
}

export default App;
