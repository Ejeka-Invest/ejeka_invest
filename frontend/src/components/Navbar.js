import React, { useEffect } from "react";
import "./Navbar.css";

import { NavLink, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { showSidebar, hideSidebar } from "../store/actions/sidebar";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import logo from "../svgs/logo.svg";

function Navbar() {
  let dispatch = useDispatch();
  let sidebar = useSelector((store) => store.sidebar);
  useEffect(() => {
    let navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        navbar.classList.add("navbar--sticky");
      } else if (window.scrollY < 90) {
        navbar.classList.remove("navbar--sticky");
      }
    });
  });
  useEffect(() => {
    let page = document.getElementById("html");
    if (sidebar) {
      page.classList.add("hide-scroll");
    } else {
      page.classList.remove("hide-scroll");
    }
  }, [sidebar])
  return (
    <>
      <div className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <Link to="/" exact>
              <img src={logo} alt=""/>
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
          {sidebar ? (
            <CgClose
              onClick={() => dispatch(hideSidebar())}
              className="navbar__cancel"
            />
          ) : (
            <FiMenu
              onClick={() => dispatch(showSidebar())}
              className="navbar__burger"
            />
          )}
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default Navbar;
