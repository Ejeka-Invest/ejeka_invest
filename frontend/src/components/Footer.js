import React from "react";
import "./Footer.css";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import TextBox from "./TextBox";
import { help, legalStuff } from "../data/textBox";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <Link to="/" exact>
          <AiOutlineInstagram className="footer__icon" />
        </Link>
        <Link to="/" exact>
          <AiFillFacebook className="footer__icon" />
        </Link>
        <Link to="/" exact>
          <AiFillLinkedin className="footer__icon" />
        </Link>
        <Link to="/" exact>
          <FaTwitter className="footer__icon" />
        </Link>
      </div>
      <div className="footer__text">
        <TextBox header="legal stuff" body={legalStuff} />
        <TextBox header="help" body={help} />
      </div>
    </div>
  );
}

export default Footer;
