import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Software Engineer',
      company: 'Tech Innovators Inc.',
      period: '2021 - Present',
      description: 'Led the architecture and development of a microservices-based e-commerce platform. Mentored a team of 5 junior developers, improving code review processes and reducing production bugs by 40%.',
      tech: ['React', 'Node.js', 'AWS', 'GraphQL']
    },
    {
      id: 2,
      role: 'Software Engineer',
      company: 'Global Solutions LLC',
      period: '2018 - 2021',
      description: 'Developed and maintained enterprise-level web applications. Migrated legacy monolithic architecture to RESTful APIs and React frontends, increasing performance by 60%.',
      tech: ['JavaScript', 'React', 'Express', 'MongoDB']
    },
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'Creative Digital Agency',
      period: '2016 - 2018',
      description: 'Built responsive and interactive user interfaces for various clients. Collaborated closely with UI/UX designers to implement pixel-perfect designs.',
      tech: ['HTML/CSS', 'Vue.js', 'Sass', 'Figma']
    }
  ];

  return (
    <section id="experience" className="experience-section animate-fade-in delay-2">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.id}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <h4 className="company">{exp.company}</h4>
              <p className="description">{exp.description}</p>
              <div className="tech-stack">
                {exp.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
