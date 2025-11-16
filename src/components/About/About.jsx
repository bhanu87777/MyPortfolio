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
          grid-template-columns: 2fr 1fr;
          gap: 50px;
          margin-bottom: 60px;
          align-items: start;
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
          margin: 30px 0;
          padding: 20px;
          background: rgba(0, 213, 21, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(0, 213, 21, 0.3);
          transition: all 0.3s ease;
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
          <div className="professional-headline">
            Full-Stack Developer | MERN Stack & AI/ML Enthusiast
          </div>

          <div className="intro-section">
            <p>
              With a strong foundation in computer science principles and
              practical experience across the full development stack, I thrive
              on transforming complex challenges into elegant, user-friendly
              solutions. My journey in technology has equipped me with expertise
              in modern web technologies, cloud platforms, and machine learning
              frameworks.
            </p>
          </div>

          <div className="hero-content">
            <div className="main-content">
              <div className="skills-highlight">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Javascript</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Next.js</span>
              </div>

              <div className="achievements-grid">
                <div className="achievement-card">
                  <div className="achievement-number">200+</div>
                  <div className="achievement-text">
                    DSA problems solved on LeetCode with optimized solutions and
                    efficient algorithms
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-number">6</div>
                  <div className="achievement-text">
                    Projects built and deployed with modern architectures, cloud
                    integration, and responsive designs
                  </div>
                </div>
              </div>

              <div className="focus-area">
                <p>
                  <strong>🚀 Focus Area:</strong> Building scalable web
                  applications with AI integration, particularly interested in
                  educational technology, financial analytics platforms, and
                  enterprise solutions. Passionate about creating technology
                  that makes a meaningful impact on users' lives.
                </p>
              </div>
            </div>

            <div className="side-content">
              <div className="looking-for">
                <p>
                  <strong>🎯 Currently Seeking:</strong> Software Development
                  Internship / Full-time Placement opportunities to contribute
                  to innovative projects and grow as a professional.
                </p>
              </div>

              <div className="cta-section">
                <a
                  href="https://leetcode.com/u/BHANU777/"
                  className="cta-btn primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode Profile
                </a>
                <a href="/Resume.pdf" className="cta-btn secondary" download>
                  Download Resume
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/bhanu87777"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/bhanuprakash777/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <div className="location-info">
                📍 Bangalore, India | English, Hindi | Open to Relocation
              </div>
            </div>
          </div>

          {/* Education Section */}
          <h3>🎓 Education</h3>
          <ul className="education-list">
            <li>
              <span className="highlight">
                B.E. – Computer Science and Engineering
              </span>
              , B.M.S College of Engineering, Bangalore —{" "}
              <span className="highlight">CGPA: 7.31/10</span>
              <span className="highlight">(2022-2026)</span>
            </li>

            <li>
              <span className="highlight">12th Grade (PCMC):</span> 96.5%
              <span className="highlight"> - Karnataka State Board</span>
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
              <span className="highlight"> - Karnataka State Board</span>
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

          {/* Hobbies Section */}
          <h3>🎨 Interests & Hobbies</h3>
          <ul className="hobbies-list">
            <li>
              Solving Data Structures & Algorithms problems n various platforms
              i.e Leetcode, Neetcode, HackerRank etc
            </li>
            <li>
              Strategic board games like Chess and analyzing game theory
              concepts
            </li>
            <li>
              Curating and listening to diverse music genres for creative
              inspiration
            </li>
            <li>
              Reading technology blogs and staying updated with industry trends
            </li>
          </ul>

          {/* Career Goals Section */}
          <h3>🚀 Career Goals & Aspirations</h3>
          <ul className="career-goals-list">
            <li>
              <strong>Technical Excellence:</strong> Master full-stack
              development while specializing in AI/ML integration to build
              intelligent, scalable applications that solve real-world problems
            </li>
            <li>
              <strong>Innovation & Impact:</strong> Contribute to open-source
              projects and develop proprietary solutions that address meaningful
              challenges in education, healthcare, or sustainability
            </li>
            <li>
              <strong>Leadership Growth:</strong> Progress from individual
              contributor to technical leadership roles, mentoring junior
              developers and driving technical strategy
            </li>
            <li>
              <strong>Continuous Learning:</strong> Stay at the forefront of
              emerging technologies, continuously expanding skills in cloud
              architecture, distributed systems, and AI ethics
            </li>
          </ul>

          {/* Additional Context */}
          <div className="intro-section">
            <h3>💡 My Approach to Development</h3>
            <p>
              I believe in writing clean, maintainable code with a focus on
              performance and user experience. My development philosophy centers
              around understanding the problem domain deeply before implementing
              solutions. I'm passionate about creating applications that are not
              just functional but delightful to use, with attention to detail in
              both frontend aesthetics and backend architecture.
            </p>
            <p>
              Whether working on personal projects or collaborative teams, I
              prioritize communication, documentation, and best practices. I'm
              constantly exploring new technologies and methodologies to improve
              my craft and deliver exceptional results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
