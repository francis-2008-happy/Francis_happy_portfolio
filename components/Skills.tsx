import React from 'react';
import { SectionId } from '../types';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Technical Arsenal</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit I utilize to bring ideas to life, ranging from low-level systems to high-level frontend abstractions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, idx) => (
            <div 
              key={idx}
              className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;