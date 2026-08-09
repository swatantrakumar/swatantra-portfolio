import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 0,
      role: 'Senior Software Engineer',
      company: 'Egreen Farms Private Limited',
      period: 'Jan 2025 - Present',
      description: 'Working on Accounting software ERP utilizing a modern technology stack to build robust cross-platform desktop applications.',
      tech: ['React', 'Electron', 'NestJS', 'SQLite']
    },
    {
      id: 1,
      role: 'Senior Software Engineer',
      company: 'Quality & Testing Infosolution Pvt. Ltd.',
      period: 'Oct 2020 - Dec 2024',
      description: 'Developed and maintained web applications using Angular. Integrated RESTful APIs using Java and Node.js to connect with MongoDB. Successfully developed and launched LIMS Project for E-Labs, improving application performance by 80%.',
      tech: ['Angular', 'Node.js', 'Java', 'MongoDB']
    },
    {
      id: 2,
      role: 'Software Engineer',
      company: 'Mclear Technology Solution Pvt. Ltd.',
      period: 'Jan 2020 - Oct 2020',
      description: 'Designed and implemented interactive user interfaces using Angular. Built and maintained backend services with Node.js and Express.js, integrating with MongoDB for data storage and retrieval.',
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB']
    },
    {
      id: 3,
      role: 'Web Developer',
      company: 'Muniwar Technologies Pvt. Ltd.',
      period: 'Oct 2017 - Dec 2019',
      description: 'Developed dynamic and interactive website that ensured high traffic, page views, and user experience. Designed and developed user-friendly optimized check-out pages.',
      tech: ['HTML', 'CSS', 'JavaScript']
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
