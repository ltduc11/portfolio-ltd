import React, { useRef, useEffect } from "react";

import "./styles/index.css";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const navRef = {
    topAbout: "",
    topSkills: "",
    topPortfolio: "",
    topContact: "",
  };
  useEffect(() => {
    navRef.topAbout = aboutRef.current.offsetTop;
    navRef.topSkills = skillsRef.current.offsetTop;
    navRef.topPortfolio = portfolioRef.current.offsetTop;
    navRef.topContact = contactRef.current.offsetTop;
  }, []);
  return (
    <>
      <Header />
      <Nav navRef={navRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Portfolio ref={portfolioRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
