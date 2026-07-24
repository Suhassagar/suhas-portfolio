import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Docker', 'Figma']
    },
    {
      title: 'Languages',
      skills: ['Java', 'C', 'JavaScript']
    },
    {
      title: 'Core Concepts',
      skills: ['Object-Oriented Programming', 'DBMS', 'Operating Systems', 'Computer Networks']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
