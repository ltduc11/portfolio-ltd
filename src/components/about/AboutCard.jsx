import React from "react";
import "./about.css";
const AboutCard = ({ title, description }) => {
  return (
    <div className="about__card">
      {/* <FiAward className="about__card-logo" /> */}
      <div className="about__card-content">
        <h5>{title}</h5>
        {/* <small>{description}</small> */}
      </div>
    </div>
  );
};

export default AboutCard;
