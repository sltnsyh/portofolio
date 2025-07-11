import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Php",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "SQL",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "WinSCP",
    "Linux",
    "OpenVPN",
];

const labelsThird = [
    "Python",
    "Pandas",
    "TelegramBot",
    "PyInstaller",
    "Py2exe",
   
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Developer</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as Django and Laravel, utilizing tools like Bootstrap and Blade for responsive and dynamic frontend development. I have a strong understanding of business processes and backend logic, allowing me to design systems that align closely with operational goals and user needs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps</h3>
                    <p>Once the application is built, I containerize and deploy their applications using Docker, streamlining development environments and enabling smooth CI/CD pipelines and automated deployments. I also focus on securing application access and infrastructure, including the use of OpenVPN for secure network tunneling and remote connectivity during development and deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Automation</h3>
                    <p>Stay relevant in the market by leveraging Python for automation and integration. I have experience building robust automation scripts and Telegram bots that streamline workflows, deliver real-time reports, and support intelligent decision-making by integrating with APIs such as Google Sheets, and other Google APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;