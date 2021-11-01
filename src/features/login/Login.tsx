import { signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../../config/FirebaseConfig";
import { addDocument } from "../../config/services";
import { TextField, validateLogin } from "../signup/TextFieldSignup";

interface MyFormValues {
  email: string;
  password: string;
}
export interface UserRef {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
  providerId: string;
}

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const history = useHistory();
  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (provider: any) => {
    await signInWithPopup(auth, provider)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);

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
      validationSchema={validateLogin}
      onSubmit={(values) => {
        const { email, password } = values;
        if (email && password) {
          signInWithEmailAndPassword(auth, email, password)
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
            .catch((error) => {
              history.push("/");
              setErrorMessage("Username or password incorrect!");
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
                onClick={() => handleLogin(facebookProvider)}
              >
                <span>
                  <i className="fab fa-facebook-f"></i> Sign in with Facebook
                </span>{" "}
              </button>
              <button
                className="btn google-btn social-btn"
                type="button"
                id="googleLogin"
                onClick={() => handleLogin(googleProvider)}
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
