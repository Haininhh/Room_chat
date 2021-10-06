import React from "react";
import { Link } from "react-router-dom";

const SignupSuccess = () => {
  return (
    <div id="logreg-forms">
      <form className="form-signin">
        <h4 className="font-weight-normal text-center pt-1rem mb-0 color-red">
          {" "}
          Account Created!
        </h4>
        <Link to="/" className="text-decoration-none">
          <span id="cancel_reset">
            <i className="fas fa-angle-left"></i> Back
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SignupSuccess;
