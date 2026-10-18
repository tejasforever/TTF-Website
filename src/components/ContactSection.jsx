import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { submitInquiry } from '../api/wordpress';

export function ContactSection({ prefillData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web-development',
    budget: 'Medium ($1,000 - $3,000 / ₹80k - ₹2.5L)',
    message: ''
  });

  const [status, setStatus] = useState({ submitting: false, submitted: false, message: '' });

  // If estimator populated data, inject it into message and service
  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        budget: prefillData.estimatedRange || prev.budget,
        message: `Project Scope Inquired via Cost Estimator:
- Architecture: ${prefillData.projectType}
- Estimated Range: ${prefillData.estimatedRange}
- Timeline: ${prefillData.timeline}
- Selected Modules: ${prefillData.addons.join(', ')}

Additional Project Notes: `
      }));
    }
  }, [prefillData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, message: '' });

    const result = await submitInquiry(formData);
    setStatus({
      submitting: false,
      submitted: result.success,
      message: result.message
    });

    if (result.success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'web-development',
        budget: 'Medium ($1,000 - $3,000 / ₹80k - ₹2.5L)',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="ttf-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="pill-badge">Initiate Collaboration</span>
          <h2>Let’s Architect Your Next Digital Breakthrough</h2>
          <p>
            Have a project in mind, need a headless architecture audit, or want to discuss scaling your software? Reach out to our technical team today.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Contact Details Left Column */}
          <div
            className="glass-panel"
            style={{
              gridColumn: 'span 5',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                Vadodara Headquarters
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Based in Gujarat’s thriving technological hub, serving clients globally across North America, Europe, and Asia.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Phone */}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'inherit' }}
                className="contact-info-item"
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(0, 102, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    flexShrink: 0
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Direct Phone / WhatsApp
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem', color: '#ffffff' }}>
                    {COMPANY_INFO.phoneFormatted}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'inherit' }}
                className="contact-info-item"
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(0, 102, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    flexShrink: 0
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Official Inquiries
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem', color: '#ffffff' }}>
                    {COMPANY_INFO.email}
                  </div>
                </div>
              </a>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(0, 102, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Office Address
                  </div>
                  <div style={{ fontWeight: 500, fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    {COMPANY_INFO.address}
                  </div>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'inline-block', marginTop: '0.4rem', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600 }}
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Connect Banner */}
            <div
              style={{
                background: 'rgba(37, 211, 102, 0.08)',
                border: '1px solid rgba(37, 211, 102, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MessageSquare size={22} color="#25d366" />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>Need an instant reply?</div>
                  <div style={{ fontSize: '0.78rem', color: '#a7f3d0' }}>Chat on WhatsApp (Average 15m response)</div>
                </div>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20TheTechForever%20Team,%20I%20would%20like%20to%20discuss%20a%20new%20project.`}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#25d366',
                  color: '#fff',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap'
                }}
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* Form Right Column */}
          <div
            className="glass-panel"
            style={{
              gridColumn: 'span 7',
              padding: '2.5rem'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ffffff' }}>
              Project Brief & RFP Submission
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '2rem' }}>
              Tell us about your objectives. We will review your architecture and return with a customized proposal within 24 hours.
            </p>

            {status.submitted && (
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34d399',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}
              >
                <CheckCircle2 size={22} />
                <span style={{ fontSize: '0.92rem', fontWeight: 500 }}>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.45rem', color: '#cbd5e1' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.45rem', color: '#cbd5e1' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.45rem', color: '#cbd5e1' }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 94031 23579"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.45rem', color: '#cbd5e1' }}>
                    Primary Service Needed
                  </label>
                  <select
                    className="form-control"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ background: '#121827', color: '#fff' }}
                  >
                    <option value="web-development">Web Application / React Portal</option>
                    <option value="headless-wordpress">Headless WordPress / CMS</option>
                    <option value="mobile-apps">Mobile App (iOS / Android)</option>
                    <option value="cloud-devops">Cloud Infrastructure & DevOps</option>
                    <option value="it-consulting">IT Architecture & Consulting</option>
                    <option value="hosting-domains">Managed Hosting & Domains</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.45rem', color: '#cbd5e1' }}>
                  Target Budget Scope
                </label>
                <input
                  type="text"
                  placeholder="e.g. ₹1,00,000 - ₹2,50,000 or $2,000"
                  className="form-control"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.45rem', color: '#cbd5e1' }}>
                  Project Overview & Key Objectives *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your current tech stack, target timeline, features needed, and any reference websites..."
                  className="form-control"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn-primary"
                style={{ width: '100%', padding: '0.95rem', marginTop: '0.5rem' }}
              >
                {status.submitting ? (
                  <span>Sending Your Inquiry...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Proposal Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .glass-panel[style*="grid-column: span 5"],
          .glass-panel[style*="grid-column: span 7"] {
            grid-column: span 12 !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
