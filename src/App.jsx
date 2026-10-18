import React, { useEffect } from 'react';
import './index.css';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            {/* The logo file will be placed in the public folder */}
            <img src="/logo-rect.png" alt="TheTechForever Logo" id="brand-logo" />
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact" className="btn-primary">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg">
            <div className="gradient-blob shape1"></div>
            <div className="gradient-blob shape2"></div>
          </div>
          <div className="container hero-content">
            <h1 className="fade-in">Empowering Your Digital Future with <span className="highlight">TheTechForever</span></h1>
            <p className="fade-in" style={{ transitionDelay: '0.2s' }}>
              We deliver cutting-edge Web Development, Mobile Apps, Cloud Solutions, and robust IT Consulting to scale your business.
            </p>
            <div className="hero-buttons fade-in" style={{ transitionDelay: '0.4s' }}>
              <a href="#services" className="btn-primary lg">Explore Services</a>
              <a href="#contact" className="btn-secondary lg">Get in Touch</a>
            </div>
          </div>
        </section>

        <section id="services" className="services section-padding">
          <div className="container">
            <div className="section-header fade-in">
              <h2>Our Expertise</h2>
              <p>Comprehensive IT solutions tailored to your unique business needs.</p>
            </div>
            <div className="services-grid">
              <div className="service-card fade-in">
                <div className="icon">💻</div>
                <h3>Web Development</h3>
                <p>Custom websites, WordPress, and Shopify eCommerce solutions built for performance and conversion.</p>
              </div>
              <div className="service-card fade-in" style={{ transitionDelay: '0.1s' }}>
                <div className="icon">📱</div>
                <h3>Mobile App Dev</h3>
                <p>Native and cross-platform mobile applications that offer seamless user experiences.</p>
              </div>
              <div className="service-card fade-in" style={{ transitionDelay: '0.2s' }}>
                <div className="icon">☁️</div>
                <h3>Cloud Solutions</h3>
                <p>Scalable cloud infrastructure, migration, and management to future-proof your operations.</p>
              </div>
              <div className="service-card fade-in">
                <div className="icon">🤝</div>
                <h3>IT Consulting</h3>
                <p>Strategic technology guidance to align your IT infrastructure with business goals.</p>
              </div>
              <div className="service-card fade-in" style={{ transitionDelay: '0.1s' }}>
                <div className="icon">🚀</div>
                <h3>Web Hosting</h3>
                <p>Reliable, secure, and blazing-fast web hosting solutions with 99.9% uptime guarantee.</p>
              </div>
              <div className="service-card fade-in" style={{ transitionDelay: '0.2s' }}>
                <div className="icon">🌐</div>
                <h3>Domain Services</h3>
                <p>Find, register, and manage the perfect domain name for your digital identity.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="services section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container contact-container" style={{ alignItems: 'center' }}>
            <div className="contact-info fade-in">
              <h2>About <span className="highlight">TheTechForever</span></h2>
              <p>We are a forward-thinking IT services and development company dedicated to transforming ideas into reality. With a team of seasoned experts, we leverage the latest technologies to deliver scalable, secure, and innovative solutions.</p>
              <p>Our mission is to empower businesses to thrive in the digital age by providing unparalleled tech solutions and ongoing support.</p>
              <br/>
              <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                <li>✓ Agile Development Process</li>
                <li>✓ 24/7 Dedicated Support</li>
                <li>✓ Expert Team of Developers</li>
              </ul>
            </div>
            <div className="contact-form fade-in" style={{ background: 'var(--glass-bg)', display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
              <div>
                <h3 className="highlight" style={{ fontSize: '3rem' }}>100+</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Projects Delivered</p>
              </div>
              <div>
                <h3 className="highlight" style={{ fontSize: '3rem' }}>50+</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Happy Clients</p>
              </div>
              <div>
                <h3 className="highlight" style={{ fontSize: '3rem' }}>5+</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-padding">
          <div className="container contact-container">
            <div className="contact-info fade-in">
              <h2>Ready to start your project?</h2>
              <p>Let's discuss how we can help your business grow. Reach out to us today.</p>
              <div className="info-item">
                <span className="icon">📧</span>
                <p>info@thetechforever.com</p>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <p>Avadh Appartment, Nizampura Gam, Vadodara - 390002</p>
              </div>
            </div>
            <form className="contact-form fade-in" style={{ transitionDelay: '0.2s' }}>
              <div className="form-group">
                <input type="text" id="name" required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" id="email" required placeholder="Your Email" />
              </div>
              <div className="form-group">
                <select id="service" required defaultValue="">
                  <option value="" disabled>Select a Service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="hosting">Hosting & Domain</option>
                </select>
              </div>
              <div className="form-group">
                <textarea id="message" rows="5" required placeholder="Project Details"></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-container">
          <div className="footer-brand">
            <img src="/logo-square.png" alt="TheTechForever Logo" className="footer-logo" />
            <p>Empowering your digital journey with innovative tech solutions.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn">In</a>
              <a href="#" aria-label="Twitter">Tw</a>
              <a href="#" aria-label="Facebook">Fb</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TheTechForever. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
