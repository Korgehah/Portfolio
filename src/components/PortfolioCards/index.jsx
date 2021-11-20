import React from 'react';

const PortfolioCard = ({ src, alt, href}) => {
  return (
    <a href={href} className='portfolio__card'>
        <div className="portfolio__cover"/>
      <img className='portfolio__card-image' src={src} alt={alt} />
    </a>
  );
};

const PortfolioCards = ({mock}) => {
  return (
    <div className='portfolio__cards'>
      {mock.map((portfolio, index) => (
        <PortfolioCard {...portfolio} key={index} />
      ))}
    </div>
  );
};
export default PortfolioCards;