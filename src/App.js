import React from 'react';
/* scss */
import './assets/scss/index.scss';
/* components */
import Data from './components/Data';
import Socials from './components/Socials/index';
import Scales from './components/Scales/index';
import Skills from './components/Skills/index';
import HeadOfBlock from './components/HeadOfBlock';
import ServicesCards from './components/ServicesCards';
import theme from './assets/images/theme.svg';
import Navigation from './components/Navigation';
import PortfolioCards from './components/PortfolioCards';
import BlogCards from './components/BlogCards';
import ContactsInfo from './components/ContactsInfo';
import Button from './components/Button';
/* images */
import avatar from './assets/images/avatar.png';
import photo from './assets/images/photo.png';
import facebook from './assets/images/facebook.svg';
import instagram from './assets/images/instagram.svg';
import twitter from './assets/images/twitter.svg';
import linkedin from './assets/images/linkedin.svg';
import youtube from './assets/images/youtube.svg';
import dribbble from './assets/images/dribbble.svg';
import webDev from './assets/images/web_development.svg';
import advertisment from './assets/images/advertisment.svg';
import gameDev from './assets/images/game_development.svg';
import uiDesign from './assets/images/ui_ux_design.svg';
import photography from './assets/images/photography.svg';
import soundDesign from './assets/images/sound_design.svg';
import img1 from './assets/images/img1.png';
import img2 from './assets/images/img2.png';
import img3 from './assets/images/img3.png';
import img4 from './assets/images/img4.png';
import img5 from './assets/images/img5.png';
import img6 from './assets/images/img6.png';
import img7 from './assets/images/img7.png';
import img8 from './assets/images/img8.png';
import img9 from './assets/images/img9.png';
import home from './assets/images/Home.svg';
import contacts from './assets/images/Contact.svg';
import services from './assets/images/Services.svg';
import blog from './assets/images/Blog.svg';
import portfolio from './assets/images/Portfolio.svg';

const About = ({ socials, data, languages, scale, skills }) => {
  return (
    <div className='about'>
      <div className='about__wrapper'>
        <div className='about__info'>
          <div className='about__avatar-container'>
            <img src={avatar} className='about__avatar' alt='avatar' />
          </div>
          <p className='about__name'>Rayan Adlardard</p>
          <p className='about__speciality'>Front-End Developer</p>
          <Socials socials={socials} />
        </div>

        <div className='about__info'>
          <Data dataset={data} />
        </div>

        <div className='about__info'>
          <h2 className='about__title'>Languages</h2>
          <Scales scaleData={languages} />
        </div>

        <div className='about__info'>
          <h2 className='about__title'>Skills</h2>
          <Scales scaleData={scale} />
        </div>

        <div className='about__info'>
          <h2 className='about__title'>Extra skills</h2>
          <Skills skills={skills} />
        </div>

        <Button addClass='about__button'>
          Download CV
          <svg
            className='about__button-icon'
            width='14'
            height='17'
            viewBox='0 0 14 17'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.33317 12.9523H11.6665V8.28564H12.8332V13.619C12.8332 13.7958 12.7717 13.9654 12.6623 14.0904C12.5529 14.2154 12.4045 14.2856 12.2498 14.2856H1.74984C1.59513 14.2856 1.44675 14.2154 1.33736 14.0904C1.22796 13.9654 1.1665 13.7958 1.1665 13.619V8.28564H2.33317V12.9523ZM8.1665 6.28564H11.0832L6.99984 10.9523L2.9165 6.28564H5.83317V2.28564H8.1665V6.28564Z'
              fill='currentColor'
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div id='home' className='banner'>
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
          <Button addClass='banner__button'>
            Hire me
            <svg
              className='banner__button-image'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.7812 7.33312L7.20517 3.75712L8.14784 2.81445L13.3332 7.99979L8.14784 13.1851L7.20517 12.2425L10.7812 8.66645H2.6665V7.33312H10.7812Z'
                fill='currentColor'
              />
            </svg>
          </Button>
        </div>
        <div className='banner__photo-container'>
          <img className='banner__photo' src={photo} alt='my_photo' />
        </div>
      </div>
    </div>
  );
};

const Services = ({ header, cards }) => {
  return (
    <section id='services' className='layout__section services'>
      <HeadOfBlock {...header} />
      <ServicesCards cards={cards} />
    </section>
  );
};

const Portfolio = ({ header, cards }) => {
  return (
    <section id='portfolio' className='layout__section portfolio'>
      <HeadOfBlock {...header} />
      <div className='portfolio__menu'>
        <span className='portfolio__menu-item'>All Categories</span>
        <span className='portfolio__menu-item'>UI Design</span>
        <span className='portfolio__menu-item'>Web Templates</span>
        <span className='portfolio__menu-item'>Logo</span>
        <span className='portfolio__menu-item'>Branding</span>
      </div>
      <PortfolioCards cards={cards} />
    </section>
  );
};

const Blog = ({ header, cards }) => {
  return (
    <section id='blog' className='layout__section blog'>
      <HeadOfBlock {...header} />
      <BlogCards cards={cards} />
    </section>
  );
};

const Contacts = ({ infoHeader, contactsHeader, address, mail }) => {
  return (
    <section id='contacts' className='layout__section contacts'>
      <div className='contacts__form-container'>
        <HeadOfBlock {...infoHeader} />
        <form action='' method='post' className='contacts__form'>
          <label className='contacts__label' for='name'>
            Your Full Name
            <span className='contacts__required'>Required</span>
          </label>
          <input
            maxLength='50'
            type='text'
            name='name'
            id='name'
            className='contacts__input'
            required
          />
          <label className='contacts__label' for='email'>
            Your Email
            <span className='contacts__required'>Required</span>
          </label>
          <input
            maxLength='40'
            type='email'
            name='email'
            id='email'
            className='contacts__input'
            required
          />
          <label className='contacts__label' for='subject'>
            Subject
          </label>
          <input
            maxLength='40'
            type='text'
            name='subject'
            id='subject'
            className='contacts__input'
          />
          <label className='contacts__label' for='message'>
            Your Message
          </label>
          <textarea
            maxLength='350'
            name='message'
            id='message'
            className='contacts__input contacts__input_big'
          ></textarea>
          <Button addClass='contacts__button'>Send message</Button>
        </form>
      </div>
      <div className='contacts__info'>
        <HeadOfBlock {...contactsHeader} />
        <ContactsInfo address={address} mail={mail} />
      </div>
    </section>
  );
};

const Map = () => {
  return (
    <div className='layout__section map'>
      <iframe
        title='map'
        src='https://yandex.ru/map-widget/v1/?um=constructor%3Abf6b5d3e8867fa4a758f97f4999d45febcf4bec3adb2e297d3802606c72f5802&amp;source=constructor'
        width='970'
        height='300'
        frameborder='0'
      ></iframe>
    </div>
  );
};

const Copyright = () => {
  return <div className='copyright'>2021 All Rights Reserved.Ojjomedia</div>;
};

const Menu = ({ mockNavigation }) => {
  return (
    <div className='navigation'>
      <div className='navigation__wrapper'>
        <img className='navigation__theme' src={theme} alt='theme' />
        <Navigation nav={mockNavigation} />
      </div>
    </div>
  );
};

function App() {
  const Data = {
    about: {
      socials: [
        { src: facebook, alt: 'facebook', href: '' },
        { src: instagram, alt: 'instagram', href: '' },
        { src: twitter, alt: 'twitter', href: '' },
        { src: linkedin, alt: 'linkedin', href: '' },
        { src: youtube, alt: 'youtube', href: '' },
        { src: dribbble, alt: 'dribble', href: '' },
      ],

      data: [
        { title: 'Age:', value: '24' },
        { title: 'Residence:', value: 'BD' },
        {
          title: 'Freelance:',
          value: 'Available',
          colorTheme: 'data__value_colored',
        },
        { title: 'Address:', value: 'Dhaka, Bangladesh' },
      ],
      languages: [
        { title: 'Bangla', percent: '100%' },
        { title: 'English', percent: '80%' },
        { title: 'Spanish', percent: '60%' },
      ],
      scale: [
        { title: 'Html', percent: '90%' },
        { title: 'CSS', percent: '85%' },
        { title: 'Js', percent: '80%' },
        { title: 'PHP', percent: '75%' },
        { title: 'WordPress', percent: '85%' },
      ],
      skills: [
        { skillName: 'Bootstrap, Materialize' },
        { skillName: 'Stylus, Sass, Less' },
        { skillName: 'Gulp, Webpack, Grunt' },
        { skillName: 'GIT Knowledge' },
      ],
    },
    services: {
      header: {
        title: 'My Services',
        description:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum',
      },
      cards: [
        {
          src: webDev,
          alt: 'Web Development',
          title: 'Web Development',
          subtitle: 'Blog, E-Commerce',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ',
        },
        {
          src: uiDesign,
          alt: 'UI/UX Design',
          title: 'UI/UX Design',
          subtitle: 'Mobile app, Website design',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ',
        },
        {
          src: soundDesign,
          alt: 'Sound Design',
          title: 'Sound Design',
          subtitle: 'Voice over, Beat Making',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ',
        },
        {
          src: gameDev,
          alt: 'Game Development',
          title: 'Game Design',
          subtitle: 'Character Design, Props & Objects',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ',
        },
        {
          src: photography,
          alt: 'Photography',
          title: 'Photography',
          subtitle: 'Portrait, Product photography',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ',
        },
        {
          src: advertisment,
          alt: 'Advertisment',
          title: 'Advertising',
          subtitle: 'Lorem ipsum dolor sit',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ',
        },
      ],
    },
    portfolio: {
      header: {
        title: 'Portfolio',
        description:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum',
      },
      cards: [
        { src: img1, alt: 'project', href: '' },
        { src: img2, alt: 'project', href: '' },
        { src: img3, alt: 'project', href: '' },
        { src: img4, alt: 'project', href: '' },
        { src: img5, alt: 'project', href: '' },
        { src: img6, alt: 'project', href: '' },
        { src: img7, alt: 'project', href: '' },
        { src: img8, alt: 'project', href: '' },
        { src: img9, alt: 'project', href: '' },
      ],
    },
    blog: {
      header: {
        title: 'Blog',
        description:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum',
      },
      cards: [
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
      ],
    },
    contacts: {
      infoHeader: { title: 'Leave Us Your Info' },
      contactsHeader: { title: 'Contact Information' },
      address: [
        { title: 'Country:', value: 'Bangladesh' },
        { title: 'City:', value: 'Dhaka' },
        { title: 'Street:', value: '35 Vhatara, Badda' },
      ],
      mail: [
        { title: 'Email:', value: 'Youremail@Gmail.com' },
        { title: 'Skype:', value: '@Yourusername' },
        { title: 'Telegram:', value: '@Yourusername' },
      ],
    },

    nav: [
      { src: home, alt: 'Home', href: '#home' },
      { src: services, alt: 'Services', href: '#services' },
      { src: portfolio, alt: 'Portfolio', href: '#portfolio' },
      { src: blog, alt: 'Blog', href: '#blog' },
      { src: contacts, alt: 'Contacts', href: '#contacts' },
    ],
  };
  return (
    <div className='layout'>
      <About {...Data.about} />
      <main className='layout__main'>
        <Banner />
        <Services {...Data.services} />
        <Portfolio {...Data.portfolio} />
        <Blog {...Data.blog} />
        <Contacts {...Data.contacts} />
        <Map />
        <Copyright />
      </main>
      <Menu mockNavigation={Data.nav} />
    </div>
  );
}

export default App;
