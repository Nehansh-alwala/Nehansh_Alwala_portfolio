import React from 'react';
import { FaGraduationCap, FaTools, FaAward, FaBook, FaBriefcase } from 'react-icons/fa';

import './Resume.css';

function Resume() {
  return (
    <div className="resume-section">
      <h2 className="resume-title">Resume</h2>

      <div className="section-heading">
        <FaGraduationCap className="icon-heading" />
        <h3>Education</h3>
      </div>

      <div className="timeline">

        {/* Master's */}
        <div className="timeline-item">
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <p className="degree">Master of Science in Computer Science</p>
            <p className="institution">Florida Atlantic University</p>
            <p className="year">Aug 2023 – May 2025</p>
            <p><strong>Certificate:</strong> Artificial Intelligence</p>
            <p><strong>Coursework:</strong> Software Engineering, Intro to Data Science, Analysis of Algorithms, Data Mining and Machine Learning, Deep Learning, Cloud Security, Artificial Intelligence, Information Retrieval</p>
          </div>
        </div>

        {/* Bachelor's */}
        <div className="timeline-item">
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <p className="degree">Bachelor of Technology in Computer Science & Engineering</p>
            <p className="institution">Hyderabad Institute of Technology and Management</p>
            <p className="year">Aug 2019 – June 2023</p>
            <p><strong>Coursework:</strong> Data Science, Data Analytics, Object-Oriented Programming, Data Structures, Design and Analysis of Algorithms, Software Engineering, Machine Learning, Operating Systems, Software Process & Project Management</p>
          </div>
        </div>

      </div>
      {/* experience */}
      <div className="exp-section">
        <FaBriefcase className="exp-icon" />
        <h3>Work Experience</h3>
      </div>

      <div className="exp-timeline">


        <div className="exp-timeline-item">
          <div className="exp-timeline-line"></div>
          <div className="exp-timeline-content">
            <p className="role">Front-end software Developer</p>
            <p className="industry">Nohung</p>
            <p className="years">July 2022 – Jan 2023</p>
            <p> - Developed responsive and modular front-end components using React.js, JavaScript (ES6+), HTML5, and CSS3.</p>
            <p> - Implemented core features such as product catalogs, inventory management dashboards, and checkout workflows.</p>
            <p> - Collaborated with UI/UX designers to translate wireframes and prototypes into accessible, mobile-first web applications.</p>
            <p> - Integrated RESTful APIs for payment gateways and user authentication using fetch and Axios.</p>
            <p> - Conducted unit and integration testing using Jest and React Testing Library to ensure cross-browser compatibility and optimal performance.</p>
            <p> - Followed Agile development practices, participated in sprint planning, stand-ups, and peer code reviews using Git and GitHub.</p>
          </div>
        </div>
      </div>
      {/* === Skills Section === */}

      <div className="skills-section">

        <div className="skills-heading">
          <FaTools className="skills-icon" />
          <h3>Skills</h3>
        </div>

        <div className="skills-group">
          <h4>Web Development</h4>
          <div className="skills-grid">
            <span className="skill-chip">HTML</span>
            <span className="skill-chip">CSS</span>
            <span className="skill-chip">JavaScript</span>
            <span className="skill-chip">React.js</span>
            <span className="skill-chip">React Native</span>
            <span className="skill-chip">Node.js</span>
          </div>
        </div>

        <div className="skills-group">
          <h4>Data Science & Analytics</h4>
          <div className="skills-grid">
            <span className="skill-chip">Python</span>
            <span className="skill-chip">Pandas</span>
            <span className="skill-chip">NumPy</span>
            <span className="skill-chip">Scikit-learn</span>
            <span className="skill-chip">Machine Learning</span>
            <span className="skill-chip">Matplotlib</span>
            <span className="skill-chip">Seaborn</span>
          </div>
        </div>

        <div className="skills-group">
          <h4>Databases & Warehousing</h4>
          <div className="skills-grid">
            <span className="skill-chip">MySQL</span>
            <span className="skill-chip">SQLite</span>
            <span className="skill-chip">PostgreSQL</span>
            <span className="skill-chip">Snowflake</span>
            <span className="skill-chip">Kafka</span>
          </div>
        </div>

        <div className="skills-group">
          <h4>Platforms & Tools</h4>
          <div className="skills-grid">
            <span className="skill-chip">Git</span>
            <span className="skill-chip">VS Code</span>
            <span className="skill-chip">Jupyter Notebook</span>
          </div>
        </div>

      </div>
      {/* === Achievements === */}
      <div className="ac-section">

        <div className="ac-heading">
          <FaAward className="ac-icon" />
          <h3>Achievements</h3>
        </div>

        <div className="ac-subsection">
          <ul className="ac-list">
            <li>
              Built a face recognition application using Python during the AI-For-India event hosted in Apr 2021 by GUVI GEEK Networks at IITM Research Park, aimed at breaking the Guinness World Record.
            </li>
          </ul>
        </div>

        


      </div>

      <div className="publications-section">
        <div className="pub-heading">
          <FaBook className="pub-icon" />
          <h3>Publications</h3>
        </div>

        <ul className="pub-list">
          <li>
            <strong>D. Varma, A. Nehansh, and P. Swathy.</strong> <br />
            <em>Data Preprocessing Toolkit: An Approach to Automate Data Preprocessing.</em><br />
            <span>International Journal of Scientific Research in Engineering and Management (IJSREM), 2023.</span>
          </li>

          <li>
            <strong>D. Varma, A. Nehansh, J. Adya, and A. Gupta.</strong> <br />
            <em>Automated Debugging: Still a Dream?</em><br />
            <span>International Journal of Scientific Research in Engineering and Management (IJSREM), 2023.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
