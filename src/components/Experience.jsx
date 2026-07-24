import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'React Developer Intern',
      company: 'Atherys Technologies Pvt Ltd',
      highlights: [
        'Built responsive React interfaces',
        'Developed TaskPulse',
        'Reusable React components',
        'API Integration',
        'Team Collaboration'
      ]
    },
    {
      role: 'Java Developer Intern',
      company: 'Atherys Technologies Pvt Ltd',
      highlights: [
        'Java Development',
        'OOP Concepts',
        'Debugging',
        'Testing',
        'SDLC Exposure'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--alt-bg)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 className="section-title">Experience</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-color)', marginBottom: '0.25rem' }}>
                {exp.role}
              </h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 500, marginBottom: '1.5rem' }}>
                {exp.company}
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-text)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-color)' }}></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
