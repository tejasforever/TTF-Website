import React from 'react';
import { X, CheckCircle2, TrendingUp, Layers, Building } from 'lucide-react';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-glass)',
            color: '#fff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Close Case Study"
        >
          <X size={18} />
        </button>

        {/* Case Study Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.25rem 0.65rem',
                borderRadius: '9999px',
                background: 'rgba(0, 102, 255, 0.15)',
                color: '#38bdf8'
              }}
            >
              {project.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Building size={14} /> {project.client}
            </span>
          </div>

          <h2 style={{ fontSize: '1.85rem', color: '#ffffff', lineHeight: 1.3 }}>
            {project.title}
          </h2>
        </div>

        {/* Challenge Section */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1rem', color: '#38bdf8', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>
            The Engineering Challenge
          </h4>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>
            {project.challenge}
          </p>
        </div>

        {/* Solution Section */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1rem', color: '#10b981', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>
            TheTechForever Architectural Solution
          </h4>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>
            {project.solution}
          </p>
        </div>

        {/* Key Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.75rem', fontFamily: 'Outfit' }}>
              Quantifiable Business Impact
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: '#34d399',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.88rem',
                    fontWeight: 600
                  }}
                >
                  <TrendingUp size={16} />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Used */}
        {project.tags && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Layers size={14} /> Technology Stack Implemented
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.8rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-glass-bright)',
                    color: '#f8fafc'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '0.65rem 1.25rem' }}>
            Close
          </button>
          <a href="#contact" onClick={onClose} className="btn-primary" style={{ padding: '0.65rem 1.5rem' }}>
            Request Similar Architecture
          </a>
        </div>
      </div>
    </div>
  );
}
