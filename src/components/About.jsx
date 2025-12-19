import React from 'react';
import './About.css';

function About() {
    return (
        <div className="tab-section">
            <h2 className="tab-title">About Me</h2>
            <p>
                I’m a passionate and curious developer with a strong interest in software development, web technologies, and data-driven solutions.
                My journey has involved building intuitive user interfaces, writing clean and scalable backend logic, and uncovering insights from data to support meaningful decisions.
            </p>
            <p>
                On the web development side, I enjoy working with modern front-end frameworks like React and creating responsive, accessible interfaces. I also enjoy designing backend APIs, handling data flow, and building full-stack applications.
            </p>
            <p>
                In the data domain, I love exploring, analyzing, and visualizing data using tools like Python (Pandas, NumPy, Matplotlib) and SQL. Whether it’s cleaning data, building dashboards, or running predictive models, I thrive on transforming raw information into actionable insights.
            </p>
            <p>
                My goal is to keep learning, build impactful applications, and collaborate with others to solve real-world problems using a mix of creativity and code.
            </p>
            <h3 className="interests-heading">My Core Interests</h3>

            <div className="interests-container">
                <div className="interest-card">
                    <h4>Web Development</h4>
                    <p>Building responsive, accessible websites and web apps with React and modern tools.</p>
                </div>
                <div className="interest-card">
                    <h4>Software Engineering</h4>
                    <p>Designing scalable and maintainable backend systems focused on performance and reliability.</p>
                </div>
                <div className="interest-card">
                    <h4>Data Science</h4>
                    <p>Exploring complex datasets to uncover patterns, trends, and actionable insights.</p>
                </div>
                <div className="interest-card">
                    <h4>Data Analytics</h4>
                    <p>Transforming raw data into clear visualizations and business intelligence reports.</p>
                </div>
            </div>
        </div>


    );
}

export default About;
