import React from "react";
import ExploreComponent from "../components/ExploreComponent";
import SideNav from "../components/SideNav";
import "./Explore.css";

function Explore() {
  return (
    <div className="explore">
      <SideNav target="explore" />
      <div className="main__explore">
        <h2>Explore</h2>
        <ExploreComponent />
      </div>
    </div>
  );
}

export default Explore;
