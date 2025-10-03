import project1Image from "../../assets/Image.png";

function Project1() {
  const project = {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform supports multiple payment methods and provides real-time inventory management.",
    detailedDescription: `
      This e-commerce platform was developed to provide a seamless shopping experience with advanced features:
      
      • User authentication and authorization system
      • Product catalog with search and filtering
      • Shopping cart and wishlist functionality
      • Secure payment integration with Stripe
      • Real-time inventory management
      • Admin dashboard for product and order management
      • Responsive design for all devices
      • Order tracking and email notifications
    `,
    liveDemo: "https://ecommerce-demo.netlify.app",
    github: "https://github.com/yourusername/ecommerce-platform",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    features: [
      "User Authentication & Authorization",
      "Product Search & Filtering",
      "Shopping Cart & Checkout",
      "Payment Integration",
      "Admin Dashboard",
      "Order Management",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing real-time inventory updates",
      "Optimizing database queries for performance",
      "Ensuring mobile responsiveness",
    ],
  };

  return (
    <>
      <style>{`
        .project-detail {
          min-height: 100vh;
          background: black;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .project-detail::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
          z-index: 1;
        }

        .project-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 8%;
          position: relative;
        }

        .project-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .project-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .project-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #a855f7;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .project-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .project-description {
          font-size: 1.3rem;
          line-height: 1.8;
          color: #e3e3e3;
          margin-bottom: 20px;
        }

        .project-details {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #b0b0b0;
          white-space: pre-line;
          margin-bottom: 30px;
        }

        .project-links {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 35px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .project-link.demo {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          color: white;
        }

        .project-link.github {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .project-link::before {
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

        .project-link:hover::before {
          left: 100%;
        }

        .project-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(168, 85, 247, 0.4);
        }

        .project-section {
          margin-bottom: 30px;
        }

        .section-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #a855f7;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .section-title::before {
          content: "▸";
          color: #ec4899;
        }

        .features-list, .challenges-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .feature-item, .challenge-item {
          color: #e3e3e3;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 20px;
        }

        .tech-item {
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 20px;
          padding: 12px 25px;
          color: #e3e3e3;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-item:hover {
          background: rgba(168, 85, 247, 0.2);
          border-color: rgba(168, 85, 247, 0.6);
          transform: translateY(-2px);
        }

        .project-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .project-image {
          width: 100%;
          max-width: 500px;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .project-image:hover {
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 0 25px 50px rgba(168, 85, 247, 0.3);
          transform: translateY(-5px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .project-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .project-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .project-container {
            padding: 80px 5%;
          }

          .project-title {
            font-size: 2.5rem;
          }

          .project-links {
            flex-direction: column;
            align-items: center;
          }

          .project-link {
            width: 200px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .project-container {
            padding: 60px 5%;
          }

          .project-title {
            font-size: 2rem;
          }

          .project-link {
            padding: 12px 25px;
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="project-detail">
        <div className="project-container">
          <div className="project-content">
            <div className="project-info">
              <div className="project-number">Project {project.id}</div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-details">
                {project.detailedDescription}
              </div>

              <div className="project-links">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  GitHub Repository
                </a>
              </div>

              <div className="project-section">
                <h3 className="section-title">Technology Stack</h3>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-section">
                <h3 className="section-title">Key Features</h3>
                <div className="features-list">
                  {project.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-section">
                <h3 className="section-title">Challenges & Solutions</h3>
                <div className="challenges-list">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="challenge-item">
                      • {challenge}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-visual">
              <img
                src={project1Image}
                alt={project.title}
                className="project-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project1;
