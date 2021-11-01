import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../../config/FirebaseConfig";
import { addDocument } from "../../config/services";
import { TextField, validateSignup } from "./TextFieldSignup";

interface MyFormValues {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues: MyFormValues = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSignup = async (provider: any) => {
    await signInWithPopup(auth, provider)
      .then((userCredential) => {
        const { user } = userCredential;
        const { displayName, email, uid, photoURL } = user;
        const { providerId } = user.providerData[0];
        const {
          user: { metadata },
        } = userCredential;
        if (metadata.creationTime === metadata.lastSignInTime) {
          addDocument({
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            uid: uid,
            providerId: providerId,
          });
        }
      })
      .catch(() => {
        alert("Login unsuccess!");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSignup}
      onSubmit={(values) => {
        const { email, password } = values;
        createUserWithEmailAndPassword(auth, email, password)
          .then((user) => {
            signOut(auth).then(() => {
              history.push("/signup-success");
            });
          })
          .catch(() => {
            setErrorMessage("Email already existed! Please try again.");
          });
      }}
    >
      {(formik) => (
        <div id="logreg-forms">
          <Form className="form-signin">
            <h1 className="h3 mb-3 pt-10 font-weight-500 text-center">
              {" "}
              Sign up
            </h1>
            <div className="social-login">
              <button
                className="btn facebook-btn social-btn"
                type="button"
                id="facebooklogin"
                onClick={() => handleSignup(facebookProvider)}
              >
                <span>
                  <i className="fab fa-facebook-f"></i> Sign in with Facebook
                </span>{" "}
              </button>
              <button
                className="btn google-btn social-btn"
                type="button"
                id="googleLogin"
                onClick={() => handleSignup(googleProvider)}
              >
                <span>
                  <i className="fab fa-google-plus-g"></i> Sign in with Google+
                </span>{" "}
              </button>
            </div>
            <p className="signup__or d-flex">
              {" "}
              <span className="p-10">Or</span>{" "}
            </p>
            <TextField placeholder="Full Name" name="fullname" type="text" />
            <TextField placeholder="Email" name="email" type="email" />
            <TextField placeholder="Password" name="password" type="password" />
            <TextField
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <div className="text-center color-red">{errorMessage}</div>
            <button
              className="btn btn-primary btn-block mt-15"
              id="btn-signup"
              type="submit"
            >
              <i className="fas fa-user-plus"></i> Sign up
            </button>
            <Link to="/" className="text-decoration-none">
              <span id="cancel_reset">
                <i className="fas fa-angle-left"></i> Back
              </span>
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
