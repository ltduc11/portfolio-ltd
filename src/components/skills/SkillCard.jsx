import React from "react";

const SkillCard = ({ logo, title }) => {
  return (
    <div className="skill__card">
      <div className="skill__card-logo">{logo}</div>
      <div className="skill__card-title">{title}</div>
    </div>
  );
};

export default SkillCard;
