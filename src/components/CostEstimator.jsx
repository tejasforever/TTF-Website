import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Calculator } from 'lucide-react';

const PROJECT_TYPES = [
  { id: 'web', name: 'Custom Web & React Portal', baseUsd: 1400, baseInr: 110000 },
  { id: 'mobile', name: 'Mobile App (Flutter / React Native)', baseUsd: 2200, baseInr: 175000 },
  { id: 'headless', name: 'Headless WordPress + React CMS', baseUsd: 1200, baseInr: 95000 },
  { id: 'cloud', name: 'Cloud Infrastructure & DevOps CI/CD', baseUsd: 900, baseInr: 72000 },
  { id: 'fullsuite', name: 'Full-Stack Enterprise Suite', baseUsd: 3200, baseInr: 250000 }
];

const ADDONS = [
  { id: 'auth', name: 'User Authentication & RBAC Roles', usd: 300, inr: 24000 },
  { id: 'payment', name: 'Payment Gateways (Razorpay / Stripe / PayPal)', usd: 400, inr: 32000 },
  { id: 'chat', name: 'Real-Time WebSockets & Notifications', usd: 500, inr: 40000 },
  { id: 'pdf', name: 'Automated PDF & Digital Certificate Generator', usd: 250, inr: 20000 },
  { id: 'seo', name: 'Headless SEO, OpenGraph & Core Web Vitals Audit', usd: 250, inr: 20000 }
];

export function CostEstimator({ isOpen, onClose, onApplyEstimate }) {
  const [currency, setCurrency] = useState('INR'); // Default INR for Vadodara / Global clients can toggle USD
  const [selectedType, setSelectedType] = useState('web');
  const [selectedAddons, setSelectedAddons] = useState(['auth', 'seo']);
  const [timeline, setTimeline] = useState('standard'); // standard or fast

  if (!isOpen) return null;

  const currentType = PROJECT_TYPES.find(t => t.id === selectedType) || PROJECT_TYPES[0];
  const basePrice = currency === 'INR' ? currentType.baseInr : currentType.baseUsd;

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS.find(a => a.id === addonId);
    if (!addon) return sum;
    return sum + (currency === 'INR' ? addon.inr : addon.usd);
  }, 0);

  const timelineMultiplier = timeline === 'fast' ? 1.25 : 1.0;
  const rawTotal = Math.round((basePrice + addonsTotal) * timelineMultiplier);
  const minRange = Math.round(rawTotal * 0.95);
  const maxRange = Math.round(rawTotal * 1.15);

  const formatPrice = (val) => {
    if (currency === 'INR') {
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return `$${val.toLocaleString('en-US')}`;
  };

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleApply = () => {
    const summary = {
      projectType: currentType.name,
      currency,
      estimatedRange: `${formatPrice(minRange)} - ${formatPrice(maxRange)}`,
      addons: selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).filter(Boolean),
      timeline: timeline === 'fast' ? 'Fast-Track (2-3 weeks)' : 'Standard (4-6 weeks)'
    };
    onApplyEstimate(summary);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px' }}>
        {/* Modal Close Button */}
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
          aria-label="Close Estimator"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(0, 102, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8'
            }}
          >
            <Calculator size={22} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.6rem', color: '#ffffff' }}>Project Scope & Cost Calculator</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Configure your requirements to view an instant transparent estimate.
            </p>
          </div>
        </div>

        {/* Currency Switcher */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.04)', padding: '0.25rem', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
            <button
              onClick={() => setCurrency('INR')}
              style={{
                background: currency === 'INR' ? 'var(--accent-blue)' : 'transparent',
                color: '#fff',
                border: 'none',
                padding: '0.3rem 0.8rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              style={{
                background: currency === 'USD' ? 'var(--accent-blue)' : 'transparent',
                color: '#fff',
                border: 'none',
                padding: '0.3rem 0.8rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Step 1: Project Type */}
        <div style={{ marginBottom: '1.75rem' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem', color: '#e2e8f0' }}>
            1. Select Core Architectural Scope
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {PROJECT_TYPES.map((type) => {
              const isSelected = selectedType === type.id;
              return (
                <div
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: isSelected ? '1px solid var(--accent-blue)' : '1px solid var(--border-glass)',
                    background: isSelected ? 'rgba(0, 102, 255, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: isSelected ? '#ffffff' : '#cbd5e1', marginBottom: '0.25rem' }}>
                    {type.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 600 }}>
                    Starts ~{formatPrice(currency === 'INR' ? type.baseInr : type.baseUsd)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Addon Capabilities */}
        <div style={{ marginBottom: '1.75rem' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem', color: '#e2e8f0' }}>
            2. High-Value Modules & Integrations
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
            {ADDONS.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: isChecked ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-glass)',
                    background: isChecked ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '4px',
                        border: isChecked ? 'none' : '1px solid var(--text-muted)',
                        background: isChecked ? '#10b981' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff'
                      }}
                    >
                      {isChecked && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span style={{ fontSize: '0.82rem', color: isChecked ? '#ffffff' : '#94a3b8' }}>
                      {addon.name}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 600 }}>
                    +{formatPrice(currency === 'INR' ? addon.inr : addon.usd)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Timeline */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem', color: '#e2e8f0' }}>
            3. Project Delivery Timeline
          </label>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="button"
              onClick={() => setTimeline('standard')}
              style={{
                flex: 1,
                padding: '0.75rem',
                borderRadius: '8px',
                border: timeline === 'standard' ? '1px solid var(--accent-blue)' : '1px solid var(--border-glass)',
                background: timeline === 'standard' ? 'rgba(0, 102, 255, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                color: '#fff',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Standard Sprint (4-6 Weeks)
            </button>
            <button
              type="button"
              onClick={() => setTimeline('fast')}
              style={{
                flex: 1,
                padding: '0.75rem',
                borderRadius: '8px',
                border: timeline === 'fast' ? '1px solid var(--accent-blue)' : '1px solid var(--border-glass)',
                background: timeline === 'fast' ? 'rgba(0, 102, 255, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                color: '#fff',
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              ⚡ Fast-Track Dedicated (2-3 Weeks)
            </button>
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.12), rgba(121, 40, 202, 0.12))',
            border: '1px solid var(--border-glass-bright)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Estimated Investment Range
            </div>
            <div style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 800, color: '#38bdf8' }}>
              {formatPrice(minRange)} — {formatPrice(maxRange)}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              *Estimate includes full source code ownership, QA testing, and 30-day post-launch warranty.
            </div>
          </div>

          <button
            onClick={handleApply}
            className="btn-primary"
            style={{ padding: '0.85rem 1.6rem' }}
          >
            <span>Proceed with this Scope</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
