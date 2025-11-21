import React from 'react';
import { SectionId } from '../types';
import { EXPERIENCE_DATA, CERTIFICATES_DATA } from '../constants';
import { Briefcase, Award, Calendar, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Experience Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight flex items-center gap-3">
              <Briefcase className="text-indigo-600" size={32} />
              Professional Journey
            </h2>
            
            <div className="space-y-0 relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

              {EXPERIENCE_DATA.map((item, index) => (
                <div key={item.id} className="relative pl-16 pb-12 last:pb-0 group">
                  {/* Dot */}
                  <div className="absolute left-[11px] top-[6px] w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 group-hover:scale-110 transition-transform z-10"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                    <span className="hidden sm:block text-slate-300 dark:text-slate-600">•</span>
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{item.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 mb-4 font-medium">
                    <Calendar size={14} />
                    {item.period}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                      {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 tracking-tight flex items-center gap-3">
              <Award className="text-violet-600" size={32} />
              Certifications & Stats
            </h2>

            <div className="grid gap-4 mb-10">
              {CERTIFICATES_DATA.map((cert) => (
                <div 
                  key={cert.id} 
                  className="group p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all hover:shadow-md"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{cert.name}</h3>
                      <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400 text-sm">
                        <Building2 size={14} />
                        {cert.issuer}
                      </div>
                    </div>
                    <span className="shrink-0 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Stat Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                    <div className="text-5xl font-extrabold mb-2 tracking-tight">50+</div>
                    <div className="text-indigo-100 font-medium text-lg">Open Source Contributions</div>
                    <p className="mt-4 text-sm text-indigo-100/80 leading-relaxed">
                        Actively contributing to the AI community through repositories focused on LLM inference and React optimization.
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;