import React from 'react';
import { SectionId } from '../types';
import { Brain, Code, Database, Server } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    {
      icon: <Brain size={28} />,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      title: "AI Engineering",
      description:
        "Building and deploying advanced AI solutions, including LLMs, RAG pipelines, and custom inference systems, using TensorFlow and PyTorch. I specialize in fine-tuning models, optimizing performance, and integrating intelligent systems into scalable, real-world applications.",
    },
    {
      icon: <Code size={28} />,
      color: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-900/20",
      title: "Full Stack Dev",
      description:
        "Designing and developing responsive, high-performance web and mobile applications using React, React Native, Next.js, Node.js, and modern UI frameworks. I build scalable, maintainable solutions that deliver seamless user experiences and are optimized for speed, reliability, and long-term growth.",
    },
    {
      icon: <Database size={28} />,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      title: "Data Science",
      description:
        "Turning raw data into actionable insights through statistical analysis, predictive modeling, and clear visualizations. I help uncover patterns, inform decisions, and deliver data-driven solutions that drive measurable impact.",
    },
    {
      icon: <Server size={28} />,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      title: "Cloud",
      description:
        "Implementing robust CI/CD pipelines and managing scalable cloud infrastructure with AWS, GCP, and Docker, ensuring efficient, reliable, and high-performance deployments for modern applications.",
    },
  ];

  return (
    <section id={SectionId.ABOUT} className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I am a multidisciplinary engineer specializing in AI engineering,
            full-stack Software development, and data science, passionate about
            transforming complex technologies into intuitive, user-friendly
            solutions. I design and build scalable applications powered by
            advanced AI and data-driven insights, bridging the gap between
            sophisticated machine learning models and seamless user experiences.
            With expertise across the full software development lifecycle, I
            create robust, high-performance systems that combine backend
            efficiency, frontend usability, and intelligent automation. My work
            in data science allows me to extract actionable insights from
            complex datasets, enabling smarter decisions and impactful outcomes.
            Driven by a vision to empower organizations and users through
            intelligent technology, I focus on delivering solutions that are not
            only innovative and reliable but also accessible and transformative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;