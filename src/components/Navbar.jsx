import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { Menu, X, Sparkles, ChevronRight, PhoneCall, Code2 } from 'lucide-react';

export default function Navbar() {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    setMobileOpen(false);
  };

  const isLinkActive = (path) => {
    if (path === '/' && (currentPath === '/' || currentPath === '' || currentPath === '#home')) {
      return true;
    }
    return currentPath.startsWith(path) && path !== '/';
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-wrapper">
          {/* Brand Logo */}
          <a href="#/" onClick={(e) => handleNavClick(e, '/')} className="brand-logo-link">
            <img 
              src="/logo-rect.png" 
              alt="TheTechForever Logo" 
              className="brand-logo-img" 
              onError={(e) => {
                // Graceful fallback to logo.png or svg if rect is not found
                e.target.onerror = null;
                e.target.src = '/logo.png';
              }}
            />
            <span className="brand-tagline-badge">IT Solutions</span>
          </a>

          {/* Desktop Nav Items */}
          <nav>
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={`#${item.path}`}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`nav-item-link ${isLinkActive(item.path) ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav Actions */}
          <div className="nav-actions">
            <a
              href="#/estimate"
              onClick={(e) => handleNavClick(e, '/estimate')}
              className="btn btn-glow"
            >
              <Sparkles size={16} />
              <span>Project Estimator</span>
            </a>

            <button
              className="hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Slide-in Drawer */}
      <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <img src="/logo-rect.png" alt="TheTechForever" style={{ height: '32px' }} />
          <button 
            onClick={() => setMobileOpen(false)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          >
            <X size={22} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={`#${item.path}`}
                onClick={(e) => handleNavClick(e, item.path)}
                className={isLinkActive(item.path) ? 'active' : ''}
              >
                <span>{item.label}</span>
                <ChevronRight size={18} opacity={0.6} />
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <a
            href="#/estimate"
            onClick={(e) => handleNavClick(e, '/estimate')}
            className="btn btn-glow"
            style={{ width: '100%' }}
          >
            <Sparkles size={16} />
            <span>Scope & Cost Estimator</span>
          </a>
          <a
            href="tel:+919403123579"
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <PhoneCall size={16} />
            <span>+91 94031 23579</span>
          </a>
        </div>
      </aside>
    </>
  );
}
