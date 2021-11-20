import React from 'react';

const ServicesCard = ({ src, alt, title, subtitle }) => {
  return (
    <div className='services__card'>
      <img className='services__card-image' src={src} alt={alt} />
      <h2 className='services__card-title'>{title}</h2>
      <p className='services__card-subtitle'>{subtitle}</p>
    </div>
  );
};

const ServicesCards = ({mock}) => {
  return (
    <div className='services__cards'>
      {mock.map((service, index) => (
        <ServicesCard {...service} key={index} />
      ))}
    </div>
  );
};
export default ServicesCards;
