import "./Hero.css";
import heroVideo from "../assets/hero.mp4";

function Hero() {
  return (
    <section className="hero" id="home">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1>Hi, I'm <span>NEJANDEN</span></h1>
        <h2>Full Stack Developer</h2>
        <p>I design and develop modern, responsive web applications with clean UI.</p>
        <div className="hero-buttons">
          <button className="btn primary">Hire Me</button>
          <button className="btn">Download CV</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;