import React from 'react';
import { useRouter } from '../context/RouterContext';
import SEOHead from '../components/SEOHead';
import { MOCK_SERVICES } from '../api/wordpress';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  LayoutTemplate, 
  Compass, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';

const iconMap = {
  Globe, Smartphone, Cloud, LayoutTemplate, Compass, Server
};

export default function ServicesPage() {
  const { navigate } = useRouter();

  return (
    <>
      <SEOHead 
        title="Engineering Services & Solutions"
        description="Comprehensive IT engineering services by TheTechForever: Custom Web Applications, Mobile App Development, Headless WordPress, Cloud & DevOps, and IT Consulting."
      />

      <section className="section-padding" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>What We Build</span>
            </div>
            <h2>
              Enterprise-Grade <span className="text-gradient">Engineering Services</span>
            </h2>
            <p>
              We combine deep technical craftsmanship with modern cloud architecture to deliver scalable, reliable, and high-performance digital solutions.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {MOCK_SERVICES.map((service, index) => {
              const Icon = iconMap[service.iconName] || Globe;
              const isEven = index % 2 === 1;

              return (
                <div 
                  key={service.id} 
                  className="glass-card"
                  style={{ 
                    padding: '3rem',
                    display: 'grid',
                    gridTemplateColumns: isEven ? '1fr 1.1fr' : '1.1fr 1fr',
                    gap: '3rem',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                      <div className="bento-icon-wrapper" style={{ margin: 0 }}>
                        <Icon size={26} />
                      </div>
                      <div>
                        {service.badge && (
                          <span style={{ 
                            fontSize: '0.72rem', 
                            color: 'var(--accent-cyan)', 
                            background: 'rgba(0, 212, 255, 0.1)', 
                            padding: '0.2rem 0.5rem', 
                            borderRadius: '4px',
                            fontWeight: '600'
                          }}>
                            {service.badge}
                          </span>
                        )}
                        <h3 style={{ fontSize: '1.8rem', marginTop: '0.3rem' }}>{service.title}</h3>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.8rem' }}>
                      {service.fullDesc}
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                        Key Capabilities:
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                            <CheckCircle2 size={16} color="var(--accent-cyan)" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <button 
                        className="btn btn-primary"
                        onClick={() => navigate(`/services/${service.slug}`)}
                      >
                        <span>Deep-Dive Architecture</span>
                        <ArrowRight size={16} />
                      </button>

                      <button 
                        className="btn btn-secondary"
                        onClick={() => navigate('/estimate')}
                      >
                        <Sparkles size={16} />
                        <span>Estimate Service</span>
                      </button>
                    </div>
                  </div>

                  <div style={{ 
                    order: isEven ? 1 : 2, 
                    background: 'rgba(255, 255, 255, 0.02)', 
                    border: '1px solid var(--border-subtle)', 
                    borderRadius: 'var(--radius-md)', 
                    padding: '2rem' 
                  }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>
                      What We Deliver
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                          <span style={{ color: 'var(--accent-emerald)', fontWeight: '700' }}>✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      Production Stack
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {service.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="hero-tech-pill" style={{ fontSize: '0.82rem', padding: '0.35rem 0.75rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
