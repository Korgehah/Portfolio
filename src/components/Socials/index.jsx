import React from 'react';

const SocialItem = ({ src, alt, href }) => {
  return (
    <a href={href} className='socials__item'>
      <img className='socials__image' src={src} alt={alt} />
    </a>
  );
};

const Socials = ({ socials }) => {
  return (
    <div className='socials'>
      {socials.map((social, index) => (
        <SocialItem {...social} key={index} />
      ))}
    </div>
  );
};
export default Socials;
