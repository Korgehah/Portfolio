import React from 'react';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import youtube from '../../assets/images/youtube.svg';
import dribbble from '../../assets/images/dribbble.svg';
// Если уж решил закидывать images в папку src, то импорть их, а не строкой определяй

const SocialItem = ({ src, alt, href }) => {
  return (
    <a href={href} className='socials__item'>
      <img className='socials__image' src={src} alt={alt} />
    </a>
  );
};

const Socials = () => {
  const MockSocials = [
    { src: facebook, alt: 'facebook', href: '' },
    { src: instagram, alt: 'instagram', href: '' },
    { src: twitter, alt: 'twitter', href: '' },
    { src: linkedin, alt: 'linkedin', href: '' },
    { src: youtube, alt: 'youtube', href: '' },
    { src: dribbble, alt: 'dribble', href: '' },
  ];
  return (
    <div className='socials'>
      {MockSocials.map((social, index) => (
        <SocialItem {...social} key={index} />
      ))}
    </div>
  );
};
export default Socials;
