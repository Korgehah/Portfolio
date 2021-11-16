import React from 'react';
import avatar from './images/avatar.png';
import facebook from './images/facebook.svg';
import dribble from './images/dribble.svg';
import instagram from './images/instagram.svg';
import linkedin from './images/linkedin.svg';
import twitter from './images/twitter.svg';
import youtube from './images/youtube.svg';



function App() {
  return (
    <div className="App">
      <section className="profile">
        <img src={avatar} className="profile__avatar" alt="avatar" />
        <p className ="name">
          Rayan Adlardard
        </p>
        <p className ="speciality">
          Front-End Developer
        </p>
        <div className="socials">
          <img src={facebook} alt="facebook"/>
          <img src={dribble} alt="dribble"/>
          <img src={instagram} alt="instagram"/>
          <img src={linkedin} alt="linkedin"/>
          <img src={twitter} alt="twitter"/>
          <img src={youtube} alt="youtube"/>
        </div>
        
      </section>
    </div>
  );
}

export default App;
