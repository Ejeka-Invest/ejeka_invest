import React from "react";
import "./HeroSection.css";

function HeroSection({
  header,
  body,
  button,
  image,
  height,
  flex,
  imageWidth,
}) {
  return (
    <div
      className="heroSection"
      style={{ height: height, flexDirection: flex }}
    >
      <div className="heroSection__text">
        {header}
        <p className="heroSection__body">{body}</p>
        {button}
      </div>
      <div className="heroSection__image" style={{ width: imageWidth }}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;