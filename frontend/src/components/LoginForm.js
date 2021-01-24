import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const [userData, setUserData] = useState({
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
    <div className="loginForm">
      <form onSubmit={(e) => handleSubmit(e)} className="loginForm__form">
        <h1 className="loginForm__header">Login to your account</h1>
        <p className="loginForm__body">Pick up where you left off</p>
        <div className="loginForm__formField">
          <label htmlFor="sign-email">Email</label>
          <input
            name="email"
            onChange={(e) => handleChange(e)}
            required
            id="sign-email"
            type="email"
          />
        </div>
        <div className="loginForm__formField">
          <label htmlFor="sign-password">Password</label>
          <input
            name="password"
            onChange={(e) => handleChange(e)}
            required
            id="sign-password"
            type="password"
          />
        </div>
        <button type="submit" className="loginForm__btn">
          Login
        </button>
        <div className="loginForm__forgot">
          <Link to="/login/" exact>
            Forgot password? Reset
          </Link>
        </div>
        <div className="loginForm__already">
          <Link to="/signup/" exact>
            Don't have an account? Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
