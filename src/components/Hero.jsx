import './Hero.css';

const Hero = () => {
  return (
    <section className="hero animate-fade-in delay-1">
      <div className="hero-content">
        <h2 className="greeting">Hi, I'm</h2>
        <h1 className="name">Swatantra Kumar</h1>
        <h3 className="title">Full Stack Developer</h3>
        <p className="bio">
          I bring 7 years of experience in the IT sector, specializing in building robust front-end 
          applications using Angular and scalable back-end services with Node.js. 
          I have a deep interest in creating dynamic systems and mentoring cross-functional teams 
          to ensure project success.
        </p>
        <div className="actions">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary">View Work</a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <div className="hero-image-bg"></div>
        <div className="hero-image-container">
          <img 
            src="/profile.jpg" 
            alt="Swatantra Kumar" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
