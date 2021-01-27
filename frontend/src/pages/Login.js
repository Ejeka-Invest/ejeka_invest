import React from "react";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import "./Login.css";


function Login() {
    return(
        <div className="login">
            <LoginForm />
        </div>
    )
}

export default Login;