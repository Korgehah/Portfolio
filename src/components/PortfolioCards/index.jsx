import React from 'react';

const PortfolioCard = ({ src, alt, setModal }) => {
  return (
    <div className='portfolio__card'>
      <div className='portfolio__cover' onClick={() => setModal(true)} />
      <img className='portfolio__card-image' src={src} alt={alt} />
    </div>
  );
};

const PortfolioCards = ({ cards, setModal }) => {
  return (
    <div className='portfolio__cards'>
      {cards.map((card, index) => (
        <PortfolioCard {...card} key={index} setModal={setModal} />
      ))}
    </div>
  );
};
export default PortfolioCards;
