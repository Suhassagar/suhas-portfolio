import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiDatabase, FiTool, FiCode, FiBook } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiLayout size={24} style={{ color: 'var(--primary-color)' }} />,
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <FiServer size={24} style={{ color: 'var(--primary-color)' }} />,
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      title: 'Database',
      icon: <FiDatabase size={24} style={{ color: 'var(--primary-color)' }} />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools',
      icon: <FiTool size={24} style={{ color: 'var(--primary-color)' }} />,
      skills: ['Git', 'GitHub', 'Docker', 'Figma', 'Jira']
    },
    {
      title: 'Languages',
      icon: <FiCode size={24} style={{ color: 'var(--primary-color)' }} />,
      skills: ['Java', 'C', 'JavaScript']
    },
    {
      title: 'Core Concepts',
      icon: <FiBook size={24} style={{ color: 'var(--primary-color)' }} />,
      skills: ['Object-Oriented Programming', 'DBMS', 'Operating Systems', 'Computer Networks']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200 } }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(79, 70, 229, 0.1)', borderRadius: '12px' }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-color)', margin: 0 }}>
                  {category.title}
                </h3>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
              >
                {category.skills.map((skill, idx) => (
                  <motion.span 
                    key={idx} 
                    variants={itemVariants}
                    className="badge"
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--primary-color)', color: '#FFFFFF' }}
                    style={{ transition: 'background-color 0.2s, color 0.2s', cursor: 'default' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
