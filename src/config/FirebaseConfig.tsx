import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD00GL6Rsapr9MwdGk1i-KsOhxkrRRGUOw",
  authDomain: "authorization-da952.firebaseapp.com",
  databaseURL:
    "https://authorization-da952-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "authorization-da952",
  storageBucket: "authorization-da952.appspot.com",
  messagingSenderId: "369086310243",
  appId: "1:369086310243:web:1943738551d04faae31556",
  measurementId: "G-RTESMWBW49",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, database, facebookProvider, googleProvider };
