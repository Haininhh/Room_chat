import React, { useEffect } from "react";
import { History, LocationState } from "history";
import { auth } from "../config/FirebaseConfig";
import { onAuthStateChanged } from "@firebase/auth";

interface Props {
  history: History<LocationState>;
}
const AuthProvider = ({ history }: Props) => {
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      console.log({ user });
      if (user) {
        history.push("/dashboard");
      }
    });
    return () => unsubscribed();
  }, [history]);
  return <div></div>;
};

export default AuthProvider;
