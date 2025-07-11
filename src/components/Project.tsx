import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import bot_atm from '../assets/images/bot_atm.png';
import bot_hc from '../assets/images/bot_hc.png';
import bot_jarkom from '../assets/images/bot_jarkom.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
      <div className="projects-container" id="projects">
        <h1>Selected Projects</h1>
  
        {/* YouTube project — full width */}
        <div className="project" style={{ width: '720px', margin: '0 auto', marginBottom: '40px' }}>
          <div className="zoom" style={{ aspectRatio: '16 / 9' }}>
            <iframe
              src="https://www.youtube.com/embed/h4Xkh6hyD4g"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            ></iframe>
          </div>
          <h2>Project Ekosistem</h2>
          <p>
            A one-stop solution platform designed to centralize and streamline multiple internal tools across departments. This project integrates various sub-applications into a unified system to improve efficiency and collaboration within the organization.
          </p>
        </div>
  
        {/* ATM/CRM project — full width */}
        <div className="project" style={{ width: '720px', margin: '0 auto', marginBottom: '40px' }}>
          <a href="#/" target="_blank" rel="noreferrer">
            <img src={bot_atm} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <h2>ATM/CRM Auto Report</h2>
          <p>
            Built an automation tool to generate and deliver ATM/CRM performance reports, significantly reducing manual effort and accelerating execution time. This solution improved efficiency and ensured timely access to critical operational data.
          </p>
        </div>
  
        {/* Two bot projects — side by side */}
        <div className="projects-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Telegram Jarkom Bot */}
          <div className="project" style={{ width: '340px' }}>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={bot_jarkom} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <h2>Telegram Jarkom Bot</h2>
            <p>
              Designed, developed, and deployed a Telegram bot using Python to automatically deliver real-time reports on network status, enabling faster response and improved operational visibility.
            </p>
          </div>
  
          {/* Human Capital Bot */}
          <div className="project" style={{ width: '340px' }}>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={bot_hc} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <h2>Human Capital Bot</h2>
            <p>
              Developed a Human Capital Telegram bot that tracks report submissions and automatically identifies individuals who haven't completed their reports. The bot sends scheduled reminders to ensure timely submissions and improve accountability.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  

export default Project;