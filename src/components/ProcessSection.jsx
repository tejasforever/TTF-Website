import React from 'react';
import { Compass, Palette, Code2, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      desc: 'We analyze your core business objectives, define the data models, assess security requirements, and establish the technical architecture blueprint before writing a single line of code.',
      icon: Compass
    },
    {
      step: '02',
      title: 'UI/UX & Prototyping',
      desc: 'Our design team constructs high-fidelity Figma prototypes, interactive micro-interactions, and a cohesive design token system aligned with your brand identity.',
      icon: Palette
    },
    {
      step: '03',
      title: 'Agile Development & QA',
      desc: 'Bi-weekly sprint cycles with continuous automated testing, rigorous peer code reviews, performance budgeting, and live staging preview environments.',
      icon: Code2
    },
    {
      step: '04',
      title: 'Deployment & SLA Growth',
      desc: 'Zero-downtime production rollout with automated CI/CD pipelines, edge CDN caching, 24/7 server health monitoring, and long-term SLA maintenance.',
      icon: Rocket
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Execution Framework</span>
          </div>
          <h2>
            Our Proven <span className="text-gradient">4-Step Engineering Process</span>
          </h2>
          <p>
            Disciplined agile delivery that bridges business objectives with enterprise-grade technical execution.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div key={index} className="process-step-card">
                <div className="step-num-badge">{s.step}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                  <Icon size={20} color="var(--accent-cyan)" />
                  <h3>{s.title}</h3>
                </div>
                <p>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
