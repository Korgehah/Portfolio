import React from 'react';
import webDev from '../../assets/images/web_development.svg';
import advertisment from '../../assets/images/advertisment.svg';
import gameDev from '../../assets/images/game_development.svg';
import uiDesign from '../../assets/images/ui_ux_design.svg';
import photography from '../../assets/images/photography.svg';
import soundDesign from '../../assets/images/sound_design.svg';

const ServicesCard = ({ src, alt, title, subtitle }) => {
  return (
    <div className='services__card'>
      <img className='services__card-image' src={src} alt={alt} />
      <h2 className='services__card-title'>{title}</h2>
      <p className='services__card-subtitle'>{subtitle}</p>
    </div>
  );
};

const ServicesCards = () => {
  const MockServices = [
    { src: webDev, alt: 'Web Development', title: 'Web Development', subtitle: 'Blog, E-Commerce' },
    { src: uiDesign, alt: 'UI/UX Design', title: 'UI/UX Design', subtitle: 'Mobile app, Website design' },
    { src: soundDesign, alt: 'Sound Design', title: 'Sound Design', subtitle: 'Voice over, Beat Making' },
    { src: gameDev, alt: 'Game Development', title: 'Game Design', subtitle: 'Character Design, Props & Objects' },
    { src: photography, alt: 'Photography', title: 'Photography', subtitle: 'Portrait, Product photography' },
    { src: advertisment, alt: 'Advertisment', title: 'Advertising', subtitle: 'Lorem ipsum dolor sit' },
  ];
  return (
    <div className='services__cards'>
      {MockServices.map((service, index) => (
        <ServicesCard {...service} key={index} />
      ))}
    </div>
  );
};
export default ServicesCards;
