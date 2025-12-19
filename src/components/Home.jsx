import React, { useState } from 'react';
import './Home.css';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import profilePic from './assets/profile.png';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [fade, setFade] = useState(true);
  const [direction, setDirection] = useState('left');
  const tabOrder = ['about', 'projects', 'resume', 'contact'];

  const changeTab = (tab) => {
    if (tab !== activeTab) {
      const currentIndex = tabOrder.indexOf(activeTab);
      const newIndex = tabOrder.indexOf(tab);
      setDirection(newIndex > currentIndex ? 'right' : 'left');
      setFade(false);
      setTimeout(() => {
        setActiveTab(tab);
        setFade(true);
      }, 300);
    }
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="container">

      <div className="left-column">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2 className="name">Nehansh Alwala</h2>
        <hr className="divider" />
        <div className="contact-info">
          <div className="contact-row">
            <FaEnvelope className="icon" />
            <div className="contact-text">
              <span className="contact-label">Email</span>
              <span className="contact-detail">alwalanehansh@gmail.com</span>
            </div>
          </div>

          <div className="contact-row">
            <FaPhone className="icon" />
            <div className="contact-text">
              <span className="contact-label">Phone</span>
              <span className="contact-detail">+1 561-987-3866</span>
            </div>
          </div>

          <div className="contact-row">
            <FaMapMarkerAlt className="icon" />
            <div className="contact-text">
              <span className="contact-label">Location</span>
              <span className="contact-detail">Boca Raton, FL</span>
            </div>
          </div>
        </div>


        <div className="social-icons">
          <a href="https://www.linkedin.com/in/nehansh-alwala-9b0445250" target="_blank" rel="noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>

      <div className="right-column">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <button
                className={activeTab === 'about' ? 'active' : ''}
                onClick={() => changeTab('about')}>About</button></li>
            <li className="nav-item">
              <button
                className={activeTab === 'projects' ? 'active' : ''}
                onClick={() => changeTab('projects')}>Projects</button></li>
            <li className="nav-item">
              <button
                className={activeTab === 'resume' ? 'active' : ''}
                onClick={() => changeTab('resume')}>Resume</button></li>
            <li className="nav-item">
              <button
                className={activeTab === 'contact' ? 'active' : ''}
                onClick={() => changeTab('contact')}>Contact</button></li>
          </ul>
        </nav>

        <div className={`tab-content ${fade ? (direction === 'right' ? 'fade-in-right' : 'fade-in-left') : (direction === 'right' ? 'fade-out-left' : 'fade-out-right')}`}>
          {renderTab()}
        </div>
      </div>
    </div>
  );
}

export default Home;
