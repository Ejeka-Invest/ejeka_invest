import React, { useState } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [ userData, setUserData ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const handleChange = (e) => {

  }
  return (
    <div className="signUpForm">
      <form className="signUpForm__form">
        <div className="signUpForm__formField">
          <label htmlFor="sign-firstName">First Name</label>
          <input name="firstName" onChange={ (e) => handleChange(e) } required id="sign-firstName" type="text" />
        </div>
        <div className="signUpForm__formField">
          <label htmlFor="sign-lastName">Last Name</label>
          <input name="lastName" onChange={ (e) => handleChange(e) } required id="sign-lastName" type="text" />
        </div>
        <div className="signUpForm__formField">
          <label htmlFor="sign-email">Email</label>
          <input name="email" onChange={ (e) => handleChange(e) } required id="sign-email" type="email" />
        </div>
        <div className="signUpForm__formField">
          <label htmlFor="sign-password">Password</label>
          <input name="password" onChange={ (e) => handleChange(e) } required id="sign-password" type="password" />
        </div>
        <button type="submit" className="signUpForm__btn">Create Account</button>
        <Link to="/login/" exact className="signUpForm__already">Already have an account? Login</Link>
      </form>
    </div>
  );
}

export default SignUpForm;
