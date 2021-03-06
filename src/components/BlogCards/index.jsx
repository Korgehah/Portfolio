import React from 'react';

const BlogCard = ({ src, alt, title, description, href }) => {
  return (
    <a className='blog__card' href={href} target='_blank' rel='noreferrer'>
      <div className='blog__image-container'>
        <img className='blog__image' src={src} alt={alt} />
      </div>
      <div className='blog__card-content'>
        <h2 className='blog__card-title'>{title}</h2>
        <p className='blog__card-description'>{description}</p>
        <span className='blog__source'>Learn More</span>
      </div>
    </a>
  );
};

const BlogCards = ({ cards }) => {
  return (
    <div className='blog__cards'>
      {cards.map((card, index) => (
        <BlogCard {...card} key={index} />
      ))}
    </div>
  );
};
export { BlogCards };
