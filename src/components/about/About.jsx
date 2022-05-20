import React from "react";
import "./about.css";
import AboutCard from "./AboutCard";
import { about } from "../../data";

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about">
      <div className="section__name">
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <h3 className="about__me-header">{about.me.header}</h3>
          <div className="about__me-content">
            {about.me.content.map((sentence, index) => (
              <p key={index}>{sentence}</p>
            ))}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {about.cards.map((card, index) => (
              <AboutCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
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
});

export default About;
