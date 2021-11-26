import React from 'react';

const PortfolioCard = ({ src, alt, href }) => {
  return (
    <a href={href} className='portfolio__card'>
      <div className='portfolio__cover' />
      <img className='portfolio__card-image' src={src} alt={alt} />
    </a>
  );
};

const PortfolioCards = ({ cards }) => {
  return (
    <div className='portfolio__cards'>
      {cards.map((card, index) => (
        <PortfolioCard {...card} key={index} />
      ))}
    </div>
  );
};
export default PortfolioCards;
