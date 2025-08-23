import React from "react";
import "./Projects.css";
import project1 from "../Assets/neural_network.jpg";
import project2 from "../Assets/fitness.jpg";
import project3 from "../Assets/e.jpg";
import project4 from "../Assets/web.jpg";

function Projects() {
  const projects = [
    {
      title: "Social Network Analysis using Graph Neural Network",
      description:
        "Implemented a Graph Neural Network (GNN) to analyze Social Network Connections.",
      tech: ["Python", "Matplotlib", "GNN"],
      image: project1,
      link: "https://github.com/bhanu87777/Project-1.git",
    },
    {
      title: "Fitness Tracker Android App - NutriTrack",
      description:
        "Android app to track fitness activities, calories burned, and daily workout routines.",
      tech: ["Flutter", "Android Studio", "Dart"],
      image: project2,
      link: "https://github.com/bhanu87777/App-Development-Projects.git",
    },
    {
      title: "E-Commerce Website",
      description:
        "Developed a full-stack e-commerce web app with product listing, cart, and payment gateway integration.",
      tech: ["React", "Node.js", "MongoDB"],
      image: project3,
      link: "https://github.com/bhanu87777/Web-Development-Project---2.git",
    },
    {
      title: "Websites Built By Me",
      description:
        "A showcase of multiple websites I have designed and developed, ranging from portfolios to web apps.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      image: project4,
      link: "https://github.com/bhanu87777/Web-Development-Project.git",
    },
    {
      title: "Others",
      description:
        "Check out my LeetCode profile and certifications repository.",
      tech: [],
      image: null, // no image here
      link: null, // handled separately
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Only show image if it exists */}
              {project.image && <img src={project.image} alt={project.title} />}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Custom buttons for "Others" card */}
                {project.title === "Others" ? (
                  <div className="other-buttons">
                    <a
                      href="https://leetcode.com/u/BHANU777/"
                      className="project-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LeetCode
                    </a>
                    <a
                      href="https://github.com/bhanu87777/Certificate.git"
                      className="project-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certifications
                    </a>
                  </div>
                ) : (
                  <a
                    href={project.link}
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
