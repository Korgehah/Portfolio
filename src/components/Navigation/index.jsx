import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavigationItem = ({ src, alt, href }) => {
  return (
    <Link
      className='navigation__item'
      activeClass='active'
      to={href}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <div className='navigation__prompt'>{alt}</div>
      <img className='navigation__image' src={src} alt={alt} />
    </Link>
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
