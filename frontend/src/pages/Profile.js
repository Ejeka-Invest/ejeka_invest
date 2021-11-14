import React from "react";
import SideNav from "../components/SideNav";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <SideNav target="profile" />
      <div className="main__profile"></div>
    </div>
  );
}

export default Profile;
