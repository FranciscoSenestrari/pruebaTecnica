import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_URL,
  authDomain: "pruebatecnicapagos360.firebaseapp.com",
  projectId: "pruebatecnicapagos360",
  storageBucket: "pruebatecnicapagos360.firebasestorage.app",
  messagingSenderId: "1069556006168",
  appId: "1:1069556006168:web:85109876dfa5372606326d",
  measurementId: "G-EFY7956K4F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
