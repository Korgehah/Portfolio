import React from 'react';

const SocialItem = ({ src, alt, href }) => {
  return (
    <a href={href} rel='noreferrer' className='socials__item' target='_blank'>
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
export { Socials };
