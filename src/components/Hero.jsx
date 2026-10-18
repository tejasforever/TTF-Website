import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export function Hero({ onOpenEstimator }) {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '60px', overflow: 'hidden' }}>
      {/* Background Ambient Glowing Orbs */}
      <div className="ambient-glow ambient-blue" />
      <div className="ambient-glow ambient-cyan" />
      <div className="ambient-glow ambient-purple" />

      {/* Decorative Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.6,
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
        }}
      />

      <div className="ttf-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Trust Badge / Registration Strip */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem', padding: '0.4rem 1rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass-bright)', borderRadius: '9999px', backdropFilter: 'blur(10px)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10b981', fontSize: '0.82rem', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              {COMPANY_INFO.registrations.udyam}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 500 }}>
              {COMPANY_INFO.registrations.gst}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 500 }}>
              <Zap size={14} /> Headless Ready
            </span>
          </div>

          {/* Main Headline */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
            Architecting <span className="gradient-text">Next-Gen Web</span>, Mobile & <span className="gradient-text-purple">Cloud Solutions</span>
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            TheTechForever builds custom React/Node platforms, headless WordPress architectures, and native mobile apps engineered for speed, conversion, and enterprise reliability.
          </p>

          {/* Call-to-Action Group */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a href="#services" className="btn-primary" style={{ padding: '0.85rem 1.85rem', fontSize: '1rem' }}>
              <span>Explore Services</span>
              <ArrowRight size={18} />
            </a>

            <button
              onClick={onOpenEstimator}
              className="btn-secondary"
              style={{ padding: '0.85rem 1.85rem', fontSize: '1rem', background: 'rgba(0, 102, 255, 0.08)', borderColor: 'rgba(0, 102, 255, 0.3)' }}
            >
              <Sparkles size={18} color="#00d4ff" />
              <span>Interactive Cost Calculator</span>
            </button>

            <a href="#contact" className="btn-secondary" style={{ padding: '0.85rem 1.5rem', fontSize: '1rem' }}>
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Core Guarantees Bullet Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.75rem', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#10b981" /> 100% Agile Sprints
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#10b981" /> 99.9% Uptime SLA
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#10b981" /> 24/7 Dedicated Support
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#10b981" /> Full Source Code Ownership
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
