// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4STEjttx-R5kh1PfLDCEFeyeKrXZ8pp4",
  authDomain: "netflix-gpt-18fd0.firebaseapp.com",
  projectId: "netflix-gpt-18fd0",
  storageBucket: "netflix-gpt-18fd0.appspot.com",
  messagingSenderId: "788487268789",
  appId: "1:788487268789:web:8adcc9606365265e3d11fc",
  measurementId: "G-L2J5WVY2SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();