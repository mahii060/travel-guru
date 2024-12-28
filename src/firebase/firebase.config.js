// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXciepOtOCwRzFEsIUFacZG1FbeKPDieA",
    authDomain: "travel-guru-e435c.firebaseapp.com",
    projectId: "travel-guru-e435c",
    storageBucket: "travel-guru-e435c.firebasestorage.app",
    messagingSenderId: "643659113690",
    appId: "1:643659113690:web:c7c9b7e1d06a25687cf1e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);