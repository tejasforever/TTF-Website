import React from 'react';
import { X, CheckCircle2, PackageCheck, ArrowRight } from 'lucide-react';

export function ServiceModal({ service, onClose }) {
  if (!service) return null;

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
          aria-label="Close Service Details"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          {service.badge && (
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.25rem 0.65rem',
                borderRadius: '9999px',
                background: 'rgba(0, 102, 255, 0.15)',
                color: '#38bdf8',
                display: 'inline-block',
                marginBottom: '0.5rem'
              }}
            >
              {service.badge}
            </span>
          )}
          <h2 style={{ fontSize: '1.85rem', color: '#ffffff', lineHeight: 1.3 }}>
            {service.title}
          </h2>
        </div>

        {/* Detailed Description */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7 }}>
            {service.fullDesc}
          </p>
        </div>

        {/* Core Capabilities */}
        {service.features && service.features.length > 0 && (
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#38bdf8', marginBottom: '0.75rem', fontFamily: 'Outfit' }}>
              Key Technical Capabilities
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem' }}>
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.88rem',
                    color: '#f8fafc',
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-glass)'
                  }}
                >
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables Guarantee */}
        {service.deliverables && service.deliverables.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.75rem', fontFamily: 'Outfit', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <PackageCheck size={18} color="#00d4ff" /> Project Deliverables Included
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {service.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    background: 'rgba(0, 102, 255, 0.1)',
                    border: '1px solid rgba(0, 102, 255, 0.3)',
                    color: '#38bdf8'
                  }}
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '0.65rem 1.25rem' }}>
            Close
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary"
            style={{ padding: '0.65rem 1.5rem' }}
          >
            <span>Inquire About This Service</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
