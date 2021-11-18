import React from 'react';

const DataItem = ({ title, value, colorTheme}) => {
    const additionalStyle = colorTheme ? colorTheme : '';
  return (
    <div className='data'>
      <div className='data__name'>{title}</div>
      <div className={`data__value ${additionalStyle}`}>{value}</div>
    </div>
  );
};

const Data = ({mock}) => {
  return (
    <div>
      {mock.map((data, index) => (
        <DataItem {...data} key={index} />
      ))}
    </div>
  );
};
export default Data;
