
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "movie-api-6daec.firebaseapp.com",
  projectId: "movie-api-6daec",
  storageBucket: "movie-api-6daec.firebasestorage.app",
  messagingSenderId: "2598768329",
  appId: "1:2598768329:web:f463ba079c1c8d9b480718",
  measurementId: "G-74SVYJ0GXJ"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app); 
