import { Project, SkillCategory, ExperienceItem, Certificate, NavItem, SectionId } from './types';

// Replace this URL with your own photo URL
export const PROFILE_IMAGE_URL = new URL('../new professional photo.png', import.meta.url).href;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: `#${SectionId.HERO}` },
  { label: 'About', href: `#${SectionId.ABOUT}` },
  { label: 'Skills', href: `#${SectionId.SKILLS}` },
  { label: 'Projects', href: `#${SectionId.PROJECTS}` },
  { label: 'Experience', href: `#${SectionId.EXPERIENCE}` },
  { label: 'Contact', href: `#${SectionId.CONTACT}` },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['React', 'Next.js', 'React Native', 'Node.js', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
    iconName: 'Code',
  },
  {
    category: 'AI/ML & LLM',
    skills: ['TensorFlow', 'PyTorch', 'Gemini API', 'LangChain', 'Hugging Face', 'OpenAI API'],
    iconName: 'Brain',
  },
  {
    category: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
    iconName: 'BarChart3',
  },
  {
    category: 'Cloud',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub', 'GitLab', 'Vercel', 'Render'],
    iconName: 'Cloud',
  },
  {
    category: 'Frontend Development',
    skills: ['React', 'Next.js', 'React Native','Tailwind CSS', 'HTML5', 'CSS3' ],
    iconName: 'Palette',
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'JWT Authentication', 'WebSockets'],
    iconName: 'Server',
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Firebase'],
    iconName: 'Database',
  },
  {
    category: 'Version Control',
    skills: ['Git', 'GitHub', 'GitLab'],
    iconName: 'GitBranch',
  },
];

export const PROJECTS_DATA: Project[] = [
  // AI Engineering (5)
  {
    id: 'ai-1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time analytics with natural language queries and model-driven forecasts.',
    techStack: ['React', 'Python', 'Flask', 'Gemini API', 'D3.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=101',
    category: 'AI Engineering',
  },
  {
    id: 'ai-2',
    title: 'Conversational Resume Assistant',
    description: 'A Gemini-backed assistant that crafts tailored resume bullets and interview answers.',
    techStack: ['Next.js', 'TypeScript', 'Gemini API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=102',
    category: 'AI Engineering',
  },
  {
    id: 'ai-3',
    title: 'Automated Model Monitoring',
    description: 'Pipeline for drift detection, alerting, and automatic retraining for production models.',
    techStack: ['Python', 'TensorFlow', 'Prometheus', 'Kubernetes'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=103',
    category: 'AI Engineering',
  },
  {
    id: 'ai-4',
    title: 'Multimodal Search Engine',
    description: 'Search across images, text and video using embeddings and a lightweight vector DB.',
    techStack: ['Pinecone', 'Faiss', 'PyTorch', 'Hugging Face'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=104',
    category: 'AI Engineering',
  },
  {
    id: 'ai-5',
    title: 'AutoML Experimentation Platform',
    description: 'Web UI for running, comparing and promoting model experiments with reproducible pipelines.',
    techStack: ['Docker', 'Airflow', 'MLflow', 'TensorFlow'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=105',
    category: 'AI Engineering',
  },

  // Full Stack Development (5)
  {
    id: 'fs-1',
    title: 'E-commerce Platform',
    description: 'Full-featured marketplace with payments, inventory, and admin dashboard.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=201',
    category: 'Full Stack Development',
  },
  {
    id: 'fs-2',
    title: 'Realtime Collaboration App',
    description: 'Collaborative editor with presence, cursors, and operational transforms.',
    techStack: ['React', 'WebSocket', 'Node.js', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=202',
    category: 'Full Stack Development',
  },
  {
    id: 'fs-3',
    title: 'SaaS Billing & Analytics',
    description: 'Subscription billing, usage tracking and analytics for SaaS products.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=203',
    category: 'Full Stack Development',
  },
  {
    id: 'fs-4',
    title: 'Progressive Web App',
    description: 'Offline-capable PWA with background sync and push notifications.',
    techStack: ['React', 'Workbox', 'IndexedDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=204',
    category: 'Full Stack Development',
  },
  {
    id: 'fs-5',
    title: 'Admin Analytics Dashboard',
    description: 'Internal analytics and management tools for operations and customer support.',
    techStack: ['React', 'TypeScript', 'GraphQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=205',
    category: 'Full Stack Development',
  },

  // Data Science (5)
  {
    id: 'ds-1',
    title: 'Customer Segmentation Toolkit',
    description: 'Clustering and visualization toolbox for customer segmentation and targeting.',
    techStack: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=301',
    category: 'Data Science',
  },
  {
    id: 'ds-2',
    title: 'Time Series Forecasting',
    description: 'Forecasting pipeline using state-of-the-art models for demand prediction.',
    techStack: ['Python', 'Prophet', 'TensorFlow'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=302',
    category: 'Data Science',
  },
  {
    id: 'ds-3',
    title: 'Anomaly Detection System',
    description: 'Automated anomaly detection for monitoring system health and data quality.',
    techStack: ['Python', 'PyTorch', 'Kafka'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=303',
    category: 'Data Science',
  },
  {
    id: 'ds-4',
    title: 'Recommendation Engine',
    description: 'Hybrid recommender combining collaborative filtering and content-based signals.',
    techStack: ['Python', 'Spark', 'scikit-learn'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=304',
    category: 'Data Science',
  },
  {
    id: 'ds-5',
    title: 'Data Pipeline Orchestrator',
    description: 'End-to-end ETL and feature store management for ML pipelines.',
    techStack: ['Airflow', 'Python', 'Postgres'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=305',
    category: 'Data Science',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior AI Engineer',
    company: 'TechNova Solutions',
    period: '2022 - Present',
    description: 'Leading the development of generative AI solutions. Optimized LLM inference latency by 40% and spearheaded the integration of multi-modal models.',
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Creative Coders Inc.',
    period: '2019 - 2022',
    description: 'Built scalable web applications using React and Node.js. Mentored junior developers and implemented a robust CI/CD pipeline.',
  },
  {
    id: '3',
    role: 'Data Scientist Intern',
    company: 'Pioneer Artificial Intelligence Academy',
    period: '2018 - 2019',
    description: 'Analyzed large datasets to identify market trends. Developed classification models with 95% accuracy for customer churn prediction.',
  },
];

export const CERTIFICATES_DATA: Certificate[] = [
  { id: '1', name: 'Google Professional Machine Learning Engineer', issuer: 'Google Cloud', year: '2023' },
  { id: '2', name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2022' },
  { id: '3', name: 'Deep Learning Specialization', issuer: 'Coursera (DeepLearning.AI)', year: '2021' },
];