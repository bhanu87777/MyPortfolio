import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I'm currently pursuing my Bachelor of Engineering (B.E.) – Computer
          Science and Engineering degree from B.M.S College of Engineering,
          Bangalore with <span className="highlight">(CGPA 7.31/10)</span>.
          During my academic experience, I acquired a solid foundation in
          Programming Languages like <span className="highlight">Java</span> and{" "}
          <span className="highlight">Python</span>, and practical experience in{" "}
          <span className="highlight">Data Structures</span>,{" "}
          <span className="highlight">Algorithms</span>, and{" "}
          <span className="highlight">Software Development</span>. I also did
          projects on <span className="highlight">Web Development</span>,{" "}
          <span className="highlight">App Development</span>, and{" "}
          <span className="highlight">Neural Networks (ML)</span>, which
          provided me practical problem-solving and teamwork experience.
        </p>

        <h3>🎓 Education</h3>
        <ul className="education-list">
          <li>
            <span className="highlight">
              B.E. – Computer Science and Engineering
            </span>
            , B.M.S College of Engineering, Bangalore —{" "}
            <span className="highlight">CGPA: 7.31/10</span>
          </li>

          <li>
            <span className="highlight">12th Grade:</span> 96.5%
            <a
              href="/12MarksCard.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              12th Marks Card
            </a>
          </li>

          <li>
            <span className="highlight">10th Grade:</span> 94.4%
            <a
              href="/10MarksCard.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              10th Marks Card
            </a>
          </li>
        </ul>

        <h3>🎨 Hobbies</h3>
        <ul className="hobbies-list">
          <li>Reading books and understanding the world of AI/ML</li>
          <li>Playing chess & solving DSA Problems</li>
          <li>Listening to music</li>
        </ul>

        <h3>🚀 Career Goals</h3>
        <p>
          I aim to work as a{" "}
          <span className="highlight">Software Developer</span> where I can
          apply my skills to solve real-world problems, grow as a professional,
          and contribute to impactful projects.
        </p>
      </div>
    </section>
  );
}

export default About;
