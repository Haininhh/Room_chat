// import { createUserWithEmailAndPassword } from "@firebase/auth";
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
// import { auth } from "../../config/FirebaseConfig";
import { TextField } from "./TextField";
import * as Yup from "yup";

interface MyFormValues {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const initialValues: MyFormValues = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validate = Yup.object({
    fullname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  // createUserWithEmailAndPassword(auth, email, password);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div id="logreg-forms">
          <Form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal text-center"> Sign up</h1>
            <div className="social-login">
              <button
                className="btn facebook-btn social-btn"
                type="button"
                id="facebooklogin"
              >
                <span>
                  <i className="fab fa-facebook-f"></i> Sign in with Facebook
                </span>{" "}
              </button>
              <button
                className="btn google-btn social-btn"
                type="button"
                id="googleLogin"
              >
                <span>
                  <i className="fab fa-google-plus-g"></i> Sign in with Google+
                </span>{" "}
              </button>
            </div>
            <p className="signup__or d-flex"> OR </p>
            <TextField placeholder="Full Name" name="fullname" type="text" />
            <TextField placeholder="Email" name="email" type="email" />
            <TextField placeholder="Password" name="password" type="password" />
            <TextField
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button
              className="btn btn-primary btn-block mt-15"
              type="submit"
              id="btn-signup"
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
