// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "basu-project-8cb3c.firebaseapp.com",
  projectId: "basu-project-8cb3c",
  storageBucket: "basu-project-8cb3c.firebasestorage.app",
  messagingSenderId: "855380984373",
  appId: "1:855380984373:web:9b52832d79860611fa277c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);