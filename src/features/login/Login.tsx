import { signInWithPopup } from "@firebase/auth";
import { History, LocationState } from "history";
import React from "react";
import { Link } from "react-router-dom";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../../config/FirebaseConfig";

interface Props {
  history: History<LocationState>;
}

const Login = ({ history }: Props) => {
  const onLoginFacebook = async () => {
    await signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const name = result.user.displayName;
        if (result) {
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onLoginGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        const name = result.user.displayName;
        if (result) {
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="logreg-forms">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal text-center"> Sign in</h1>
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
        <p className="text-center signup__or d-flex"> OR </p>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />

        <button
          className="btn btn-success btn-block"
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
      </form>
    </div>
  );
};

export default Login;
