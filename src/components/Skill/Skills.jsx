import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Skills() {
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
        value: 1.2,
        random: true,
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
      number: {
        value: 35,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.3,
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

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "TypeScript", "Python"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js"],
    },
    {
      title: "Backend",
      skills: ["Express.js", "Node.js"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      title: "Automation",
      skills: ["Playwright MCP", "UI Testing", "API Testing"],
    },
    {
      title: "Testing",
      skills: ["Manual Testing", "Automation Testing", "Regression Testing"],
    },
  ];

  return (
    <>
      <style>{`
        .skills {
          padding: 100px 8%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 213, 21, 0.2);
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

        .skills::before {
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

        .skills-container {
          position: relative;
          z-index: 3;
          max-width: 1400px;
          margin: 0 auto;
        }

        .skills h2 {
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

        .skills h2::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #00d515, #00aaff);
          border-radius: 2px;
          transform: scaleX(0.8);
          transition: transform 0.3s ease;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .category-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .category-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 213, 21, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .category-container:hover::before {
          left: 100%;
        }

        .category-container:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 213, 21, 0.4);
          box-shadow: 
            0 15px 35px rgba(0, 213, 21, 0.2),
            0 0 40px rgba(0, 170, 255, 0.1);
          background: rgba(255, 255, 255, 0.08);
        }

        .category-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .category-title {
          font-size: 2.2rem;
          font-weight: 700;
          background: linear-gradient(45deg, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .level-container {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .level-text {
          font-size: 1.1rem;
          color: #00d515;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .skill-bar {
          width: 200px;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .skill-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 1.5s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .skill-fill::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 2s infinite;
        }

        .skill-fill.beginner {
          width: 33%;
          background: linear-gradient(90deg, #ff6b6b, #ff8e8e);
        }

        .skill-fill.intermediate {
          width: 66%;
          background: linear-gradient(90deg, #00d515, #00aaff);
        }

        .skill-fill.advanced {
          width: 100%;
          background: linear-gradient(90deg, #00aaff, #00d515);
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .skill-item {
          background: rgba(0, 213, 21, 0.1);
          border: 1px solid rgba(0, 213, 21, 0.3);
          border-radius: 15px;
          padding: 15px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 213, 21, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .skill-item:hover::before {
          left: 100%;
        }

        .skill-item:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 213, 21, 0.6);
          box-shadow: 0 8px 20px rgba(0, 213, 21, 0.3);
        }

        .skill-name {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .skill-level {
          font-size: 0.8rem;
          color: #00d515;
          font-weight: 500;
          margin-top: 5px;
        }

        .container-description {
          font-size: 1.1rem;
          color: #e3e3e3;
          line-height: 1.6;
          margin: 25px 0;
          padding: 20px;
          background: rgba(0, 213, 21, 0.05);
          border-radius: 12px;
          border-left: 4px solid #00d515;
        }

        .section-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #00aaff;
          margin: 30px 0 15px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .section-title::before {
          content: "▸";
          color: #00d515;
        }

        .projects-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 15px;
        }

        .project-item {
          background: rgba(0, 170, 255, 0.1);
          border: 1px solid rgba(0, 170, 255, 0.3);
          border-radius: 12px;
          padding: 10px 16px;
          font-size: 0.9rem;
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .project-item:hover {
          background: rgba(0, 170, 255, 0.2);
          border-color: rgba(0, 170, 255, 0.6);
          transform: translateY(-2px);
        }

        /* Others Container Styles */
        .others-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          height: 100%;
        }

        .other-skill-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 280px;
        }

        .other-skill-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 213, 21, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .other-skill-item:hover::before {
          left: 100%;
        }

        .other-skill-item:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 213, 21, 0.4);
          box-shadow: 0 15px 35px rgba(0, 213, 21, 0.2);
        }

        .other-skill-name {
          font-size: 1.6rem;
          font-weight: 700;
          background: linear-gradient(45deg, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
        }

        .other-skill-description {
          font-size: 1rem;
          color: #e3e3e3;
          line-height: 1.5;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .other-projects-list {
          margin-top: 15px;
        }

        .other-project-item {
          font-size: 0.85rem;
          color: #b0b0b0;
          padding: 5px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .other-project-item:last-child {
          border-bottom: none;
        }

        /* AWS Skills Grid with Descriptions */
        .aws-skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .aws-skill-item {
          background: rgba(0, 170, 255, 0.1);
          border: 1px solid rgba(0, 170, 255, 0.3);
          border-radius: 15px;
          padding: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .aws-skill-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 170, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .aws-skill-item:hover::before {
          left: 100%;
        }

        .aws-skill-item:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 170, 255, 0.6);
          box-shadow: 0 8px 20px rgba(0, 170, 255, 0.3);
        }

        .aws-skill-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .aws-skill-description {
          font-size: 0.85rem;
          color: #b0b0b0;
          line-height: 1.4;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .skills {
            padding: 80px 5%;
          }

          .skills h2 {
            font-size: 3rem;
          }

          .category-container {
            padding: 30px;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .others-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .other-skill-item {
            min-height: 250px;
          }
        }

        @media (max-width: 768px) {
          .skills {
            padding: 60px 5%;
          }

          .skills h2 {
            font-size: 2.5rem;
          }

          .category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .category-title {
            font-size: 1.8rem;
          }

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .skill-bar {
            width: 150px;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
          }

          .aws-skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .skills {
            padding: 40px 5%;
          }

          .skills h2 {
            font-size: 2rem;
          }

          .category-container {
            padding: 20px;
          }

          .category-title {
            font-size: 1.5rem;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .projects-grid {
            flex-direction: column;
          }

          .other-skill-item {
            padding: 20px;
            min-height: 220px;
          }

          .other-skill-name {
            font-size: 1.4rem;
          }
        }

        /* Animation for containers */
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

        .category-container {
          animation: fadeInUp 0.6s ease-out;
        }

        .category-container:nth-child(1) { animation-delay: 0.1s; }
        .category-container:nth-child(2) { animation-delay: 0.2s; }
        .category-container:nth-child(3) { animation-delay: 0.3s; }
      `}</style>

      <section className="skills" id="skills">
        {/* Particle Background */}
        <div className="particles-container">
          <Particles
            id="skills-particles"
            init={particlesInit}
            options={particlesOptions}
          />
        </div>

        <div className="skills-container">
          <h2>My Skills</h2>

          <div className="categories-grid">
            {skillCategories.map((category, index) => (
              <div className="category-container" key={index}>
                <div className="category-header">
                  <h3 className="category-title">{category.title}</h3>
                </div>

                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <p className="skill-name">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
