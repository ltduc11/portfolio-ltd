import React from "react";
import "./skills.css";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiGit,
  DiReact,
  DiNodejs,
} from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills">
      <div className="section__name">
        <h2>Skills</h2>
      </div>
      <div className="container skill__container">
        <div className="skill__cards">
          <div className="skill__card">
            <DiHtml5 />
          </div>
          <div className="skill__card">
            <DiCss3 />
          </div>
          <div className="skill__card">
            <DiJsBadge />
          </div>
          <div className="skill__card">
            <DiGit />
          </div>
          <div className="skill__card">
            <DiReact />
          </div>
          <div className="skill__card">
            <DiNodejs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
