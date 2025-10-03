import { Link } from "react-router-dom";

function Achievements() {
  const allAchievements = [
    {
      id: 1,
      title: "Best Project Award",
      description:
        "Awarded for outstanding performance in full-stack development project that demonstrated exceptional coding standards, user experience design, and innovative problem-solving approach.",
      date: "2024",
      project: "E-Commerce Platform",
      category: "Development",
      impact: "Recognized by industry professionals and academic committee",
    },
    {
      id: 2,
      title: "Hackathon Winner - Regional Competition",
      description:
        "First place in regional coding competition with AI financial dashboard. Developed a real-time analytics platform that impressed judges with its technical complexity and practical application.",
      date: "2023",
      project: "AI Finance Dashboard",
      category: "Competition",
      impact: "Competed against 50+ teams and secured top position",
    },
    {
      id: 3,
      title: "Innovation Award - Social Network Analysis",
      description:
        "Recognized for innovative approach in social network analysis using GraphSAGE. Implemented cutting-edge machine learning techniques to analyze complex social networks.",
      date: "2024",
      project: "GraphSAGE Analysis",
      category: "Research",
      impact: "Contributed to academic research in network analysis",
    },
    {
      id: 4,
      title: "Open Source Contributor of the Year",
      description:
        "Significant contributions to major open source projects including React ecosystem libraries and development tools. Maintained and improved critical packages used by thousands of developers.",
      date: "2023",
      project: "Multiple Projects",
      category: "Open Source",
      impact: "1000+ GitHub stars across contributed projects",
    },
    {
      id: 5,
      title: "Best Technical Documentation",
      description:
        "Awarded for creating comprehensive and user-friendly documentation for complex software systems. Documentation was praised for clarity, depth, and practical examples.",
      date: "2023",
      project: "Inventory Management System",
      category: "Documentation",
      impact: "Improved onboarding time for new developers by 60%",
    },
    {
      id: 6,
      title: "Community Mentor Award",
      description:
        "Recognized for outstanding mentorship in developer communities. Conducted workshops, code reviews, and provided guidance to aspiring developers.",
      date: "2024",
      project: "Community Engagement",
      category: "Leadership",
      impact: "Mentored 50+ developers in various technologies",
    },
  ];

  const categories = [
    ...new Set(allAchievements.map((achievement) => achievement.category)),
  ];

  return (
    <>
      <style>{`
        .achievements-page {
          min-height: 100vh;
          background: black;
          padding: 100px 8%;
          position: relative;
          overflow: hidden;
        }

        .achievements-page::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 213, 21, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 170, 255, 0.08) 0%, transparent 50%);
          z-index: 1;
        }

        .achievements-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #00d515;
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 40px;
          transition: all 0.3s ease;
          padding: 10px 20px;
          border-radius: 25px;
          background: rgba(0, 213, 21, 0.1);
          border: 1px solid rgba(0, 213, 21, 0.3);
        }

        .back-button:hover {
          color: #00aaff;
          background: rgba(0, 213, 21, 0.2);
          transform: translateX(-5px);
        }

        .page-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #ffffff, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
        }

        .page-subtitle {
          font-size: 1.3rem;
          color: #b0b0b0;
          text-align: center;
          margin-bottom: 60px;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .achievement-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 35px;
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
          transform: translateY(-10px);
          border-color: rgba(0, 213, 21, 0.4);
          box-shadow: 0 20px 40px rgba(0, 213, 21, 0.3);
        }

        .achievement-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .achievement-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 5px;
          flex: 1;
          min-width: 250px;
        }

        .achievement-meta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .achievement-date {
          background: rgba(0, 213, 21, 0.2);
          color: #00d515;
          padding: 6px 15px;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .achievement-category {
          background: rgba(0, 170, 255, 0.2);
          color: #00aaff;
          padding: 6px 15px;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .achievement-description {
          color: #e3e3e3;
          line-height: 1.7;
          margin-bottom: 20px;
          font-size: 1.05rem;
        }

        .achievement-project {
          color: #00aaff;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .achievement-impact {
          background: rgba(255, 255, 255, 0.05);
          border-left: 4px solid #00d515;
          padding: 15px;
          border-radius: 8px;
          margin-top: 15px;
        }

        .impact-title {
          color: #00d515;
          font-weight: 600;
          margin-bottom: 5px;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .impact-description {
          color: #e3e3e3;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .achievements-page {
            padding: 80px 5%;
          }

          .page-title {
            font-size: 3.5rem;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .achievements-page {
            padding: 60px 5%;
          }

          .page-title {
            font-size: 3rem;
          }

          .page-subtitle {
            font-size: 1.1rem;
          }

          .achievement-card {
            padding: 25px;
          }

          .achievement-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .achievement-title {
            min-width: auto;
          }
        }

        @media (max-width: 480px) {
          .achievements-page {
            padding: 40px 5%;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .achievement-card {
            padding: 20px;
          }

          .achievement-title {
            font-size: 1.3rem;
          }

          .achievement-meta {
            flex-direction: column;
            width: 100%;
          }

          .achievement-date, .achievement-category {
            width: fit-content;
          }
        }

        /* Animation for achievement cards */
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

        .achievement-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .achievement-card:nth-child(1) { animation-delay: 0.1s; }
        .achievement-card:nth-child(2) { animation-delay: 0.2s; }
        .achievement-card:nth-child(3) { animation-delay: 0.3s; }
        .achievement-card:nth-child(4) { animation-delay: 0.4s; }
        .achievement-card:nth-child(5) { animation-delay: 0.5s; }
        .achievement-card:nth-child(6) { animation-delay: 0.6s; }
      `}</style>

      <section className="achievements-page">
        <div className="achievements-container">
          <Link to="/#certifications" className="back-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            Back to Certifications
          </Link>

          <h1 className="page-title">All Achievements</h1>
          <p className="page-subtitle">
            A comprehensive collection of my accomplishments, awards, and
            recognitions across various projects and competitions.
          </p>

          <div className="achievements-grid">
            {allAchievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <div className="achievement-meta">
                    <span className="achievement-date">{achievement.date}</span>
                    <span className="achievement-category">
                      {achievement.category}
                    </span>
                  </div>
                </div>

                <p className="achievement-description">
                  {achievement.description}
                </p>

                <div className="achievement-project">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                  </svg>
                  Related Project: {achievement.project}
                </div>

                <div className="achievement-impact">
                  <div className="impact-title">Impact</div>
                  <div className="impact-description">{achievement.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Achievements;
