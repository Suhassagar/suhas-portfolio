import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Use the Web3Forms access key securely from the .env file
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };
  return (
    <section id="contact" className="section">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2 className="section-title">Get In Touch</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>Let's talk about your next project.</h3>
            <p style={{ color: 'var(--secondary-text)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
              I'm currently looking for new opportunities and software engineering internships. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(79, 70, 229, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.25rem' }}>
                  <FiMail />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--secondary-text)', fontWeight: 500 }}>Email</p>
                  <a href="mailto:suhassagar06@gmail.com" style={{ fontWeight: 500 }}>suhassagar06@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(79, 70, 229, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.25rem' }}>
                  <FiMapPin />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--secondary-text)', fontWeight: 500 }}>Location</p>
                  <span style={{ fontWeight: 500 }}>India</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
              <a href="https://github.com/Suhassagar" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '12px' }}><FiGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/suhassagar6" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '12px' }}><FiLinkedin size={20} /></a>
              <a href="https://www.instagram.com/suhassagar6/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '12px' }}><FiInstagram size={20} /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem', borderTop: '4px solid var(--primary-color)' }} onSubmit={onSubmit}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-color)', marginBottom: '0.5rem' }}>Name</label>
                <input type="text" name="name" required placeholder="Your name" className="form-input" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-color)', marginBottom: '0.5rem' }}>Email</label>
                <input type="email" name="email" required placeholder="Your email" className="form-input" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-color)', marginBottom: '0.5rem' }}>Message</label>
                <textarea name="message" required rows="4" placeholder="Your message" className="form-input" style={{ resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={result === "Sending...."}>
                {result === "Sending...." ? "Sending..." : "Send Message"}
              </button>

              {result && (
                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: result.includes("Error") || result.includes("wrong") ? 'red' : 'green', fontWeight: 500 }}>
                  {result}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
