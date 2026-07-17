function Internship() {
  const highlights = [
    {
      icon: "🧪",
      title: "Manual & Automation Testing",
      text: "Performed manual and automation testing (UI and API) across multiple product modules, strengthening release quality and regression coverage throughout the release cycle.",
    },
    {
      icon: "⚙️",
      title: "UI Automation Framework",
      text: "Built and scaled an end-to-end UI automation framework covering 1,000+ test cases using Playwright and TypeScript, with Jenkins-based CI execution and reporting.",
    },
    {
      icon: "🔗",
      title: "API Automation",
      text: "Designed and implemented 600+ automated test cases across 40+ WCF API endpoints using Java and REST Assured, migrating from a legacy SOAP framework for better reliability.",
    },
    {
      icon: "🐞",
      title: "Defect Analysis & Resolution",
      text: "Analyzed, reproduced and resolved product defect tickets end-to-end — covering forms, attachments, file uploads and permissions — and raised new bugs identified during testing.",
    },
    {
      icon: "🏢",
      title: "Platform & Product Training",
      text: "Completed hands-on platform training on forms, workflows, activities and telephony, along with sessions on marketing, sales, implementation and engineering support processes.",
    },
    {
      icon: "🤝",
      title: "Cross-Functional Exposure",
      text: "Shadowed support and implementation teams on live cases, client onboarding and configurations, and leveraged AI-assisted workflows to deliver high-quality work faster.",
    },
  ];

  return (
    <>
      <style>{`
        .internship {
          display: flex;
          flex-direction: column;
          padding: 60px 8% 40px;
          background: black;
          border-bottom: 1px solid rgba(0, 213, 21, 0.2);
          min-height: calc(100vh - 65px);
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .internship::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 80% 80%, rgba(0, 213, 21, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 20% 20%, rgba(0, 170, 255, 0.12) 0%, transparent 50%);
          z-index: 1;
        }

        .internship-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 28px;
        }

        .internship-header h2 {
          font-size: 2.4rem;
          font-weight: 800;
          margin: 0;
          background: linear-gradient(45deg, #ffffff, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }

        .internship-header p {
          margin: 8px 0 0;
          font-size: 1.1rem;
          color: #b8b8b8;
        }

        .internship-header p strong {
          color: #00d515;
        }

        .internship-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .internship-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(0, 213, 21, 0.25);
          border-radius: 18px;
          transition: all 0.3s ease;
        }

        .internship-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 213, 21, 0.5);
          background: rgba(0, 213, 21, 0.06);
          box-shadow: 0 12px 28px rgba(0, 213, 21, 0.15);
        }

        .internship-card h3 {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 700;
          color: #00d515;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .internship-card p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.55;
          color: #e3e3e3;
        }

        .internship-footer {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
        }

        .internship-btn {
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

        .internship-btn::before {
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

        .internship-btn:hover::before {
          left: 100%;
        }

        .internship-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 213, 21, 0.4);
          background: linear-gradient(135deg, #00aaff, #00d515);
          color: #0b004e;
          text-decoration: none;
        }

        .internship-btn:active {
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .internship {
            padding: 60px 5% 40px;
          }

          .internship-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .internship {
            min-height: auto;
            padding: 50px 5%;
          }

          .internship-header h2 {
            font-size: 2rem;
          }

          .internship-grid {
            grid-template-columns: 1fr;
          }

          .internship-footer {
            margin-top: 28px;
            justify-content: flex-start;
          }
        }

        @media (max-width: 480px) {
          .internship-btn {
            padding: 12px 30px;
            font-size: 1rem;
          }
        }

        @keyframes internshipFadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .internship-inner > * {
          animation: internshipFadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .internship-inner > *:nth-child(1) { animation-delay: 0.1s; }
        .internship-inner > *:nth-child(2) { animation-delay: 0.25s; }
        .internship-inner > *:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      <section className="internship" id="internship">
        <div className="internship-inner">
          <div className="internship-header">
            <h2>Internship</h2>
            <p>
              <strong>Software Testing Intern — LeadSquared</strong> · 6 Months
              of hands-on experience across manual, UI and API automation
              testing.
            </p>
          </div>

          <div className="internship-grid">
            {highlights.map((item) => (
              <div className="internship-card" key={item.title}>
                <h3>
                  <span>{item.icon}</span>
                  {item.title}
                </h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="internship-footer">
            <a
              href="/Internship-Certificate.pdf"
              className="internship-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Internship Certificate
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Internship;
