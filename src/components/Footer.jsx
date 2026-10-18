import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight, ArrowUp } from 'lucide-react';

// Crisp vector SVG brand icons
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
);

export default function Footer() {
  const { navigate } = useRouter();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-corporate">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#/" onClick={(e) => handleLinkClick(e, '/')} className="brand-logo-link">
              <img src="/logo-rect.png" alt="TheTechForever" style={{ height: '38px', objectFit: 'contain' }} />
            </a>
            <p>
              Empowering your digital future with scalable tech solutions. We architect cutting-edge web applications, mobile platforms, headless CMS systems, and cloud environments.
            </p>
            <div className="registration-badge">
              <span><ShieldCheck size={14} color="#10b981" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /><strong>Udyam & GST Registered Enterprise</strong></span>
              <span>Headquartered in Vadodara, Gujarat, India</span>
            </div>
          </div>

          {/* Services Col */}
          <div className="footer-col">
            <h4>Core Services</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#/services/web-development" onClick={(e) => handleLinkClick(e, '/services/web-development')}>
                  Custom Web Engineering
                </a>
              </li>
              <li>
                <a href="#/services/mobile-apps" onClick={(e) => handleLinkClick(e, '/services/mobile-apps')}>
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#/services/cloud-solutions" onClick={(e) => handleLinkClick(e, '/services/cloud-solutions')}>
                  Cloud Solutions & DevOps
                </a>
              </li>
              <li>
                <a href="#/services/wordpress-cms" onClick={(e) => handleLinkClick(e, '/services/wordpress-cms')}>
                  Headless WordPress & CMS
                </a>
              </li>
              <li>
                <a href="#/services/it-consulting" onClick={(e) => handleLinkClick(e, '/services/it-consulting')}>
                  IT Architecture Consulting
                </a>
              </li>
              <li>
                <a href="#/services/hosting-domains" onClick={(e) => handleLinkClick(e, '/services/hosting-domains')}>
                  Managed Hosting & Domains
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links-list">
              <li><a href="#/about" onClick={(e) => handleLinkClick(e, '/about')}>About TheTechForever</a></li>
              <li><a href="#/portfolio" onClick={(e) => handleLinkClick(e, '/portfolio')}>Case Studies & Work</a></li>
              <li><a href="#/blog" onClick={(e) => handleLinkClick(e, '/blog')}>Engineering Blog</a></li>
              <li><a href="#/estimate" onClick={(e) => handleLinkClick(e, '/estimate')}>Project Estimator</a></li>
              <li><a href="#/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Schedule Consultation</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col">
            <h4>Headquarters</h4>
            <div className="footer-contact-item">
              <MapPin size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Avadh Apartment, Nizampura Gam, Vadodara - 390002, Gujarat, India</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <a href="mailto:info@thetechforever.com" style={{ color: 'var(--text-secondary)' }}>
                info@thetechforever.com
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <a href="tel:+919403123579" style={{ color: 'var(--text-secondary)' }}>
                +91 94031 23579
              </a>
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <a 
                href="#/estimate" 
                onClick={(e) => handleLinkClick(e, '/estimate')}
                className="btn btn-secondary" 
                style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
              >
                <span>Calculate Project Budget</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} TheTechForever (TTF). All Rights Reserved. Transforming vision into code.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div className="footer-social-row">
              <a href="https://linkedin.com/company/thetechforever" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com/thetechforever" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com/thetechforever" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://github.com/thetechforever" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="GitHub">
                <GithubIcon />
              </a>
            </div>

            <button 
              onClick={scrollToTop}
              className="social-pill"
              aria-label="Back to top"
              style={{ cursor: 'pointer', background: 'rgba(255, 255, 255, 0.08)' }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
