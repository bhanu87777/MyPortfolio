import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Certificate() {
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
        value: 1.4,
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
        value: 35,
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

  const certificate = {
    title: "Research Publication Certificate",
    paperName:
      "XenSense-V.1: A Survey and Proposed Framework for Video Segmentation and Object Detection in Autonomous Vehicles",
    description:
      "A modular, real-time video perception pipeline for autonomous driving unifying instance segmentation, multi-object tracking, hazard detection (smoke/fog and potholes), motion analytics, and occlusion-aware memory. Presented at ISBM 2025 (Bangkok) and selected for Springer publication.",
    tech: [
      "Python",
      "YOLOv8n-seg",
      "DeepSORT",
      "PyTorch",
      "TorchVision",
      "OpenCV",
      "NumPy",
      "Computer Vision",
    ],
    githubUrl: "https://github.com/bhanu87777/XenSense-V1.git",
    image: "/certificate.png",
  };

  return (
    <>
      <style>{`
        .certificates {
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

        .certificates::before {
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

        .certificates-container {
          position: relative;
          z-index: 3;
          max-width: 1400px;
          margin: 0 auto;
        }

        .certificates-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: stretch;
          min-height: 600px;
        }

        .certificate-heading {
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

        .certificate-heading::after {
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

        .certificate-heading:hover::after {
          transform: scaleX(1);
        }

        .left-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        .research-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-decoration: none;
          cursor: pointer;
          padding: 35px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .research-card::before {
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

        .research-card:hover::before {
          left: 100%;
        }

        .research-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 213, 21, 0.4);
          box-shadow: 0 15px 35px rgba(0, 213, 21, 0.2);
        }

        .research-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: #00d515;
          line-height: 1.35;
          margin: 0;
        }

        .research-desc {
          font-size: 1.05rem;
          color: #e3e3e3;
          line-height: 1.6;
          margin: 0;
        }

        .research-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .research-tech-tag {
          background: rgba(0, 213, 21, 0.1);
          border: 1px solid rgba(0, 213, 21, 0.3);
          border-radius: 15px;
          padding: 7px 14px;
          font-size: 0.82rem;
          color: #00d515;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .research-card:hover .research-tech-tag {
          background: rgba(0, 213, 21, 0.2);
          border-color: rgba(0, 213, 21, 0.6);
        }

        .research-link {
          font-size: 1rem;
          font-weight: 600;
          color: #00aaff;
          transition: all 0.3s ease;
        }

        .research-card:hover .research-link {
          color: #00d515;
          letter-spacing: 0.5px;
        }

        .see-more-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 20px 40px;
          border-radius: 30px;
          font-size: 1.3rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #00d515, #00aaff);
          color: #0b004e;
          width: fit-content;
          margin: 0 auto;
        }

        .see-more-btn::before {
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

        .see-more-btn:hover::before {
          left: 100%;
        }

        .see-more-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 213, 21, 0.4);
          background: linear-gradient(135deg, #00aaff, #00d515);
        }

        /* Right Section - Only Certificate Image */
        .right-section {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .certificate-image-only {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .certificate-image-only::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 170, 255, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .certificate-image-only:hover::before {
          left: 100%;
        }

        .certificate-image-only:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 170, 255, 0.4);
          box-shadow: 0 20px 40px rgba(0, 170, 255, 0.3);
        }

        .certificate-full-image {
          width: 100%;
          height: 100%;
          max-height: 600px;
          object-fit: contain;
          border-radius: 15px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .certificate-image-only:hover .certificate-full-image {
          border-color: rgba(0, 170, 255, 0.4);
          transform: scale(1.02);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .certificates {
            padding: 80px 5%;
          }

          .certificates-content {
            gap: 40px;
            min-height: 500px;
          }

          .certificate-heading {
            font-size: 3rem;
          }

          .research-title {
            font-size: 1.5rem;
          }

          .certificate-full-image {
            max-height: 500px;
          }
        }

        @media (max-width: 768px) {
          .certificates {
            padding: 60px 5%;
          }

          .certificates-content {
            grid-template-columns: 1fr;
            gap: 50px;
            min-height: auto;
          }

          .certificate-heading {
            font-size: 2.5rem;
          }

          .research-title {
            font-size: 1.4rem;
          }

          .research-card {
            padding: 25px;
          }

          .certificate-full-image {
            max-height: 400px;
          }
        }

        @media (max-width: 480px) {
          .certificates {
            padding: 40px 5%;
          }

          .certificate-heading {
            font-size: 2rem;
          }

          .research-title {
            font-size: 1.25rem;
          }

          .research-card {
            padding: 20px;
          }

          .certificate-image-only {
            padding: 20px;
          }

          .certificate-full-image {
            max-height: 300px;
          }
        }

        /* Animation for items */
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

        .certificate-heading, .research-card, .certificate-image-only {
          animation: fadeInUp 0.6s ease-out;
        }

        .certificate-heading { animation-delay: 0.1s; }
        .research-card { animation-delay: 0.3s; }
        .certificate-image-only { animation-delay: 0.4s; }
      `}</style>

      <section className="certificates" id="certifications">
        {/* Particle Background */}
        <div className="particles-container">
          <Particles
            id="certificates-particles"
            init={particlesInit}
            options={particlesOptions}
          />
        </div>

        <div className="certificates-container">
          <h2 className="certificate-heading">
            Research Publication Certificate
          </h2>

          <div className="certificates-content">
            {/* Left Section - Research paper card */}
            <div className="left-section">
              <a
                href={certificate.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="research-card"
                title="Open XenSense-V1 on GitHub"
              >
                <h3 className="research-title">{certificate.paperName}</h3>
                <p className="research-desc">{certificate.description}</p>
                <div className="research-tech">
                  {certificate.tech.map((tech, index) => (
                    <span key={index} className="research-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="research-link">View on GitHub →</span>
              </a>
            </div>

            {/* Right Section - Only Certificate Image */}
            <div className="right-section">
              <div className="certificate-image-only">
                <img
                  src={certificate.image}
                  alt="ISBM 2025 Research Publication Certificate"
                  className="certificate-full-image"
                  onError={(e) => {
                    e.target.src = "/placeholder-certificate.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificate;
