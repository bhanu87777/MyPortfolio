import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function About() {
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
        value: 1.5,
        random: true,
      },
      move: {
        enable: true,
        speed: 0.3,
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
        value: 0.4,
        random: true,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
          sync: false,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
    },
  };

  return (
    <>
      <style>{`
        .about {
          padding: 80px 8%;
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

        .about::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(0, 213, 21, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(0, 170, 255, 0.08) 0%, transparent 50%);
          z-index: 2;
        }

        .about-container {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 20px;
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

        .about h1::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #00d515, #00aaff);
          border-radius: 2px;
          transform: scaleX(0.8);
          transition: transform 0.3s ease;
        }

        .about h1:hover::after {
          transform: scaleX(1);
        }

        .professional-headline {
          font-size: 1.6rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 15px;
          color: #00d515;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .experience-summary {
          font-size: 1.3rem;
          text-align: center;
          margin-bottom: 40px;
          color: #e3e3e3;
          font-weight: 400;
          line-height: 1.6;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-bottom: 60px;
          align-items: stretch;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .skills-highlight {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin: 15px 0;
          justify-content: center;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 10px 20px;
          color: #e3e3e3;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-tag::before {
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

        .skill-tag:hover::before {
          left: 100%;
        }

        .skill-tag:hover {
          background: rgba(0, 213, 21, 0.1);
          border-color: rgba(0, 213, 21, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 213, 21, 0.2);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin: 25px 0;
        }

        .achievement-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 25px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .achievement-card::before {
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

        .achievement-card:hover::before {
          left: 100%;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 213, 21, 0.3);
          box-shadow: 0 15px 30px rgba(0, 213, 21, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .achievement-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: #00d515;
          margin-bottom: 10px;
          text-shadow: 0 0 10px rgba(0, 213, 21, 0.3);
        }

        .achievement-text {
          font-size: 1rem;
          color: #e3e3e3;
          line-height: 1.5;
        }

        .focus-area {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 25px;
          margin: 25px 0;
          transition: all 0.3s ease;
        }

        .focus-area:hover {
          border-color: rgba(0, 213, 21, 0.3);
          box-shadow: 0 10px 25px rgba(0, 213, 21, 0.15);
        }

        .focus-area p {
          margin: 0;
          font-size: 1.1rem;
          color: #e3e3e3;
          line-height: 1.6;
        }

        .looking-for {
          text-align: center;
          margin: 0;
          padding: 25px;
          background: rgba(0, 213, 21, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(0, 213, 21, 0.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .looking-for:hover {
          background: rgba(0, 213, 21, 0.08);
          box-shadow: 0 8px 20px rgba(0, 213, 21, 0.15);
        }

        .cta-section {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin: 35px 0;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 35px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #00d515, #00aaff);
          color: #0b004e;
        }

        .cta-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .cta-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .cta-btn:hover::before {
          left: 100%;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(0, 213, 21, 0.4);
        }

        .cta-btn.primary:hover {
          background: linear-gradient(135deg, #00aaff, #00d515);
        }

        .cta-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(0, 213, 21, 0.4);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin: 25px 0;
        }

        .social-link {
          color: #e3e3e3;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 10px 20px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          color: #00d515;
          background: rgba(0, 213, 21, 0.1);
          border-color: rgba(0, 213, 21, 0.3);
          transform: translateY(-2px);
        }

        .location-info {
          text-align: center;
          margin-top: 25px;
          color: #b8b8b8;
          font-size: 1rem;
          padding: 15px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Section headers */
        .about h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 50px 0 25px 0;
          background: linear-gradient(45deg, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
          padding-bottom: 10px;
        }

        .about h3::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #00d515, #00aaff);
          border-radius: 2px;
          transform: scaleX(0.7);
          transition: transform 0.3s ease;
        }

        .about h3:hover::after {
          transform: scaleX(1);
        }

        .about p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 25px;
          color: #e3e3e3;
          font-weight: 400;
        }

        .education-list, .hobbies-list, .career-goals-list {
          list-style: none;
          padding: 0;
          margin: 0 0 35px 0;
        }

        .education-list li, .hobbies-list li, .career-goals-list li {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 18px 25px;
          margin-bottom: 15px;
          color: #e3e3e3;
          font-size: 1rem;
          line-height: 1.6;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .education-list li::before, .hobbies-list li::before, .career-goals-list li::before {
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

        .education-list li:hover::before, .hobbies-list li:hover::before, .career-goals-list li:hover::before {
          left: 100%;
        }

        .education-list li:hover, .hobbies-list li:hover, .career-goals-list li:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 213, 21, 0.3);
          box-shadow: 0 10px 25px rgba(0, 213, 21, 0.15);
          background: rgba(255, 255, 255, 0.08);
        }

        .highlight {
          background: linear-gradient(45deg, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        .view-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #0b004e;
          background: linear-gradient(135deg, #00d515, #00aaff);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          margin-left: 15px;
        }

        .view-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .view-btn:hover::before {
          left: 100%;
        }

        .view-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 213, 21, 0.3);
          background: linear-gradient(135deg, #00aaff, #00d515);
          color: #0b004e;
          text-decoration: none;
        }

        .education-list li {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .hobbies-list li, .career-goals-list li {
          position: relative;
          padding-left: 50px;
        }

        .hobbies-list li::before, .career-goals-list li::before {
          content: "▸";
          position: absolute;
          left: 25px;
          top: 50%;
          transform: translateY(-50%);
          color: #00d515;
          font-size: 1.2rem;
          font-weight: bold;
        }

        /* Enhanced intro section */
        .intro-section {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          padding: 30px;
          margin: 30px 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .intro-section:hover {
          border-color: rgba(0, 213, 21, 0.3);
          box-shadow: 0 10px 25px rgba(0, 213, 21, 0.1);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .about {
            padding: 60px 5%;
          }

          .about h1 {
            font-size: 2.6rem;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about {
            padding: 50px 5%;
          }

          .about h1 {
            font-size: 2.2rem;
          }

          .professional-headline {
            font-size: 1.3rem;
          }

          .experience-summary {
            font-size: 1.1rem;
          }

          .cta-section {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 220px;
            justify-content: center;
          }

          .education-list li {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .view-btn {
            margin-left: 0;
          }

          .social-links {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .about {
            padding: 40px 5%;
          }

          .about h1 {
            font-size: 1.9rem;
          }

          .about h3 {
            font-size: 1.5rem;
          }

          .skill-tag {
            padding: 8px 16px;
            font-size: 0.9rem;
          }

          .achievement-card, .focus-area, .intro-section {
            padding: 20px;
          }
        }

        /* Animation for content */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about h1, .professional-headline, .experience-summary, 
        .skills-highlight, .achievements-grid, .focus-area,
        .looking-for, .cta-section, .social-links, .location-info,
        .intro-section {
          animation: fadeInUp 0.6s ease-out;
        }

        .about h1 { animation-delay: 0.1s; }
        .professional-headline { animation-delay: 0.2s; }
        .experience-summary { animation-delay: 0.3s; }
        .skills-highlight { animation-delay: 0.4s; }
        .achievements-grid { animation-delay: 0.5s; }
        .focus-area { animation-delay: 0.6s; }
        .looking-for { animation-delay: 0.7s; }
        .cta-section { animation-delay: 0.8s; }
        .social-links { animation-delay: 0.9s; }
        .location-info { animation-delay: 1s; }
        .intro-section { animation-delay: 1.1s; }
      `}</style>

      <section className="about" id="about">
        {/* Particle Background */}
        <div className="particles-container">
          <Particles
            id="about-particles"
            init={particlesInit}
            options={particlesOptions}
          />
        </div>

        <div className="about-container">
          {/* Professional Hero Section */}
          <h1>About Me</h1>

          <div className="intro-section">
            <p>
              Software Testing Intern with 6 months of hands-on experience at
              LeadSquared spanning both manual and automation testing. I built
              and scaled a large end-to-end UI automation framework in Playwright
              and TypeScript, automating around 1000+ test cases across the
              Tenant Management and Platform modules to strengthen release
              quality and regression coverage.
            </p>
            <p>
              Beyond QA, I've built <span className="highlight">9 full-stack and
              AI-powered projects</span> — spanning React, Next.js, Node.js/
              Express, and PostgreSQL/MySQL — ranging from inventory and finance
              dashboards to a RAG-based document Q&amp;A app, an event-ticketing
              platform, and a real-time computer-vision pipeline, many enhanced
              with Anthropic Claude integrations. My research paper,{" "}
              <span className="highlight">XenSense-V.1</span>, was presented at
              ISBM Bangkok 2025 and selected for Springer publication.
            </p>
            <p>
              My core stack covers Java, TypeScript, React &amp; Next.js,
              Node/Express, PostgreSQL/MySQL, and test automation with Playwright
              MCP, UI &amp; API testing. An aspiring Software Developer with a
              strong foundation in full-stack development and problem solving,
              I'm passionate about building reliable, scalable software that
              solves real-world problems.
            </p>
          </div>

          <div className="hero-content">
            <div className="achievement-card">
              <div className="achievement-number">1000+</div>
              <div className="achievement-text">
                UI test cases automated end-to-end in Playwright &amp; TypeScript
                across the Tenant Management and Platform modules
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">9</div>
              <div className="achievement-text">
                Full-stack and AI-powered projects built and deployed with modern
                architectures and responsive designs
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">6 Months</div>
              <div className="achievement-text">
                QA internship at LeadSquared spanning manual and automation
                testing across product modules
              </div>
            </div>
          </div>

          {/* Education Section */}
          <h3>🎓 Education</h3>
          <ul className="education-list">
            <li>
              <span className="highlight">
                B.E/B.Tech – Computer Science and Engineering
              </span>{" "}
              — <span className="highlight">CGPA: 7.46/10</span>
              <span className="highlight">(2022-2026)</span>
              <a
                href="/BMS_Provisional_Degree_Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                Degree Certificate
              </a>
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

        </div>
      </section>
    </>
  );
}

export default About;
