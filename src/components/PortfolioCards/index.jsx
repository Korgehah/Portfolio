import React from 'react';

const PortfolioCard = ({ src, alt, setIsModalOpen }) => {
  return (
    <div className='portfolio__card'>
      <div className='portfolio__cover' onClick={() => setIsModalOpen(true)} />
      <img className='portfolio__card-image' src={src} alt={alt} />
    </div>
  );
};

const PortfolioCards = ({ cards, setIsModalOpen }) => {
  return (
    <div className='portfolio__cards'>
      {cards.map((card, index) => (
        <PortfolioCard {...card} key={index} setIsModalOpen={setIsModalOpen} />
      ))}
    </div>
  );
};
export default PortfolioCards;
