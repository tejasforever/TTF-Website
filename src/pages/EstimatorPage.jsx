import React from 'react';
import ProjectEstimator from '../components/ProjectEstimator';
import SEOHead from '../components/SEOHead';
import { Sparkles } from 'lucide-react';

export default function EstimatorPage() {
  return (
    <>
      <SEOHead 
        title="Project Scope & Cost Estimator"
        description="Estimate your software project scope, timeline, and architecture requirements. Receive a custom technical proposal from TheTechForever."
      />

      <section className="section-padding" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={14} />
              <span>Interactive Estimator</span>
            </div>
            <h2>
              Configure Your <span className="text-gradient">Project Architecture</span>
            </h2>
            <p>
              Answer 3 quick technical questions to receive an instant architectural scope assessment and proposal.
            </p>
          </div>

          <ProjectEstimator />
        </div>
      </section>
    </>
  );
}
