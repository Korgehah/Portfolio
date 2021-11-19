import React from 'react';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';
import img8 from '../../assets/images/img8.png';
import img9 from '../../assets/images/img9.png';

const PortfolioCard = ({ src, alt, href}) => {
  return (
    <a href={href} className='portfolio__card'>
        <div className="portfolio__cover"/>
      <img className='portfolio__card-image' src={src} alt={alt} />
    </a>
  );
};

const PortfolioCards = () => {
  const MockPortfolio = [
    { src: img1, alt: 'project', href: '' },
    { src: img2, alt: 'project', href: '' },
    { src: img3, alt: 'project', href: '' },
    { src: img4, alt: 'project', href: '' },
    { src: img5, alt: 'project', href: '' },
    { src: img6, alt: 'project', href: '' },
    { src: img7, alt: 'project', href: '' },
    { src: img8, alt: 'project', href: '' },
    { src: img9, alt: 'project', href: '' },
  ];
  return (
    <div className='portfolio__cards'>
      {MockPortfolio.map((portfolio, index) => (
        <PortfolioCard {...portfolio} key={index} />
      ))}
    </div>
  );
};
export default PortfolioCards;