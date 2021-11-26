import React from 'react';

const NavigationItem = ({ src, alt, href }) => {
  return (
    <a href={href} className='navigation__item'>
      <div className='navigation__prompt'>{alt}</div>
      <img className='navigation__image' src={src} alt={alt} />
    </a>
  );
};

const Navigation = ({ nav }) => {
  return (
    <nav className='navigation__container'>
      {nav.map((navigation, index) => (
        <NavigationItem {...navigation} key={index} />
      ))}
    </nav>
  );
};
export default Navigation;
