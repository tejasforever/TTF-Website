import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { api, MOCK_BLOG_POSTS } from '../api/wordpress';
import SEOHead from '../components/SEOHead';
import { Search, Clock, Calendar, ArrowRight, User } from 'lucide-react';

export default function BlogPage() {
  const { navigate } = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const data = await api.getBlogPosts();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  const categories = ['All', 'Architecture', 'Engineering', 'Cloud & DevOps'];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCat === 'All' || post.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <SEOHead 
        title="Engineering Insights & Tech Blog"
        description="Read technical deep-dives on Headless WordPress, React 19 architecture, cloud cost optimization, and modern software engineering from TheTechForever."
      />

      <section className="section-padding" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>Engineering Knowledge Base</span>
            </div>
            <h2>
              Insights, Tutorials & <span className="text-gradient">Tech Trends</span>
            </h2>
            <p>
              Deep dives into Headless CMS paradigms, high-throughput React frontends, and cloud DevOps best practices.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div style={{ maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <Search 
                size={20} 
                color="var(--text-muted)" 
                style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '48px', height: '54px' }}
                placeholder="Search articles by keywords (e.g. Headless WordPress, React, Cloud)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`filter-pill ${selectedCat === cat ? 'active' : ''}`}
                  style={{ fontSize: '0.85rem' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)' }}>
              Loading articles from Headless WordPress...
            </div>
          ) : filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)' }}>
              No articles found matching "{searchQuery}".
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
              {filteredPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="project-card"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-img-wrapper" style={{ height: '200px' }}>
                    <img src={post.coverImage} alt={post.title} className="project-img" />
                    <span className="project-category-badge">{post.category}</span>
                  </div>

                  <div className="project-info">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.8rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', lineHeight: '1.4', marginBottom: '0.8rem' }}>
                      {post.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {post.excerpt}
                    </p>

                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <User size={13} />
                        {post.author}
                      </span>
                      <span className="learn-more-link" style={{ fontSize: '0.85rem' }}>
                        <span>Read Article</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
