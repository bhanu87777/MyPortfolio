import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Experience() {
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
        value: 40,
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
          speed: 0.6,
          minimumValue: 0.1,
          sync: false,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
    },
  };

  const experiences = [
    {
      role: "Software Testing Intern",
      company: "LeadSquared",
      duration: "6 Months",
      type: "Manual & Automation Testing",
      points: [
        "Performed both manual and automation testing across product modules, strengthening release quality and regression coverage.",
        "Built and scaled an end-to-end UI automation framework, automating around 900 test cases across the Tenant Management and Platform modules.",
        "Engineered the framework in Playwright and TypeScript using the Page Object Model with a clean 3-layer architecture for maintainability.",
        "Integrated Allure reporting, CI execution, and API-based test data setup to enable reliable, repeatable regression runs.",
      ],
      tech: [
        "Playwright MCP",
        "Manual Testing",
        "UI Testing",
        "Automation Testing",
        "API Testing",
        "Regression Testing",
      ],
    },
  ];

  return (
    <>
      <style>{`
        .experience {
          padding: 100px 8%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 213, 21, 0.2);
          position: relative;
          overflow: hidden;
        }

        .experience .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .experience::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 15% 20%, rgba(0, 213, 21, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 85% 80%, rgba(0, 170, 255, 0.08) 0%, transparent 50%);
          z-index: 2;
        }

        .experience-container {
          position: relative;
          z-index: 3;
          max-width: 1000px;
          margin: 0 auto;
        }

        .experience h2 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 60px;
          background: linear-gradient(45deg, #ffffff, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }

        .experience h2::after {
          content: "";
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #00d515, #00aaff);
          border-radius: 2px;
          transform: scaleX(0.8);
          transition: transform 0.3s ease;
        }

        .experience h2:hover::after {
          transform: scaleX(1);
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 40px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 8px;
          bottom: 8px;
          left: 10px;
          width: 2px;
          background: linear-gradient(180deg, #00d515, #00aaff);
          opacity: 0.5;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -35px;
          top: 32px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00d515, #00aaff);
          box-shadow: 0 0 0 5px rgba(0, 213, 21, 0.15),
            0 0 15px rgba(0, 213, 21, 0.5);
        }

        .exp-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-left: 3px solid rgba(0, 213, 21, 0.5);
          border-radius: 20px;
          padding: 35px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .exp-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 213, 21, 0.08),
            transparent
          );
          transition: left 0.6s ease;
        }

        .exp-card:hover::before {
          left: 100%;
        }

        .exp-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 213, 21, 0.4);
          border-left-color: #00d515;
          box-shadow: 0 20px 40px rgba(0, 213, 21, 0.2),
            0 0 50px rgba(0, 170, 255, 0.1);
          background: rgba(255, 255, 255, 0.08);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 10px;
        }

        .exp-role {
          font-size: 1.9rem;
          font-weight: 700;
          background: linear-gradient(45deg, #ffffff, #00d515);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          line-height: 1.2;
        }

        .exp-company {
          font-size: 1.3rem;
          font-weight: 600;
          color: #00aaff;
          margin: 6px 0 0 0;
        }

        .exp-duration {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #0b004e;
          background: linear-gradient(135deg, #00d515, #00aaff);
          white-space: nowrap;
        }

        .exp-type {
          display: inline-block;
          font-size: 0.9rem;
          color: #00d515;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .exp-points {
          list-style: none;
          padding: 0;
          margin: 0 0 25px 0;
        }

        .exp-points li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 14px;
          color: #e3e3e3;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .exp-points li:last-child {
          margin-bottom: 0;
        }

        .exp-points li::before {
          content: "▸";
          position: absolute;
          left: 4px;
          top: 0;
          color: #00d515;
          font-size: 1.1rem;
          font-weight: bold;
        }

        .exp-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .exp-tech-tag {
          background: rgba(0, 170, 255, 0.1);
          border: 1px solid rgba(0, 170, 255, 0.3);
          border-radius: 15px;
          padding: 8px 16px;
          font-size: 0.85rem;
          color: #00aaff;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .exp-card:hover .exp-tech-tag {
          background: rgba(0, 170, 255, 0.2);
          border-color: rgba(0, 170, 255, 0.6);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .experience {
            padding: 80px 5%;
          }

          .experience h2 {
            font-size: 3rem;
          }

          .exp-role {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 768px) {
          .experience {
            padding: 60px 5%;
          }

          .experience h2 {
            font-size: 2.5rem;
          }

          .timeline {
            padding-left: 28px;
          }

          .timeline::before {
            left: 6px;
          }

          .timeline-dot {
            left: -26px;
            width: 13px;
            height: 13px;
          }

          .exp-card {
            padding: 25px;
          }

          .exp-role {
            font-size: 1.4rem;
          }

          .exp-company {
            font-size: 1.15rem;
          }
        }

        @media (max-width: 480px) {
          .experience {
            padding: 40px 5%;
          }

          .experience h2 {
            font-size: 2rem;
          }

          .exp-points li {
            font-size: 1rem;
          }
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .timeline-item {
          animation: fadeInUp 0.7s ease-out;
        }
      `}</style>

      <section className="experience" id="experience">
        <div className="particles-container">
          <Particles
            id="experience-particles"
            init={particlesInit}
            options={particlesOptions}
          />
        </div>

        <div className="experience-container">
          <h2>Experience</h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="exp-card">
                  <div className="exp-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <span className="exp-duration">⏱ {exp.duration}</span>
                  </div>

                  <span className="exp-type">{exp.type}</span>

                  <ul className="exp-points">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>

                  <div className="exp-tech">
                    {exp.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="exp-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
