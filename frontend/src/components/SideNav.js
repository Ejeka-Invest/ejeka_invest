import React from "react";
import "./SideNav.css";
import { FiPower } from "react-icons/fi";
import { MdDashboard, MdExplore } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import logo from "../svgs/logo.svg";
import { Link } from "react-router-dom";

function SideNav({ target }) {
  console.log(target);
  return (
    <div className="sideNav">
      <div className="sideNav__logo">
        <img src={logo} alt="" />
      </div>
      <div className="sideNav__links">
        <li
          className={
            target == "explore"
              ? "sideNav__link sideNav__link--target"
              : "sideNav__link"
          }
        >
          <MdExplore className="sideNav__icon" />
          <Link to="/explore/" className="btn btn-primary">
            <p>Explore</p>
          </Link>
        </li>
        <li
          className={
            target == "dashboard"
              ? "sideNav__link sideNav__link--target"
              : "sideNav__link"
          }
        >
          <MdDashboard className="sideNav__icon" />
          <Link to="/dashboard/" className="btn btn-primary">
            <p>Dashboard</p>
          </Link>
        </li>
        <li
          className={
            target == "profile"
              ? "sideNav__link sideNav__link--target"
              : "sideNav__link"
          }
        >
          <VscAccount className="sideNav__icon" />
          <Link to="/profile/" className="btn btn-primary">
            <p>Profile</p>
          </Link>
        </li>
        <li className="sideNav__link sideNav__link--bottom">
          <FiPower className="sideNav__icon" />
          <Link to="/logout/" className="btn btn-primary">
            <p>Logout</p>
          </Link>
        </li>
      </div>
    </div>
  );
}

export default SideNav;
