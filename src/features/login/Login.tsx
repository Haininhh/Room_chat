// import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="logreg-forms">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal text-center"> Sign in</h1>
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
        <p className="text-center"> OR </p>
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
        {/* <p>Don't have an account!</p> */}
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
