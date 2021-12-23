import React from 'react';
import { Link } from 'react-scroll';
import theme from '../../assets/images/theme.svg';

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
      <div className='navigation__image-container'>
        <img className='navigation__image' src={src} alt={alt} />
      </div>
      <div className='navigation__prompt'>{alt}</div>
    </Link>
  );
};

const Navigation = ({ navItems, dark, setDark }) => {
  return (
    <div className='navigation'>
      <div className='navigation__wrapper'>
        <img
          className='navigation__theme'
          src={theme}
          alt='theme'
          onClick={() => setDark(!dark)}
        />
        <nav className='navigation__container'>
          {navItems.map((navigation, index) => (
            <NavigationItem {...navigation} key={index} />
          ))}
        </nav>
      </div>
    </div>
  );
};
export default Navigation;
