import React, { useState } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signUpForm">
      <form onSubmit={(e) => handleSubmit(e)} className="signUpForm__form">
        <h1 className="signUpForm__header">Create a secure account</h1>
        <p className="signUpForm__body">Sign up today</p>
        <div className="signUpForm__formField">
          <label htmlFor="sign-firstName">First Name</label>
          <input
            name="firstName"
            onChange={(e) => handleChange(e)}
            required
            id="sign-firstName"
            type="text"
          />
        </div>
        <div className="signUpForm__formField">
          <label htmlFor="sign-lastName">Last Name</label>
          <input
            name="lastName"
            onChange={(e) => handleChange(e)}
            required
            id="sign-lastName"
            type="text"
          />
        </div>
        <div className="signUpForm__formField">
          <label htmlFor="sign-email">Email</label>
          <input
            name="email"
            onChange={(e) => handleChange(e)}
            required
            id="sign-email"
            type="email"
          />
        </div>
        <div className="signUpForm__formField">
          <label htmlFor="sign-password">Password</label>
          <input
            name="password"
            onChange={(e) => handleChange(e)}
            required
            id="sign-password"
            type="password"
          />
        </div>
        <button type="submit" className="signUpForm__btn">
          Create Account
        </button>
        <div className="signUpForm__already">
          <Link to="/login/" exact>
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;