import React from 'react';
import { Link } from 'react-scroll';
import theme from '../../assets/images/theme.svg';
import info from '../../assets/images/info.svg';
import burger from '../../assets/images/burger.svg';
import Scrollbar from 'react-scrollbars-custom';

const NavigationItemDesk = ({ src, alt, href }) => {
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

const NavigationItemMob = ({ alt, href, setIsDropdownOpen }) => {
  return (
    <Link
      className='navigation__item'
      activeClass='active'
      to={href}
      spy={true}
      smooth={true}
      offset={-83}
      duration={500}
      onClick={() => setIsDropdownOpen(false)}
    >
      {alt}
    </Link>
  );
};

const Navigation = ({
  className,
  navItems,
  dark,
  setDark,
  isAboutOpen,
  setIsAboutOpen,
  windowWidth,
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  const currentStyle = className ? className : '';

  const onClickMenu = () => {
    setIsAboutOpen(false);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onClickInfo = () => {
    setIsDropdownOpen(false);
    setIsAboutOpen(!isAboutOpen);
  };
  return (
    <div className={`navigation ${currentStyle}`}>
      {windowWidth && windowWidth > 636 && (
        <Scrollbar
          style={{ width: '108px', height: '100vh', maxHeight: '100%' }}
        >
          <div className='navigation__wrapper'>
            <img
              className='navigation__theme'
              src={theme}
              alt='theme'
              onClick={() => setDark(!dark)}
            />

            <nav className='navigation__container'>
              {navItems.map((navigation, index) => (
                <NavigationItemDesk {...navigation} key={index} />
              ))}
            </nav>
          </div>
        </Scrollbar>
      )}
      {windowWidth && windowWidth <= 636 && (
        <div className='navigation__wrapper'>
          <img
            className='navigation__theme'
            src={theme}
            alt='theme'
            onClick={() => setDark(!dark)}
          />
          <img
            className='navigation__info'
            src={info}
            alt='info'
            onClick={onClickInfo}
          />
          <img
            className='navigation__burger'
            src={burger}
            alt='burger__menu'
            onClick={onClickMenu}
          />
          <ul
            className={`navigation__dropdown ${isDropdownOpen ? '--open' : ''}`}
          >
            {navItems.map((navigation, index) => (
              <NavigationItemMob
                {...navigation}
                setIsDropdownOpen={setIsDropdownOpen}
                key={index}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export { Navigation };
