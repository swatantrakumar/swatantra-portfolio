import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'CSS/Sass', level: 95 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'Python', level: 75 },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 85 },
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
