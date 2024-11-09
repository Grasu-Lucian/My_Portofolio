import React from 'react';
import './Skill.css';

function Skill({ iconClass, skillName }) {
  return (
    <li className="skill-item">
      <i className={`${iconClass} skill-icon`}></i> {skillName}
    </li>
  );
}

export default Skill;