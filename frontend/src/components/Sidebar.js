import React from "react";
import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { hideSidebar } from "../store/actions/sidebar";

function Sidebar() {
  let sidebar = useSelector((store) => store.sidebar);
  let dispatch = useDispatch();
  return (
    <div className="sidebar" id={sidebar ? "show-sidebar" : "hide-sidebar"}>
      <ul className="sidebar__links">
        <NavLink
          onClick={() => dispatch(hideSidebar())}
          className="navbar__cancel"
          className="sidebar__link"
          to="/"
          exact
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          onClick={() => dispatch(hideSidebar())}
          className="navbar__cancel"
          className="sidebar__link"
          to="/about/"
          exact
        >
          <li>About Us</li>
        </NavLink>
        <NavLink
          onClick={() => dispatch(hideSidebar())}
          className="navbar__cancel"
          className="sidebar__link"
          to="/getintouch/"
          exact
        >
          <li>Get In Touch</li>
        </NavLink>
        <Link
          onClick={() => dispatch(hideSidebar())}
          className="navbar__cancel"
          className="sidebar__link sidebar__link--login"
          to="/login/"
          exact
        >
          <li>LOGIN</li>
        </Link>
        <Link
          onClick={() => dispatch(hideSidebar())}
          className="navbar__cancel"
          className="sidebar__link sidebar__link--signup"
          to="/signup/"
          exact
        >
          <li>SIGN UP</li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
