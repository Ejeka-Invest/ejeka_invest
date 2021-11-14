import React from "react";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default Login;
