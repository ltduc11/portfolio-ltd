import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">
        ltduc
      </a>
      <div className="footer__socials">
        <a
          href="https://facebook.com/lethaiduc"
          className="footer__social-item"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://instagram.com/thaiiducc"
          className="footer__social-item"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com/ltduc11"
          target="_blank"
          rel="noreferrer"
          className="footer__social-item"
        >
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2022 Le Thai Duc. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
