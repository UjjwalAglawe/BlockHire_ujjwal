// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "blockhire-f2050.firebaseapp.com",
  projectId: "blockhire-f2050",
  storageBucket: "blockhire-f2050.appspot.com",
  messagingSenderId: "369130041798",
  appId: "1:369130041798:web:bc8dc91e6cded8cade82c7"
};

const app = initializeApp(firebaseConfig);

export { app };