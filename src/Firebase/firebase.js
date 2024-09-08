// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// import { getAnalytics } from "firebase/analytics";





const firebaseConfig = {
  apiKey: "AIzaSyDhtfw6gwSz-9btNU5xGJ38pvPrnQwgiis",
  authDomain: "soilsense-3ca63.firebaseapp.com",
  databaseURL: "https://soilsense-3ca63-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "soilsense-3ca63",
  storageBucket: "soilsense-3ca63.appspot.com",
  messagingSenderId: "337097967994",
  appId: "1:337097967994:web:44b65de2d29f172bbd2ec3",
  measurementId: "G-GMNSR7TM0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };