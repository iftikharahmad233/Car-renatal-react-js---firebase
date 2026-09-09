import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGeBljIQu5O_4udoFggpxvMCoV0X6nR94",
  authDomain: "car-rental-d0cba.firebaseapp.com",
  projectId: "car-rental-d0cba",
  storageBucket: "car-rental-d0cba.firebasestorage.app",
  messagingSenderId: "518778726881",
  appId: "1:518778726881:web:51d7e12a497ece711a8aa0",
  measurementId: "G-LZEM38NG4Y",
};

const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Firebase Firestore Database
export const db = getFirestore(app);

export default app;