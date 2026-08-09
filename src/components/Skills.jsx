import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Bootstrap', level: 85 },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'NestJS', level: 80 },
        { name: 'Express', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'SQLite', level: 80 },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Electron', level: 75 },
        { name: 'AWS (S3, SES)', level: 75 },
        { name: 'Jenkins', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section animate-fade-in delay-3">
      <div className="section-header">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div className="skill-item" key={idx}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
