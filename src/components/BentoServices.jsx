import React from 'react';
import {
  Code2,
  Smartphone,
  Cloud,
  LayoutTemplate,
  Compass,
  Server,
  ArrowRight,
  Check
} from 'lucide-react';

const iconMap = {
  Code2,
  Smartphone,
  Cloud,
  LayoutTemplate,
  Compass,
  Server
};

export function BentoServices({ services, onSelectService }) {
  return (
    <section id="services" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="ttf-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="pill-badge">Our Core Expertise</span>
          <h2>Enterprise Solutions, Engineered for Scale</h2>
          <p>
            From bespoke full-stack applications and mobile experiences to cloud modernization and headless CMS architectures, we deliver technical excellence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Code2;
            // First and fourth items take 8 columns for dynamic bento rhythm, others take 4 columns
            const colClass = idx === 0 || idx === 3 ? 'bento-col-8' : 'bento-col-4';

            return (
              <div
                key={service.id || idx}
                className={`${colClass} glass-card`}
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative background glow on hover */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }}
                />

                <div>
                  {/* Top Header Row with Icon and Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15), rgba(0, 212, 255, 0.08))',
                        border: '1px solid rgba(0, 102, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#38bdf8'
                      }}
                    >
                      <IconComponent size={26} />
                    </div>

                    {service.badge && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '0.3rem 0.75rem',
                          borderRadius: '9999px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-glass-bright)',
                          color: '#e2e8f0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {service.shortDesc}
                  </p>

                  {/* Features Bullet Points */}
                  {service.features && (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.86rem', color: '#cbd5e1' }}>
                          <span style={{ color: '#10b981', display: 'flex', alignItems: 'center' }}>
                            <Check size={14} />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Bottom Action */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-glass)' }}>
                  <button
                    onClick={() => onSelectService(service)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#38bdf8',
                      fontFamily: 'Outfit',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <span>View Specifications & Deliverables</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
