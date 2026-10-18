import React, { useState } from 'react';
import { TECH_STACK_TABS } from '../api/wordpress';
import { 
  Code, 
  Layers, 
  FileCode, 
  Palette, 
  Sparkles, 
  Cpu, 
  Terminal, 
  Server, 
  Network, 
  Smartphone, 
  Zap, 
  Apple, 
  Play, 
  Cloud, 
  CloudRain, 
  Box, 
  GitPullRequest, 
  LayoutTemplate, 
  ShoppingBag, 
  Database, 
  Activity 
} from 'lucide-react';

const iconLookup = {
  Code, Layers, FileCode, Palette, Sparkles,
  Cpu, Terminal, Server, Network,
  Smartphone, Zap, Apple, Play,
  Cloud, CloudRain, Box, GitPullRequest,
  LayoutTemplate, ShoppingBag, Database, Activity
};

export default function TechStackShowcase() {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { key: 'frontend', label: 'Frontend & UI' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'mobile', label: 'Mobile Engineering' },
    { key: 'cloud', label: 'Cloud & DevOps' },
    { key: 'cms_databases', label: 'CMS & Data' }
  ];

  const currentItems = TECH_STACK_TABS[activeTab] || [];

  return (
    <section className="section-padding" style={{ background: 'rgba(8, 11, 20, 0.6)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Engineering Arsenal</span>
          </div>
          <h2>
            Modern Tech Stack <span className="text-gradient">Engineered for Scale</span>
          </h2>
          <p>
            We curate state-of-the-art frameworks, cloud toolchains, and databases to deliver maximum throughput, sub-second latency, and future-proof reliability.
          </p>
        </div>

        {/* Tab Filter Nav */}
        <div className="tech-tabs-nav">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`tech-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="tech-grid">
          {currentItems.map((item, idx) => {
            const Icon = iconLookup[item.icon] || Code;
            return (
              <div key={idx} className="tech-card">
                <div className="tech-card-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
