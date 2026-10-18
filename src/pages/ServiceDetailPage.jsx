import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { api, MOCK_SERVICES } from '../api/wordpress';
import SEOHead from '../components/SEOHead';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Globe, 
  Smartphone, 
  Cloud, 
  LayoutTemplate, 
  Compass, 
  Server,
  Send,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

const iconMap = { Globe, Smartphone, Cloud, LayoutTemplate, Compass, Server };

export default function ServiceDetailPage({ slug }) {
  const { navigate } = useRouter();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');

  useEffect(() => {
    async function loadService() {
      setLoading(true);
      const data = await api.getServiceBySlug(slug);
      setService(data);
      setLoading(false);
    }
    loadService();
  }, [slug]);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    await api.submitInquiry({
      name: inquiryName,
      email: inquiryEmail,
      service: service?.title || slug,
      message: inquiryMsg
    });
    setFormSubmitted(true);
  };

  if (loading || !service) {
    return (
      <div className="container" style={{ paddingTop: '180px', paddingBottom: '100px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading service architecture...</p>
      </div>
    );
  }

  const Icon = iconMap[service.iconName] || Globe;

  return (
    <>
      <SEOHead 
        title={`${service.title} Solutions`}
        description={service.shortDesc}
      />

      <div className="container" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
        {/* Breadcrumb / Back button */}
        <div style={{ marginBottom: '2rem' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/services')}
            style={{ padding: '0.5rem 1rem', fontSize: '0.88rem' }}
          >
            <ArrowLeft size={16} />
            <span>All Services</span>
          </button>
        </div>

        {/* Hero Banner for Service */}
        <div className="glass-card" style={{ padding: '3.5rem', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <div className="bento-icon-wrapper" style={{ margin: 0, width: '42px', height: '42px' }}>
              <Icon size={22} />
            </div>
            {service.badge && (
              <span className="section-badge" style={{ margin: 0 }}>{service.badge}</span>
            )}
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            {service.title}
          </h1>

          <p style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)', maxWidth: '780px', marginBottom: '1.8rem', lineHeight: '1.5' }}>
            {service.tagline}
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '850px', lineHeight: '1.8' }}>
            {service.fullDesc}
          </p>
        </div>

        {/* Two-Column Deep Dive */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'flex-start' }}>
          {/* Left Column: Key Features & Deliverables */}
          <div>
            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: '#ffffff' }}>
                Engineering Architecture & Capabilities
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {service.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.6' }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: '#ffffff' }}>
                Production Deliverables
              </h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {service.deliverables.map((del, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', color: 'var(--text-secondary)' }}>
                    <ShieldCheck size={20} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.98rem' }}>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tech Stack & Fast Consultation Form */}
          <div>
            {/* Tech Stack Box */}
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#ffffff' }}>
                Technology & Toolchains
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {service.techStack.map((tech, idx) => (
                  <span key={idx} className="hero-tech-pill" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Consultation Form */}
            <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid var(--border-highlight)' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                Request Scoping for {service.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                Receive a dedicated proposal from our senior engineering team in Vadodara within 24 hours.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleInquirySubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      required 
                      placeholder="e.g. John Doe"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      required 
                      placeholder="e.g. john@company.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Objectives</label>
                    <textarea 
                      className="form-textarea" 
                      rows={3} 
                      placeholder="Tell us about your technical goals or system constraints..."
                      value={inquiryMsg}
                      onChange={(e) => setInquiryMsg(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-glow" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <Send size={16} />
                    <span>Send Technical Brief</span>
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <CheckCircle size={36} color="var(--accent-emerald)" style={{ margin: '0 auto 1rem auto' }} />
                  <h4>Technical Inquiry Received</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Our solutions architect will review your project requirements and follow up promptly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
