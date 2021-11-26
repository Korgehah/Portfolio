import React from 'react';
import location from '../../assets/images/location.svg';
import email from '../../assets/images/mail.svg';

const ContactsData = ({ title, value }) => {
  return (
    <div className='contacts__data'>
      <div className='contacts__data-title'>{title}</div>
      <div className='contacts__data-value'>{value}</div>
    </div>
  );
};

const ContactsItem = ({ card, src, alt }) => {
  return (
    <div className='contacts__card'>
      <div className='contacts__card-container'>
        <img className='contacts__card-image' src={src} alt={alt} />
      </div>
      {card.map((data, index) => (
        <ContactsData {...data} key={index} />
      ))}
    </div>
  );
};

const ContactsInfo = ({ address, mail }) => {
  return (
    <div className='contacts__cards'>
      <ContactsItem card={address} src={location} alt='location' />
      <ContactsItem card={mail} src={email} alt='mail' />
    </div>
  );
};
export default ContactsInfo;
