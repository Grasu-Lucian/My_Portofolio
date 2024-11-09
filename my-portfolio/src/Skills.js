import React from 'react';
import './Skills.css';
import Skill from './Snippets/Skill';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="skills-category">
        <h3 className="text-xl font-semibold mb-2">Front-end languages</h3>
        <ul className="skills-list">
          <Skill iconClass="fab fa-css3-alt" skillName="CSS" />
          <Skill iconClass="fab fa-html5" skillName="HTML" />
          <Skill iconClass="fab fa-js-square" skillName="JavaScript" />
        </ul>
      </div>
      <div className="skills-category">
        <h3 className="text-xl font-semibold mb-2">Tools</h3>
        <ul className="skills-list">
          <Skill iconClass="fab fa-react" skillName="React" />
          <Skill iconClass="fab fa-npm" skillName="npm" />
          <Skill iconClass="fab fa-git-alt" skillName="Git" />
          <Skill iconClass="fab fa-github" skillName="GitHub" />
          <Skill iconClass="fab fa-sass" skillName="Sass" />
          <Skill iconClass="fas fa-code" skillName="VS Code" />
        </ul>
      </div>
    </section>
  );
}

export default Skills;