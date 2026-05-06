import React from 'react';
// import resumePdf from './mini/Lucycv.pdf'; // Uncomment when file exists
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="allbio">
        <div className="bio-info">
          <h1 className="helloTitle">
            Hello, I’m <br />
            {/* Wrapper line effect - changed to spans for valid HTML */}
            <span className="name-wrapper">
              <span className="realName">Yee Mon Thant</span>
            </span>
            but you can call me <br />
            <span className="name-wrapper2">
              <span className="nickName">"Lucy"</span>.
            </span>
          </h1>
          
          <div className="role">Junior Frontend Developer</div>

          <p className="bio-desc">
            Welcome to my creative coding space. I’m a Junior Frontend Developer currently living in Bangkok, who enjoys turning ideas into responsive, interactive experiences and finds real happiness in debugging and seeing my code come to life.
          </p>
        </div>

        <div className="ibelieve">
          <p>
           I’m always eager to learn new technologies, explore better solutions, and push my skills further. Coding isn’t just something I do—it’s something that genuinely makes me happy.
          </p>

          <div className="ctaRow">
            <a className="ctaLink" href="#projects">
              Explore my projects <span className="ctaIcon">↗</span>
            </a>
            {/* Replace '#' with {resumePdf} when imported */}
            <a className="ctaBtn" href="#" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="social-icons">
        <a href="mailto:tomon5609@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
          <i className="fa-solid fa-at"></i>
        </a>
        <a href="https://www.linkedin.com/in/yee-mon-thant-15973a2b9" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Lucy-oop" target="_blank" rel="noreferrer" aria-label="Github">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.facebook.com/yeemonthant0611" target="_blank" rel="noreferrer" aria-label="Facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/yeemon7631" target="_blank" rel="noreferrer" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default About;