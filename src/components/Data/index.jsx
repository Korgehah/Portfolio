import React from 'react';

const DataItem = ({ title, value, colorTheme }) => {
  const additionalStyle = colorTheme ? colorTheme : '';
  return (
    <div className='data__item'>
      <div className='data__name'>{title}</div>
      <div className={`data__value ${additionalStyle}`}>{value}</div>
    </div>
  );
};

const Data = ({ dataset }) => {
  return (
    <div className='data'>
      {dataset.map((data, index) => (
        <DataItem {...data} key={index} />
      ))}
    </div>
  );
};
export default Data;
