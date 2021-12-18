import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
/* map */
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
/* scss */
import './assets/scss/index.scss';
/* components */
import Data from './components/Data';
import Socials from './components/Socials/index';
import Scales from './components/Scales/index';
import Skills from './components/Skills/index';
import HeadOfBlock from './components/HeadOfBlock';
import ServicesCards from './components/ServicesCards';
import Navigation from './components/Navigation';
import PortfolioCards from './components/PortfolioCards';
import BlogCards from './components/BlogCards';
import ContactsInfo from './components/ContactsInfo';
import Button from './components/Button';
import Modal from './components/Modal';
/* images */
import avatar from './assets/images/avatar.png';
import photo from './assets/images/photo.png';
import vkontakte from './assets/images/vkontakte.svg';
import instagram from './assets/images/instagram.svg';
import linkedin from './assets/images/linkedin.svg';
import github from './assets/images/github.svg';
import telegram from './assets/images/telegram.svg';
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
import Input from './components/Input';
import Textarea from './components/Textarea';
/* Scrollbar */
import { Scrollbar } from 'react-scrollbars-custom';
import { Link } from 'react-scroll';

const About = ({ socials, data, languages, scale, skills }) => {
  return (
    <div className='about'>
      <Scrollbar style={{ width: '315px', height: '100vh', maxHeight: '100%' }}>
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
      </Scrollbar>
    </div>
  );
};

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__wrapper'>
        <div className='banner__info'>
          <h1 className='banner__name'>
            I'm Evgeny Nikolaev
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

const Portfolio = ({ header, cards, setIsOpen }) => {
  return (
    <section className='layout__section portfolio'>
      <HeadOfBlock {...header} />
      <PortfolioCards cards={cards} setIsOpen={setIsOpen} />
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
        Спасибо! Я свяжусь с вами в ближайшее время.
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

const Menu = ({ mockNavigation }) => {
  return (
    <div className='navigation'>
      <Navigation nav={mockNavigation} />
    </div>
  );
};

function App() {
  const Data = {
    about: {
      socials: [
        { src: vkontakte, alt: 'vkontakte', href: 'https://vk.com/whontowqis' },
        {
          src: instagram,
          alt: 'instagram',
          href: 'https://www.instagram.com/whontowqis/',
        },
        { src: linkedin, alt: 'linkedin', href: 'https://www.linkedin.com/' },
        { src: telegram, alt: 'telegram', href: 'https://t.me/eixlu' },
        {
          src: github,
          alt: 'github',
          href: 'https://github.com/Korgehah?tab=repositories',
        },
      ],

      data: [
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
        { title: 'CSS', percent: '85%' },
        { title: 'Js', percent: '80%' },
        { title: 'React', percent: '75%' },
      ],
      skills: [{ skillName: 'Sass, Less' }, { skillName: 'GIT Knowledge' }],
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
        { src: img1, alt: 'project' },
        { src: img2, alt: 'project' },
        { src: img3, alt: 'project' },
        { src: img4, alt: 'project' },
        { src: img5, alt: 'project' },
        { src: img6, alt: 'project' },
        { src: img7, alt: 'project' },
        { src: img8, alt: 'project' },
        { src: img9, alt: 'project' },
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
        },
        {
          src: img2,
          alt: 'blog',
          title: 'Make Business Card',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
        },
        {
          src: img3,
          alt: 'blog',
          title: 'How To Make Flyer Design',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
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
      { src: blog, alt: 'Blog', href: 'blog' },
      { src: contacts, alt: 'Contacts', href: 'contacts' },
    ],
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='layout'>
      <div className='layout__wrapper'>
        <About {...Data.about} />
        <main className='layout__main'>
          <div className='layout__main-wrapper'>
            <Banner />
            <Services {...Data.services} />
            <Portfolio {...Data.portfolio} setIsOpen={setIsOpen} />
            <Blog {...Data.blog} />
            <Contacts {...Data.contacts} />
            <Location />
            <Copyright />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </main>
        <Menu mockNavigation={Data.nav} />
      </div>
    </div>
  );
}

export default App;
