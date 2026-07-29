import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? (theme === 'dark' ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)') : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <a href="#home" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 800, 
          letterSpacing: '-1px',
          background: 'linear-gradient(90deg, var(--text-color) 0%, var(--primary-color) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none'
        }}>Suhas Sagar</a>

        <nav className="nav-links">
          <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--secondary-text)' }}>About</a>
          <a href="#experience" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--secondary-text)' }}>Experience</a>
          <a href="#skills" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--secondary-text)' }}>Skills</a>
          <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--secondary-text)' }}>Projects</a>
          <a href="#contact" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--secondary-text)' }}>Contact</a>
        </nav>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: 'var(--text-color)', display: 'flex', alignItems: 'center', padding: '0.5rem'
            }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <a href="https://drive.google.com/file/d/1OUDuqj7V_veH2Y4kFcP_XP_jgOwawtZw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`btn ${scrolled ? 'btn-primary' : 'btn-outline'} desktop-resume`} style={{ fontSize: '0.9rem' }}>
            Download Resume
          </a>

          <button
            className="nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            background: 'var(--card-bg)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1rem 2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-color)' }}>About</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-color)' }}>Experience</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-color)' }}>Skills</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-color)' }}>Projects</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-color)' }}>Contact</a>
          <a href="https://drive.google.com/file/d/1OUDuqj7V_veH2Y4kFcP_XP_jgOwawtZw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.9rem', justifyContent: 'center', marginTop: '1rem' }}>
            Download Resume
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
