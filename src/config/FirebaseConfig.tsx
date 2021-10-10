import { signInWithPopup } from "@firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import "firebase/database";
import { useHistory } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyD00GL6Rsapr9MwdGk1i-KsOhxkrRRGUOw",
  authDomain: "authorization-da952.firebaseapp.com",
  projectId: "authorization-da952",
  storageBucket: "authorization-da952.appspot.com",
  messagingSenderId: "369086310243",
  appId: "1:369086310243:web:1943738551d04faae31556",
  measurementId: "G-RTESMWBW49",
};
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth();
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

export const onLoginFacebook = async () => {
  await signInWithPopup(auth, facebookProvider)
    .then((userCredential) => {
      const History = () => {
        const history = useHistory();
        history.push("/dashboard");
      };
      History();
    })
    .catch((error) => {
      if (error) {
        alert("login unsuccessful!");
      }
    });
};
export const onLoginGoogle = async () => {
  await signInWithPopup(auth, googleProvider)
    .then((userCredential) => {
      const History = () => {
        console.log("hello");
        const history = useHistory();
        history.push("/dashboard");
      };
      History();
    })
    .catch((error) => {
      if (error) {
        alert("login unsuccessful!");
      }
    });
};

export { auth, facebookProvider, googleProvider };
