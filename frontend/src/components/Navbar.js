import React, { useEffect } from "react";
import "./Navbar.css";

import { NavLink, Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    let navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        navbar.classList.add("navbar--sticky");
      } else if (window.scrollY < 90) {
        navbar.classList.remove("navbar--sticky");
      }
    })
  });
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <Link to="/" exact>
            <h1>Ejeka Invest</h1>
          </Link>
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
