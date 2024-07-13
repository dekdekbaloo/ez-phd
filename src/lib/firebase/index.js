// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCiOQnevD1KFkuYkt-Mtz6Hry9lETCU4Uo",
  authDomain: "ez-phd.firebaseapp.com",
  databaseURL:
    "https://ez-phd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ez-phd",
  storageBucket: "ez-phd.appspot.com",
  messagingSenderId: "120208309314",
  appId: "1:120208309314:web:e73a3c47ff4ee11d73c1db",
  measurementId: "G-B9Q7CBW01K",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };
