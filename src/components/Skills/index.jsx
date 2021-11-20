import React from 'react';

const SkillsItem = ({skill}) => {
  return (
    <div className='skills__item'>
    {skill}
    </div>
  );
};

const Skills = ({mock}) => {
  return (
    <div className='skills'>
        {mock.map((skills, index) => (
            <SkillsItem {...skills} key={index}/>
        ))}
    </div>
  );
};
export default Skills;


