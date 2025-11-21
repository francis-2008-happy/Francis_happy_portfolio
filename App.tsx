import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Background from './components/Background';

const App: React.FC = () => {
  // Default to Dark Mode (true)
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Background isDarkMode={isDarkMode} />
      
      <div className="relative z-10 transition-colors duration-300 selection:bg-indigo-500/30 text-slate-900 dark:text-slate-100">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
};

export default App;