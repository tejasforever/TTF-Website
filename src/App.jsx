import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import './index.css';

function MainRouter() {
  const { currentPath } = useRouter();

  const renderRoute = () => {
    const path = currentPath.split('?')[0];

    if (path === '/' || path === '' || path === '#home' || path === '/estimate' || path === '/contact') {
      return <HomePage />;
    }
    if (path === '/services') {
      return <ServicesPage />;
    }
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      return <ServiceDetailPage slug={slug} />;
    }
    if (path === '/portfolio') {
      return <PortfolioPage />;
    }
    if (path.startsWith('/portfolio/')) {
      const slug = path.replace('/portfolio/', '');
      return <ProjectDetailPage slug={slug} />;
    }
    if (path === '/about') {
      return <AboutPage />;
    }
    if (path === '/blog') {
      return <BlogPage />;
    }
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      return <ArticleDetailPage slug={slug} />;
    }

    return <HomePage />;
  };

  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {renderRoute()}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainRouter />
    </RouterProvider>
  );
}
