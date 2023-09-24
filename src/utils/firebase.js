// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYA0eruGbDuwxvlB4lbQcgGbTwHx6NYrE",
  authDomain: "netflix-gpt-d323b.firebaseapp.com",
  projectId: "netflix-gpt-d323b",
  storageBucket: "netflix-gpt-d323b.appspot.com",
  messagingSenderId: "487276022218",
  appId: "1:487276022218:web:5151f3ed78afaaa2cd2733",
  measurementId: "G-4X1FS2HSS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();