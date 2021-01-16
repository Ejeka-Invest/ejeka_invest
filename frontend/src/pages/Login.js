import React from "react";
import Navbar from "../components/Navbar";
import "./Login.css";

function Login() {
    return(
        <div className="login">
            <Navbar />
            <h1>I am the login Component</h1>
        </div>
    )
}

export default Login;