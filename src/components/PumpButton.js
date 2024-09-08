// import React, { useEffect, useState } from 'react';
// import { database } from '../Firebase/firebase';


// const PumpButton = () => {
//   const [data, setData] = useState({});
//   const [manual1, setManual1] = useState(false);
//   const [manual2, setManual2] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const snapshot = await database.ref().get();
//       const data = snapshot.val() || {};
//       setData(data);
//       setManual1(data.Manual1 || false);
//       setManual2(data.Manual2 || false);
//     };

//     fetchData();
//   }, []);

//   const togglePump1 = () => {
//     // Handle toggle logic
//   };

//   const togglePump2 = () => {
//     // Handle toggle logic
//   };

//   return (
//     <div style={{ backgroundColor: '#1F2026', padding: '20px' }}>
//       <h2 style={{ color: '#71F5DE' }}>Pump Control Dashboard</h2>
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         <div style={{ backgroundColor: '#2D2D34', padding: '20px', borderRadius: '10px' }}>
//           <h3 style={{ color: '#71F5DE' }}>Pump 1</h3>
//           <button
//             onClick={togglePump1}
//             style={{
//               backgroundColor: manual1 ? '#71F5DE' : '#2D2D34',
//               color: '#fff',
//               padding: '10px 20px',
//               borderRadius: '5px',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             {manual1 ? 'Turn Off Pump 1' : 'Turn On Pump 1'}
//           </button>
//           <p style={{ color: '#fff' }}>
//             Status: {manual1 ? 'Manual (ON)' : `Auto (${data.Pump_Status1 || 'OFF'})`}
//           </p>
//         </div>

//         <div style={{ backgroundColor: '#2D2D34', padding: '20px', borderRadius: '10px' }}>
//           <h3 style={{ color: '#71F5DE' }}>Pump 2</h3>
//           <button
//             onClick={togglePump2}
//             style={{
//               backgroundColor: manual2 ? '#71F5DE' : '#2D2D34',
//               color: '#fff',
//               padding: '10px 20px',
//               borderRadius: '5px',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             {manual2 ? 'Turn Off Pump 2' : 'Turn On Pump 2'}
//           </button>
//           <p style={{ color: '#fff' }}>
//             Status: {manual2 ? 'Manual (ON)' : `Auto (${data.Pump_Status2 || 'OFF'})`}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PumpButton;
