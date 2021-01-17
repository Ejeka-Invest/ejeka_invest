import React from "react";
import "./HeroSection.css";
import invest from "../svgs/invest.svg";

function HeroSection() {
  return (
    <div className="heroSection">
      <div className="heroSection__text">
        <h1 className="heroSection__header">Ejeka Invest</h1>
        <p className="heroSection__body">A platform that empowers you like never before, to make investments and get returns from those investments</p>
        <button className="heroSection__btn">Create an Account</button>
      </div>
      <div className="heroSection__image">
        <img src={invest} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
