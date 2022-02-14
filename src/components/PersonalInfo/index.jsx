import React from 'react';

const PersonalInfoItem = ({ title, value, colorTheme }) => {
  const additionalStyle = colorTheme ? colorTheme : '';
  return (
    <div className='data__item'>
      <div className='data__name'>{title}</div>
      <div className={`data__value ${additionalStyle}`}>{value}</div>
    </div>
  );
};

const PersonalInfo = ({ personalInfo }) => {
  return (
    <div className='data'>
      {personalInfo.map((data, index) => (
        <PersonalInfoItem {...data} key={index} />
      ))}
    </div>
  );
};
export { PersonalInfo };
