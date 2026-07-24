import { motion } from 'framer-motion';

const Achievements = () => {
  const stats = [
    { value: '2', label: 'Internships Completed' },
    { value: '3', label: 'Major Projects' },
    { value: '10+', label: 'Technologies' },
    { value: '100%', label: 'Learning Mindset' }
  ];

  return (
    <section id="achievements" className="section" style={{ backgroundColor: 'var(--alt-bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ textAlign: 'center', padding: '3rem 2rem' }}
            >
              <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-color)', marginBottom: '0.5rem', lineHeight: 1 }}>
                {stat.value}
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--secondary-text)' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
