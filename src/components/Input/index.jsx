import React from 'react';

const Input = ({ id, title, name, type, required, register }) => {
  return (
    <div className='contacts__input-container'>
      <label className='contacts__label' htmlFor={id}>
        {title}
        {required && <span className='contacts__required'>Required</span>}
      </label>
      <input
        type={type}
        id={id}
        className='contacts__input'
        required={required}
        {...register(name)}
      />
    </div>
  );
};
export default Input;
