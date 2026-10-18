import React from 'react';
import { useRouter } from '../context/RouterContext';
import SEOHead from '../components/SEOHead';
import BentoGrid from '../components/BentoGrid';
import TechStackShowcase from '../components/TechStackShowcase';
import ProcessSection from '../components/ProcessSection';
import ProjectEstimator from '../components/ProjectEstimator';
import TestimonialsSection from '../components/TestimonialsSection';
import { COMPANY_METRICS, MOCK_PORTFOLIO } from '../api/wordpress';
import { 
  Sparkles, 
  ArrowRight, 
  Code2, 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  PhoneCall, 
  MessageSquare,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function HomePage() {
  const { navigate } = useRouter();

  const featuredProjects = MOCK_PORTFOLIO.filter(p => p.featured);

  return (
    <>
      <SEOHead 
        title="Scalable Web, Mobile & Cloud Solutions"
        description="TheTechForever architects next-generation web applications, cross-platform mobile apps, headless WordPress platforms, and cloud infrastructure."
      />

      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div>
              <div className="hero-tag">
                <span className="hero-tag-pulse"></span>
                <span>Next-Gen Enterprise Engineering • Vadodara, Gujarat</span>
              </div>

              <h1 className="hero-title">
                Architecting <span className="text-gradient">Next-Gen Digital</span> Experiences & Cloud Solutions.
              </h1>

              <p className="hero-desc">
                We empower forward-thinking enterprises with blazing-fast React SPAs, Headless WordPress architectures, native mobile apps, and robust cloud infrastructure that scale with your growth.
              </p>

              <div className="hero-cta-group">
                <a
                  href="#/estimate"
                  onClick={(e) => { e.preventDefault(); navigate('/estimate'); }}
                  className="btn btn-primary btn-lg"
                >
                  <Sparkles size={18} />
                  <span>Start Project Estimator</span>
                </a>

                <a
                  href="#/services"
                  onClick={(e) => { e.preventDefault(); navigate('/services'); }}
                  className="btn btn-secondary btn-lg"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Trust Badge Strip */}
              <div className="hero-trust-strip">
                <span className="hero-trust-text">Core Stack:</span>
                <div className="hero-tech-pills">
                  <span className="hero-tech-pill">React 19</span>
                  <span className="hero-tech-pill">Node.js</span>
                  <span className="hero-tech-pill">Headless WP</span>
                  <span className="hero-tech-pill">Flutter</span>
                  <span className="hero-tech-pill">AWS Cloud</span>
                  <span className="hero-tech-pill">Docker</span>
                </div>
              </div>
            </div>

            {/* Right Visual (Interactive Code Terminal & Live Badges) */}
            <div className="hero-visual-panel">
              <div className="floating-badge badge-top">
                <Zap size={22} color="var(--accent-cyan)" />
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>100/100</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Core Web Vitals</div>
                </div>
              </div>

              <div className="floating-badge badge-bottom">
                <ShieldCheck size={22} color="var(--accent-emerald)" />
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>99.9% Uptime</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Enterprise SLA</div>
                </div>
              </div>

              <div className="code-window">
                <div className="code-window-bar">
                  <div className="code-window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="code-window-title">TheTechForever_Core.tsx</div>
                  <div style={{ width: '40px' }}></div>
                </div>
                <pre className="code-content">
                  <code>
{`<span class="code-comment">// Empowering Your Digital Future</span>
<span class="code-keyword">import</span> { <span class="code-fn">EnterpriseScale</span> } <span class="code-keyword">from</span> <span class="code-str">'@ttf/engine'</span>;

<span class="code-keyword">export async function</span> <span class="code-fn">BuildFuture</span>() {
  <span class="code-keyword">const</span> architecture = <span class="code-keyword">await</span> <span class="code-fn">EnterpriseScale</span>({
    <span class="code-prop">frontend</span>: <span class="code-str">'React 19 + High-Speed SPA'</span>,
    <span class="code-prop">backend</span>:  <span class="code-str">'Headless WordPress + Node API'</span>,
    <span class="code-prop">security</span>: <span class="code-str">'Bank-Grade Zero Trust'</span>,
    <span class="code-prop">cloud</span>:    <span class="code-str">'AWS / Edge Multi-Region'</span>,
    <span class="code-prop">uptimeSLA</span>: <span class="code-num">99.9</span>
  });

  <span class="code-keyword">return</span> architecture.<span class="code-fn">launch</span>();
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS TICKER */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            {COMPANY_METRICS.map((metric, idx) => (
              <div key={idx} className="metric-card">
                <div className="metric-number text-gradient">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO GRID SERVICES */}
      <BentoGrid />

      {/* TECH STACK SHOWCASE */}
      <TechStackShowcase />

      {/* FEATURED CASE STUDIES / PORTFOLIO HIGHLIGHTS */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>Featured Engineering</span>
            </div>
            <h2>
              Case Studies & <span className="text-gradient">Measurable Impact</span>
            </h2>
            <p>
              Explore how we've helped fast-moving businesses modernize their platforms and scale their operations.
            </p>
          </div>

          <div className="portfolio-grid">
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => navigate(`/portfolio/${project.slug}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-img-wrapper">
                  <img src={project.coverImage} alt={project.title} className="project-img" />
                  <span className="project-category-badge">{project.category}</span>
                </div>
                <div className="project-info">
                  <span className="project-client-name">{project.client}</span>
                  <h3>{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>

                  <div className="project-stats-row">
                    {project.stats.map((s, sIdx) => (
                      <div key={sIdx}>
                        <div className="stat-val">{s.value}</div>
                        <div className="stat-lbl">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="project-tech-tags">
                    {project.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button 
              className="btn btn-secondary btn-lg"
              onClick={() => navigate('/portfolio')}
            >
              <span>View All Case Studies</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 4-STEP ENGINEERING PROCESS */}
      <ProcessSection />

      {/* CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* INTERACTIVE SCOPE & COST ESTIMATOR SECTION */}
      <section className="section-padding" id="estimator" style={{ background: 'rgba(5, 8, 14, 0.8)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>Interactive Calculator</span>
            </div>
            <h2>
              Calculate Your <span className="text-gradient">Project Scope & Budget</span>
            </h2>
            <p>
              Use our interactive estimator to configure your software requirements, timeline, and receive a customized technical proposal.
            </p>
          </div>

          <ProjectEstimator />
        </div>
      </section>

      {/* FINAL HIGH-CONVERSION BANNER */}
      <section className="section-padding" style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="glass-card" style={{ 
            background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15), rgba(121, 40, 202, 0.15))',
            borderColor: 'var(--border-highlight)',
            padding: '4rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1rem' }}>
              Ready to Build Your Next <span className="text-gradient">Digital Landmark</span>?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto 2.5rem auto', fontSize: '1.15rem' }}>
              Speak directly with our senior technology team in Vadodara to discuss architectural scoping, timelines, and milestones.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.2rem' }}>
              <button 
                className="btn btn-glow btn-lg"
                onClick={() => navigate('/contact')}
              >
                <span>Schedule Free Tech Scoping</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href="https://wa.me/919403123579?text=Hi%20TheTechForever%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <MessageSquare size={18} color="#25d366" />
                <span>Instant WhatsApp Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
