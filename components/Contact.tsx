import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, Linkedin, Github, Twitter, Send, ArrowRight, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Let's Work Together</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
              I'm always open to discussing product design, AI integration, or partnership opportunities. Feel free to reach out directly.
            </p>

            <div className="space-y-6">
              {/* Email Block */}
              <a href="mailto:alex@example.com" className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                    <div className="text-sm text-slate-500 dark:text-slate-500 font-medium mb-0.5">Email Me</div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">alex@example.com</div>
                </div>
                <ArrowRight className="ml-auto text-slate-300 dark:text-slate-700 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" size={20} />
              </a>

              {/* WhatsApp Block */}
              <a href="https://wa.me/15550000000" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                    <div className="text-sm text-slate-500 dark:text-slate-500 font-medium mb-0.5">WhatsApp</div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">+1 (555) 000-0000</div>
                </div>
                <ArrowRight className="ml-auto text-slate-300 dark:text-slate-700 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" size={20} />
              </a>
              
              <div className="pt-4">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Connect Socially</h3>
                  <div className="flex gap-4">
                    {[
                    { icon: <Github size={22} />, label: 'GitHub', href: '#' },
                    { icon: <Linkedin size={22} />, label: 'LinkedIn', href: '#' },
                    { icon: <Twitter size={22} />, label: 'Twitter', href: '#' },
                    ].map((social, idx) => (
                    <a 
                        key={idx}
                        href={social.href}
                        className="w-14 h-14 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-500 hover:text-indigo-600 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300 bg-slate-50 dark:bg-slate-900/50"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </a>
                    ))}
                  </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                    <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    placeholder="john@example.com"
                    />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                  status === 'success' 
                    ? 'bg-green-600 hover:bg-green-700 shadow-green-500/30' 
                    : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/30 hover:-translate-y-1'
                }`}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent Successfully'
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;