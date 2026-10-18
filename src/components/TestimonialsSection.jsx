import React from 'react';
import { MOCK_TESTIMONIALS } from '../api/wordpress';
import { Star, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ background: 'rgba(6, 9, 16, 0.7)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Client Endorsements</span>
          </div>
          <h2>
            Trusted by Forward-Thinking <span className="text-gradient">Enterprises</span>
          </h2>
          <p>
            See how TheTechForever engineers reliable software that drives measurable business growth for our partners.
          </p>
        </div>

        <div className="testimonials-grid">
          {MOCK_TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div>
                <div className="testimonial-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
              </div>

              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="author-avatar" />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="author-name">{t.name}</span>
                    {t.verified && <ShieldCheck size={16} color="var(--accent-cyan)" />}
                  </div>
                  <span className="author-role">{t.designation}, {t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
