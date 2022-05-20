import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/ltd-pic.png";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello ✌️ My name is</h5>
        <h1>Thai Duc</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
