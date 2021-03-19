import React from "react";
import "./Benefit.css";
import { Link } from "react-router-dom";

function Benefit() {
  return (
    <div className="benefit">
      <div className="benefit__wrapper">
        <h1 className="benefit__header">Want to benefit from this?</h1>
        <Link className="benefit__btn" to="/signup/" exact>
          Join Us
        </Link>
      </div>
    </div>
  );
}

export default Benefit;
