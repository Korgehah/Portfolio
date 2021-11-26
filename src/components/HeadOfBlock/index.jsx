import React from 'react';

const HeadOfBlock = ({ title, description }) => {
  return (
    <div className='head'>
      <h1 className='head__title'>{title}</h1>
      {description && <p className='head__description'>{description}</p>}
    </div>
  );
};
export default HeadOfBlock;
