import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const categories = ['All', 'Web & SaaS', 'Headless CMS', 'Mobile', 'Cloud'];

export function PortfolioSection({ projects, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="ttf-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="pill-badge">Case Studies & Impact</span>
          <h2>Proven Results for Visionary Brands</h2>
          <p>
            Explore how we engineered scalable platforms, modernized legacy backends into headless systems, and solved mission-critical engineering bottlenecks.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.15rem',
                borderRadius: '9999px',
                border: activeCategory === cat ? '1px solid rgba(0, 102, 255, 0.5)' : '1px solid var(--border-glass)',
                background: activeCategory === cat ? 'linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 212, 255, 0.15))' : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Category & Client Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(0, 102, 255, 0.12)',
                      border: '1px solid rgba(0, 102, 255, 0.25)',
                      color: '#38bdf8',
                      textTransform: 'uppercase'
                    }}
                  >
                    {project.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {project.client}
                  </span>
                </div>

                {/* Project Title */}
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                  {project.title}
                </h3>

                {/* Summary */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.summary}
                </p>

                {/* Key Metrics Strip */}
                {project.metrics && project.metrics.length > 0 && (
                  <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.82rem',
                          color: '#34d399',
                          background: 'rgba(16, 185, 129, 0.08)',
                          padding: '0.35rem 0.65rem',
                          borderRadius: '6px',
                          border: '1px solid rgba(16, 185, 129, 0.2)'
                        }}
                      >
                        <TrendingUp size={14} />
                        <span style={{ fontWeight: 600 }}>{metric}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                {project.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-glass)' }}>
                <button
                  onClick={() => onSelectProject(project)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.75rem 1rem',
                    color: '#f8fafc',
                    fontFamily: 'Outfit',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 102, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(0, 102, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'var(--border-glass)';
                  }}
                >
                  <span>Detailed Case Study</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
