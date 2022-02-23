import React from 'react';
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import project4 from '../../assets/images/project4.png';
import project5 from '../../assets/images/project5.png';

const modalData = [
  {
    title: 'Portfolio page',
    description:
      'This is my first project, that I made using React and SCSS, I also used following libraries: react-hook-form and react-scrollbar-custom',
    stack: 'HTML, SCSS, React',
    date: 'December, 2021',
    vercel: 'https://portfolio-phi-gules.vercel.app/',
    src: project1,
  },
  {
    title: 'Customer Feedback Tool website',
    description:
      'In this project I improved my React and SCSS skills and try to use Typescript',
    stack: 'HTML, SCSS, React, Typescript',
    date: 'January, 2021',
    vercel: 'https://customer-feedback-tool.vercel.app/',
    src: project2,
  },
  {
    title: 'Planner App website',
    description:
      'In this project I used HTML + CSS without preprocessors and try to use jQuery just a little. Also I make some CSS animations',
    stack: 'HTML, CSS (+animations), JQuery',
    date: 'December, 2021',
    vercel: 'https://planner-app-kappa.vercel.app/',
    src: project3,
  },
  {
    title: 'Student personal account',
    description:
      'Commercial project. Participated in the development of the personal account of the student. Make front using Next.js, React, Typescript and Ant.design UI library. I also use react-hook-form for validation on the auth/register page, and in the settings',
    stack:
      'HTML, SCSS, React, Typescript, Next.js, Ant Design (React UI Library)',
    date: 'December, 2021',
    vercel: '',
    src: project4,
  },
  {
    title: 'Online store',
    description:
      'This project is not ready yet. I decided to make a complete online store, using next.js and github gist (for JSON)',
    stack: 'HTML, SCSS, React, Typescript, Next.js',
    date: 'Work in progress',
    vercel: 'https://greenshop-olive.vercel.app/',
    src: project5,
  },
];

const PortfolioCard = ({ src, alt, setIsModalOpen, setModalInfo, index }) => {
  return (
    <div className='portfolio__card'>
      <div
        className='portfolio__cover'
        onClick={() => {
          setModalInfo(modalData[index]);
          setIsModalOpen(true);
        }}
      />
      <img className='portfolio__card-image' src={src} alt={alt} />
    </div>
  );
};

const PortfolioCards = ({ cards, setIsModalOpen, setModalInfo }) => {
  return (
    <div className='portfolio__cards'>
      {cards.map((card, index) => (
        <PortfolioCard
          {...card}
          key={index}
          index={index}
          setIsModalOpen={setIsModalOpen}
          setModalInfo={setModalInfo}
        />
      ))}
    </div>
  );
};
export { PortfolioCards };
