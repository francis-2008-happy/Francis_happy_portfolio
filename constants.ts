import { Project, SkillCategory, ExperienceItem, Certificate, NavItem, SectionId } from './types';

// Replace this URL with your own photo URL
export const PROFILE_IMAGE_URL = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

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
    skills: ['TypeScript', 'JavaScript', 'Python', 'Rust', 'SQL'],
  },
  {
    category: 'AI/ML & LLM',
    skills: ['TensorFlow', 'PyTorch', 'Gemini API', 'LangChain', 'Hugging Face', 'OpenAI API'],
  },
  {
    category: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter', 'Tableau'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'A real-time data visualization dashboard that uses predictive models to forecast sales trends. Integrated with Gemini for natural language querying of data.',
    techStack: ['React', 'Python', 'Flask', 'Gemini API', 'D3.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=1',
  },
  {
    id: '2',
    title: 'Smart Content Generator',
    description: 'An automated content creation tool for marketers utilizing large language models to generate SEO-optimized blog posts and social media captions.',
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=2',
  },
  {
    id: '3',
    title: 'Neural Network Visualizer',
    description: 'Educational tool to visualize how neural networks learn in real-time. Users can adjust hyperparameters and watch the decision boundary evolve.',
    techStack: ['Vue.js', 'TensorFlow.js', 'WebGL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/600/400?random=3',
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
    company: 'DataFlow Analytics',
    period: '2018 - 2019',
    description: 'Analyzed large datasets to identify market trends. Developed classification models with 95% accuracy for customer churn prediction.',
  },
];

export const CERTIFICATES_DATA: Certificate[] = [
  { id: '1', name: 'Google Professional Machine Learning Engineer', issuer: 'Google Cloud', year: '2023' },
  { id: '2', name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2022' },
  { id: '3', name: 'Deep Learning Specialization', issuer: 'Coursera (DeepLearning.AI)', year: '2021' },
];