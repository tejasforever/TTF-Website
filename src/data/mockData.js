/**
 * TheTechForever (TTF) - Master Data Repository
 * Serves as structured data and graceful fallback for Headless WordPress REST API.
 */

export const COMPANY_INFO = {
  name: "TheTechForever",
  shortName: "TTF",
  tagline: "Empowering Your Digital Future with Scalable Tech Solutions",
  description: "A premier software engineering and digital transformation agency specializing in custom web platforms, mobile applications, cloud infrastructure, and headless enterprise CMS solutions.",
  email: "info@thetechforever.com",
  phone: "+91 94031 23579",
  phoneFormatted: "+91 94031 23579",
  whatsapp: "919403123579",
  address: "Avadh Apartment, Nizampura Gam, Vadodara - 390002, Gujarat, India",
  googleMapsUrl: "https://maps.google.com/?q=Nizampura+Gam+Vadodara+Gujarat+390002",
  registrations: {
    udyam: "Udyam Registered MSME",
    gst: "GST Registered Enterprise",
    incorporation: "Vadodara, Gujarat, India"
  },
  socialLinks: {
    linkedin: "https://linkedin.com/company/thetechforever",
    twitter: "https://twitter.com/thetechforever",
    facebook: "https://facebook.com/thetechforever",
    github: "https://github.com/thetechforever",
    instagram: "https://instagram.com/thetechforever"
  }
};

export const STATS = [
  { value: "100+", label: "Projects Delivered", description: "Successfully shipped across web, mobile & cloud" },
  { value: "50+", label: "Happy Clients", description: "Global enterprises, startups & SMEs" },
  { value: "5+", label: "Years Experience", description: "Delivering world-class digital engineering" },
  { value: "99.9%", label: "Cloud Uptime SLA", description: "Enterprise reliability & zero-downtime deploys" }
];

export const SERVICES = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Engineering & Custom Portals",
    icon: "Code2",
    badge: "Most Popular",
    shortDesc: "High-performance React/Node web apps, enterprise dashboards, and headless web experiences engineered for speed and conversion.",
    fullDesc: "We build modern, responsive, and ultra-fast web applications tailored to your business operations. From complex single-page applications to robust multi-tenant SaaS platforms, we guarantee clean architecture, SEO readiness, and exceptional UX.",
    features: [
      "Custom React, Next.js & Node.js Architecture",
      "Headless CMS Integration (WordPress & Strapi)",
      "Progressive Web Apps (PWAs) with Offline Capability",
      "API First & Microservices Design",
      "High Conversion UI/UX with Fluid Animations"
    ],
    deliverables: ["Full Source Code", "CI/CD Setup", "Lighthouse 95+ Performance", "Technical Documentation"]
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Mobile App Development",
    icon: "Smartphone",
    badge: "Cross-Platform",
    shortDesc: "Native and hybrid iOS & Android apps that captivate users with fluid performance, modern UI, and offline-first capabilities.",
    fullDesc: "Reach millions on mobile with seamless experiences. We craft production-ready applications using Flutter and React Native, providing near-native speed, fluid gesture control, and effortless integration with your backend APIs.",
    features: [
      "Cross-Platform Flutter & React Native Apps",
      "Intuitive iOS & Android User Experience",
      "Push Notifications & Biometric Authentication",
      "Real-time Data Sync & Offline Storage",
      "App Store & Google Play Store Publishing"
    ],
    deliverables: ["iOS & Android Builds", "Store Listing Optimization", "Push Notification Architecture"]
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    icon: "Cloud",
    badge: "Scalable",
    shortDesc: "Automated CI/CD pipelines, Docker containerization, AWS/GCP cloud orchestration, and high-availability setups.",
    fullDesc: "Empower your software with self-healing, automated cloud environments. We design bulletproof infrastructure that scales dynamically with traffic spikes while reducing your monthly hosting expenditure.",
    features: [
      "AWS, Google Cloud & DigitalOcean Setup",
      "Docker & Kubernetes Containerization",
      "Automated CI/CD Pipelines (GitHub Actions / GitLab)",
      "Database Optimization & Replication",
      "24/7 Security Hardening & Monitoring"
    ],
    deliverables: ["Infrastructure as Code", "Zero-Downtime Pipeline", "Security Audit Report"]
  },
  {
    id: "headless-wordpress",
    slug: "headless-wordpress",
    title: "Headless CMS & WordPress",
    icon: "LayoutTemplate",
    badge: "Enterprise Speed",
    shortDesc: "Decouple your content from presentation. Manage content seamlessly via WordPress while rendering on lightning-fast React frontends.",
    fullDesc: "Transform traditional WordPress into a modern digital powerhouse. By separating the content management dashboard from a cutting-edge React frontend, you achieve unmatched page speeds, bulletproof security, and superior SEO rankings.",
    features: [
      "Headless WordPress with WPGraphQL & REST API",
      "Custom ACF / CPT Architecture for any layout",
      "WooCommerce & Shopify Headless Storefronts",
      "Static Site Generation (SSG) & Incremental Static Revalidation",
      "Impervious to standard WordPress PHP vulnerabilities"
    ],
    deliverables: ["Custom Headless Theme", "ACF Field Models", "REST Endpoints", "Blazing-Fast Frontend"]
  },
  {
    id: "it-consulting",
    slug: "it-consulting",
    title: "IT Consulting & Architecture",
    icon: "Compass",
    badge: "Strategic",
    shortDesc: "Strategic technology roadmaps, code audits, system architecture design, and digital transformation advisory.",
    fullDesc: "Make informed technical decisions that accelerate business outcomes. Our seasoned architects analyze your legacy workflows, identify technical debt, and engineer a pragmatic roadmap for modernizing your technology stack.",
    features: [
      "Software Architecture Blueprinting",
      "Code Quality & Security Vulnerability Audits",
      "Legacy System Migration to Cloud/Microservices",
      "Tech Stack Evaluation & Vendor Selection",
      "Scalability & Disaster Recovery Planning"
    ],
    deliverables: ["Architecture Blueprint", "Audit Scorecard", "Implementation Roadmap"]
  },
  {
    id: "hosting-domains",
    slug: "hosting-domains",
    title: "Managed Hosting & Domains",
    icon: "Server",
    badge: "99.9% Uptime",
    shortDesc: "Enterprise-grade cloud hosting, automated SSL, automated daily backups, and reliable DNS management.",
    fullDesc: "Never worry about server crashes, slow response times, or expired SSL certificates again. We manage your domain registrations, DNS routing, email delivery, and server environments with 99.9% guaranteed uptime.",
    features: [
      "NVMe SSD Powered High-Speed Servers",
      "Automated Daily Off-Site Backups",
      "Free Cloudflare CDN & Wildcard SSL",
      "Business Email Hosting & Spam Filtering",
      "Dedicated Technical Support Team"
    ],
    deliverables: ["Active Server Instance", "DNS Records Configured", "SSL Certificates", "Backup Schedule"]
  }
];

export const TECH_STACKS = {
  frontend: [
    { name: "React 19", role: "UI Library", icon: "react" },
    { name: "Next.js", role: "Full-Stack Framework", icon: "next" },
    { name: "TypeScript", role: "Type Safety", icon: "ts" },
    { name: "Vite", role: "Build Tooling", icon: "vite" },
    { name: "Tailwind / CSS3", role: "Modern Styling", icon: "css" },
    { name: "Redux / Zustand", role: "State Management", icon: "redux" }
  ],
  backend: [
    { name: "Node.js", role: "Runtime Engine", icon: "node" },
    { name: "Express.js", role: "REST API Framework", icon: "express" },
    { name: "Headless WordPress", role: "Enterprise CMS", icon: "wp" },
    { name: "PHP 8.2+", role: "WordPress Core", icon: "php" },
    { name: "WPGraphQL", role: "GraphQL Layer", icon: "graphql" },
    { name: "Python", role: "Automation & Data", icon: "python" }
  ],
  mobile: [
    { name: "Flutter", role: "Cross-Platform", icon: "flutter" },
    { name: "React Native", role: "Mobile JS Framework", icon: "react-native" },
    { name: "Android SDK", role: "Native Android", icon: "android" },
    { name: "Swift / iOS", role: "Apple Ecosystem", icon: "apple" }
  ],
  cloudDb: [
    { name: "AWS Cloud", role: "EC2, S3, CloudFront", icon: "aws" },
    { name: "Google Cloud", role: "Compute & Storage", icon: "gcp" },
    { name: "MySQL / MariaDB", role: "Relational DB", icon: "mysql" },
    { name: "PostgreSQL", role: "Advanced SQL", icon: "postgres" },
    { name: "MongoDB", role: "NoSQL Database", icon: "mongo" },
    { name: "Redis", role: "In-Memory Cache", icon: "redis" }
  ],
  devops: [
    { name: "Docker", role: "Containerization", icon: "docker" },
    { name: "GitHub Actions", role: "Automated CI/CD", icon: "github" },
    { name: "Nginx", role: "Reverse Proxy & Web Server", icon: "nginx" },
    { name: "Cloudflare", role: "CDN & Edge Security", icon: "cloudflare" }
  ]
};

export const PORTFOLIO = [
  {
    id: "lms-enterprise",
    slug: "lms-enterprise",
    title: "Enterprise Learning Management System",
    category: "Web & SaaS",
    client: "National Education Academy",
    summary: "Full-scale multi-tenant LMS with interactive course delivery, live sessions, verifiable digital certificates, and automated student nudging.",
    challenge: "The client needed to replace legacy fragmented tools with a unified platform supporting thousands of concurrent students, PDF certificate generation, and seamless payment gateways.",
    solution: "Engineered a high-performance React frontend paired with a modular Node/Express microservices backend, integrating Razorpay, PayPal, Stripe, and automated student progress analytics.",
    metrics: ["10,000+ Enrolled Students", "99.98% System Uptime", "Zero Certificate Forgery"],
    tags: ["React", "Node.js", "Express", "Prisma", "Razorpay", "PDFKit"],
    image: "/portfolio-lms.jpg"
  },
  {
    id: "headless-ecommerce",
    slug: "headless-ecommerce",
    title: "Headless E-Commerce Brand Store",
    category: "Headless CMS",
    client: "Aura Lifestyle Products",
    summary: "Blazing-fast headless eCommerce portal with sub-second page transitions, dynamic currency conversion, and streamlined checkout.",
    challenge: "The brand suffered from 6-second page load times on monolithic templates, resulting in high cart abandonment and lost ad spend.",
    solution: "Decoupled the storefront with a React SPA powered by WordPress & WooCommerce REST APIs, deployed on a global edge CDN with automated image optimization.",
    metrics: ["74% Faster Page Speed", "+42% Conversion Rate", "Score 98 on Mobile Lighthouse"],
    tags: ["React", "Headless WordPress", "WooCommerce API", "Tailwind", "Vercel"],
    image: "/portfolio-ecommerce.jpg"
  },
  {
    id: "telehealth-mobile",
    slug: "telehealth-mobile",
    title: "PulseCare Telehealth & Doctor Booking App",
    category: "Mobile",
    client: "PulseCare Healthcare Network",
    summary: "Cross-platform mobile application enabling real-time doctor appointment booking, secure chat, and medical prescription vaults.",
    challenge: "Patients needed instant access to specialist appointments with HIPAA-compliant encrypted data exchange and push notifications.",
    solution: "Crafted a cross-platform Flutter application with real-time WebSockets, automated SMS reminders, and biometric fingerprint/FaceID login.",
    metrics: ["4.9 Star Rating on App Store", "50,000+ Active Users", "Instant Video Consultation"],
    tags: ["Flutter", "Dart", "Firebase", "Node.js", "WebRTC"],
    image: "/portfolio-mobile.jpg"
  },
  {
    id: "cloud-devops-migration",
    slug: "cloud-devops-migration",
    title: "FinTech Cloud Migration & CI/CD Modernization",
    category: "Cloud",
    client: "Apex Financial Solutions",
    summary: "Zero-downtime migration of on-premise transactional financial workloads into automated AWS container clusters.",
    challenge: "Manual deployments took 4 hours and often required scheduled outages. Scaling during market opening was unstable.",
    solution: "Containerized the architecture with Docker, implemented auto-scaling ECS clusters, and built an automated GitHub Actions pipeline with automated smoke testing.",
    metrics: ["Deployment Time: 4h down to 3min", "40% Lower Hosting Cost", "Zero Unplanned Outages"],
    tags: ["AWS ECS", "Docker", "Terraform", "GitHub Actions", "PostgreSQL"],
    image: "/portfolio-cloud.jpg"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Patel",
    role: "Director of Operations",
    company: "Apex Global Solutions",
    quote: "TheTechForever completely revamped our digital infrastructure. Their expertise in headless architecture and custom React development delivered an 80% improvement in load times and rave reviews from our clients.",
    rating: 5,
    avatar: "RP"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Product Lead",
    company: "InnoVenture Labs",
    quote: "From initial scoping to launch day, the TTF team demonstrated true engineering rigor. They handled complex integrations seamlessly and communicated proactively at every milestone.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Founder & CEO",
    company: "SkillUp Learning Network",
    quote: "Our online portal handles thousands of concurrent learners without a hiccup. The certificate verification and automated notifications designed by TTF are top-tier. Highly recommended!",
    rating: 5,
    avatar: "VM"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "We deep-dive into your business goals, map data models, define API contracts, and establish a bulletproof technical blueprint."
  },
  {
    step: "02",
    title: "UI/UX & Prototyping",
    description: "Crafting modern, accessible, high-converting interfaces with pixel-perfect design systems, fluid micro-interactions, and responsive layouts."
  },
  {
    step: "03",
    title: "Agile Engineering & QA",
    description: "Sprints with clean, maintainable code, automated testing, continuous integration, and transparent weekly progress demos."
  },
  {
    step: "04",
    title: "Deployment & Scaled Growth",
    description: "Zero-downtime deployment, CDN edge caching, SEO optimization, and 24/7 proactive monitoring with ongoing SLA maintenance."
  }
];

export const FAQS = [
  {
    q: "Why choose Headless WordPress over standard WordPress?",
    a: "Headless WordPress separates your content management (WP admin) from your frontend (React). This gives you sub-second page loads, impervious security against traditional PHP exploits, superior Google Core Web Vitals, and total freedom in frontend design."
  },
  {
    q: "How does TheTechForever handle project timelines and milestones?",
    a: "We work in 1-to-2 week agile sprints. Each sprint concludes with a working demonstration. Clients have access to our staging environment, live project tracking, and direct communication channels."
  },
  {
    q: "Can you migrate our existing website to a modern headless architecture?",
    a: "Yes! We specialize in legacy migrations. We can export your existing WordPress posts, pages, and media, rebuild the frontend with React/Next.js, and preserve your SEO rankings with strict 301 redirect mapping."
  },
  {
    q: "Do you offer post-launch maintenance and technical support?",
    a: "Absolutely. All projects include complimentary post-launch warranty support, followed by tailored SLA maintenance packages covering cloud monitoring, security patches, backups, and feature enhancements."
  }
];

export const BLOG_POSTS = [
  {
    id: "headless-wordpress-guide",
    slug: "why-headless-wordpress-is-future-of-enterprise-cms",
    title: "Why Headless WordPress + React is the Future of Enterprise Web Development",
    category: "Architecture",
    readTime: "5 min read",
    date: "October 18, 2026",
    author: "TTF Engineering Team",
    excerpt: "Discover why top brands are decoupling their WordPress backends and using modern React frontends for unmatched speed, security, and developer velocity.",
    content: "Monolithic WordPress themes often suffer from bloated plugins, slow server-side rendering, and security vulnerabilities. Decoupling the frontend using React allows teams to utilize edge caching, micro-frontends, and seamless API integrations..."
  },
  {
    id: "microservices-devops-guide",
    slug: "streamlining-ci-cd-docker-github-actions",
    title: "Streamlining Production CI/CD with Docker and GitHub Actions",
    category: "DevOps & Cloud",
    readTime: "6 min read",
    date: "October 12, 2026",
    author: "DevOps Specialist",
    excerpt: "A practical guide to building zero-downtime deployment pipelines for Node.js and React applications using automated container workflows.",
    content: "Automating your deployment pipeline eliminates human error during production releases. In this breakdown, we examine container multi-stage builds, secret management, and rollback triggers..."
  },
  {
    id: "mobile-ux-performance",
    slug: "building-high-performance-cross-platform-apps",
    title: "Building High-Performance Cross-Platform Mobile Apps in 2026",
    category: "Mobile",
    readTime: "4 min read",
    date: "October 05, 2026",
    author: "Mobile Lead",
    excerpt: "Comparing Flutter and React Native for enterprise mobility: How to choose the right framework for maximum performance and code reuse.",
    content: "When selecting a cross-platform framework, developer velocity and render engine performance are critical. Here is our benchmark analysis across memory footprint and animation smoothness..."
  }
];
