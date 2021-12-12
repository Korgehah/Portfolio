import React from 'react';
import { Scrollbar } from 'react-scrollbars-custom';

const Textarea = ({ title, name, register, required, errors, errorText }) => {
  return (
    <div className='contacts__input-container'>
      <label className='contacts__label'>
        {title}
        {required && <span className='contacts__required'>Required</span>}
      </label>
      <Scrollbar style={{ width: '530px', height: '216px' }}>
        <textarea
          {...register(name, {
            required: required,
          })}
          className='contacts__input contacts__input_big'
        ></textarea>
      </Scrollbar>
      {errors && errors[name] && (
        <div className='contacts__label contacts__label-error'>{errorText}</div>
      )}
    </div>
  );
};
export default Textarea;
