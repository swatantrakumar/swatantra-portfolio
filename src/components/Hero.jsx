import './Hero.css';

const Hero = () => {
  return (
    <section className="hero animate-fade-in delay-1">
      <div className="hero-content">
        <h2 className="greeting">Hi, I'm</h2>
        <h1 className="name">Swatantra Kumar</h1>
        <h3 className="title">Senior Software Engineer</h3>
        <p className="bio">
          I build scalable web applications and distributed systems. Passionate about clean code, 
          architecture, and mentoring teams to deliver exceptional digital experiences. 
          With over 8 years of experience in React, Node.js, and cloud technologies.
        </p>
        <div className="actions">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary">View Work</a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <div className="hero-image-bg"></div>
        <img 
          src="/profile.jpg" 
          alt="Swatantra Kumar" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
