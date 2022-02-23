import React from 'react';
import { Button } from '../Button/index';

const Modal = ({ isModalOpen, setIsModalOpen, modalInfo }) => {
  return (
    <div className={`modal ${isModalOpen ? '--open' : ''}`}>
      <div className='modal__content'>
        <div className='modal__header'>
          <h1 className='modal__title'>{modalInfo.title}</h1>
          <span className='modal__close' onClick={() => setIsModalOpen(false)}>
            ×
          </span>
        </div>
        <p className='modal__subtitle'>{modalInfo.description}</p>
        <div className='modal__feature'>
          <span className='modal__feature modal__feature_bold'>Stack:</span>
          {modalInfo.stack}
        </div>
        <div className='modal__feature'>
          <span className='modal__feature modal__feature_bold'>Date:</span>
          {modalInfo.date}
        </div>
        <img className='modal__image' alt='' src={modalInfo.src}></img>
        <div className='modal__buttons'>
          <a
            href={modalInfo.vercel}
            className='modal__button-link'
            target='_blank'
            rel='noreferrer'
          >
            <Button addClass='modal__button'>Visit Website</Button>
          </a>
        </div>
      </div>
      <div className='modal__overlay' onClick={() => setIsModalOpen(false)} />
    </div>
  );
};
export { Modal };
