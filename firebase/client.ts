
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwySG94R4LN5TWeW6xuE08wO_7t_d98rE",
  authDomain: "prepwise-9a227.firebaseapp.com",
  projectId: "prepwise-9a227",
  storageBucket: "prepwise-9a227.firebasestorage.app",
  messagingSenderId: "682636167696",
  appId: "1:682636167696:web:75dfefd60f9cb3ac6e9895",
  measurementId: "G-VWZN4DWG7Q"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
