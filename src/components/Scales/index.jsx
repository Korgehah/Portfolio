import React from 'react';

const ScaleItem = ({ title, percent }) => {
  return (
    <div className='range__item'>
      <div className='range__title'>{title}</div>
      <div className='range__percent'>{percent}</div>
      <div className='range__progress'>
        <div className='range__line' style={{width: percent}}/>
      </div>
    </div>
  );
};

const Scales = ({mock}) => {
  return (
    <div className='range'>
      {mock.map((range, index) => (
        <ScaleItem {...range} key={index} />
      ))}
    </div>
  );
};
export default Scales;
