import React from 'react';
import { SectionId } from '../types';
import { PROJECTS_DATA } from '../constants';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Featured Work</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
               A selection of projects demonstrating my expertise in AI, Full Stack Development, and Data Visualization.
            </p>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            View Github Profile <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-indigo-900/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                    </h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-col gap-6 mt-auto">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                        <span 
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        <Github size={16} />
                        Code
                    </a>
                    <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        <ExternalLink size={16} />
                        Live Demo
                    </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                View Github Profile <ArrowUpRight size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;