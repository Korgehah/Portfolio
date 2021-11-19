import React from 'react';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';

const BlogCard = ({ src, alt, title, description, href }) => {
  return (
    <div className='blog__card'>
      <div className='blog__card-container'>
        <img className='blog__card-image' src={src} alt={alt} />
      </div>
      <div className='blog__card-content'>
        <h2 className='blog__card-title'>{title}</h2>
        <p className='blog__card-description'>{description}</p>
        <a href={href} className='blog__source'>
          Learn More
        </a>
      </div>
    </div>
  );
};

const BlogCards = () => {
  const MockBlog = [
    {
      src: img1,
      alt: 'blog',
      title: 'How To Make Web Templates',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
      href: '',
    },
    {
      src: img2,
      alt: 'blog',
      title: 'Make Business Card',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
      href: '',
    },
    {
      src: img3,
      alt: 'blog',
      title: 'How To Make Flyer Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
      href: '',
    },
  ];
  return (
    <div className='blog__cards'>
      {MockBlog.map((blog, index) => (
        <BlogCard {...blog} key={index} />
      ))}
    </div>
  );
};
export default BlogCards;
