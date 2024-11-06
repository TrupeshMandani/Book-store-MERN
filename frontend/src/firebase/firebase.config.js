// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNYkWZtEeKEWzZUqyCBf9YrrUSGpKOqIM",
  authDomain: "book-store-mern-29dab.firebaseapp.com",
  projectId: "book-store-mern-29dab",
  storageBucket: "book-store-mern-29dab.firebasestorage.app",
  messagingSenderId: "689583512268",
  appId: "1:689583512268:web:71940c7d2bd76cbd730069",
  measurementId: "G-4H76R529XV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
