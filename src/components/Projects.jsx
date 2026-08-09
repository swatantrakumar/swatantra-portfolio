import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'LIMS (Lab Information Management System)',
      description: 'A web-based application (eLabs) that allows one to effectively manage samples and associated data. It automates workflows, integrates instruments, and manages sample information. It generates lab reports in different categories like time, tasks, performance, materials, and operational resources. E-Labs is currently used by several labs, including Qualitek Pune, Qualitek BBSR, ITC Lab Panchkula, and Multani.',
      tech: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Operation Management – TDS (Test Data Sheet)',
      description: 'Organized, maintained, and utilized test data sheets to support efficient operation management. Developed and implemented strategies to optimize test data management processes, enhancing productivity and minimizing errors using Freemarker report templates.',
      tech: ['Java', 'Freemarker', 'Backend', 'Data Analysis']
    },
    {
      id: 3,
      title: 'Accounting Software ERP',
      description: 'Developing a robust cross-platform desktop application for accounting and enterprise resource planning. Utilizing modern technologies to ensure high performance and data integrity.',
      tech: ['React', 'Electron', 'NestJS', 'SQLite']
    }
  ];

  return (
    <section id="projects" className="projects-section animate-fade-in delay-2">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
