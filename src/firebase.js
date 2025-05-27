// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "movie-api-6daec.firebaseapp.com",
  projectId: "movie-api-6daec",
  storageBucket: "movie-api-6daec.firebasestorage.app",
  messagingSenderId: "2598768329",
  appId: "1:2598768329:web:f463ba079c1c8d9b480718",
  measurementId: "G-74SVYJ0GXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
