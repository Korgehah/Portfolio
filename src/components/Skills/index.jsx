import React from 'react';

const SkillsItem = ({skill}) => {
  return (
    <div className='about__skills'>
    {skill}
    </div>
  );
};

const Skills = ({mock}) => {
  return (
    <div >
        {mock.map((skills, index) => (
            <SkillsItem {...skills} key={index}/>
        ))}
    </div>
  );
};
export default Skills;


