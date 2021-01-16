import React from "react";
import "./Navbar.css";

import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <h1>Logo</h1>
        </div>
        <ul className="navbar__links">
          <NavLink to="/" exact>
            <li className="navbar__link">Home</li>
          </NavLink>
          <NavLink to="/about/" exact>
            <li className="navbar__link">About Us</li>
          </NavLink>
          <NavLink to="/getintouch/" exact>
            <li className="navbar__link">Get In Touch</li>
          </NavLink>
          <Link to="/login/" exact>
            <li className="navbar__link--login">Login</li>
          </Link>
          <Link to="/signup/" exact>
            <li className="navbar__link--signup">Sign Up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
