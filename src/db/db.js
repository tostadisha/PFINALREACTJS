import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-tFvVsuUXDZisRsb5KMY0YA9ouD26u1w",
  authDomain: "proyecto-reactjs-fe1f1.firebaseapp.com",
  projectId: "proyecto-reactjs-fe1f1",
  storageBucket: "proyecto-reactjs-fe1f1.appspot.com",
  messagingSenderId: "262860096257",
  appId: "1:262860096257:web:cb79deb1a20f8f4b239100",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
