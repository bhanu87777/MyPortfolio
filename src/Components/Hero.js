import React from "react";
import "./Hero.css";
import i1 from "../Assets/PIC.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hi, I'm Bhanu Prakash 👋</h1>
        <p>
          Building intuitive Web Apps and exploring the world of Machine
          Learning. Crafting code that makes an impact.
        </p>

        <a
          href="/Resume.pdf"
          className="hero-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume
        </a>
        <p>
          Contact: <span>bhanu.cs22@bmsce.ac.in</span>|<span>6360591622</span>
        </p>
      </div>

      <div className="hero-right">
        <img src={i1} alt="Bhanu Prakash" />
      </div>
    </section>
  );
}

export default Hero;
