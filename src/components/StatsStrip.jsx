import React from 'react';
import { STATS } from '../data/mockData';
import { Trophy, Users, Clock, ShieldCheck } from 'lucide-react';

const icons = [Trophy, Users, Clock, ShieldCheck];

export function StatsStrip() {
  return (
    <section style={{ padding: '2rem 0', position: 'relative', zIndex: 2 }}>
      <div className="ttf-container">
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem 2rem',
            background: 'linear-gradient(180deg, rgba(16, 22, 38, 0.75) 0%, rgba(10, 14, 25, 0.85) 100%)',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}
          >
            {STATS.map((item, idx) => {
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem',
                    borderRight: idx < STATS.length - 1 ? '1px solid var(--border-glass)' : 'none',
                    paddingRight: '1rem'
                  }}
                  className="stat-box"
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(0, 102, 255, 0.1)',
                      border: '1px solid rgba(0, 102, 255, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={24} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Outfit',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        lineHeight: 1,
                        marginBottom: '0.35rem',
                        background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {item.value}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#f8fafc', marginBottom: '0.2rem' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .stat-box {
            border-right: none !important;
            border-bottom: 1px solid var(--border-glass);
            padding-bottom: 1.5rem;
          }
          .stat-box:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
