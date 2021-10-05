import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div id="logreg-forms">
      <form className="form-signin">
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
        <input
          type="text"
          id="user-name"
          className="form-control mt-8"
          placeholder="Full name"
          required
        />
        <input
          type="email"
          id="user-email"
          className="form-control mt-8"
          placeholder="Email address"
          required
        />
        <input
          type="password"
          id="user-pass"
          className="form-control mt-8"
          placeholder="Password"
          required
        />
        <input
          type="password"
          id="user-repeatpass"
          className="form-control mt-8"
          placeholder="Confirm Password"
          required
        />
        <button
          className="btn btn-primary btn-block mt-15"
          type="button"
          id="btn-signup"
        >
          <i className="fas fa-user-plus"></i> Sign up
        </button>
        <Link to="/" className="text-decoration-none">
          <span id="cancel_reset">
            <i className="fas fa-angle-left"></i> Back
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
