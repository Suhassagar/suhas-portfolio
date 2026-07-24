import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
      <div className="container hero-grid">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--secondary-text)', marginBottom: '0.5rem' }}>
            Hi, I'm Suhas Sagar
          </h2>

          <h1 className="hero-title" style={{
            background: 'linear-gradient(90deg, var(--text-color) 0%, var(--primary-color) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Full Stack Web Developer
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-text)', marginBottom: '1rem', fontWeight: 400 }}>
            Building responsive, scalable, and modern web applications with React.js, Node.js, Express.js, MySQL, and MongoDB.
          </p>

          <p style={{ fontSize: '1rem', color: 'var(--secondary-text)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Computer Science Engineering student with internship experience in React and Java development. Passionate about creating clean, scalable software and continuously learning modern technologies.
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download Resume</a>

            <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
              <a href="https://github.com/Suhassagar" style={{ color: 'var(--secondary-text)', fontSize: '1.25rem' }}><FiGithub /></a>
              <a href="https://www.linkedin.com/in/suhassagar6" style={{ color: 'var(--secondary-text)', fontSize: '1.25rem' }}><FiLinkedin /></a>
              <a href="mailto:suhassagar44@gmail.com" style={{ color: 'var(--secondary-text)', fontSize: '1.25rem' }}><FiMail /></a>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{
              width: '400px',
              height: '400px',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '8px solid white'
            }}
          >
            <img
              src="/profiles.png"
              alt="Suhas Sagar Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
