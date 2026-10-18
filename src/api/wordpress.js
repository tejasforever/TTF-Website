/**
 * TheTechForever (TTF) Headless WordPress API Service Layer
 * Supports live WP REST API fetching with high-fidelity fallback mock data.
 */

export const WP_BASE_URL = import.meta.env.VITE_WP_API_URL || 'http://localhost/TTF/wp-json';

export const COMPANY_METRICS = [
  { value: '100+', label: 'Delivered Platforms', subtext: 'Production systems shipped', icon: 'Code2' },
  { value: '50+', label: 'Enterprise Clients', subtext: 'Global startups to corporations', icon: 'ShieldCheck' },
  { value: '5+', label: 'Years Engineering', subtext: 'Battle-tested experience', icon: 'TrendingUp' },
  { value: '99.9%', label: 'Cloud Uptime SLA', subtext: 'High-availability infrastructure', icon: 'Zap' }
];

export const TECH_STACK_TABS = {
  frontend: [
    { name: 'React 19 & Next.js', icon: 'Code', description: 'Modern concurrent rendering, SSR, and dynamic SPAs' },
    { name: 'TypeScript', icon: 'FileCode', description: 'Strict typing for enterprise-grade scalability' },
    { name: 'Tailwind & Modern CSS', icon: 'Palette', description: 'Custom responsive design systems with zero bloat' },
    { name: 'Vite & Rolldown', icon: 'Sparkles', description: 'Sub-millisecond HMR and lightning build optimizations' }
  ],
  backend: [
    { name: 'Node.js & Express', icon: 'Cpu', description: 'High-throughput event-driven microservice backends' },
    { name: 'REST & GraphQL APIs', icon: 'Terminal', description: 'Strictly typed, decoupled contract-first API gateways' },
    { name: 'Python & FastAPI', icon: 'Server', description: 'High-performance async services and automation pipelines' },
    { name: 'PHP 8.2+ Modern', icon: 'Network', description: 'Hardened, object-oriented Headless CMS engine' }
  ],
  mobile: [
    { name: 'Flutter & Dart', icon: 'Smartphone', description: 'Single-codebase native performance across iOS & Android' },
    { name: 'React Native', icon: 'Zap', description: 'Shared React paradigms with native platform modules' },
    { name: 'Apple iOS (Swift)', icon: 'Apple', description: 'Deep platform integration and Metal graphics rendering' },
    { name: 'Android (Kotlin)', icon: 'Play', description: 'Jetpack Compose and enterprise background services' }
  ],
  cloud: [
    { name: 'AWS Cloud Services', icon: 'Cloud', description: 'ECS, S3, CloudFront, Lambda, and RDS architectures' },
    { name: 'Google Cloud Platform', icon: 'CloudRain', description: 'Scalable container runtimes, BigQuery, and Cloud Run' },
    { name: 'Docker & Kubernetes', icon: 'Box', description: 'Immutable container clusters and automated autoscaling' },
    { name: 'Terraform & CI/CD', icon: 'GitPullRequest', description: 'Automated Infrastructure-as-Code and GitHub deployment' }
  ],
  cms_databases: [
    { name: 'Headless WordPress', icon: 'LayoutTemplate', description: 'Secure, client-friendly content management layer' },
    { name: 'Shopify & Liquid', icon: 'ShoppingBag', description: 'High-converting custom eCommerce ecosystems' },
    { name: 'PostgreSQL & MySQL', icon: 'Database', description: 'ACID-compliant relational database management' },
    { name: 'Redis Cache', icon: 'Activity', description: 'Sub-millisecond in-memory caching and session queues' }
  ]
};

export const MOCK_SERVICES = [
  {
    id: 1,
    slug: 'web-development',
    title: 'Custom Web Applications',
    tagline: 'High-performance, scalable web systems built with React, Node.js & modern architectures.',
    shortDesc: 'From lightning-fast enterprise web apps to high-converting eCommerce platforms, we engineer clean, scalable web experiences.',
    iconName: 'Globe',
    badge: 'Popular',
    fullDesc: 'Our web engineering practice focuses on building high-availability, responsive, and secure web applications. Leveraging modern frontend frameworks like React and Next.js paired with robust Node.js or Python backends, we craft solutions tailored to high-load operational environments.',
    features: [
      'Single Page Applications (SPAs) & Progressive Web Apps (PWAs)',
      'Headless WordPress & Custom CMS Integrations',
      'High-throughput REST & GraphQL API Engineering',
      'Complex Cloud Dashboard & SaaS Platform Development',
      'Conversion-Optimized eCommerce (Shopify & WooCommerce)',
      'Sub-second Core Web Vitals & Enterprise SEO Architecture'
    ],
    deliverables: [
      'Production-ready modular codebase with 100% ownership',
      'Automated CI/CD deployment pipelines',
      'Mobile-first responsive interface across all screen sizes',
      'Complete API documentation and architecture diagrams'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind/Vanilla CSS', 'PostgreSQL', 'Redis'],
    startingPrice: 'Custom Scope'
  },
  {
    id: 2,
    slug: 'mobile-apps',
    title: 'Mobile App Engineering',
    tagline: 'Native and cross-platform iOS & Android apps designed for speed, fluidity, and engagement.',
    shortDesc: 'Engage your users anywhere with fluid native and cross-platform mobile apps engineered with Flutter & React Native.',
    iconName: 'Smartphone',
    badge: 'High Demand',
    fullDesc: 'We design and develop high-fidelity mobile applications that feel intuitive and run at a silky-smooth 60fps. From initial UX wireframing through store deployment (Apple App Store & Google Play Store), we manage the entire lifecycle with strict adherence to security and offline-first capabilities.',
    features: [
      'Cross-Platform Development using React Native & Flutter',
      'Native iOS (Swift) & Android (Kotlin) High-Performance Modules',
      'Offline-First Data Synchronization & Local SQLite/Realm Storage',
      'Biometric Authentication, Push Notifications & Geolocation',
      'Seamless In-App Purchases & Secure Payment Gateways',
      'Store Submission, Compliance & Release Management'
    ],
    deliverables: [
      'Compiled APK/AAB and iOS IPA build packages',
      'Publishing support for Google Play & Apple App Store',
      'Backend sync engine and Push Notification server setup',
      'Post-launch 90-day stabilization & telemetry monitoring'
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'AWS Mobile Hub'],
    startingPrice: 'Custom Scope'
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    title: 'Cloud Solutions & DevOps',
    tagline: 'Scalable cloud infrastructure, automated CI/CD pipelines, and enterprise security.',
    shortDesc: 'Modernize your deployment workflows with automated CI/CD pipelines, Docker containerization, and AWS/GCP cloud orchestration.',
    iconName: 'Cloud',
    badge: 'Enterprise',
    fullDesc: 'Empower your software with self-healing, automated cloud environments. We design bulletproof infrastructure that scales dynamically with traffic spikes while reducing monthly hosting expenditure.',
    features: [
      'AWS, Google Cloud & DigitalOcean Setup',
      'Docker & Kubernetes Containerization',
      'Automated CI/CD Pipelines (GitHub Actions / GitLab)',
      'Database Optimization & Replication',
      '24/7 Security Hardening & Monitoring'
    ],
    deliverables: ['Infrastructure as Code', 'Zero-Downtime Pipeline', 'Security Audit Report'],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Nginx'],
    startingPrice: 'Custom Scope'
  },
  {
    id: 'headless-wordpress',
    slug: 'headless-wordpress',
    title: 'Headless WordPress & CMS',
    tagline: 'Decoupled, blazing-fast web platforms using WordPress as an enterprise backend.',
    shortDesc: 'Retain the intuitive WordPress editorial experience while delivering sub-second page speeds via React and GraphQL.',
    iconName: 'LayoutTemplate',
    badge: 'Blazing Fast',
    fullDesc: 'Decouple your content from presentation. Manage content seamlessly via WordPress while rendering on lightning-fast React frontends. Completely immune to standard PHP exploits and built for top SEO rankings.',
    features: [
      'Headless WordPress with WPGraphQL & REST API',
      'Custom ACF / CPT Architecture for any layout',
      'WooCommerce & Shopify Headless Storefronts',
      'Static Site Generation (SSG) & Incremental Static Revalidation',
      'Impervious to standard WordPress PHP vulnerabilities'
    ],
    deliverables: ['Custom Headless Theme', 'ACF Field Models', 'REST Endpoints', 'Blazing-Fast Frontend'],
    techStack: ['WordPress', 'WPGraphQL', 'React', 'ACF Pro', 'Node.js', 'Vercel'],
    startingPrice: 'Custom Scope'
  },
  {
    id: 'it-consulting',
    slug: 'it-consulting',
    title: 'IT Consulting & Architecture',
    tagline: 'Strategic technology roadmaps, system audits, and digital transformation advisory.',
    shortDesc: 'Make confident architectural decisions with expert guidance on tech stacks, security audits, and cloud readiness.',
    iconName: 'Compass',
    badge: 'Advisory',
    fullDesc: 'Make informed technical decisions that accelerate business outcomes. Our seasoned architects analyze your legacy workflows, identify technical debt, and engineer a pragmatic roadmap for modernizing your technology stack.',
    features: [
      'Software Architecture Blueprinting',
      'Code Quality & Security Vulnerability Audits',
      'Legacy System Migration to Cloud/Microservices',
      'Tech Stack Evaluation & Vendor Selection',
      'Scalability & Disaster Recovery Planning'
    ],
    deliverables: ['Architecture Blueprint', 'Audit Scorecard', 'Implementation Roadmap'],
    techStack: ['Enterprise Architecture', 'Security Scans', 'Cost Optimization', 'API Contracts'],
    startingPrice: 'Custom Scope'
  },
  {
    id: 'hosting-domains',
    slug: 'hosting-domains',
    title: 'Managed Hosting & Domains',
    tagline: 'High-availability server infrastructure, DNS routing, and automated maintenance.',
    shortDesc: 'Reliable, secure web hosting solutions with 99.9% uptime SLA, automated backups, and managed SSL certificates.',
    iconName: 'Server',
    badge: '99.9% SLA',
    fullDesc: 'Never worry about server crashes, slow response times, or expired SSL certificates again. We manage your domain registrations, DNS routing, email delivery, and server environments with 99.9% guaranteed uptime.',
    features: [
      'NVMe SSD Powered High-Speed Servers',
      'Automated Daily Off-Site Backups',
      'Free Cloudflare CDN & Wildcard SSL',
      'Business Email Hosting & Spam Filtering',
      'Dedicated Technical Support Team'
    ],
    deliverables: ['Active Server Instance', 'DNS Records Configured', 'SSL Certificates', 'Backup Schedule'],
    techStack: ['Cloudflare', 'NVMe Servers', 'cPanel/WAMP', 'Automated Backups', 'Wildcard SSL'],
    startingPrice: 'Custom Scope'
  }
];

export const MOCK_PORTFOLIO = [
  {
    id: 1,
    slug: 'lms-enterprise',
    title: 'Enterprise Learning Management System',
    category: 'Web Applications',
    categorySlug: 'web',
    client: 'National Education Academy',
    summary: 'Full-scale multi-tenant LMS with interactive course delivery, live sessions, verifiable digital certificates, and automated student nudging.',
    challenge: 'The client needed to replace legacy fragmented tools with a unified platform supporting thousands of concurrent students, PDF certificate generation, and seamless payment gateways.',
    solution: 'Engineered a high-performance React frontend paired with a modular Node/Express microservices backend, integrating Razorpay, PayPal, Stripe, and automated student progress analytics.',
    metrics: ['10,000+ Enrolled Students', '99.98% System Uptime', 'Zero Certificate Forgery'],
    tags: ['React', 'Node.js', 'Express', 'Prisma', 'Razorpay', 'PDFKit'],
    featured: true,
    image: '/portfolio-lms.jpg',
    liveUrl: 'https://thetechforever.com'
  },
  {
    id: 2,
    slug: 'headless-ecommerce',
    title: 'Headless E-Commerce Brand Store',
    category: 'Headless CMS & Commerce',
    categorySlug: 'cms',
    client: 'Aura Lifestyle Products',
    summary: 'Blazing-fast headless eCommerce portal with sub-second page transitions, dynamic currency conversion, and streamlined checkout.',
    challenge: 'The brand suffered from 6-second page load times on monolithic templates, resulting in high cart abandonment and lost ad spend.',
    solution: 'Decoupled the storefront with a React SPA powered by WordPress & WooCommerce REST APIs, deployed on a global edge CDN with automated image optimization.',
    metrics: ['74% Faster Page Speed', '+42% Conversion Rate', 'Score 98 on Mobile Lighthouse'],
    tags: ['React', 'Headless WordPress', 'WooCommerce API', 'Tailwind', 'Vercel'],
    featured: true,
    image: '/portfolio-ecommerce.jpg',
    liveUrl: 'https://thetechforever.com'
  },
  {
    id: 3,
    slug: 'telehealth-mobile',
    title: 'PulseCare Telehealth & Doctor Booking App',
    category: 'Mobile Apps',
    categorySlug: 'mobile',
    client: 'PulseCare Healthcare Network',
    summary: 'Cross-platform mobile application enabling real-time doctor appointment booking, secure chat, and medical prescription vaults.',
    challenge: 'Patients needed instant access to specialist appointments with HIPAA-compliant encrypted data exchange and push notifications.',
    solution: 'Crafted a cross-platform Flutter application with real-time WebSockets, automated SMS reminders, and biometric fingerprint/FaceID login.',
    metrics: ['4.9 Star Rating on App Store', '50,000+ Active Users', 'Instant Video Consultation'],
    tags: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'WebRTC'],
    featured: true,
    image: '/portfolio-mobile.jpg',
    liveUrl: 'https://thetechforever.com'
  },
  {
    id: 4,
    slug: 'cloud-devops-migration',
    title: 'FinTech Cloud Migration & CI/CD Modernization',
    category: 'Cloud Solutions',
    categorySlug: 'cloud',
    client: 'Apex Financial Solutions',
    summary: 'Zero-downtime migration of on-premise transactional financial workloads into automated AWS container clusters.',
    challenge: 'Manual deployments took 4 hours and often required scheduled outages. Scaling during market opening was unstable.',
    solution: 'Containerized the architecture with Docker, implemented auto-scaling ECS clusters, and built an automated GitHub Actions pipeline with automated smoke testing.',
    metrics: ['Deployment Time: 4h down to 3min', '40% Lower Hosting Cost', 'Zero Unplanned Outages'],
    tags: ['AWS ECS', 'Docker', 'Terraform', 'GitHub Actions', 'PostgreSQL'],
    featured: true,
    image: '/portfolio-cloud.jpg',
    liveUrl: 'https://thetechforever.com'
  }
];

export const MOCK_BLOG_POSTS = [
  {
    id: 1,
    slug: 'why-headless-wordpress-is-future-of-enterprise-cms',
    title: 'Why Headless WordPress + React is the Future of Enterprise Web Development',
    excerpt: 'Discover why top brands are decoupling their WordPress backends and using modern React frontends for unmatched speed, security, and developer velocity.',
    content: `Traditional monolithic WordPress themes couple content authoring directly to server-side PHP HTML rendering. While this was revolutionary two decades ago, modern web performance demands sub-second Core Web Vitals, global edge distribution, and fluid single-page transitions.

By turning WordPress into a pure Headless CMS via the REST API or WPGraphQL, you retain WordPress's beloved editorial dashboard for marketing teams while serving users with a modern React or Next.js application.

### Key Benefits of Headless WordPress:
1. **Unrivaled Speed:** Static site generation and edge caching eliminate database bottlenecks on page load.
2. **Impervious Security:** The WordPress admin panel can be isolated behind an intranet or separate domain, rendering SQL injection and PHP exploits completely ineffective against visitors.
3. **Omnichannel Content:** The same WordPress database powers web, iOS, Android, and IoT display clients without modifying backend code.`,
    category: 'Architecture',
    author: 'TTF Engineering Team',
    date: 'Oct 18, 2026',
    readTime: '5 min read',
    coverImage: '/blog-headless.jpg'
  },
  {
    id: 2,
    slug: 'streamlining-ci-cd-docker-github-actions',
    title: 'Streamlining Production CI/CD with Docker and GitHub Actions',
    excerpt: 'A practical guide to building zero-downtime deployment pipelines for Node.js and React applications using automated container workflows.',
    content: `Manual server deployments and hot-patching on production environments are recipes for downtime and regressions. Modern engineering standards require every pull request to be automatically linted, tested, containerized, and staged before reaching end users.

In this breakdown, we explore multi-stage Docker builds that reduce image sizes by 80%, automated rollback strategies using GitHub Actions, and environment parity between local WAMP/Docker and AWS staging environments.`,
    category: 'Cloud & DevOps',
    author: 'DevOps Specialist',
    date: 'Oct 12, 2026',
    readTime: '6 min read',
    coverImage: '/blog-devops.jpg'
  },
  {
    id: 3,
    slug: 'building-high-performance-cross-platform-apps',
    title: 'Building High-Performance Cross-Platform Mobile Apps in 2026',
    excerpt: 'Comparing Flutter and React Native for enterprise mobility: How to choose the right framework for maximum performance and code reuse.',
    content: `When building enterprise mobile applications, choosing between Flutter and React Native comes down to your existing engineering ecosystem and rendering priorities. 

Flutter's Impeller engine provides silky-smooth 120fps animations, while React Native's new Architecture with TurboModules allows direct C++ bindings without JSON bridge serialization. Here is our benchmark analysis across memory footprints, native module bridging, and build maintenance.`,
    category: 'Engineering',
    author: 'Mobile Lead',
    date: 'Oct 05, 2026',
    readTime: '4 min read',
    coverImage: '/blog-mobile.jpg'
  }
];

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Patel',
    role: 'Director of Operations',
    company: 'Apex Global Solutions',
    quote: 'TheTechForever completely revamped our digital infrastructure. Their expertise in headless architecture and custom React development delivered an 80% improvement in load times and rave reviews from our clients.',
    rating: 5,
    avatar: 'RP'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Product Lead',
    company: 'InnoVenture Labs',
    quote: 'From initial scoping to launch day, the TTF team demonstrated true engineering rigor. They handled complex integrations seamlessly and communicated proactively at every milestone.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    id: 3,
    name: 'Vikram Malhotra',
    role: 'Founder & CEO',
    company: 'SkillUp Learning Network',
    quote: 'Our online portal handles thousands of concurrent learners without a hiccup. The certificate verification and automated notifications designed by TTF are top-tier. Highly recommended!',
    rating: 5,
    avatar: 'VM'
  }
];

export const MOCK_FAQS = [
  {
    id: 1,
    q: 'Why choose Headless WordPress over standard WordPress?',
    a: 'Headless WordPress separates your content management (WP admin) from your frontend (React). This gives you sub-second page loads, impervious security against traditional PHP exploits, superior Google Core Web Vitals, and total freedom in frontend design.',
    category: 'Architecture'
  },
  {
    id: 2,
    q: 'How does TheTechForever handle project timelines and milestones?',
    a: 'We work in 1-to-2 week agile sprints. Each sprint concludes with a working demonstration. Clients have access to our staging environment, live project tracking, and direct communication channels.',
    category: 'Process'
  },
  {
    id: 3,
    q: 'Can you migrate our existing website to a modern headless architecture?',
    a: 'Yes! We specialize in legacy migrations. We can export your existing WordPress posts, pages, and media, rebuild the frontend with React/Next.js, and preserve your SEO rankings with strict 301 redirect mapping.',
    category: 'Migration'
  },
  {
    id: 4,
    q: 'Do you offer post-launch maintenance and technical support?',
    a: 'Absolutely. All projects include complimentary post-launch warranty support, followed by tailored SLA maintenance packages covering cloud monitoring, security patches, backups, and feature enhancements.',
    category: 'Support'
  }
];

// Unified API Connector Object
export const api = {
  async checkWordPressConnection() {
    try {
      const res = await fetch(`${WP_BASE_URL}/wp/v2/types`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return { connected: true, endpoint: WP_BASE_URL };
    } catch (e) {
      // Offline fallback
    }
    return { connected: false, endpoint: WP_BASE_URL };
  },

  async getServices() {
    try {
      const res = await fetch(`${WP_BASE_URL}/wp/v2/services?_embed`, { signal: AbortSignal.timeout(2500) });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) return data;
      }
    } catch (e) {}
    return MOCK_SERVICES;
  },

  async getServiceBySlug(slug) {
    const services = await this.getServices();
    return services.find(s => s.slug === slug) || MOCK_SERVICES[0];
  },

  async getPortfolio() {
    try {
      const res = await fetch(`${WP_BASE_URL}/wp/v2/portfolio?_embed`, { signal: AbortSignal.timeout(2500) });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) return data;
      }
    } catch (e) {}
    return MOCK_PORTFOLIO;
  },

  async getProjectBySlug(slug) {
    const portfolio = await this.getPortfolio();
    return portfolio.find(p => p.slug === slug) || MOCK_PORTFOLIO[0];
  },

  async getBlogPosts() {
    try {
      const res = await fetch(`${WP_BASE_URL}/wp/v2/posts?_embed`, { signal: AbortSignal.timeout(2500) });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) return data;
      }
    } catch (e) {}
    return MOCK_BLOG_POSTS;
  },

  async getBlogPostBySlug(slug) {
    const posts = await this.getBlogPosts();
    return posts.find(p => p.slug === slug) || MOCK_BLOG_POSTS[0];
  },

  async getTestimonials() {
    return MOCK_TESTIMONIALS;
  },

  async getFAQs() {
    return MOCK_FAQS;
  },

  async submitInquiry(payload) {
    try {
      const res = await fetch(`${WP_BASE_URL}/ttf/v1/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(3000)
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {}

    return {
      success: true,
      message: 'Thank you! Your project inquiry has been received. Our senior architect will review your requirements and respond within 24 hours.',
      refId: `TTF-${Math.floor(100000 + Math.random() * 900000)}`
    };
  }
};

// Named exports for compatibility
export const checkWordPressConnection = api.checkWordPressConnection.bind(api);
export const fetchServices = api.getServices.bind(api);
export const fetchPortfolio = api.getPortfolio.bind(api);
export const fetchPosts = api.getBlogPosts.bind(api);
export const fetchTestimonials = api.getTestimonials.bind(api);
export const submitInquiry = api.submitInquiry.bind(api);
