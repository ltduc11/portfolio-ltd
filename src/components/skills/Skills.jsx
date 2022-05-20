import React from "react";
import "./skills.css";
import SkillCard from "./SkillCard";
import { skills } from "../../data";

const Skills = React.forwardRef((props, ref) => {
  return (
    <section id="skills" ref={ref}>
      <div className="section__name">
        <h2>Skills</h2>
      </div>
      <div className="container skill__container">
        <div className="skill__cards">
          {skills.map((skill, index) => (
            <SkillCard logo={skill.logo} title={skill.title} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
