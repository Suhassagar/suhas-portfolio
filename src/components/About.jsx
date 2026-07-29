import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="card" style={{ padding: '3rem', borderLeft: '4px solid var(--primary-color)' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-color)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              I am a <strong>Computer Science Engineering student</strong> and <strong>Full Stack Web Developer</strong> passionate about building scalable, responsive, and user-focused web applications.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--secondary-text)', lineHeight: 1.8 }}>
              With hands-on experience as a <strong>React Developer</strong> and <strong>Java Developer Intern</strong>, I have developed strong skills in modern web technologies, problem-solving, and collaborative software development. I enjoy learning new technologies, optimizing applications, and creating efficient, high-quality solutions that deliver real-world impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
