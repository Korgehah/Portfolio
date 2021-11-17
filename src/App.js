import React from "react";
import avatar from "./images/avatar.png";
import "./scss/index.scss";
import Socials from "./components/Socials/index.jsx";

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
            <Socials/>
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
          <button className="about__button">
            Download CV{" "}
            <svg
              className="about__button-icon"
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.33317 12.9523H11.6665V8.28564H12.8332V13.619C12.8332 13.7958 12.7717 13.9654 12.6623 14.0904C12.5529 14.2154 12.4045 14.2856 12.2498 14.2856H1.74984C1.59513 14.2856 1.44675 14.2154 1.33736 14.0904C1.22796 13.9654 1.1665 13.7958 1.1665 13.619V8.28564H2.33317V12.9523ZM8.1665 6.28564H11.0832L6.99984 10.9523L2.9165 6.28564H5.83317V2.28564H8.1665V6.28564Z"
                fill="#2B2B2B"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
