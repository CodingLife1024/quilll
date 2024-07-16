// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDKFCltXh7QIHT5Hsvg422E9VpXN7D-n_M",
  authDomain: "quilll.firebaseapp.com",
  projectId: "quilll",
  storageBucket: "quilll.appspot.com",
  messagingSenderId: "549871688493",
  appId: "1:549871688493:web:6e4c456efdc17b498491a4",
  measurementId: "G-FG5N32RZX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);