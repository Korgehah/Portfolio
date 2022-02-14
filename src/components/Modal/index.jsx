import React from 'react';
import { Button } from '../Button/index';
import img from '../../assets/images/modal-image-1.jpg';

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  header,
  description,
  stack,
  date,
}) => {
  return (
    <div className={`modal ${isModalOpen ? '--open' : ''}`}>
      <div className='modal__content'>
        <div className='modal__header'>
          <h1 className='modal__title'>Startup website for Patty</h1>
          <span className='modal__close' onClick={() => setIsModalOpen(false)}>
            ×
          </span>
        </div>
        <p className='modal__subtitle'>
          Patty Startup is the perfect shop. I did my best and prepared 12
          highly customizable pages to present all startup's products. Upon
          opening this product you will see stylish and unique layouts
          thoroughly organized into their appropriate groups.
        </p>
        <div className='modal__feature'>
          <span className='modal__feature modal__feature_bold'>Stack:</span>
          Html, CSS, Bootstrap, Javascript, SVG
        </div>
        <div className='modal__feature'>
          <span className='modal__feature modal__feature_bold'>Date:</span>
          April, 2017
        </div>
        <img className='modal__image' alt='' src={img}></img>
        <div className='modal__buttons'>
          <a href='vk.com' className='modal__button-link' target='_blank'>
            <Button addClass='modal__button'>Visit Website</Button>
          </a>
          <a href='vk.com' className='modal__button-link' target='_blank'>
            <Button addClass='modal__button'>Open Github</Button>
          </a>
        </div>
      </div>
      <div className='modal__overlay' onClick={() => setIsModalOpen(false)} />
    </div>
  );
};
export { Modal };
