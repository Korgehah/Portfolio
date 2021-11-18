import React from 'react';

const HeadOfBlock = ({head}) => {
  return (
    <div className='head'>
      <h1 className='head__title'>{head.title}</h1>
      <p className='head__description'>{head.description}</p>
    </div>
  );
};
export default HeadOfBlock;
