import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div id="logreg-forms">
      <form className="form-signin">
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
        />
        <button className="btn btn-primary btn-block" type="submit">
          Reset Password
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

export default ForgotPassword;
