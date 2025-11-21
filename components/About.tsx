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
      description: "Architecting and deploying LLMs, RAG pipelines, and custom inference solutions using TensorFlow and PyTorch."
    },
    {
      icon: <Code size={28} />,
      color: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-900/20",
      title: "Full Stack Dev",
      description: "Building responsive, high-performance web applications with React, Next.js, Node.js and modern UI frameworks."
    },
    {
      icon: <Database size={28} />,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      title: "Data Science",
      description: "Transforming raw data into actionable insights via statistical analysis, predictive modeling, and visualization."
    },
    {
      icon: <Server size={28} />,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      title: "DevOps & Cloud",
      description: "Implementing robust CI/CD pipelines and managing scalable infrastructure on AWS, GCP, and Docker."
    }
  ];

  return (
    <section id={SectionId.ABOUT} className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">About Me</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I am a multidisciplinary engineer who bridges the gap between complex AI research and user-centric product development. I create intelligent systems that are not just powerful, but accessible and intuitive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{card.title}</h3>
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