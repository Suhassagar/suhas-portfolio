import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Ambient Glows */}
      <div style={{ position: 'absolute', top: '20%', left: '-5%', width: '400px', height: '400px', background: 'var(--primary-color)', opacity: 0.08, filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '300px', height: '300px', background: '#38bdf8', opacity: 0.08, filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>

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
            Full Stack Developer
          </h1>



          <p style={{ fontSize: '1rem', color: 'var(--secondary-text)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Computer Science Engineering student with internship experience in React and Java development. Passionate about creating clean, scalable software and continuously learning modern technologies.
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://drive.google.com/file/d/1AQYApfW4EB2TIBJGgJiT4nlSK8R8cNHo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download Resume</a>

            <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
              <a href="https://github.com/Suhassagar" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-text)', fontSize: '1.25rem' }}><FiGithub /></a>
              <a href="https://www.linkedin.com/in/suhassagar6" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-text)', fontSize: '1.25rem' }}><FiLinkedin /></a>
              <a href="mailto:suhassagar06@gmail.com" style={{ color: 'var(--secondary-text)', fontSize: '1.25rem' }}><FiMail /></a>
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
              background: 'linear-gradient(135deg, var(--primary-color) 0%, #38bdf8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.4)',
              border: '8px solid var(--card-bg)'
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
