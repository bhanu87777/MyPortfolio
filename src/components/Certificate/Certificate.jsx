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

        .left-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 40px;
          height: 100%;
        }

        .certificate-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 10px;
          background: linear-gradient(45deg, #ffffff, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .paper-name {
          font-size: 1.8rem;
          font-weight: 600;
          color: #00d515;
          line-height: 1.4;
          padding: 30px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .paper-name::before {
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

        .paper-name:hover::before {
          left: 100%;
        }

        .paper-name:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 213, 21, 0.4);
          box-shadow: 0 15px 35px rgba(0, 213, 21, 0.2);
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

          .certificate-title {
            font-size: 3rem;
          }

          .paper-name {
            font-size: 1.6rem;
            padding: 25px;
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

          .certificate-title {
            font-size: 2.5rem;
            text-align: center;
          }

          .paper-name {
            font-size: 1.4rem;
            padding: 20px;
            text-align: center;
          }

          .see-more-btn {
            width: 100%;
            max-width: 300px;
          }

          .certificate-full-image {
            max-height: 400px;
          }
        }

        @media (max-width: 480px) {
          .certificates {
            padding: 40px 5%;
          }

          .certificate-title {
            font-size: 2rem;
          }

          .paper-name {
            font-size: 1.2rem;
            padding: 15px;
          }

          .see-more-btn {
            padding: 15px 30px;
            font-size: 1.1rem;
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

        .certificate-title, .paper-name, .see-more-btn, .certificate-image-only {
          animation: fadeInUp 0.6s ease-out;
        }

        .certificate-title { animation-delay: 0.1s; }
        .paper-name { animation-delay: 0.2s; }
        .see-more-btn { animation-delay: 0.3s; }
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
          <div className="certificates-content">
            {/* Left Section - Only 3 Elements */}
            <div className="left-section">
              <h1 className="certificate-title">
                Research Publication Certificate
              </h1>

              <div className="paper-name">{certificate.paperName}</div>
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
