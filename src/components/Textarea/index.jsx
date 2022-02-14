import React from 'react';

const Textarea = ({ title, name, register, required, errors, errorText }) => {
  return (
    <div className='contacts__input-container'>
      <label className='contacts__label'>
        {title}
        {required && <span className='contacts__required'>Required</span>}
      </label>
      <textarea
        {...register(name, {
          required: required,
        })}
        className='contacts__input contacts__input_big'
      ></textarea>
      {errors && errors[name] && (
        <div className='contacts__label contacts__label-error'>{errorText}</div>
      )}
    </div>
  );
};
export { Textarea };
