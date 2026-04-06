// src/pages/About.jsx
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      
      {/* HEADER */}
      <div className="about-header">
        <h2>About & Experience</h2>
        <p>My professional journey so far</p>
      </div>

      {/* TIMELINE */}
      <div className="timeline">

        {/* CURRENT ROLE */}
        <div className="timeline-item right">
          <span className="timeline-dot" />
          <div className="timeline-card">
            <span className="timeline-date">Sept 2025 – Present</span>
            <h3>Technical Support Consultant</h3>
            <h4>Adobe (via Omhra)</h4>
            <ul>
              <li>Provide client-facing technical support for Adobe Target platform</li>
              <li>Investigate and troubleshoot issues related to activities, audiences, and experience delivery</li>
              <li>Assist customers in diagnosing VEC behavior, SPA view configuration, and reporting discrepancies</li>
              <li>Guide clients on best practices for Adobe Target setup and usage</li>
              <li>Collaborate with internal engineering teams to escalate and resolve product-related issues</li>
              <li>Analyze network calls, browser console logs, and configurations to identify root causes</li>
            </ul>
          </div>
        </div>

        {/* PREVIOUS ROLE */}
        <div className="timeline-item left">
          <span className="timeline-dot" />
          <div className="timeline-card">
            <span className="timeline-date">Aug 2023 – Sept 2025</span>
            <h3>Associate Software Engineer</h3>
            <h4>Tech Mahindra</h4>
            <ul>
              <li>Developed full-stack applications using Java, Spring Boot, SQL, and React</li>
              <li>Designed and implemented RESTful APIs in microservices architecture</li>
              <li>Worked with relational databases and supported cloud data workflows using Snowflake</li>
              <li>Debugged application issues and contributed to performance improvements</li>
            </ul>
          </div>
        </div>

        {/* INTERNSHIP */}
        <div className="timeline-item right">
          <span className="timeline-dot" />
          <div className="timeline-card">
            <span className="timeline-date">Jun 2022 – Aug 2022</span>
            <h3>React Frontend Developer Intern</h3>
            <h4>Yamak.ai</h4>
            <ul>
              <li>Built frontend components using React and JavaScript</li>
              <li>Integrated APIs and supported UI improvements</li>
              <li>Collaborated with senior developers on feature enhancements</li>
            </ul>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="timeline-item left">
          <span className="timeline-dot" />
          <div className="timeline-card">
            <span className="timeline-date">2019 – 2023</span>
            <h3>Bachelor of Technology</h3>
            <h4>Computer Science</h4>
            <ul>
              <li>Strong foundation in Java, OOP, Data Structures, and Web Development</li>
              <li>Built academic and personal full-stack projects</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
