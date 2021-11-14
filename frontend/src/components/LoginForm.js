import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const url = window.location.host;
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
    const data = {
      email: userData.email,
      password: userData.password,
    };

    fetch("http://127.0.0.1:8000" + "/auth/token/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data["auth_token"]);
        window.open("/dashboard/", "_self");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

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
        <button type="submit" className="loginForm__btn default__user">
          Login as Default user
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
