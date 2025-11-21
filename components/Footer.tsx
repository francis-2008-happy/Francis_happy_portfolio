import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 dark:text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Francis Happy. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
          <span>Designed & Built with Passion</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;