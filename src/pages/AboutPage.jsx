import React from 'react';
import { useRouter } from '../context/RouterContext';
import SEOHead from '../components/SEOHead';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Zap, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const { navigate } = useRouter();

  const coreValues = [
    {
      title: 'Architectural Integrity',
      desc: 'We never take shortcuts that compromise security, maintainability, or long-term operational resilience.',
      icon: ShieldCheck
    },
    {
      title: 'Performance Obsession',
      desc: 'Sub-second load times and 100/100 Core Web Vitals are our baseline standard, not an afterthought.',
      icon: Zap
    },
    {
      title: 'Transparent Collaboration',
      desc: 'Direct communication with dedicated engineers, transparent sprint backlogs, and zero opaque agency jargon.',
      icon: Users
    },
    {
      title: 'Measurable ROI',
      desc: 'Every technical architecture we construct is engineered to drive quantifiable conversions and lower cloud costs.',
      icon: Target
    }
  ];

  return (
    <>
      <SEOHead 
        title="About TheTechForever (TTF) - Enterprise IT Solutions"
        description="Learn about TheTechForever, an established IT engineering firm headquartered in Vadodara, Gujarat. We engineer web, mobile, and cloud software for ambitious global enterprises."
      />

      <section className="section-padding" style={{ paddingTop: '150px' }}>
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <div className="section-badge">
              <span>Our Identity & Mission</span>
            </div>
            <h2>
              Engineering the Backbone of <span className="text-gradient">Modern Tech</span>
            </h2>
            <p>
              TheTechForever (TTF) is a technology development and consulting firm headquartered in Vadodara, Gujarat. We bridge cutting-edge engineering with tangible business outcomes.
            </p>
          </div>

          {/* Company Story Glass Card */}
          <div className="glass-card" style={{ padding: '3.5rem', marginBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.9rem', marginBottom: '1.2rem' }}>
                  From Static Templates to <span className="text-gradient">Headless Architectures</span>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                  Founded with a vision to eliminate sluggish legacy code and fragile web infrastructure, TheTechForever has evolved into a premier software partner for global enterprises.
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Whether we are decoupling massive monolithic WordPress instances into ultra-fast React frontends, deploying cross-platform Flutter mobile apps, or provisioning multi-region Kubernetes clusters on AWS, our mission remains steadfast: **deliver engineering that endures.**
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <button className="btn btn-primary" onClick={() => navigate('/services')}>
                    <span>Explore Our Services</span>
                    <ArrowRight size={16} />
                  </button>
                  <button className="btn btn-secondary" onClick={() => navigate('/contact')}>
                    <span>Speak with our Team</span>
                  </button>
                </div>
              </div>

              {/* Corporate Credentials Box */}
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.02)', 
                border: '1px solid var(--border-subtle)', 
                borderRadius: 'var(--radius-lg)', 
                padding: '2.5rem' 
              }}>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem' }}>
                  Official Corporate Credentials
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent-emerald)" />
                    <span><strong>Entity:</strong> TheTechForever (TTF)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent-emerald)" />
                    <span><strong>Registration:</strong> Udyam MSME Registered</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent-emerald)" />
                    <span><strong>Taxation:</strong> GST Compliant Enterprise</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent-emerald)" />
                    <span><strong>Headquarters:</strong> Vadodara, Gujarat, India</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={18} color="var(--accent-emerald)" />
                    <span><strong>Global Clientele:</strong> India, US, UK, EU, UAE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="section-badge"><span>Our Pillars</span></div>
              <h2>Core Values Driving Every Line of Code</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {coreValues.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
                    <div className="bento-icon-wrapper">
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{v.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vadodara Tech Hub Section */}
          <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
            <MapPin size={36} color="var(--accent-cyan)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>
              Headquartered in Vadodara, Gujarat
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 2rem auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Avadh Apartment, Nizampura Gam, Vadodara - 390002. Operating from one of Western India's most vibrant technological and educational corridors.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+919403123579" className="btn btn-secondary">
                <span>Call Us: +91 94031 23579</span>
              </a>
              <a href="mailto:info@thetechforever.com" className="btn btn-primary">
                <span>Email: info@thetechforever.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
