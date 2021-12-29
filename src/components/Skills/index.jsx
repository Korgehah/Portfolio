import React from 'react';

const SkillsItem = ({ skill }) => {
  return <div className='skills__item'>{skill}</div>;
};

const Skills = ({ skills }) => {
  return (
    <div className='skills'>
      {skills.map((skill, index) => (
        <SkillsItem skill={skill} key={index} />
      ))}
    </div>
  );
};
export default Skills;
