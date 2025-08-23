import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "Java",
      level: "Intermediate",
      experience: "Hands-on with OOP and problem solving",
      certificate: "/Java.pdf",
    },
    {
      name: "DSA",
      level: "Intermediate",
      experience: "Solved 200+ problems on LeetCode",
      certificate: "/DSA.pdf",
    },
    {
      name: "HTML/CSS",
      level: "Intermediate",
      experience: "Built multiple responsive websites",
      certificate: "/Web_Development.pdf",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      experience: "Frontend projects - DOM manipulation",
      certificate: "/Javascript.pdf",
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      experience: "Worked with MERN stack projects",
      certificate: "/Web_Development.pdf",
    },
    {
      name: "Express.js",
      level: "Beginner",
      experience: "Built basic APIs using this FrameWork",
      certificate: "/Web_Development.pdf",
    },
    {
      name: "React.js",
      level: "Intermediate",
      experience: "Developed beautiful projects",
      certificate: "/Web_Development.pdf",
    },
    {
      name: "Node.js",
      level: "Intermediate",
      experience: "Backend APIs with REST",
      certificate: "/Web_Development.pdf",
    },
    {
      name: "Machine Learning",
      level: "Beginner",
      experience: "Implemented neural networks basics",
      certificate: "/ML.pdf",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
              <div className="skill-bar">
                <div
                  className={`skill-fill ${skill.level.toLowerCase()}`}
                ></div>
              </div>
              {/* Experience line */}
              <p className="experience">{skill.experience}</p>
              {/* Certificate button */}
              <a
                href={skill.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
