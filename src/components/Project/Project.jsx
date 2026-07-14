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
      title: "StockPilot — Inventory Management System",
      description:
        "A full-stack inventory console built on the principle that stock is a ledger, not a number — on-hand quantity is derived from an append-only movement ledger with race-safe writes and atomic PO receiving, topped with a Claude-powered reorder advisor that ranks what to order, what can wait, and what's dead stock.",
      githubUrl:
        "https://github.com/bhanu87777/StockPilot-Inventory-Management-System.git",
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "PostgreSQL",
        "Prisma",
        "NextAuth",
        "Anthropic Claude SDK",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 3,
      title: "AURUM — AI Finance Dashboard",
      description:
        "A full-stack financial analytics dashboard for a luxury D2C brand — P&L, expense composition, unit economics, and a transaction ledger, plus a from-scratch OLS revenue forecast and a Claude-powered CFO analyst that writes an executive briefing from the live numbers.",
      githubUrl: "https://github.com/bhanu87777/Aurum-Finance-Dashboard.git",
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "PostgreSQL",
        "Prisma",
        "Anthropic Claude SDK",
      ],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      title: "ChurnGuard — AI Churn-Risk Dashboard",
      description:
        "An AI churn-risk dashboard for SaaS that turns each account's raw behavior (logins, feature use, tickets, failed payments, NPS) into an explainable 0–100 churn-risk score with a plain-English reason and a recommended save action, using Claude tool-use plus a deterministic heuristic fallback.",
      githubUrl: "https://github.com/bhanu87777/ChurnGuard.git",
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "PostgreSQL",
        "Prisma",
        "Anthropic Claude SDK",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "AskMyDocs — RAG Document Q&A",
      description:
        "A full Retrieval-Augmented Generation document Q&A app — upload PDFs/TXT/Markdown, ask in plain English, and get answers grounded only in your files with inline citations to the exact source passage and page. Embeddings run locally on-device; generation runs via Claude with an offline extractive fallback.",
      githubUrl:
        "https://github.com/bhanu87777/AskMyDocs-RAG-Document-QA.git",
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
        "Transformers.js",
        "pdf-parse",
        "Anthropic Claude SDK",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 6,
      title: "BookIt — Appointment Booking System",
      description:
        "A multi-vertical appointment booking platform (doctors, salons, sports turfs) with live slot availability and an admin panel. Its headline feature is guaranteeing zero double-bookings via PostgreSQL GiST exclusion constraints, advisory locks, and in-transaction re-validation.",
      githubUrl:
        "https://github.com/bhanu87777/BookIt-Appointment-Booking-System.git",
      tech: [
        "React 18",
        "TypeScript",
        "Vite",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Zod",
        "JWT",
        "Nodemailer",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 7,
      title: "Eventix — Event Ticketing Platform",
      description:
        "A native Android event-ticketing app backed by a Node.js + PostgreSQL API, built to sell limited tickets without ever overselling under concurrency (proven by a load test firing 200 purchases at 50 seats). Includes a signed-QR ticket wallet and a CameraX + ML Kit check-in scanner for organizers.",
      githubUrl:
        "https://github.com/bhanu87777/Eventix-Event-Ticketing-Platform.git",
      tech: [
        "Kotlin",
        "Jetpack Compose",
        "Material 3",
        "MVVM",
        "Node.js",
        "Express",
        "PostgreSQL",
        "CameraX + ML Kit",
        "JWT",
      ],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: 8,
      title: "Netflix Clone",
      description:
        "A full-stack, pixel-faithful Netflix-style streaming UI on live TMDB data — cinematic hero banner, live genre rows, a trailer-playing detail modal, debounced search, and a per-user watchlist — with a backend-for-frontend that proxies TMDB so the API key never reaches the browser.",
      githubUrl: "https://github.com/bhanu87777/Netflix-Clone.git",
      tech: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MySQL",
        "JWT",
        "TMDB API",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 10,
      title: "SNA-GraphSAGE",
      description:
        "A reproducible research framework for Social Network Analysis with Graph Neural Networks — extending 'SNA Based on GraphSAGE' (Xiao et al., 2019) with four GNN architectures, classic SNA centrality features, degree-adaptive neighbor sampling, and two extra tasks (link prediction, community detection), reporting mean ± std over 3 seeds.",
      githubUrl: "https://github.com/bhanu87777/SNA-GraphSAGE.git",
      tech: [
        "Python",
        "PyTorch",
        "PyTorch Geometric",
        "scikit-learn",
        "NetworkX",
        "Gensim",
        "pandas",
        "Matplotlib",
      ],
      gradient: "from-green-500 to-teal-500",
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
        .project-card:nth-child(5) { animation-delay: 0.5s; }
        .project-card:nth-child(6) { animation-delay: 0.6s; }
        .project-card:nth-child(7) { animation-delay: 0.7s; }
        .project-card:nth-child(8) { animation-delay: 0.8s; }
        .project-card:nth-child(9) { animation-delay: 0.9s; }
        .project-card:nth-child(10) { animation-delay: 1s; }
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
            {projects.map((project, index) => (
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
                <div className="project-number">Project {index + 1}</div>
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
