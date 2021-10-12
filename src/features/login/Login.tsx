import { onAuthStateChanged, signInWithEmailAndPassword } from "@firebase/auth";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authLogin } from "../../actions/user";
import {
  auth,
  onLoginFacebook,
  onLoginGoogle,
} from "../../config/FirebaseConfig";
import { TextField, validateLogin } from "../signup/TextFieldSignup";

interface MyFormValues {
  email: string;
  password: string;
}
interface User {
  name: string | null;
  avatar: string | null;
  id: string | null;
  email: string | null;
}

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;
        const currentUser: User = {
          name: displayName,
          avatar: photoURL,
          id: uid,
          email: email,
        };
        console.log(currentUser);
        const action = authLogin(currentUser);
        dispatch(action);
        history.push("/room-chat");
      }
    });
    return () => unsubscribed();
  }, [history, dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateLogin}
      onSubmit={(values) => {
        const { email, password } = values;
        if (email && password) {
          signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              history.push("/room-chat");
            })
            .catch((error) => {
              if (error) {
                setErrorMessage("Username or password already existed!");
              }
            });
        }
      }}
    >
      {(formik) => (
        <div id="logreg-forms">
          <Form className="form-signin">
            <h1 className="h3 mb-3 pt-10 font-weight-500 text-center">
              {" "}
              Sign in
            </h1>
            <div className="social-login">
              <button
                className="btn facebook-btn social-btn"
                type="button"
                id="facebooklogin"
                onClick={() => onLoginFacebook()}
              >
                <span>
                  <i className="fab fa-facebook-f"></i> Sign in with Facebook
                </span>{" "}
              </button>
              <button
                className="btn google-btn social-btn"
                type="button"
                id="googleLogin"
                onClick={() => onLoginGoogle()}
              >
                <span>
                  <i className="fab fa-google-plus-g"></i> Sign in with Google+
                </span>{" "}
              </button>
            </div>
            <p className="text-center signup__or d-flex">
              {" "}
              <span className="p-10">Or</span>{" "}
            </p>
            <TextField type="email" name="email" placeholder="Email address" />
            <TextField type="password" name="password" placeholder="Password" />
            <div className="text-center color-red">{errorMessage}</div>
            <button
              className="btn btn-success btn-block mb-10"
              id="loginbtn"
              type="submit"
            >
              <i className="fas fa-sign-in-alt"></i> Sign in
            </button>
            <Link to="/forgot-psrd" className="text-decoration-none">
              <span id="forgot_pswd">Forgot password?</span>
            </Link>
            <hr />
            <Link to="/signup" className="text-decoration-none">
              <button
                className="btn btn-primary btn-block"
                type="button"
                id="btn-signup"
              >
                <i className="fas fa-user-plus"></i> Sign up New Account
              </button>
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Login;
