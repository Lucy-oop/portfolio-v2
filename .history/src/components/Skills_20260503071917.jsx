import React from 'react'
import './Skills.css'
import Name from './Name'

function Skills() {
    return (
        <div className='skill-container'>
            <Name />
            <div className="coding_skill">
                <a href="#">
                    <span>C</span><span>o</span><span>d</span><span>i</span><span>n</span><span>g</span>
                    <span>~</span>
                    <span>S</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s</span>
                </a>

                <div className="skill">
                    <h2>Languages</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript (Basic)</li>
                    </ul>
                </div>

                <div className="skill">
                    <h2>Libraries & Frameworks</h2>
                    <ul>
                        <li>React.js</li>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                        <li>Chrome DevTools</li>
                    </ul>
                </div>

                <div className="skill">
                    <h2>Backend & Tools</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Firebase</li>
                        <li>Nodemon(dev tool for Node)</li>
                    </ul>
                </div>

                <div className="skill">
                    <h2>Developer Tools</h2>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                    </ul>
                </div>

                <div className="skill">
                    <h2>Design</h2>
                    <ul>
                        <li>Figma</li>
                        <li>Responsive Design</li>
                        <li>Basic UX Principles</li>
                    </ul>
                </div>

                <div className="skill">
                    <h2>AI / Productivity</h2>
                    <ul>
                        <li>Cursor</li>
                        <li>ChatGPT for debugging & code assistance</li>
                        <li>Rapid prototyping</li>
                    </ul>
                </div>
                <div className="skill">
                    <h2>Business / CRM </h2>
                    <ul>
                        <li>HubSpot</li>
                    </ul>
                </div>
            </div>

            <hr style={{ margin: "16px" }} />
            {/* hr */}

            <div className="other_skill">
                <a href="#">
                    <span>O</span><span>t</span><span>h</span><span>e</span><span>r</span><span>s</span>
                    <span>~</span>
                    <span>S</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s</span>
                </a>

                <div className="skill">
                    <h2>Languages</h2>
                    <ul>
                        <li>Burmese : Native</li>
                        <li>English : Intermediate</li>
                        <li>Japanese : N4</li>
                        <li>Thai : Basic</li>
                    </ul>
                </div>

                <div className="skill">
                    <h2>Soft Skills</h2>
                    <ul>
                        <li>Clear communication</li>
                        <li>Team collaboration</li>
                        <li>Strong focus & concentration</li>
                        <li>Problem-solving mindset</li>
                        <li>Time management</li>
                        <li>Adaptable with a growth mindset</li>
                        <li>Eager to learn new technologies</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
