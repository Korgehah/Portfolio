import React from 'react';

const ScaleItem = ({ title, percent }) => {
  return (
    <div className='scale__item'>
      <div className='scale__title'>{title}</div>
      <div className='scale__percent'>{percent}</div>
      <div className='scale__progress'>
        <div className='scale__line' style={{ width: percent }} />
      </div>
    </div>
  );
};

const Scales = ({ scaleData }) => {
  return (
    <div className='scale'>
      {scaleData.map((scale, index) => (
        <ScaleItem {...scale} key={index} />
      ))}
    </div>
  );
};
export { Scales };
