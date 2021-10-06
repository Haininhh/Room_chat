import { sendPasswordResetEmail } from "@firebase/auth";
import React, { useState, ChangeEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/FirebaseConfig";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    event: ChangeEvent<{ placeholder: string; value: string }>
  ) => {
    setEmail(event.target.value);
  };

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setError("");
        alert("Email has been sent to you, Please check and verify.");
      })
      .catch((error) => {
        if (error) {
          setError("Email already existed! Please try again.");
        }
      });
  };

  return (
    <div id="logreg-forms">
      <form className="form-signin pt-1rem">
        <input
          type="email"
          id="inputEmail"
          value={email}
          className="form-control"
          placeholder="Email address"
          required
          onChange={handleChange}
        />
        <div className="text-center color-red">{error}</div>
        <button
          className="btn btn-primary btn-block"
          type="submit"
          onClick={onSubmit}
        >
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
