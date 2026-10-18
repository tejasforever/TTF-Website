import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { api, MOCK_PORTFOLIO } from '../api/wordpress';
import SEOHead from '../components/SEOHead';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function ProjectDetailPage({ slug }) {
  const { navigate } = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      setLoading(true);
      const data = await api.getProjectBySlug(slug);
      setProject(data);
      setLoading(false);
    }
    loadProject();
  }, [slug]);

  if (loading || !project) {
    return (
      <div className="container" style={{ paddingTop: '180px', paddingBottom: '100px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading case study details...</p>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${project.title} - Case Study`}
        description={project.tagline}
      />

      <div className="container" style={{ paddingTop: '140px', paddingBottom: '120px' }}>
        {/* Back Button */}
        <div style={{ marginBottom: '2rem' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/portfolio')}
            style={{ padding: '0.5rem 1rem', fontSize: '0.88rem' }}
          >
            <ArrowLeft size={16} />
            <span>All Case Studies</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="glass-card" style={{ padding: '3.5rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
            <span className="section-badge" style={{ margin: 0 }}>{project.category}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>• {project.client}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.2rem' }}>
            {project.title}
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6', marginBottom: '2.5rem' }}>
            {project.tagline}
          </p>

          {/* Key Metrics Strip */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1.5rem',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '1.8rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            {project.stats.map((s, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', fontFamily: 'Outfit', color: 'var(--accent-cyan)' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cover Image */}
        <div style={{ 
          width: '100%', 
          maxHeight: '480px', 
          overflow: 'hidden', 
          borderRadius: 'var(--radius-lg)', 
          border: '1px solid var(--border-subtle)',
          marginBottom: '3.5rem' 
        }}>
          <img 
            src={project.coverImage} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Two-Column Deep Dive */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'flex-start' }}>
          <div>
            {/* The Challenge */}
            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#ffffff' }}>
                The Client Challenge
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {project.challenge}
              </p>
            </div>

            {/* The TTF Solution */}
            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#ffffff' }}>
                TheTechForever Architecture & Solution
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {project.solution}
              </p>
            </div>

            {/* Measurable Results */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#ffffff' }}>
                Business Impact & Results
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {project.results}
              </p>
            </div>
          </div>

          {/* Right Sidebar: Tech Stack & CTA */}
          <div>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: '#ffffff' }}>
                Technology Stack Used
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="hero-tech-pill" style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center', border: '1px solid var(--border-highlight)' }}>
              <Sparkles size={32} color="var(--accent-cyan)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>
                Inspired by this Project?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Let our senior engineers design a comparable high-performance architecture for your business.
              </p>
              <button 
                className="btn btn-glow"
                style={{ width: '100%' }}
                onClick={() => navigate('/estimate')}
              >
                <span>Calculate Project Scope</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
