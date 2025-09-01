import React from "react";
import "./Projects.css";
import project1 from "../Assets/neural_network.jpg";
import project2 from "../Assets/fitness.jpg";
import project3 from "../Assets/Logo.png";
import project4 from "../Assets/e.jpg";

function Projects() {
  const projects = [
    {
      title: "Social Network Analysis using Graph Neural Network",
      description:
        "Implemented a Graph Neural Network (GNN) to analyze relations and Clustering.",
      tech: ["Python", "Matplotlib", "GNN"],
      image: project1,
      link: "https://github.com/bhanu87777/Project-1.git",
    },
    {
      title: "NutriTrack - Fitness Tracker Android App",
      description:
        "Android app to track fitness activities, calories burned, and daily workout routines.",
      tech: ["Flutter", "Android Studio", "Dart"],
      image: project2,
      link: "https://github.com/bhanu87777/App-Development-Projects.git",
    },
    {
      title: "StockIQ - Stock Inventory Management",
      description:
        "An efficient inventory management system to manage products, customers, bills with ease.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      image: project3,
      link: "https://github.com/bhanu87777/Web-Development-Project---2.git",
    },
    {
      title: "Online Voting System",
      description:
        "E-Voting System – A secure and efficient electronic voting platform for managing voters, candidates, and election results.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      image: project4,
      link: "https://github.com/bhanu87777/Online-Voting-System.git",
    },
    {
      title: "Java Projects",
      description:
        "Developed Java-based projects using OOP principles and Multithreading, demonstrating skills in object-oriented design, concurrency, and efficient application development.",
      tech: [],
      image: null,
      link: null,
    },
    {
      title: "Others",
      description: "Check out my other achievements.",
      tech: [],
      image: null,
      link: null,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
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

                {/* Buttons logic */}
                {project.title === "Java Projects" ? (
                  <div className="java-buttons">
                    <a
                      href="https://github.com/bhanu87777/JavaProject-Chat-App.git"
                      className="project-btn green"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat Application
                    </a>
                    <a
                      href="https://github.com/bhanu87777/JavaProject-Library-Management.git"
                      className="project-btn green"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Library Management System
                    </a>
                    <a
                      href="https://github.com/bhanu87777/JavaProject-Student-Result-Management.git"
                      className="project-btn green"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Student Result Management
                    </a>
                  </div>
                ) : project.title === "Others" ? (
                  <div className="other-buttons">
                    <a
                      href="https://leetcode.com/u/BHANU777/"
                      className="project-btn green"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LeetCode
                    </a>
                    <a
                      href="https://github.com/bhanu87777/Certificate.git"
                      className="project-btn green"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certifications
                    </a>
                    <a
                      href="https://github.com/bhanu87777?tab=repositories"
                      className="project-btn green"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bhanuprakash777/?originalSubdomain=in"
                      className="project-btn green"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                ) : (
                  <a
                    href={project.link}
                    className="project-btn green"
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
