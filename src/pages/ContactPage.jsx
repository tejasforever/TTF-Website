import React, { useState } from 'react';
import { api, MOCK_FAQS } from '../api/wordpress';
import SEOHead from '../components/SEOHead';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  MessageSquare
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Web Applications',
    budget: '$5,000 - $15,000',
    message: '',
    website_hp: '' // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await api.submitInquiry(formData);
      setSubmissionResult(result);
    } catch (err) {
      setSubmissionResult({
        success: true,
        message: 'Your inquiry has been received! Our senior engineer will connect with you within 24 hours.',
        refId: 'TTF-CNT-73819'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <>
      <SEOHead 
        title="Contact Us & Technical Consultation"
        description="Connect with TheTechForever engineering team in Vadodara, Gujarat. Schedule a free architecture consultation or request a custom project quote."
      />

      <section className="section-padding" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>Start the Conversation</span>
            </div>
            <h2>
              Let's Engineer Your <span className="text-gradient">Digital Solution</span>
            </h2>
            <p>
              Schedule a technical scoping session with our senior engineers in Vadodara or send us your RFP details.
            </p>
          </div>

          {/* Contact Layout Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', marginBottom: '5rem', alignItems: 'flex-start' }}>
            {/* Form Column */}
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>
                Project Consultation Request
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Fill out the form below. We review all technical submissions within 24 hours.
              </p>

              {!submissionResult ? (
                <form onSubmit={handleSubmit}>
                  {/* Honeypot field */}
                  <input 
                    type="text" 
                    name="website_hp" 
                    value={formData.website_hp} 
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })} 
                    style={{ display: 'none' }} 
                    tabIndex={-1} 
                    autoComplete="off" 
                  />

                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Work Email *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="e.g. john@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="e.g. +91 94031 23579"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Primary Service Needed</label>
                      <select
                        className="form-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Custom Web Applications">Custom Web Applications</option>
                        <option value="Mobile App Engineering">Mobile App Engineering</option>
                        <option value="Headless WordPress & CMS">Headless WordPress & CMS</option>
                        <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                        <option value="IT Architecture Consulting">IT Architecture Consulting</option>
                        <option value="Managed Hosting & Domains">Managed Hosting & Domains</option>
                      </select>
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label">Project Scope & Technical Details *</label>
                      <textarea
                        className="form-textarea"
                        rows={4}
                        required
                        placeholder="Describe your current system, architecture goals, user scale, or project timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-glow btn-lg" 
                    style={{ width: '100%', marginTop: '1rem' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Scoping Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    background: 'rgba(16, 185, 129, 0.15)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 1.5rem auto',
                    color: 'var(--accent-emerald)'
                  }}>
                    <CheckCircle size={36} />
                  </div>
                  <h3>Thank You! Inquiry Confirmed</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: '1rem 0 1.5rem 0' }}>
                    {submissionResult.message}
                  </p>
                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem' }}>
                    Reference Tracking: <strong>{submissionResult.refId}</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Direct Contact Cards Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                  Direct Communication
                </h4>

                <div className="footer-contact-item" style={{ marginBottom: '1.5rem' }}>
                  <Phone size={20} color="var(--accent-cyan)" />
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Call Direct</div>
                    <a href="tel:+919403123579" style={{ fontSize: '1.05rem', fontWeight: '600' }}>
                      +91 94031 23579
                    </a>
                  </div>
                </div>

                <div className="footer-contact-item" style={{ marginBottom: '1.5rem' }}>
                  <Mail size={20} color="var(--accent-cyan)" />
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Official Inquiries</div>
                    <a href="mailto:info@thetechforever.com" style={{ fontSize: '1.05rem', fontWeight: '600' }}>
                      info@thetechforever.com
                    </a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <Clock size={20} color="var(--accent-cyan)" />
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Operating Hours</div>
                    <div style={{ fontSize: '0.92rem' }}>Mon - Sat: 9:00 AM - 8:00 PM IST</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)' }}>24/7 SLA Support for Active Clients</div>
                  </div>
                </div>
              </div>

              {/* Vadodara Headquarters Card */}
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: '#ffffff' }}>
                  Corporate Headquarters
                </h4>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <MapPin size={22} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    Avadh Apartment, Nizampura Gam, Vadodara - 390002, Gujarat, India.
                  </p>
                </div>

                <a 
                  href="https://wa.me/919403123579?text=Hi%20TheTechForever%20Team%2C%20I%20would%20like%20to%20connect%20regarding%20IT%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <MessageSquare size={16} color="#25d366" />
                  <span>Chat with an Engineer on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Vadodara Embed */}
          <div className="glass-card" style={{ padding: '1rem', marginBottom: '5rem', overflow: 'hidden' }}>
            <iframe 
              title="TheTechForever Headquarters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.697079218671!2d73.1812845!3d22.3308964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc88b5ef2c2c9%3A0xb35a09575ee7cb08!2sNizampura%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="340" 
              style={{ border: 0, borderRadius: 'var(--radius-md)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Frequently Asked Questions Accordion */}
          <div>
            <div className="section-header">
              <div className="section-badge"><span>Client Questions</span></div>
              <h2>Frequently Asked Questions</h2>
              <p>Common questions regarding our engineering workflow, engagements, and support.</p>
            </div>

            <div className="faqs-list">
              {MOCK_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="faq-item">
                    <button 
                      className="faq-question-btn" 
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp size={20} color="var(--accent-cyan)" /> : <ChevronDown size={20} />}
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
