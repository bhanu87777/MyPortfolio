import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import heroImage from "../../assets/Image.png"; // Adjust path as needed

function Hero() {
  return (
    <>
      <style>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 60px 8%;
          background: black;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 213, 21, 0.2);
          min-height: 80vh;
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
            radial-gradient(circle at 20% 80%, rgba(0, 213, 21, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 170, 255, 0.1) 0%, transparent 50%);
          z-index: 1;
        }

        .hero-left, .hero-right {
          position: relative;
          z-index: 2;
        }

        .hero-left {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 500px;
          position: relative;
        }

        .image-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          max-width: 400px;
          width: 100%;
          z-index: 3; /* Ensure image is above particles */
        }

        /* Remove the red overlay and use only box-shadow */
        .image-container::before {
          display: none; /* Remove the gradient overlay */
        }

        .image-container:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 213, 21, 0.4);
          box-shadow: 
            0 0 30px rgba(0, 213, 21, 0.8),
            0 0 50px rgba(0, 170, 255, 0.6),
            0 0 70px rgba(0, 213, 21, 0.4),
            0 15px 35px rgba(0, 170, 255, 0.3),
            inset 0 0 15px rgba(0, 213, 21, 0.2);
        }

        .profile-image {
          width: 100%;
          height: auto;
          border-radius: 15px;
          display: block;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
          filter: brightness(1.05) contrast(1.1);
        }

        .image-container:hover .profile-image {
          transform: scale(1.02);
          filter: brightness(1.1) contrast(1.2);
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1; /* Particles behind the image */
          pointer-events: none;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #ffffff, #00d515, #00aaff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .hero p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 30px;
          color: #e3e3e3;
          font-weight: 400;
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
          margin-bottom: 30px;
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

        .hero p:last-child {
          font-size: 1rem;
          color: #b8b8b8;
          margin-bottom: 0;
        }

        .hero p:last-child span {
          color: #00d515;
          font-weight: 600;
          margin: 0 5px;
          transition: all 0.3s ease;
        }

        .hero p:last-child span:hover {
          color: #00aaff;
          text-shadow: 0 0 10px rgba(0, 170, 255, 0.5);
        }

        .canvas-container {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .text-stack {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 400px;
        }

        .text-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(0, 213, 21, 0.3);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          width: 100%;
        }

        .text-container:hover {
          border-color: rgba(0, 213, 21, 0.6);
          box-shadow: 0 10px 30px rgba(0, 213, 21, 0.3);
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .main-text {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(45deg, #00d515, #00aaff, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          line-height: 1;
        }

        .sub-text {
          color: #b0b0b0;
          font-size: 1.2rem;
          margin-top: 10px;
          font-weight: 500;
        }

        .description {
          color: #e3e3e3;
          font-size: 0.9rem;
          margin-top: 8px;
          line-height: 1.4;
        }

        /* Gradient glow animation for continuous effect - matching title colors */
        @keyframes gradientPulse {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(0, 213, 21, 0.6),
              0 0 40px rgba(0, 170, 255, 0.4),
              0 0 60px rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 
              0 0 25px rgba(0, 213, 21, 0.8),
              0 0 50px rgba(0, 170, 255, 0.6),
              0 0 75px rgba(255, 255, 255, 0.3);
          }
        }

        .image-container {
          animation: gradientPulse 3s ease-in-out infinite;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero {
            padding: 50px 5%;
          }

          .hero h1 {
            font-size: 3rem;
          }

          .hero-right {
            height: 400px;
          }

          .main-text {
            font-size: 2.5rem;
          }

          .text-container {
            padding: 25px;
          }

          .image-container {
            max-width: 350px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding: 40px 5%;
            gap: 40px;
            min-height: auto;
          }

          .hero-left {
            max-width: 100%;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero p {
            font-size: 1.1rem;
          }

          .hero-right {
            height: 350px;
            width: 100%;
          }

          .main-text {
            font-size: 2.2rem;
          }

          .text-container {
            padding: 20px;
          }

          .text-stack {
            max-width: 350px;
          }

          .image-container {
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 30px 5%;
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

          .hero-right {
            height: 300px;
          }

          .main-text {
            font-size: 1.8rem;
          }

          .text-container {
            padding: 15px;
          }

          .text-stack {
            max-width: 300px;
            gap: 15px;
          }

          .image-container {
            max-width: 250px;
            padding: 15px;
          }
        }

        /* Animation for text */
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

        .hero-left h1,
        .hero-left p,
        .hero-left a {
          animation: fadeInUp 0.6s ease-out;
        }

        .hero-left p:nth-child(2) {
          animation-delay: 0.2s;
        }

        .hero-left a {
          animation-delay: 0.4s;
        }

        .hero-left p:last-child {
          animation-delay: 0.6s;
        }

        .image-container {
          animation: fadeInUp 0.8s ease-out, gradientPulse 3s ease-in-out infinite;
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }

        .text-container:nth-child(1) {
          animation: fadeInUp 0.8s ease-out;
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }

        .text-container:nth-child(2) {
          animation: fadeInUp 0.8s ease-out;
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }

        .text-container:nth-child(3) {
          animation: fadeInUp 0.8s ease-out;
          animation-delay: 0.7s;
          animation-fill-mode: both;
        }
      `}</style>

      <section className="hero">
        <div className="hero-left">
          <div className="particles-container">
            <Canvas
              camera={{ position: [0, 0, 1] }}
              style={{ background: "transparent" }}
            >
              <EnhancedParticleBackground />
            </Canvas>
          </div>
          <div className="image-container">
            <img
              src={heroImage}
              alt="Profile"
              className="profile-image"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x400/000000/FFFFFF?text=Profile+Image";
              }}
            />
          </div>
        </div>

        <div className="hero-right">
          <div className="text-stack">
            <h1>Hi, I'm Bhanu Prakash M👋</h1>
            <p>
              Building intuitive Web Apps and exploring the world of Machine
              Learning. Crafting code that makes an impact.
            </p>

            <a
              href="https://github.com/bhanu87777"
              className="hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover My Work
            </a>
            <p>
              Contact: <span>bhanu.cs22@bmsce.ac.in</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// Particle Background Component with LARGER particles
function ParticleBackground() {
  const pointsRef = useRef();
  const particlesCount = 1500; // Reduced count for better performance with larger particles

  // Generate particles in a sphere
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const distance = 1.5 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() - 0.5) * 2);

      positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = distance * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;

      // Gentle floating animation
      pointsRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={particlesPosition}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#00d515"
        size={0.03} // MUCH LARGER - increased from 0.005 to 0.03
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Additional Particle System for Floating Dots with LARGER particles
function FloatingParticles() {
  const pointsRef = useRef();
  const particlesCount = 400;

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      // Create particles in a larger volume
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      // Very slow rotation
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;

      // Individual particle movement
      const positions = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.0005;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={particlesPosition}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#00aaff"
        size={0.02} // MUCH LARGER - increased from 0.003 to 0.02
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
}

// Updated ParticleBackground to include both systems
function EnhancedParticleBackground() {
  return (
    <>
      <ParticleBackground />
      <FloatingParticles />
      {/* Ambient light for better visibility */}
      <ambientLight intensity={0.5} />
    </>
  );
}

export default Hero;
