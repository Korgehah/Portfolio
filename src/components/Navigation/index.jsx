import React from 'react';
import Home from '../../assets/images/Home.svg';
import Contact from '../../assets/images/Contact.svg';
import Services from '../../assets/images/Services.svg';
import Blog from '../../assets/images/Blog.svg';
import Portfolio from '../../assets/images/Portfolio.svg';


const NavigationItem = ({src, alt, href}) => {
  return (
    <a href={href} className='navigation__item'>
    <div className='navigation__prompt'>{alt}</div>
        <img className='navigation__image' src={src} alt={alt}/>
    </a>
  );
};

const Navigation = () => {
   const MockNavigation = [
        { src: Home, alt: 'Home', href: ''},
        { src: Services, alt: 'Services', href: ''},
        { src: Portfolio, alt: 'Portfolio', href: ''},
        { src: Blog, alt: 'Blog', href: ''},
        { src: Contact, alt: 'Contact', href: ''}
    ];
  return (
    <nav className='navigation__container'>
    {MockNavigation.map((navigation, index) => (
        <NavigationItem {...navigation} key={index} />
    ))}
    </nav>
  );
};
export default Navigation;