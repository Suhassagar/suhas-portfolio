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
          
          <div className="card" style={{ padding: '3rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-color)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              I am a dedicated <strong>Computer Science Engineering Student</strong> and a passionate <strong>Full Stack Web Developer</strong>. With a strong foundation in modern web technologies, I specialize in building scalable, responsive, and user-centric applications.
            </p>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-color)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              During my time as a <strong>React Developer Intern</strong> and <strong>Java Developer Intern</strong>, I gained hands-on experience in architecting robust front-end interfaces and developing efficient back-end services. I am a strong problem solver who thrives in collaborative environments and constantly seeks to expand my technical knowledge.
            </p>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-color)', lineHeight: 1.8 }}>
              Whether it's optimizing database queries, designing intuitive UI components, or learning a completely new framework, I am driven by a continuous <strong>passionate learning</strong> mindset to deliver high-quality software solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
