import React from 'react';

const Button = ({ children, addClass }) => {
  const additionalStyle = addClass ? addClass : '';
  return <span className={`button ${additionalStyle}`}>{children}</span>;
};
export { Button };
