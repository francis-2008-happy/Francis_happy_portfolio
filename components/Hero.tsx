import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionId } from '../types';
import { PROFILE_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Height of the sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-screen flex flex-col justify-center items-center pt-40 pb-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        {/* Profile Image & Badge */}
        <div className="group relative mb-8 animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 p-1 bg-white dark:bg-slate-900 rounded-full ring-1 ring-slate-200 dark:ring-slate-700">
                <img
                  src={PROFILE_IMAGE_URL}
                  alt="Alex Sterling"
                  className="w-full h-full object-cover rounded-full"
                />
            </div>
            <div className="absolute bottom-2 right-2 px-3 py-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-lg flex items-center gap-2 animate-bounce animation-delay-2000">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Open to Work</span>
            </div>
        </div>

        {/* Intro Text */}
        <div className="animate-fade-in-up animation-delay-200 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">
                Hi, I'm Alex Sterling
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                {['AI Engineer', 'Full Stack Developer', 'Data Scientist'].map((role, idx) => (
                    <span 
                        key={idx} 
                        className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm backdrop-blur-sm"
                    >
                        {role}
                    </span>
                ))}
            </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-8 animate-fade-in-up animation-delay-400 max-w-5xl">
          Engineering the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
            Intelligent Future
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-600">
          I build scalable full-stack applications powered by state-of-the-art Generative AI, bridging the gap between complex models and intuitive user experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800 w-full sm:w-auto z-20 relative">
          <a 
            href={`#${SectionId.PROJECTS}`}
            onClick={(e) => handleScroll(e, SectionId.PROJECTS)}
            className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={`#${SectionId.CONTACT}`}
            onClick={(e) => handleScroll(e, SectionId.CONTACT)}
            className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200/20 dark:shadow-none hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-800 opacity-0 sm:opacity-100 pointer-events-none">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-slate-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;