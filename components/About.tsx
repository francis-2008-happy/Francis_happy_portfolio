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
      description: "Architecting and deploying LLMs, RAG pipelines, and custom inference solutions using TensorFlow and PyTorch.",
      bgImage: new URL('../AI engineering.jpg', import.meta.url).href
    },
    {
      icon: <Code size={28} />,
      color: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-900/20",
      title: "Full Stack Dev",
      description: "Building responsive, high-performance web applications with React, Next.js, Node.js and modern UI frameworks.",
      bgImage: new URL('../full stack dev.jpg', import.meta.url).href
    },
    {
      icon: <Database size={28} />,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      title: "Data Science",
      description: "Transforming raw data into actionable insights via statistical analysis, predictive modeling, and visualization.",
      bgImage: new URL('../data science.jpg', import.meta.url).href
    },
    {
      icon: <Server size={28} />,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      title: "Cloud",
      description: "Implementing robust CI/CD pipelines and managing scalable infrastructure on AWS, GCP, and Docker.",
      bgImage: new URL('../cloud.jpg', import.meta.url).href
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background image as an absolutely positioned img to ensure it displays */}
              {card.bgImage && (
                <img
                  src={card.bgImage}
                  alt=""
                  aria-hidden
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
                />
              )}
              {/* stronger overlay for legibility */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1 }} className="bg-gradient-to-br from-black/75 via-black/40 to-black/75 pointer-events-none" />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 -mx-2">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                    {card.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm drop-shadow">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;