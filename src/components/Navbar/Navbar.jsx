import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Navbar() {
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
        value: 1,
        random: true,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };

  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 8%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          height: 65px;
          overflow: hidden;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        /* Beautiful Text Logo */
        .logo {
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
        }

        .logo:hover {
          transform: scale(1.05);
          text-shadow: 0 0 20px rgba(0, 213, 21, 0.5);
        }

        .logo span {
          background: linear-gradient(45deg, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .logo span::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #00d515, #00aaff);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .logo:hover span::after {
          transform: scaleX(1);
        }

        .logo span::before {
          content: "⎔";
          position: absolute;
          top: -5px;
          right: -15px;
          font-size: 1rem;
          color: #00d515;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .logo:hover span::before {
          opacity: 1;
          transform: rotate(180deg);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          cursor: pointer;
          padding: 8px 0;
          position: relative;
          font-weight: 500;
          transition: all 0.3s ease;
          color: #e3e3e3;
          white-space: nowrap;
        }

        .nav-links li::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00d515, #00aaff);
          transition: width 0.3s ease;
        }

        .nav-links li:hover {
          color: white;
          transform: translateY(-2px);
        }

        .nav-links li:hover::after {
          width: 100%;
        }

        .nav-links li.active {
          color: #00d515;
          font-weight: 600;
        }

        .nav-links li.active::after {
          width: 100%;
          background: linear-gradient(90deg, #00d515, #00aaff);
        }

        .nav-links a {
          color: inherit;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .nav-btn {
          position: relative;
          color: #000000 !important;
          font-weight: 600;
          background: linear-gradient(135deg, #00d515, #00aaff);
          padding: 8px 20px;
          border-radius: 20px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          text-decoration: none;
          display: inline-block;
        }

        .nav-btn:hover {
          color: #000000 !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 213, 21, 0.3);
          background: linear-gradient(135deg, #00aaff, #00d515);
        }

        /* Regular link style for Certifications and Achievements */
        .regular-link {
          color: #e3e3e3 !important;
          background: none !important;
          padding: 8px 0 !important;
          border-radius: 0 !important;
        }

        .regular-link:hover {
          color: white !important;
          transform: translateY(-2px);
          background: none !important;
          box-shadow: none !important;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .nav-links {
            gap: 25px;
          }

          .navbar {
            padding: 6px 5%;
          }

          .logo {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: row;
            gap: 15px;
            padding: 10px 5%;
            height: auto;
            min-height: 50px;
          }

          .navbar-content {
            flex-direction: row;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav-links {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .logo {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .nav-links {
            gap: 10px;
          }

          .logo {
            font-size: 1.4rem;
          }

          .logo span::before {
            top: -2px;
            right: -10px;
            font-size: 0.8rem;
          }

          .nav-btn {
            padding: 6px 15px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <nav className="navbar">
        {/* Particle Background */}
        <div className="particles-container">
          <Particles
            id="navbar-particles"
            init={particlesInit}
            options={particlesOptions}
          />
        </div>

        <div className="navbar-content">
          <div className="logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Portfolio</span>
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#certifications" className="regular-link">
                Certifications
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-btn">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
