import React from "react";
import "../styles/skills.css";
import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {

  return (
    <section id="skills" className="skills-container">
          <div className="skills-container__title">My <span className="skills-container__title--color">Skills...</span></div>
      <SkillCard />
    </section>
  );
};

export default Skills;
