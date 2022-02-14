import React from 'react';

const Input = ({
  title,
  name,
  required,
  register,
  errors,
  errorText,
  validationType,
}) => {
  const regExpName = /^.{1,120}$/;
  const regExpEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validationFunction = (value, validationType, required) => {
    if (required === false) if (value.length < 1) return true;
    switch (validationType) {
      case 'name':
        return regExpName.test(value);
      case 'email':
        return regExpEmail.test(value);
      default:
        return true;
    }
  };

  return (
    <div className='contacts__input-container'>
      <label className='contacts__label'>
        {title}
        {required && <span className='contacts__required'>Required</span>}
      </label>
      <input
        className='contacts__input'
        {...register(name, {
          required: required,
          validate: (value) =>
            validationFunction(value, validationType, required),
        })}
      />
      {errors && errors[name] && (
        <div className='contacts__label contacts__label-error'>{errorText}</div>
      )}
    </div>
  );
};
export { Input };
