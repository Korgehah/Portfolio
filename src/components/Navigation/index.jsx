import React from 'react';
import Home from '../../assets/images/Home.svg';
import Contact from '../../assets/images/Contact.svg';
import Services from '../../assets/images/Services.svg';
import Blog from '../../assets/images/Blog.svg';
import Portfolio from '../../assets/images/Portfolio.svg';


const NavigationItem = ({src, alt}) => {
  return (
    <a href="#" className='navigation__item'>
    <div className='navigation__prompt'>{alt}</div>
        <img className='navigation__image' src={src} alt={alt}/>
    </a>
  );
};

const Navigation = () => {
   const MockNavigation = [
        { src: Home, alt: 'Home'},
        { src: Services, alt: 'Services'},
        { src: Portfolio, alt: 'Portfolio'},
        { src: Blog, alt: 'Blog'},
        { src: Contact, alt: 'Contact'}
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