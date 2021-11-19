import React from 'react';
import location from '../../assets/images/location.svg';
import mail from '../../assets/images/mail.svg';


const MockAddress = [
    {title: 'Country:', value: 'Bangladesh'},
    {title: 'City:', value: 'Dhaka'},
    {title: 'Street:', value: '35 Vhatara, Badda'},
];

const MockMail = [
    {title: 'Email:', value: 'Youremail@Gmail.com'},
    {title: 'Skype:', value: '@Yourusername'},
    {title: 'Telegram:', value: '@Yourusername'},
];

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

const ContactsInfo = () => {
  return (
    <div className='contacts__cards'>
        <ContactsItem mock={MockAddress} src={location} alt='location' />
        <ContactsItem mock={MockMail} src={mail} alt='mail'/>
    </div>
  );
};
export default ContactsInfo;