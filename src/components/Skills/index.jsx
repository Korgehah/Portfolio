import React from 'react';

const SkillsItem = ({ skillName }) => {
  return <div className='skills__item'>{skillName}</div>;
};

const Skills = ({ skills }) => {
  return (
    <div className='skills'>
      {skills.map((skill, index) => (
        <SkillsItem {...skill} key={index} />
      ))}
    </div>
  );
};
export default Skills;
