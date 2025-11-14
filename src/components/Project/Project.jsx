import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Project() {
  const particlesInit = async (main) => {
    await loadStarsPreset(main);
  };

  const particlesOptions = {
    preset: "stars",
    background: {
      color: "transparent",
    },
    particles: {
      color: { value: "#ffffff" },
      size: {
        value: 1.3,
        random: true,
      },
      move: {
        enable: true,
        speed: 0.35,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
      number: {
        value: 45,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.35,
        random: true,
        animation: {
          enable: true,
          speed: 0.7,
          minimumValue: 0.1,
          sync: false,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Inventory Management System",
      description:
        "Developed a full-stack application to help businesses track and manage stock levels, purchases, and sales across operations.",
      githubUrl:
        "https://github.com/bhanu87777/AWS-Inventory-Management-System.git",
      tech: [
        "React.js",
        "JavaScript",
        "Redux Toolkit",
        "RTK Query",
        "Express.js",
        "Recharts",
        "AWS EC2",
        "AWS RDS",
        "AWS Amplify",
        "AWS API Gateway",
        "AWS S3",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "End-to-End Data Pipeline & Analysis",
      description:
        "Built an end-to-end data pipeline to transform raw data into clean, business-ready datasets, enabling actionable insights with data storage layers and batch-processing procedures.",
      githubUrl:
        "https://github.com/bhanu87777/End-to-End-Pipeline-Data-Analysis.git",
      tech: [
        "Data Modeling",
        "ETL",
        "SQL",
        "Stored Procedures",
        "Data Cleaning",
        "Data Normalization",
        "Data Visualization",
      ],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 3,
      title: "AI Finance Dashboard",
      description:
        "Developed a Full-stack data analytics dashboard to track financial KPIs, product performance, and transactions with revenue forecasting using regression analysis.",
      githubUrl: "https://github.com/bhanu87777/AI-Finance-Dashboard.git",
      tech: [
        "React.js",
        "JavaScript",
        "Redux Toolkit",
        "Recharts",
        "Express.js",
        "MongoDB",
        "regression-js",
        "Linear Regression",
        "Polynomial Regression",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      title: "XENSENSE-V1: Deep Learning Framework",
      description:
        "Developed a Deep Learning Framework to enhance video object segmentation and semantic labelling for autonomous driving systems with pothole and road defect detection pipeline.",
      githubUrl: "https://github.com/bhanu87777/Research-Work-XenSense-V.1.git",
      tech: [
        "Deep Learning",
        "Computer Vision",
        "Python",
        "TensorFlow/PyTorch",
        "Video Processing",
        "Object Segmentation",
        "Semantic Labelling",
        "Temporal Awareness",
        "Memory Modules",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Social Network Analysis using GraphSAGE",
      description:
        "Used GraphSAGE for clustering/node classification of a social network, achieving 80.5% accuracy-outperforming baseline models (Logistic Regression: 57.5%, DeepWalk: 68.6%) by ~22% and I have also shown that increasing neighbor samples (S1, S2) generally improved accuracy; however, adding more layers (K = 3) reduced performance. Variable sampling slightly outperformed fixed sampling, highlighting the advantage of adaptive neighborhood selection.",
      githubUrl:
        "https://github.com/bhanu87777/Social-Network-Analysis-GraphSAGE.git",
      tech: [
        "Python",
        "PyTorch",
        "PyTorch Geometric",
        "NetworkX",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      title: "Netflix Clone",
      description:
        "Developed a full-stack Netflix-like web application with user authentication, dynamic movie listings, and a responsive UI. Integrated The Movie Database (TMDb) API for real-time data fetching and implemented smooth navigation and state management for an interactive user experience.",
      githubUrl: "https://github.com/bhanu87777/Netflix-Clone.git",
      tech: [
        "React",
        "Redux",
        "Firebase",
        "Tailwind CSS",
        "Axios",
        "TMDb API",
        "Vite",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <>
      <style>{`
        .projects-dashboard {
          min-height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          padding: 100px 8%;
          position: relative;
          overflow: hidden;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .projects-dashboard::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 213, 21, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 170, 255, 0.08) 0%, transparent 50%);
          z-index: 2;
        }

        .dashboard-content {
          position: relative;
          z-index: 3;
          max-width: 1400px;
          margin: 0 auto;
        }

        .dashboard-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 80px;
          background: linear-gradient(45deg, #ffffff, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          position: relative;
        }

        .dashboard-title::after {
          content: "";
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 4px;
          background: linear-gradient(90deg, #00d515, #00aaff);
          border-radius: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 40px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: block;
          min-height: 280px;
        }

        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.6s ease;
        }

        .project-card:hover::before {
          left: 100%;
        }

        .project-card:hover {
          transform: translateY(-15px) scale(1.02);
          border-color: rgba(0, 213, 21, 0.4);
          box-shadow: 
            0 25px 50px rgba(0, 213, 21, 0.3),
            0 0 60px rgba(0, 170, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .project-number {
          font-size: 1.2rem;
          font-weight: 700;
          color: #00d515;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .project-name {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #ffffff, #00d515);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .project-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #e3e3e3;
          margin-bottom: 25px;
          opacity: 0.9;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .tech-tag {
          background: rgba(0, 213, 21, 0.1);
          border: 1px solid rgba(0, 213, 21, 0.3);
          border-radius: 15px;
          padding: 8px 16px;
          font-size: 0.85rem;
          color: #00d515;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .project-card:hover .tech-tag {
          background: rgba(0, 213, 21, 0.2);
          border-color: rgba(0, 213, 21, 0.6);
          transform: translateY(-2px);
        }

        .project-arrow {
          position: absolute;
          bottom: 30px;
          right: 30px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #00d515, #00aaff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-10px);
        }

        .project-card:hover .project-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .project-arrow svg {
          width: 20px;
          height: 20px;
          fill: #0b004e;
        }

        /* Project Detail Page Styles removed (not needed since cards link to GitHub) */

        /* Project-specific gradients */
        .project-card:nth-child(1):hover {
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 
            0 25px 50px rgba(168, 85, 247, 0.3),
            0 0 60px rgba(236, 72, 153, 0.2);
        }

        .project-card:nth-child(2):hover {
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 
            0 25px 50px rgba(59, 130, 246, 0.3),
            0 0 60px rgba(34, 211, 238, 0.2);
        }

        .project-card:nth-child(3):hover {
          border-color: rgba(34, 197, 94, 0.4);
          box-shadow: 
            0 25px 50px rgba(34, 197, 94, 0.3),
            0 0 60px rgba(16, 185, 129, 0.2);
        }

        .project-card:nth-child(4):hover {
          border-color: rgba(249, 115, 22, 0.4);
          box-shadow: 
            0 25px 50px rgba(249, 115, 22, 0.3),
            0 0 60px rgba(239, 68, 68, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .projects-dashboard {
            padding: 80px 5%;
          }

          .dashboard-title {
            font-size: 3.5rem;
          }

          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
          }

          .project-detail-title {
            font-size: 3.5rem;
          }

          .project-detail-description {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 768px) {
          .projects-dashboard {
            padding: 60px 5%;
          }

          .dashboard-title {
            font-size: 3rem;
            margin-bottom: 60px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-top: 40px;
          }

          .project-card {
            padding: 30px;
            min-height: 250px;
          }

          .project-name {
            font-size: 1.8rem;
          }

          .project-detail-title {
            font-size: 2.8rem;
          }

          .project-detail-description {
            font-size: 1.2rem;
          }

          .back-button {
            top: 20px;
            left: 20px;
          }
        }

        @media (max-width: 480px) {
          .projects-dashboard {
            padding: 40px 5%;
          }

          .dashboard-title {
            font-size: 2.5rem;
          }

          .project-card {
            padding: 25px;
            min-height: 220px;
          }

          .project-name {
            font-size: 1.6rem;
          }

          .project-description {
            font-size: 1rem;
          }

          .project-detail-title {
            font-size: 2.2rem;
          }

          .project-detail-description {
            font-size: 1.1rem;
          }
        }

        /* Animation for project cards */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card {
          animation: fadeInUp 0.8s ease-out;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      <section className="projects-dashboard" id="projects">
        {/* Particle Background */}
        <div className="particles-container">
          <Particles
            id="projects-particles"
            init={particlesInit}
            options={particlesOptions}
          />
        </div>

        <div className="dashboard-content">
          <h1 className="dashboard-title">My Projects</h1>

          <div className="projects-grid">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.githubUrl || "#"}
                target={project.githubUrl ? "_blank" : undefined}
                rel={project.githubUrl ? "noopener noreferrer" : undefined}
                className="project-card"
                title={
                  project.githubUrl
                    ? `Open ${project.title} on GitHub`
                    : project.title
                }
              >
                <div className="project-number">Project {project.id}</div>
                <h2 className="project-name">{project.title}</h2>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-arrow">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
