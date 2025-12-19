// src/pages/About.jsx
import "./about.css";

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
            <span className="timeline-date">Aug 2023 – September 2025</span>
            <h3>Associate Software Engineer</h3>
            <h4>Tech Mahindra</h4>
            <ul>
                <li>Developed full stack applications using Java, Spring Boot, SQL, and React</li>
                <li>Designed and implemented RESTful APIs within microservices-based systems</li>
                <li>Worked with relational databases and focused on cloud Support using Snowflake .</li>
            </ul>

          </div>
        </div>

        {/* INTERNSHIP */}
        <div className="timeline-item left">
          <span className="timeline-dot" />
          <div className="timeline-card">
            <span className="timeline-date">Jun 2022 – Aug 2022</span>
            <h3>React Frontend Developer Intern</h3>
            <h4>Yamak.ai</h4>
                <ul>
                <li>Assisted in developing frontend components using React and JavaScript</li>
                <li>Integrated REST APIs and worked on UI enhancements under senior developer guidance</li>
            </ul>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="timeline-item right">
          <span className="timeline-dot" />
          <div className="timeline-card">
            <span className="timeline-date">2019 – 2023</span>
            <h3>Bachelor of Technology</h3>
            <h4>Computer Science</h4>
            <ul>
              <li>Strong foundation in Java, OOP, and core CS concepts</li>
              <li>Built academic and personal full-stack projects</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
