// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "estate-d33d7.firebaseapp.com",
  projectId: "estate-d33d7",
  storageBucket: "estate-d33d7.firebasestorage.app",
  messagingSenderId: "390833203563",
  appId: "1:390833203563:web:dac8792a7f8b561daa442e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);