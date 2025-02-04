import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import the database
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC41FBqt907XWwFGYKGABg5AHU6L0AFwcM",
  authDomain: "custom-app-368a6.firebaseapp.com",
  databaseURL: "https://custom-app-368a6-default-rtdb.firebaseio.com/",
  projectId: "custom-app-368a6",
  storageBucket: "custom-app-368a6.appspot.com",
  messagingSenderId: "146150794923",
  appId: "1:146150794923:web:0c20fb74d62e5c1780f9ee",
  measurementId: "G-E7LCD4T1B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Database
export const database = getDatabase(app);
