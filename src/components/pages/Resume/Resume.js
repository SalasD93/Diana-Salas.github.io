import React from 'react';
import Pdf from './Documents/Salas-Diana-Resume.pdf';
import './ResumeStyles.css'

function Resume() {
    return (
        <section>
            <h1 id="resume-header">Resume</h1>
            <p id="resume-link"><a href={Pdf} target="_blank" rel="noreferrer">DOWNLOAD RESUME</a></p>
            <div id="container">
                <div className="list-container">
                <h2>FRONTEND Proficiencies</h2>
                <ul className="list">
                    <li>
                        HTML5
                    </li>
                    <li>
                        CSS3
                    </li>
                    <li>
                        JavaScript/ES6
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        Responsive Design
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        XML
                    </li>
                    <li>
                        Bootstrap
                    </li>
                    <li>
                        Search Engine Optimization (SEO)
                    </li>
                    <li>
                        Tailwind
                    </li>
                    <li>
                        Bulma
                    </li>
                    <li>
                        API Integration
                    </li>
                </ul>
                </div>
                <div className="list-container">
                <h2>BACKEND Proficiencies</h2>
                <ul className="list">
                    <li>
                        APIs
                    </li>
                    <li>
                        Node
                    </li>
                    <li>
                        Express
                    </li>
                    <li>
                        SQL/MySQL/Sequelize
                    </li>
                    <li>
                        MongoDB/Mongoose
                    </li>
                    <li>
                        REST
                    </li>
                    <li>
                        GraphQL
                    </li>
                    <li>
                        OOP
                    </li>
                    <li>
                        JSON
                    </li>
                    <li>
                        Inquirer
                    </li>
                    <li>
                        Handlebars
                    </li>
                </ul>
                </div>
                <div className="list-container">
                <h2>Other Relevant Skills</h2>
                <ul className="list">
                    <li>
                        Git/GitHub/Git Bash
                    </li>
                    <li>
                        VS Code
                    </li>
                    <li>
                        Heroku
                    </li>
                    <li>
                        Google Maps APIs
                    </li>                    
                </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;