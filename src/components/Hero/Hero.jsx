function Hero() {
  return (
    <>
      <style>{`
        .hero {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          gap: 50px;
          padding: 70px 8%;
          background: black;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 213, 21, 0.2);
          min-height: calc(100vh - 65px);
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 80%, rgba(0, 213, 21, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 170, 255, 0.12) 0%, transparent 50%);
          z-index: 1;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 760px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 22px;
        }

        .hero-side {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 35px;
          text-align: center;
          flex-shrink: 0;
          min-width: 320px;
        }

        .hero-info-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 22px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(0, 213, 21, 0.25);
          border-radius: 18px;
          transition: all 0.3s ease;
        }

        .hero-info-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 213, 21, 0.5);
          background: rgba(0, 213, 21, 0.06);
          box-shadow: 0 12px 28px rgba(0, 213, 21, 0.15);
        }

        .hero-info-row {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .hero-info-label {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #00d515;
        }

        .hero-info-value {
          font-size: 1.2rem;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.4;
        }

        .hero-side-actions {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }

        .hero h1 {
          font-size: 2.6rem;
          font-weight: 800;
          margin: 0;
          white-space: nowrap;
          background: linear-gradient(45deg, #ffffff, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }

        .hero p {
          font-size: 1.15rem;
          line-height: 1.6;
          margin: 0;
          color: #e3e3e3;
          font-weight: 400;
          max-width: 760px;
        }

        .hero-seeking {
          padding: 15px 20px;
          background: rgba(0, 213, 21, 0.06);
          border: 1px solid rgba(0, 213, 21, 0.3);
          border-left: 4px solid #00d515;
          border-radius: 15px;
          transition: all 0.3s ease;
          max-width: 760px;
        }

        .hero-seeking:hover {
          background: rgba(0, 213, 21, 0.09);
          box-shadow: 0 8px 20px rgba(0, 213, 21, 0.15);
        }

        .hero-seeking p {
          font-size: 1rem;
          color: #e3e3e3;
        }

        .hero-seeking strong {
          color: #00d515;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 40px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #0b004e;
          background: linear-gradient(135deg, #00d515, #00aaff);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .hero-btn::before {
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

        .hero-btn:hover::before {
          left: 100%;
        }

        .hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 213, 21, 0.4);
          background: linear-gradient(135deg, #00aaff, #00d515);
          color: #0b004e;
          text-decoration: none;
        }

        .hero-btn:active {
          transform: translateY(-1px);
        }

        .hero-btn.secondary {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 213, 21, 0.4);
        }

        .hero-btn.secondary:hover {
          color: #0b004e;
          background: linear-gradient(135deg, #00d515, #00aaff);
          border-color: transparent;
          box-shadow: 0 15px 30px rgba(0, 170, 255, 0.35);
        }

        .hero-contact {
          text-align: center;
        }

        .hero-contact p {
          font-size: 1.1rem;
          color: #b8b8b8;
          margin: 0;
          line-height: 1.9;
        }

        .hero-contact span {
          color: #00d515;
          font-weight: 600;
          margin-left: 6px;
          transition: all 0.3s ease;
        }

        .hero-contact span:hover {
          color: #00aaff;
          text-shadow: 0 0 10px rgba(0, 170, 255, 0.5);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero {
            padding: 70px 5%;
          }

          .hero h1 {
            font-size: 2.3rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            align-items: flex-start;
            gap: 35px;
            padding: 50px 5%;
            min-height: auto;
          }

          .hero h1 {
            font-size: 2.2rem;
            white-space: normal;
          }

          .hero p {
            font-size: 1.1rem;
          }

          .hero-side {
            width: 100%;
            min-width: 0;
            align-items: flex-start;
            text-align: left;
          }

          .hero-side-actions {
            align-items: flex-start;
          }

          .hero-contact {
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 40px 5%;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .hero-btn {
            padding: 12px 30px;
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

        .hero-inner > * {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .hero-inner > *:nth-child(1) { animation-delay: 0.1s; }
        .hero-inner > *:nth-child(2) { animation-delay: 0.25s; }
        .hero-inner > *:nth-child(3) { animation-delay: 0.4s; }
        .hero-inner > *:nth-child(4) { animation-delay: 0.55s; }

        .hero-side {
          animation: fadeInUp 0.6s ease-out;
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }
      `}</style>

      <section className="hero">
        <div className="hero-inner">
          <h1>Hi, I'm Bhanu Prakash M</h1>

          <p>
            Computer Science student and QA Intern @ LeadSquared (6 Months).
            Aspiring Software Developer. Passionate about building reliable,
            scalable applications that solve real-world problems and continuously
            learning modern technologies.
          </p>

          <p>
            Take a look around — you'll find my skills, professional experience,
            a collection of projects spanning full-stack and AI-powered
            applications, and my published research work.
          </p>

          <div className="hero-seeking">
            <p>
              <strong>🎯 Currently Seeking:</strong> Full-time Software Developer
              / SDET opportunities to contribute to innovative projects and grow
              as a professional.
            </p>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-info-card">
            <div className="hero-info-row">
              <span className="hero-info-label">Branch</span>
              <span className="hero-info-value">
                Computer Science Engineering
              </span>
            </div>
            <div className="hero-info-row">
              <span className="hero-info-label">🏫 College</span>
              <span className="hero-info-value">
                B.M.S College of Engineering, Bangalore
              </span>
            </div>
          </div>

          <div className="hero-side-actions">
            <a
              href="https://github.com/bhanu87777"
              className="hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover My Work
            </a>

            <a
              href="/Resume.pdf"
              className="hero-btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            <div className="hero-contact">
              <p>
                Contact:<span>bhanump777@gmail.com</span>
              </p>
              <p>
                Phone Number:<span>6360591622</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
