import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
/* map */
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
/* scss */
import './assets/scss/index.scss';
/* components */
import { PersonalInfo } from './components/PersonalInfo';
import { Socials } from './components/Socials/index';
import { Scales } from './components/Scales/index';
import { Skills } from './components/Skills/index';
import { HeadOfBlock } from './components/HeadOfBlock';
import { ServicesCards } from './components/ServicesCards';
import { Navigation } from './components/Navigation';
import { PortfolioCards } from './components/PortfolioCards';
import { BlogCards } from './components/BlogCards';
import { ContactsInfo } from './components/ContactsInfo';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { Input } from './components/Input';
import { Textarea } from './components/Textarea';
/* images */
import {
  avatar,
  photo,
  vkontakte,
  instagram,
  github,
  telegram,
  business,
  event,
  news,
  store,
  blog,
  landing,
  project1,
  project2,
  project3,
  project4,
  project5,
  img1,
  img2,
  img3,
  home,
  contacts,
  services,
  portfolio,
  blogNav,
  cv,
} from './images/index';

/* Scrollbar */
import { Scrollbar } from 'react-scrollbars-custom';
import { Link } from 'react-scroll';
/* hooks */
import { useWindowWidth } from './hooks/useWindowWidth';

const About = ({
  socials,
  isAboutOpen,
  personalInfo,
  languages,
  scale,
  skills,
  className,
  windowWidth,
}) => {
  const currentStyle = className ? className : '';
  return (
    <div
      className={`about ${currentStyle} ${
        currentStyle === 'about_mob' && isAboutOpen ? '--open' : ''
      }`}
    >
      {windowWidth && windowWidth > 636 && (
        <Scrollbar
          style={{ width: '315px', height: '100vh', maxHeight: '100%' }}
        >
          <div className='about__wrapper'>
            <div className='about__info'>
              <div className='about__avatar-container'>
                <img src={avatar} className='about__avatar' alt='avatar' />
              </div>
              <p className='about__name'>Evgeny Nikolaev</p>
              <p className='about__speciality'>Front-End Developer</p>
              <Socials socials={socials} />
            </div>

            <div className='about__info'>
              <PersonalInfo personalInfo={personalInfo} />
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
            <a className='about__download' download='CV.pdf' href={cv}>
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
            </a>
          </div>
        </Scrollbar>
      )}
      {windowWidth && windowWidth <= 636 && (
        <div className='about__wrapper'>
          <div className='about__info'>
            <div className='about__avatar-container'>
              <img src={avatar} className='about__avatar' alt='avatar' />
            </div>
            <p className='about__name'>Evgeny Nikolaev</p>
            <p className='about__speciality'>Front-End Developer</p>
            <Socials socials={socials} />
          </div>

          <div className='about__info'>
            <PersonalInfo personalInfo={personalInfo} />
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
      )}
    </div>
  );
};

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__wrapper'>
        <div className='banner__info'>
          <h1 className='banner__name'>
            I'm Nikolaev{' '}
            <span className='banner__text banner__text_colored'>Evgeny</span>
            <br />
          </h1>
          <p className='banner__description'>
            I'm Junior Frontend Developer based in Russia. I am studying web
            development and I want to become a specialist in it.
          </p>
          <Link
            className='banner__button-container'
            activeClass='active'
            to='contacts'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
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
          </Link>
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
    <section className='layout__section services'>
      <HeadOfBlock {...header} />
      <ServicesCards cards={cards} />
    </section>
  );
};

const Portfolio = ({ header, cards, setIsModalOpen, setModalInfo }) => {
  return (
    <section className='layout__section portfolio'>
      <HeadOfBlock {...header} />
      <PortfolioCards
        cards={cards}
        setIsModalOpen={setIsModalOpen}
        setModalInfo={setModalInfo}
      />
    </section>
  );
};

const Blog = ({ header, cards }) => {
  return (
    <section className='layout__section blog'>
      <HeadOfBlock {...header} />
      <BlogCards cards={cards} />
    </section>
  );
};

const Form = () => {
  const [formIsSubmit, setFormIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    setTimeout(() => {
      console.log(data);
      setFormIsSubmit(true);
    }, 600);
  };

  if (formIsSubmit) {
    return (
      <div className='contacts__form contacts__form_submited'>
        Thanks! I'll contact you soon.
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className='contacts__form'
    >
      <Input
        title='Your Full Name'
        name='name'
        required
        register={register}
        errors={errors}
        errorText='Enter your name'
        validationType='name'
      />
      <Input
        title='Your Email'
        name='email'
        required
        register={register}
        errors={errors}
        errorText='Enter the email address in the format example@example.com'
        validationType='email'
      />
      <Input title='Subject' name='subject' register={register} />
      <Textarea
        name='message'
        title='Your Message'
        required
        register={register}
        errors={errors}
        errorText='Enter your message'
      ></Textarea>
      <button type='submit' className='contacts__submit-button'>
        <Button addClass='contacts__button'>Send message</Button>
      </button>
    </form>
  );
};

const Contacts = ({ infoHeader, contactsHeader, address, mail }) => {
  return (
    <section className='layout__section contacts'>
      <div className='contacts__form-container'>
        <HeadOfBlock {...infoHeader} />
        <Form />
      </div>
      <div className='contacts__info'>
        <HeadOfBlock {...contactsHeader} />
        <ContactsInfo address={address} mail={mail} />
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <div className='layout__section map'>
      <YMaps>
        <Map
          className='map__content'
          instanceRef={(ref) => {
            ref && ref.behaviors.disable('scrollZoom');
          }}
          defaultState={{
            center: [55.75975980555492, 37.705900405895406],
            zoom: 16,
          }}
        >
          <Placemark geometry={[55.75975980555492, 37.705900405895406]} />
          <ZoomControl />
        </Map>
      </YMaps>
    </div>
  );
};

const Copyright = () => {
  return <div className='copyright'>2021 All Rights Reserved. Korgehah</div>;
};

const data = {
  about: {
    socials: [
      { src: vkontakte, alt: 'vkontakte', href: 'https://vk.com/whontowqis' },
      {
        src: instagram,
        alt: 'instagram',
        href: 'https://www.instagram.com/whontowqis/',
      },
      { src: telegram, alt: 'telegram', href: 'https://t.me/eixlu' },
      {
        src: github,
        alt: 'github',
        href: 'https://github.com/Korgehah?tab=repositories',
      },
    ],

    personalInfo: [
      { title: 'Age:', value: '22' },
      { title: 'Residence:', value: 'Russia' },
      {
        title: 'Freelance:',
        value: 'Available',
        colorTheme: 'data__value_colored',
      },
      { title: 'Address:', value: 'Moscow, Russia' },
    ],
    languages: [
      { title: 'Russian', percent: '100%' },
      { title: 'English', percent: '70%' },
    ],
    scale: [
      { title: 'Html', percent: '90%' },
      { title: 'CSS', percent: '80%' },
      { title: 'Js', percent: '60%' },
      { title: 'React', percent: '70%' },
      { title: 'Next.js', percent: '35%' },
    ],

    skills: [
      'Sass, Less',
      'GIT Knowledge',
      'BEM',
      'Cross browser, adaptive layout',
      'Figma',
      'Work with custom API',
      'SQL',
    ],
  },
  services: {
    header: {
      title: 'My Services',
    },
    cards: [
      {
        src: business,
        alt: 'Business card website',
        title: 'Business card website',
        description:
          'Business cards are a great way to make a lasting first impression and establish your credentials and credibility. ',
      },
      {
        src: store,
        alt: 'Online store',
        title: 'Online store',
        description:
          'Sell anywhere online. Let customers buy directly from your website or from their favorite places to shop online. ',
      },
      {
        src: landing,
        alt: 'Landing',
        title: 'Landing page',
        description:
          'Landing page can bring more leads by gathering information that can help you better understand and market to visitors. ',
      },
      {
        src: news,
        alt: 'News website',
        title: 'News website',
        description:
          'News websites are sites devoted to delivering the news in a different format than television, print or radio. ',
      },
      {
        src: blog,
        alt: 'Blog',
        title: 'Blog',
        description:
          'Blogs are normally updated habitually, and more seasoned posts can be seen through archives. ',
      },
      {
        src: event,
        alt: 'Event website',
        title: 'Event website',
        description:
          'An event website is practically a cost-free digital advertisement for the event you are organizing. ',
      },
    ],
  },
  portfolio: {
    header: {
      title: 'Portfolio',
      description:
        'This is my pet-projects, that I made while learning frontend development. You can learn more about each by clicking on them.',
    },
    cards: [
      { src: project1, alt: 'project' },
      { src: project2, alt: 'project' },
      { src: project3, alt: 'project' },
      { src: project4, alt: 'project' },
      { src: project5, alt: 'project' },
    ],
  },
  blog: {
    header: {
      title: 'Useful Articles',
      description:
        'Below are helpful articles that have helped me in my learning.',
    },
    cards: [
      {
        src: img1,
        alt: 'article',
        title: 'React Hook Form',
        description:
          'Handling form inputs are an absolute necessity for any modern web application.',
        href: 'https://javascript.plainenglish.io/how-to-use-react-hook-form-with-typescript-2cf597c0c45f',
      },
      {
        src: img2,
        alt: 'article',
        title: 'Grid Coding Approaches',
        description:
          'We can reach the same layout using different syntax for defining grid columns, rows, and areas.',
        href: 'https://www.viget.com/articles/getting-started-with-css-grid-three-part-2/',
      },
      {
        src: img3,
        alt: 'article',
        title: 'Fitting Text',
        description:
          'There are a number of ways to put some text in a container and make it to fill that container.',
        href: 'https://css-tricks.com/fitting-text-to-a-container/',
      },
    ],
  },
  contacts: {
    infoHeader: { title: 'Leave Us Your Info' },
    contactsHeader: { title: 'Contact Information' },
    address: [
      { title: 'Country:', value: 'Russia' },
      { title: 'City:', value: 'Moscow' },
      { title: 'Street:', value: 'Energeticheskaya, 10' },
    ],
    mail: [
      { title: 'Email:', value: 'korgehah@gmail.com' },
      { title: 'Phone:', value: '+79779942072' },
      { title: 'Telegram:', value: '@eixlu' },
    ],
  },
  nav: [
    { src: home, alt: 'Home', href: 'banner' },
    { src: services, alt: 'Services', href: 'services' },
    { src: portfolio, alt: 'Portfolio', href: 'portfolio' },
    { src: blogNav, alt: 'Blog', href: 'blog' },
    { src: contacts, alt: 'Contacts', href: 'contacts' },
  ],
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [dark, setDark] = useState(false);
  const windowWidth = useWindowWidth();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={`layout ${dark ? '--dark' : ''}`}>
      <div className='layout__wrapper'>
        {windowWidth && windowWidth > 636 && (
          <About
            className='about_desktop'
            {...data.about}
            windowWidth={windowWidth}
          />
        )}
        {windowWidth && windowWidth <= 636 && (
          <header className='header'>
            <Navigation
              className='navigation_mob'
              navItems={data.nav}
              dark={dark}
              setDark={setDark}
              isAboutOpen={isAboutOpen}
              setIsAboutOpen={setIsAboutOpen}
              windowWidth={windowWidth}
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
            />
          </header>
        )}
        <main className='layout__main'>
          <div className='layout__main-wrapper'>
            {windowWidth && windowWidth <= 636 && (
              <About
                className='about_mob'
                {...data.about}
                isAboutOpen={isAboutOpen}
                windowWidth={windowWidth}
              />
            )}
            <Banner />
            <Services {...data.services} />
            <Portfolio
              {...data.portfolio}
              setIsModalOpen={setIsModalOpen}
              setModalInfo={setModalInfo}
            />
            <Blog {...data.blog} />
            <Contacts {...data.contacts} />
            <Location />
            {windowWidth && windowWidth > 636 && <Copyright />}
            <Modal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              modalInfo={modalInfo}
            />
          </div>
        </main>
        {windowWidth && windowWidth <= 636 && (
          <footer className='footer'>
            <Copyright />
          </footer>
        )}
        {windowWidth && windowWidth > 636 && (
          <Navigation
            className='navigation_desktop'
            navItems={data.nav}
            dark={dark}
            setDark={setDark}
            windowWidth={windowWidth}
          />
        )}
      </div>
    </div>
  );
};

export default App;
