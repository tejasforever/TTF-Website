import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

export function BlogSection({ posts, onSelectPost }) {
  return (
    <section id="blog" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="ttf-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="pill-badge">Engineering Blog & News</span>
          <h2>Insights from Our Tech Laboratory</h2>
          <p>
            In-depth architectural guides, headless CMS best practices, cloud infrastructure strategies, and engineering insights from our lead developers.
          </p>
        </div>

        {/* Posts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
              onClick={() => onSelectPost(post)}
            >
              <div>
                {/* Meta details */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span
                    style={{
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px',
                      background: 'rgba(0, 102, 255, 0.1)',
                      color: '#38bdf8',
                      fontWeight: 600
                    }}
                  >
                    {post.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.85rem', color: '#ffffff', lineHeight: 1.4 }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {post.excerpt}
                </p>
              </div>

              {/* Bottom Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid var(--border-glass)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <Calendar size={13} />
                  <span>{post.date}</span>
                </div>

                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600 }}>
                  Read Guide <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
