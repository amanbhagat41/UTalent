// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs0PpTvQI4PheTnV2uub0o7VaMPlU5X4w",
  authDomain: "utalent-17a11.firebaseapp.com",
  projectId: "utalent-17a11",
  storageBucket: "utalent-17a11.appspot.com",
  messagingSenderId: "861923703015",
  appId: "1:861923703015:web:91176ab4b58c5ad93d4a42",
  measurementId: "G-KQ8BG7D9D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

