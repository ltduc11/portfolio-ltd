import React, { useEffect } from "react";
import "./nav.css";
import {
  FiHome,
  FiUser,
  FiPhoneCall,
  FiMonitor,
  FiArchive,
} from "react-icons/fi";
import { useState } from "react";

const Nav = ({ navRef }) => {
  const [activeNav, setActiveNav] = useState("#header");

  const navHighlighter = () => {
    let scrollY = window.scrollY;
    if (scrollY < navRef.topAbout) {
      setActiveNav("#header");
    } else if (scrollY >= navRef.topAbout && scrollY < navRef.topSkills) {
      setActiveNav("#about");
    } else if (scrollY >= navRef.topSkills && scrollY < navRef.topPortfolio) {
      setActiveNav("#skills");
    } else if (scrollY >= navRef.topPortfolio && scrollY < navRef.topContact) {
      setActiveNav("#portfolio");
    } else if (scrollY >= navRef.topContact) {
      setActiveNav("#contact");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navHighlighter);
  }, []);
  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
      >
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FiUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <FiMonitor />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FiArchive />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FiPhoneCall />
      </a>
    </nav>
  );
};

export default Nav;
