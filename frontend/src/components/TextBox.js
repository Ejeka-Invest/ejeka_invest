import React from "react";
import "./TextBox.css";
import { Link } from "react-router-dom";

function TextBox({ header, body }) {
  return (
    <div className="textBox">
      <p className="textBox__header">{header}</p>
      {body.map((item, index) => (
        <p key={index} className="textBox__item">
          <Link to={item.link} exact>
            {item.text}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default TextBox;
