import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { api, MOCK_BLOG_POSTS } from '../api/wordpress';
import SEOHead from '../components/SEOHead';
import { ArrowLeft, Calendar, Clock, User, Share2, Sparkles } from 'lucide-react';

export default function ArticleDetailPage({ slug }) {
  const { navigate } = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      const data = await api.getBlogPostBySlug(slug);
      setPost(data);
      setLoading(false);
    }
    loadPost();
  }, [slug]);

  if (loading || !post) {
    return (
      <div className="container" style={{ paddingTop: '180px', paddingBottom: '100px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading article...</p>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={post.title}
        description={post.excerpt}
      />

      <article className="container" style={{ paddingTop: '140px', paddingBottom: '120px', maxWidth: '880px' }}>
        {/* Back Button */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/blog')}
            style={{ padding: '0.5rem 1rem', fontSize: '0.88rem' }}
          >
            <ArrowLeft size={16} />
            <span>All Articles</span>
          </button>
        </div>

        {/* Post Meta Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <span className="section-badge" style={{ margin: 0 }}>{post.category}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: '1.2', marginBottom: '1.5rem' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={20} color="#fff" />
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{post.author}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.date}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div style={{ 
          width: '100%', 
          maxHeight: '420px', 
          borderRadius: 'var(--radius-lg)', 
          overflow: 'hidden', 
          marginBottom: '3rem',
          border: '1px solid var(--border-subtle)'
        }}>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Article Body */}
        <div 
          className="glass-card article-content" 
          style={{ padding: '3.5rem', lineHeight: '1.85', fontSize: '1.08rem', color: 'var(--text-secondary)' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author & Consultation Banner */}
        <div className="glass-card" style={{ marginTop: '3.5rem', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>Have questions about this architecture?</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Connect with our senior technical consultants to assess your infrastructure.
            </p>
          </div>
          <button className="btn btn-glow" onClick={() => navigate('/contact')}>
            <Sparkles size={16} />
            <span>Consult Our Engineers</span>
          </button>
        </div>
      </article>
    </>
  );
}
