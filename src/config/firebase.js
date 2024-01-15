import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'; 


const firebaseConfig = {
  apiKey: "AIzaSyBRgJq0TG9On-kJRL8yDz4E3tbvZ0IbjOs",
  authDomain: "sb-slip-image.firebaseapp.com",
  projectId: "sb-slip-image",
  storageBucket: "sb-slip-image.appspot.com",
  messagingSenderId: "267480942917",
  appId: "1:267480942917:web:87ab4974f59a9f941c162c",
  measurementId: "G-QHZF7R912R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);