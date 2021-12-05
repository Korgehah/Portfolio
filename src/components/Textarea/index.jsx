import React from 'react';

const Textarea = ({ id, title, name, register }) => {
  return (
    <div className='contacts__input-container'>
      <label className='contacts__label' htmlFor={id}>
        {title}
      </label>
      <textarea
        {...register(name)}
        id={id}
        className='contacts__input contacts__input_big'
      ></textarea>
    </div>
  );
};
export default Textarea;
