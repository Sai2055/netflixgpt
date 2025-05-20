// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxJ9cdS9lYMquyRH4i2oWH4PKYXq-1mf8",
  authDomain: "netflixgpt-91323.firebaseapp.com",
  projectId: "netflixgpt-91323",
  storageBucket: "netflixgpt-91323.firebasestorage.app",
  messagingSenderId: "968832676197",
  appId: "1:968832676197:web:a05c93ad0ae941a973318c",
  measurementId: "G-40SLLPBVVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();