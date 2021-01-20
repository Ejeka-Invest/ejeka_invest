import React from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";
import "./Signup.css";

function Signup() {
    return(
        <div className="signup">
            <Navbar />
            <SignUpForm />
        </div>
    )
}

export default Signup;