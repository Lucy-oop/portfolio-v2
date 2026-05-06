import React from 'react'
import Name from './Name.jsx'
import './Education.css'

function Education() {
    return (
    <div className='container'>
          <Name />
   <div className="card-container">
     <div className="card">
        <h1>About My Education</h1>
        <p>I've been finished at Feb 2018 from <span>B.E.H.S(26)</span>.</p>
        <p>I've joined my first year in <span>Mandalay University</span> Specialized in <span>English</span> at Oct
          2018.</p>
      </div>
    {/*card1*/}

      <div className="card">
        <h1>Courses And Get Certificates from</h1>
        <ul>
          <li>English proficiency(A&M English proficiency Course)at Jun 2019</li>
          <li>Practical Use Of Computer (Kyaw Swa Win Accountancy And finance Academy)at Apr 2020</li>
          <li>Japanese N4 (Sakura Japanese Language School) at Apr 2021</li>
          <li>Web Foundation Class (The Navigator)at Mar 23 2023</li>
          <li>Full-Stack Web Development Bootcamp(Udemy) at Aug 10 2024 and still learning~ </li>
        </ul>
      </div>

    </div>
    </div>

  )
}

export default Education;
