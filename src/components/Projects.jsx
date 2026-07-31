import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

// Reusable Project Card Component
const ProjectCard = ({ project, index }) => (
  <motion.div
    className="card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    style={{ display: 'flex', flexDirection: 'column' }}
  >
    {project.tag && (
      <div style={{ marginBottom: '1rem' }}>
        <span className="badge" style={{ backgroundColor: '#fef3c7', color: '#d97706', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: '6px', height: '6px', backgroundColor: '#d97706', borderRadius: '50%' }}
          ></motion.span>
          {project.tag}
        </span>
      </div>
    )}

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{project.title}</h3>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
          title="View Source Code"
        >
          <FiGithub size={16} /> GitHub
        </a>
      )}
    </div>
    <p style={{ color: 'var(--secondary-text)', fontSize: '1rem', marginBottom: '1.5rem' }}>{project.subtitle}</p>

    <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
      <h4 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--secondary-text)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>Features</h4>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {project.features.map((feature, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-color)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>

    {project.stack && project.stack.length > 0 && (
      <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {project.stack.map((tech, idx) => (
            <span key={idx} style={{
              fontSize: '0.75rem',
              padding: '0.3rem 0.8rem',
              backgroundColor: 'rgba(79, 70, 229, 0.08)',
              border: '1px solid rgba(79, 70, 229, 0.2)',
              borderRadius: '20px',
              color: 'var(--primary-color)',
              fontWeight: 600
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: 'MediSync',
      subtitle: 'Secure Healthcare Record Management System',
      tag: 'Ongoing Major Project',
      features: ['Centralized medical records', 'Role-based access', 'AI-powered analytics', 'Blockchain data integrity']
    },
    {
      title: 'Quick Voice',
      subtitle: 'AI Voice Agent Infrastructure',
      tag: 'Open Source Contributor',
      features: ['Integrated Langfuse observability', 'Configured secure API keys', 'Captured AI trace data', 'Validated local execution'],
      stack: ['Python', 'Langfuse', 'AI/ML'],
      githubUrl: 'https://github.com/Suhassagar/QuickVoice'
    },
    {
      title: 'MIT EduPulse',
      subtitle: 'College Feedback Management System',
      features: ['Student feedback', 'Admin dashboard', 'REST API', 'Database Integration'],
      stack: ['React', 'Node', 'Express', 'MySQL', 'JavaScript'],
      githubUrl: 'https://github.com/Suhassagar/college_feedback_system'
    },
    {
      title: 'TaskPulse',
      subtitle: 'Real-Time Task Management Platform',
      features: ['Task Assignment', 'Employee Monitoring', 'Dashboard', 'Dynamic Status Tracking'],
      stack: ['React', 'Node', 'Express', 'MySQL'],
      githubUrl: 'https://github.com/Suhassagar/TaskPlus'
    },
    {
      title: 'Ecommerce',
      subtitle: 'Modern E-commerce Web Application',
      features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Responsive UI'],
      stack: ['JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/Suhassagar/Ecommerce'
    }
  ];

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--alt-bg)' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem' }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
