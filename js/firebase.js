// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBpblO_gyTm4n8LMZqWVTgWfcQRGo7qz2M",

  authDomain: "site-series-1e7c0.firebaseapp.com",

  projectId: "site-series-1e7c0",

  storageBucket: "site-series-1e7c0.appspot.com",

  messagingSenderId: "961984813160",

  appId: "1:961984813160:web:6e2d7845cf1b1f52c983dd",

  measurementId: "G-D16YY5PZNG"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
