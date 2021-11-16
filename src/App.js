import React from "react";
import avatar from "./images/avatar.png";
import facebook from "./images/facebook.svg";
import dribble from "./images/dribble.svg";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import twitter from "./images/twitter.svg";
import youtube from "./images/youtube.svg";
import "./scss/index.scss";

function App() {
  return (
    <div className="App">
      <div className="about">
        <div className="about__wrapper">
          <div className="about__info">
            <div className="about__avatar-container">
              <img src={avatar} className="about__avatar" alt="avatar" />
            </div>
            <p className="about__name">Rayan Adlardard</p>
            <p className="about__speciality">Front-End Developer</p>
            <div className="socials">
              <div className="socials__item">
                <img className="socials__image" src={facebook} alt="facebook" />
              </div>
              <div className="socials__item">
                <img
                  className="socials__image"
                  src={instagram}
                  alt="instagram"
                />
              </div>
              <div className="socials__item">
                <img className="socials__image" src={twitter} alt="twitter" />
              </div>
              <div className="socials__item">
                <img className="socials__image" src={linkedin} alt="linkedin" />
              </div>
              <div className="socials__item">
                <img className="socials__image" src={youtube} alt="youtube" />
              </div>
              <div className="socials__item">
                <img className="socials__image" src={dribble} alt="dribble" />
              </div>
            </div>
          </div>

          <div className="about__info">
            <div className="data">
              <div className="data__name">Age:</div>
              <div className="data__value">24</div>
            </div>
            <div className="data">
              <div className="data__name">Residence:</div>
              <div className="data__value">BD</div>
            </div>
            <div className="data">
              <div className="data__name">Freelance:</div>
              <div className="data__value data__value_colored">Available</div>
            </div>
            <div className="data">
              <div className="data__name">Address:</div>
              <div className="data__value">Dhaka,Bangladesh</div>
            </div>
          </div>

          <div className="about__info">
            <h2 className="about__title">Languages</h2>
            <div className="range">
              <div className="range__title">Bangla</div>
              <div className="range__percent">100%</div>
              <div className="range__progress">
                <div className="range__line"></div>
              </div>
            </div>
            <div className="range">
              <div className="range__title">English</div>
              <div className="range__percent">80%</div>
              <div className="range__progress">
                <div className="range__line"></div>
              </div>
            </div>
            <div className="range">
              <div className="range__title">Spanish</div>
              <div className="range__percent">60%</div>
              <div className="range__progress">
                <div className="range__line"></div>
              </div>
            </div>
          </div>

          <div className="about__info">
            <h2 className="about__title">Skills</h2>
            <div className="range">
              <div className="range__title">Html</div>
              <div className="range__percent">90%</div>
              <div className="range__progress">
                <div className="range__line"></div>
              </div>
            </div>
            <div className="range">
              <div className="range__title">CSS</div>
              <div className="range__percent">85%</div>
              <div className="range__progress">
                <div className="range__line"></div>
              </div>
            </div>
            <div className="range">
              <div className="range__title">Js</div>
              <div className="range__percent">80%</div>
              <div className="range__progress">
                <div className="range__line"></div>
              </div>
            </div>
            <div className="range">
              <div className="range__title">PHP</div>
              <div className="range__percent">75%</div>
              <div className="range__progress">
                <div className="range__line"></div>
              </div>
            </div>
            <div className="range">
              <div className="range__title">WordPress</div>
              <div className="range__percent">85%</div>
              <div className="range__progress">
                <div className="range__line"></div>
              </div>
            </div>
          </div>

          <div className="about__info">
            <h2 className="about__title">Extra skills</h2>
            <div className="about__skills">Bootstrap, Materialize</div>
            <div className="about__skills">Stylus, Sass, Less</div>
            <div className="about__skills">Gulp, Webpack, Grunt</div>
            <div className="about__skills">GIT Knowledge</div>
          </div>
          <button className="about__button">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default App;
