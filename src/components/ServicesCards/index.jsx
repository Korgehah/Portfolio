import React from 'react';

const ServicesCard = ({ src, alt, title, subtitle, description }) => {
  return (
    <div className='services__card'>
      <img className='services__card-image' src={src} alt={alt} />
      <h2 className='services__card-title'>{title}</h2>
      <p className='services__card-subtitle'>{subtitle}</p>
      <div className='services__card services__card_hidden'>
        <h2 className='services__card-title'>{title}</h2>
        <p className='services__card-description'>{description}</p>
        <a href={src} className='services__card-order'>
          Order now
        </a>
      </div>
    </div>
  );
};

const ServicesCards = ({ cards }) => {
  return (
    <div className='services__cards'>
      {cards.map((card, index) => (
        <ServicesCard {...card} key={index} />
      ))}
    </div>
  );
};
export default ServicesCards;
