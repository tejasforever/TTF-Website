import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { MOCK_PORTFOLIO } from '../api/wordpress';
import SEOHead from '../components/SEOHead';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function PortfolioPage() {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Applications' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'cms', label: 'Headless CMS & Commerce' },
    { key: 'cloud', label: 'Cloud Solutions' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? MOCK_PORTFOLIO
    : MOCK_PORTFOLIO.filter(p => p.categorySlug === activeCategory);

  return (
    <>
      <SEOHead 
        title="Portfolio & Case Studies"
        description="Explore our proven track record of delivering enterprise web applications, mobile platforms, headless architectures, and scalable cloud solutions."
      />

      <section className="section-padding" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>Proven Results</span>
            </div>
            <h2>
              Featured Case Studies & <span className="text-gradient">Client Work</span>
            </h2>
            <p>
              Discover how we partner with growth-minded companies to engineer high-impact digital products.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="portfolio-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`filter-pill ${activeCategory === cat.key ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
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
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="learn-more-link">
                      <span>View Full Case Study</span>
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
