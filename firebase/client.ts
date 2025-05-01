
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIJ7zSrdG6v15eBJNwMKAuUOXKUFKQm2g",
  authDomain: "prepwise-bcb0a.firebaseapp.com",
  projectId: "prepwise-bcb0a",
  storageBucket: "prepwise-bcb0a.firebasestorage.app",
  messagingSenderId: "175249544783",
  appId: "1:175249544783:web:6b9b29820e51836ce07c3a",
  measurementId: "G-LZCZQQ5MJM"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
