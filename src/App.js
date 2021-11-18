import React from 'react';
import avatar from './assets/images/avatar.png';
import photo from './assets/images/photo.png';
import './assets/scss/index.scss';
import Data from './components/Data';
import Socials from './components/Socials/index';
import Scales from './components/Scales/index';
import Skills from './components/Skills/index';
import HeadOfBlock from './components/HeadOfBlock';
import ServicesCards from './components/ServicesCards';
import theme from './assets/images/theme.svg';
import Navigation from './components/Navigation';

function App() {
  const MockData = [
    { title: 'Age:', value: '24' },
    { title: 'Residence:', value: 'BD' },
    {
      title: 'Freelance:',
      value: 'Available',
      colorTheme: 'data__value_colored',
    },
    { title: 'Address:', value: 'Dhaka, Bangladesh' },
  ];

  const MockLanguages = [
    { title: 'Bangla', percent: '100%' },
    { title: 'English', percent: '80%' },
    { title: 'Spanish', percent: '60%' },
  ];

  const MockScale = [
    { title: 'Html', percent: '90%' },
    { title: 'CSS', percent: '85%' },
    { title: 'Js', percent: '80%' },
    { title: 'PHP', percent: '75%' },
    { title: 'WordPress', percent: '85%' },
  ];

  const MockSkills = [
    { skill: 'Bootstrap, Materialize' },
    { skill: 'Stylus, Sass, Less' },
    { skill: 'Gulp, Webpack, Grunt' },
    { skill: 'GIT Knowledge' },
  ];

  const MyServices = [
    {
      title: 'My Services',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum',
    },
  ];

  const Portfolio = [
    {
      title: 'Portfolio',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum',
    },
  ];

  const Blog = [
    {
      title: 'Blog',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum',
    },
  ];

  const YourInfo = [{ title: 'Leave Us Your Info', description: '' }];

  const ContactUs = [{ title: 'Contact Information', description: '' }];

  return (
    <div className='App'>
      <div className='about'>
        <div className='about__wrapper'>
          <div className='about__info'>
            <div className='about__avatar-container'>
              <img src={avatar} className='about__avatar' alt='avatar' />
            </div>
            <p className='about__name'>Rayan Adlardard</p>
            <p className='about__speciality'>Front-End Developer</p>
            <Socials />
          </div>

          <div className='about__info'>
            <Data mock={MockData} />
          </div>

          <div className='about__info'>
            <h2 className='about__title'>Languages</h2>
            <Scales mock={MockLanguages} />
          </div>

          <div className='about__info'>
            <h2 className='about__title'>Skills</h2>
            <Scales mock={MockScale} />
          </div>

          <div className='about__info'>
            <h2 className='about__title'>Extra skills</h2>
            <Skills mock={MockSkills} />
          </div>

          <button className='button about__button'>
            Download CV
            <svg
              className='about__button-icon'
              width='14'
              height='17'
              viewBox='0 0 14 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2.33317 12.9523H11.6665V8.28564H12.8332V13.619C12.8332 13.7958 12.7717 13.9654 12.6623 14.0904C12.5529 14.2154 12.4045 14.2856 12.2498 14.2856H1.74984C1.59513 14.2856 1.44675 14.2154 1.33736 14.0904C1.22796 13.9654 1.1665 13.7958 1.1665 13.619V8.28564H2.33317V12.9523ZM8.1665 6.28564H11.0832L6.99984 10.9523L2.9165 6.28564H5.83317V2.28564H8.1665V6.28564Z'
                fill='#2B2B2B'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='container'>
        <div className='banner'>
          <div className='banner__wrapper'>
            <div className='banner__info'>
              <h1 className='banner__name'>
                I'm Rayan Adlrdard
                <br />
                <span className='banner__text banner__text_colored'>
                  Front-end
                </span>{' '}
                Developer
              </h1>
              <p className='banner__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                suspendisse nunc lectus.
              </p>
            </div>
            <div className='banner__photo-container'>
              <img className='banner__photo' src={photo} alt='my_photo' />
            </div>
          </div>
        </div>

        <section className='services'>
          <HeadOfBlock
            head={{
              title: 'My Services',
              description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum',
            }}
          />
          <ServicesCards />
        </section>
      </div>

      <div className='navigation'>
          <img className='navigation__theme' src={theme} alt='theme' />
         <Navigation/>
      </div>
    </div>
  );
}

export default App;
