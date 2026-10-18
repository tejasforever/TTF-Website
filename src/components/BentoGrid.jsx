import React from 'react';
import { useRouter } from '../context/RouterContext';
import { MOCK_SERVICES } from '../api/wordpress';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  LayoutTemplate, 
  Compass, 
  Server, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  Cloud: Cloud,
  LayoutTemplate: LayoutTemplate,
  Compass: Compass,
  Server: Server
};

export default function BentoGrid() {
  const { navigate } = useRouter();

  const handleCardClick = (e, slug) => {
    e.preventDefault();
    navigate(`/services/${slug}`);
  };

  return (
    <section className="section-padding" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Specialized Capabilities</span>
          </div>
          <h2>
            Full-Spectrum <span className="text-gradient">Engineering Services</span>
          </h2>
          <p>
            From modern headless web architectures to scalable cloud infrastructure, we deliver mission-critical software solutions engineered for conversion and high availability.
          </p>
        </div>

        <div className="bento-grid">
          {MOCK_SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            
            // Bento span sizing layout:
            // Service 1 (Web Dev) -> span 8
            // Service 2 (Mobile Apps) -> span 4
            // Service 3 (Cloud Solutions) -> span 4
            // Service 4 (Headless WP) -> span 8
            // Service 5 (IT Consulting) -> span 6
            // Service 6 (Hosting & Domains) -> span 6
            let spanClass = 'bento-span-6';
            if (index === 0) spanClass = 'bento-span-8';
            else if (index === 1) spanClass = 'bento-span-4';
            else if (index === 2) spanClass = 'bento-span-4';
            else if (index === 3) spanClass = 'bento-span-8';

            return (
              <div 
                key={service.id} 
                className={`bento-card ${spanClass}`}
                onClick={(e) => handleCardClick(e, service.slug)}
                style={{ cursor: 'pointer' }}
              >
                {service.badge && (
                  <span className="bento-card-badge">{service.badge}</span>
                )}

                <div>
                  <div className="bento-icon-wrapper">
                    <IconComponent size={26} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>

                  <ul className="bento-feature-list">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={15} color="var(--accent-cyan)" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bento-card-footer">
                  <span className="learn-more-link">
                    <span>Explore Architecture</span>
                    <ArrowRight size={16} />
                  </span>
                  <div className="hero-tech-pills">
                    {service.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="hero-tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
