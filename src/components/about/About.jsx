import React from "react";
import "./about.css";
import { FiAward } from "react-icons/fi";
const About = () => {
  return (
    <section id="about">
      <div className="section__name">
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <h3 className="about__me-header">I'm Le Thai Duc</h3>
          <div className="about__me-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
            soluta, aut earum nemo recusandae cumque perferendis! Recusandae
            alias accusamus atque.
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FiAward />
              <h5>Card 1</h5>
              <small>card content 1</small>
            </div>

            <div className="about__card">
              <FiAward />
              <h5>Card 2</h5>
              <small>card content 2</small>
            </div>

            <div className="about__card">
              <FiAward />
              <h5>Card 3</h5>
              <small>card content 3</small>
            </div>
          </div>
          <div className="about__btn">
            <a href="#contact" className="btn btn-primary">
              Contact me!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
