function Footer() {
  return (
    <>
      <style>{`
        .footer {
          padding: 60px 8%;
          background: black;
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(0, 213, 21, 0.3);
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(0, 213, 21, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 170, 255, 0.08) 0%, transparent 50%);
          z-index: 1;
        }

        .footer-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 50px;
          align-items: start;
        }

        .footer-section h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #ffffff, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-section p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #e3e3e3;
          margin-bottom: 0;
        }

        .footer-section h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 25px;
          background: linear-gradient(45deg, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 15px;
        }

        .footer-links a {
          color: #e3e3e3;
          text-decoration: none;
          font-size: 1.1rem;
          transition: color 0.3s ease;
          display: block;
        }

        .footer-links a:hover {
          color: #00d515;
        }

        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-info li {
          color: #e3e3e3;
          font-size: 1.1rem;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        }

        .contact-info li:last-child {
          margin-bottom: 0;
        }

        .copyright {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 50px auto 0 auto;
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .copyright p {
          font-size: 1rem;
          color: #b8b8b8;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer {
            padding: 50px 5%;
          }

          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .footer-section h2 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 5%;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 35px;
            text-align: center;
          }

          .footer-section h2 {
            font-size: 2rem;
          }

          .footer-section h3 {
            font-size: 1.3rem;
          }

          .contact-info li {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 30px 5%;
          }

          .footer-section h2 {
            font-size: 1.8rem;
          }

          .footer-section p {
            font-size: 1rem;
          }

          .footer-links a,
          .contact-info li {
            font-size: 1rem;
          }
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-section {
          animation: fadeInUp 0.6s ease-out;
        }

        .footer-section:nth-child(1) { animation-delay: 0.1s; }
        .footer-section:nth-child(2) { animation-delay: 0.2s; }
        .footer-section:nth-child(3) { animation-delay: 0.3s; }
        .footer-section:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2>Portfolio</h2>
            <p>
              Passionate developer crafting innovative solutions with
              cutting-edge technologies. Let's build something amazing together!
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#services">Web Development</a>
              </li>
              <li>
                <a href="#services">ML/AI Solutions</a>
              </li>
              <li>
                <a href="#services">Full-Stack Apps</a>
              </li>
              <li>
                <a href="#services">Tech Consulting</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>bhanu.cs22@bmsce.ac.in</li>
              <li>+91 6360591622</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>© 2025 Bhanu Prakash. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
