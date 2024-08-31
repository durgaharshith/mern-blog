// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-aea01.firebaseapp.com",
  projectId: "mern-blog-aea01",
  storageBucket: "mern-blog-aea01.appspot.com",
  messagingSenderId: "613212121047",
  appId: "1:613212121047:web:76157e55591df9c07d8d92",
  measurementId: "G-B0WDD9ZHXL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

