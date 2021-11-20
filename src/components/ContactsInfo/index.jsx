import React from 'react';
import location from '../../assets/images/location.svg';
import mail from '../../assets/images/mail.svg';

const ContactsData = ({title, value}) => {
  return (
    <div className='contacts__data'>
        <div className='contacts__data-title'>{title}</div>
        <div className='contacts__data-value'>{value}</div>
    </div>
  );
};

const ContactsItem = ({mock, src, alt}) => {
    
  return (
    <div className='contacts__card'>
        <div className='contacts__card-container'>
      <img className='contacts__card-image' src={src} alt={alt} />
      </div>
      {mock.map((data, index) => (
          <ContactsData {...data} key={index} /> 
      ))}
    </div>
  );
};

const ContactsInfo = ({mockAddress, mockMail}) => {
  return (
    <div className='contacts__cards'>
        <ContactsItem mock={mockAddress} src={location} alt='location' />
        <ContactsItem mock={mockMail} src={mail} alt='mail'/>
    </div>
  );
};
export default ContactsInfo;