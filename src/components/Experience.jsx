import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'React Developer Intern',
      company: 'Atherys Technologies Pvt Ltd. Hubli.',
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
      company: 'Atherys Technologies Pvt Ltd. Hubli.',
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
      <div className="container" style={{ maxWidth: '700px' }}>
        <h2 className="section-title">Experience</h2>

        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', top: '1rem', bottom: '1rem', left: '0px', width: '2px', backgroundColor: 'var(--border-color)' }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                style={{ position: 'relative' }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div style={{ 
                  position: 'absolute', 
                  top: '2rem', 
                  left: '-2.5rem', 
                  width: '16px', 
                  height: '16px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--primary-color)',
                  transform: 'translate(-50%, 0)',
                  boxShadow: '0 0 0 4px var(--alt-bg)'
                }}></div>

                <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary-color)' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-color)', marginBottom: '0.25rem' }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: 'var(--primary-color)', fontWeight: 500, marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                    {exp.company}
                  </p>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--secondary-text)', fontSize: '0.95rem' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', flexShrink: 0, marginTop: '8px' }}></div>
                        <span style={{ lineHeight: 1.4 }}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
