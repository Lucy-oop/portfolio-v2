import React from 'react'
import resumePdf from './mini/Lucycv.pdf'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="about-container">
      <div className="allbio">
        <div className="bio-info">
          <h1 className="helloTitle">
            Hello, I’m <br />
            {/* Wrapper line effect*/}
            <div className="name-wrapper">
              <span className="realName">Yee Mon Thant</span>
              {" "}
            </div>
              but you can call me{" "} <br />
              <div className="name-wrapper2">
                <span className="nickName">"Lucy"</span>.
              </div>
              
          </h1>
          <div className='role'>Junior Frontend Developer</div>

          <p>
            Welcome to my creative coding space. I’m a Junior Frontend Developer who currently lived in Bangkok, who enjoy turning ideas into responsive, interactive experiences and find real happiness in debugging and seeing my code come to life.
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

            <a className="ctaBtn" href={resumePdf} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="social-icons">
        <a href="mailto:tomon5609@gmail.com" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-at" style={{ fontSize: 24 }}></i>
        </a>
        <a href="https://www.linkedin.com/in/yee-mon-thant-15973a2b9" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin" style={{ fontSize: 24 }}></i>
        </a>
        <a href="https://github.com/Lucy-oop" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" style={{ fontSize: 24 }}></i>
        </a>
        <a href="https://www.facebook.com/yeemonthant0611" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook" style={{ fontSize: 24 }}></i>
        </a>
        <a href="https://www.instagram.com/yeemon7631?igsh=MWt2ZmtveXI0cWcwMg==" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram" style={{ fontSize: 24 }}></i>
        </a>
      </div>
    </div>
  )
}

export default About;