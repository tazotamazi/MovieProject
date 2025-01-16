// utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBS5eH9urdRRsjIIWK-GeByPvX9zf0xooY", // Your API Key
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com", // Replace with your project ID
    projectId: "YOUR_PROJECT_ID", // Replace with your project ID
    storageBucket: "YOUR_PROJECT_ID.appspot.com", // Replace with your project ID
    messagingSenderId: "YOUR_SENDER_ID", // Replace with your messaging sender ID
    appId: "YOUR_APP_ID", // Replace with your app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export Firebase Auth for use in the app
export default app;
