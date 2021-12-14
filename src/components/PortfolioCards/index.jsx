import React from 'react';

const PortfolioCard = ({ src, alt, setIsOpen }) => {
  return (
    <div className='portfolio__card'>
      <div className='portfolio__cover' onClick={() => setIsOpen(true)} />
      <img className='portfolio__card-image' src={src} alt={alt} />
    </div>
  );
};

const PortfolioCards = ({ cards, setIsOpen }) => {
  return (
    <div className='portfolio__cards'>
      {cards.map((card, index) => (
        <PortfolioCard {...card} key={index} setIsOpen={setIsOpen} />
      ))}
    </div>
  );
};
export default PortfolioCards;
