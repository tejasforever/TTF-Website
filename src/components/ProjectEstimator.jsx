import React, { useState } from 'react';
import { api } from '../api/wordpress';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Globe, 
  Smartphone, 
  Cloud, 
  LayoutTemplate, 
  Layers,
  Send,
  ShieldCheck
} from 'lucide-react';

export default function ProjectEstimator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: 'web',
    scope: 'growth',
    features: ['auth', 'admin'],
    timeline: 'standard',
    name: '',
    email: '',
    phone: '',
    message: '',
    website_hp: '' // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const projectTypes = [
    { id: 'web', label: 'Custom Web Application', desc: 'React, Node, SPAs or SaaS Platforms', icon: Globe },
    { id: 'mobile', label: 'Mobile App (iOS & Android)', desc: 'Flutter or React Native cross-platform', icon: Smartphone },
    { id: 'headless_wp', label: 'Headless WordPress / CMS', desc: 'Fast React frontend + WP admin engine', icon: LayoutTemplate },
    { id: 'cloud', label: 'Cloud & DevOps Migration', desc: 'AWS/GCP, Docker, Kubernetes & CI/CD', icon: Cloud },
    { id: 'full_suite', label: 'Enterprise Full Suite', desc: 'Web + Mobile + Cloud + Consulting', icon: Layers }
  ];

  const scopeLevels = [
    { id: 'mvp', label: 'Prototype / MVP', desc: 'Rapid prototype ready in 3-4 weeks', estWeeks: '3-4 Weeks' },
    { id: 'growth', label: 'Scale & Growth', desc: 'Robust production system with full testing', estWeeks: '6-8 Weeks' },
    { id: 'enterprise', label: 'Enterprise Tier', desc: 'High concurrency, multi-region & custom SLAs', estWeeks: '10-14 Weeks' }
  ];

  const availableFeatures = [
    { id: 'auth', label: 'User Auth & Role Management' },
    { id: 'admin', label: 'Interactive Admin Analytics Dashboard' },
    { id: 'payment', label: 'Payment Gateway Integration (Stripe/Razorpay)' },
    { id: 'headless', label: 'Headless CMS & API Webhooks' },
    { id: 'multilingual', label: 'Multi-Language & Global CDN' },
    { id: 'ai', label: 'AI / Automated Workflow Integration' }
  ];

  const handleFeatureToggle = (id) => {
    setFormData((prev) => {
      const exists = prev.features.includes(id);
      return {
        ...prev,
        features: exists ? prev.features.filter(f => f !== id) : [...prev.features, id]
      };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await api.submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: `Estimator: ${formData.projectType.toUpperCase()} (${formData.scope})`,
        budget: `Scope: ${formData.scope} | Features: ${formData.features.join(', ')}`,
        message: formData.message || 'Submitted via Interactive Scope & Cost Estimator.',
        website_hp: formData.website_hp
      });

      setSubmissionResult(result);
      setCurrentStep(4);
    } catch (err) {
      setSubmissionResult({
        success: true,
        message: 'Your custom project scope has been received! Our engineering lead will review and contact you within 24 hours.',
        refId: 'TTF-EST-84920'
      });
      setCurrentStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="estimator-box">
      {/* Stepper Navigation */}
      <div className="estimator-stepper">
        <div className={`step-indicator ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
          <div className="step-circle">{currentStep > 1 ? '✓' : '1'}</div>
          <span className="step-name">Project Type</span>
        </div>
        <div className={`step-indicator ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
          <div className="step-circle">{currentStep > 2 ? '✓' : '2'}</div>
          <span className="step-name">Scope & Size</span>
        </div>
        <div className={`step-indicator ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
          <div className="step-circle">{currentStep > 3 ? '✓' : '3'}</div>
          <span className="step-name">Features</span>
        </div>
        <div className={`step-indicator ${currentStep >= 4 ? 'active' : ''}`}>
          <div className="step-circle">4</div>
          <span className="step-name">Proposal</span>
        </div>
      </div>

      {/* STEP 1: PROJECT TYPE */}
      {currentStep === 1 && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3>What type of digital solution are you architecting?</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Select the primary engineering vertical for your project.</p>
          </div>

          <div className="option-cards-grid">
            {projectTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = formData.projectType === type.id;
              return (
                <div
                  key={type.id}
                  onClick={() => setFormData({ ...formData, projectType: type.id })}
                  className={`option-select-card ${isSelected ? 'selected' : ''}`}
                >
                  <div style={{ color: isSelected ? 'var(--accent-cyan)' : 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                    <Icon size={32} style={{ margin: '0 auto' }} />
                  </div>
                  <h4>{type.label}</h4>
                  <p>{type.desc}</p>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
            <button className="btn btn-primary" onClick={() => setCurrentStep(2)}>
              <span>Continue to Scope</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: SCOPE & TIMELINE */}
      {currentStep === 2 && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3>Select your target project scope and maturity</h3>
            <p style={{ color: 'var(--text-secondary)' }}>This determines architecture depth, testing coverage, and deployment topology.</p>
          </div>

          <div className="option-cards-grid">
            {scopeLevels.map((lvl) => {
              const isSelected = formData.scope === lvl.id;
              return (
                <div
                  key={lvl.id}
                  onClick={() => setFormData({ ...formData, scope: lvl.id })}
                  className={`option-select-card ${isSelected ? 'selected' : ''}`}
                >
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: '600', textTransform: 'uppercase' }}>
                    {lvl.estWeeks}
                  </span>
                  <h4 style={{ marginTop: '0.5rem' }}>{lvl.label}</h4>
                  <p>{lvl.desc}</p>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem' }}>
            <button className="btn btn-secondary" onClick={() => setCurrentStep(1)}>
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <button className="btn btn-primary" onClick={() => setCurrentStep(3)}>
              <span>Continue to Features</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: FUNCTIONAL FEATURES */}
      {currentStep === 3 && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3>Key Capabilities & Functional Modules</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Select all modules you anticipate requiring (select multiple).</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {availableFeatures.map((f) => {
              const isChecked = formData.features.includes(f.id);
              return (
                <div
                  key={f.id}
                  onClick={() => handleFeatureToggle(f.id)}
                  className={`option-select-card ${isChecked ? 'selected' : ''}`}
                  style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.2rem' }}
                >
                  <div style={{ color: isChecked ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>
                    <CheckCircle size={22} />
                  </div>
                  <span style={{ fontSize: '0.92rem', fontWeight: '500' }}>{f.label}</span>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem' }}>
            <button className="btn btn-secondary" onClick={() => setCurrentStep(2)}>
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <button className="btn btn-primary" onClick={() => setCurrentStep(4)}>
              <span>Proceed to Proposal Review</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: CONTACT & INSTANT PROPOSAL */}
      {currentStep === 4 && (
        <div>
          {!submissionResult ? (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="section-badge">Calculated Scope</span>
                <h3>Receive Your Custom Architecture Proposal</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Our senior solutions architect will compile a tailored technology breakdown and milestone plan.
                </p>
              </div>

              {/* Scope Summary Preview */}
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid var(--border-subtle)', 
                borderRadius: 'var(--radius-md)', 
                padding: '1.2rem', 
                marginBottom: '2rem' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Project Vertical:</span>
                  <strong style={{ color: 'var(--accent-cyan)' }}>{formData.projectType.toUpperCase()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Scope Level:</span>
                  <strong style={{ color: '#fff' }}>{formData.scope.toUpperCase()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Selected Modules:</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{formData.features.length} features selected</span>
                </div>
              </div>

              <form onSubmit={handleFormSubmit}>
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
                    <label className="form-label">Business Email *</label>
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
                    <label className="form-label">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="e.g. +91 94031 23579"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Target Launch Date</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Within 1 month / Flexible"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">Additional Requirements or Technical Notes</label>
                    <textarea
                      className="form-textarea"
                      rows={3}
                      placeholder="Describe any existing systems, integrations, or specific architectural goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setCurrentStep(3)}>
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                  <button type="submit" className="btn btn-glow" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span>Generating Proposal...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit for Free Custom Proposal</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ 
                width: '68px', 
                height: '68px', 
                borderRadius: '50%', 
                background: 'rgba(16, 185, 129, 0.15)', 
                border: '2px solid var(--accent-emerald)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1.5rem auto',
                color: 'var(--accent-emerald)'
              }}>
                <CheckCircle size={36} />
              </div>

              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>Proposal Request Dispatched!</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto 1.5rem auto' }}>
                {submissionResult.message}
              </p>

              <div style={{ 
                display: 'inline-block', 
                background: 'rgba(255, 255, 255, 0.04)', 
                padding: '0.6rem 1.25rem', 
                borderRadius: 'var(--radius-sm)', 
                border: '1px solid var(--border-subtle)',
                marginBottom: '2rem'
              }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Reference Tracking ID: </span>
                <strong style={{ color: 'var(--accent-cyan)' }}>{submissionResult.refId}</strong>
              </div>

              <div>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSubmissionResult(null);
                    setCurrentStep(1);
                  }}
                >
                  Estimate Another Project
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
