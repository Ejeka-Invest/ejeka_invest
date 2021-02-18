import React from "react";
import "./SideNav.css";
import { FiPower } from "react-icons/fi";
import { MdDashboard, MdExplore } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import logo from "../svgs/logo.svg";

function SideNav() {
  return (
    <div className="sideNav">
      <div className="sideNav__logo">
        <img  src={logo} alt="" />
      </div>
      <div className="sideNav__links">
        <li className="sideNav__link">
          <MdExplore className="sideNav__icon" />
          Explore
        </li>
        <li className="sideNav__link">
          <MdDashboard className="sideNav__icon" />
          Dashboard
        </li>
        <li className="sideNav__link">
          <VscAccount className="sideNav__icon" />
          Profile
        </li>
        <li className="sideNav__link sideNav__link--bottom">
          <FiPower className="sideNav__icon" />
          Logout
        </li>
      </div>
    </div>
  );
}

export default SideNav;
