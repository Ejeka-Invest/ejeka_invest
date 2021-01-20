import React from "react";
import "./SignUpForm.css";

function SignUpForm() {
  return (
    <div className="signUpForm">
      <form className="signUpForm__form">
        <div className="signUpForm__formField">
          <label htmlFor="sign-firstName">First Name</label>
          <input required id="sign-firstName" type="text" />
        </div>
        <div className="signUpForm__formField">
          <label htmlFor="sign-lastName">Last Name</label>
          <input required id="sign-lastName" type="text" />
        </div>
        <div className="signUpForm__formField">
          <label htmlFor="sign-email">Email</label>
          <input required id="sign-email" type="email" />
        </div>
        <div className="signUpForm__formField">
          <label htmlFor="sign-password">Password</label>
          <input required id="sign-password" type="password" />
        </div>
        <button className="signUpForm__submit">Create Account</button>
      </form>
    </div>
  );
}

export default SignUpForm;
