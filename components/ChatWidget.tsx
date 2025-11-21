import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Francis AI Assistant. Ask me anything about Francis projects, skills, or experience!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Context for the AI
  const portfolioContext = `
    You are an AI assistant for Francis Happy's portfolio website.
    Here is Francis's background data:
    
    Skills: ${JSON.stringify(SKILLS_DATA)}
    Projects: ${JSON.stringify(PROJECTS_DATA)}
    Experience: ${JSON.stringify(EXPERIENCE_DATA)}
    
    Answer questions as if you are a helpful assistant representing Francis. 
    Keep answers concise (under 100 words) and professional but friendly.
    If asked about contact info, direct them to the contact section or form.
  `;

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
        // Initialize Gemini Client
        // Accessing env var via process.env because we configured define in vite.config.ts,
        // OR usually in Vite it is import.meta.env.VITE_API_KEY.
        // We support both for compatibility.
        const apiKey = process.env.API_KEY || (import.meta as any).env.VITE_API_KEY || ''; 
        
        if (!apiKey) {
           setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, my brain (API Key) is missing from the configuration." }]);
           setIsLoading(false);
           return;
        }

        // Dynamically import the client from the new package so the bundle
        // doesn't break at build-time if the package shape changes.
        const genaiModule: any = await import('@google/generative-ai');
        const Client = genaiModule?.GoogleGenerativeAI || genaiModule?.default || genaiModule;
        const ai: any = new Client({ apiKey });

        // Using gemini-2.5-flash for speed and efficiency
        // Keep the same call pattern as before but accept that the
        // client may return different shapes; treat response as any.
        const response: any = await ai.models?.generateContent?.({
          model: 'gemini-2.5-flash',
          contents: userMessage,
          config: {
            systemInstruction: portfolioContext,
          }
        }) || await ai.generate?.({ model: 'gemini-2.5-flash', input: userMessage, context: portfolioContext });

        const text = response.text;
        if (text) {
             setMessages(prev => [...prev, { role: 'model', text }]);
        } else {
             setMessages(prev => [...prev, { role: 'model', text: "I didn't catch that. Could you rephrase?" }]);
        }

    } catch (error) {
      console.error("Error generating response:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Oops! I encountered a connection error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 flex flex-col overflow-hidden transition-all animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <h3 className="font-semibold">Portfolio Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-none' 
                      : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none shadow-sm border border-gray-100 dark:border-slate-600'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my skills..."
                className="flex-1 bg-gray-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white p-2 rounded-full transition-colors flex items-center justify-center w-10 h-10"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } transition-all duration-300 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white p-4 rounded-full shadow-lg shadow-indigo-500/30 flex items-center gap-2 group`}
      >
        <MessageCircle size={24} className="group-hover:animate-bounce" />
        <span className="font-medium pr-1 hidden group-hover:inline-block transition-all">Chat with AI</span>
      </button>
    </div>
  );
};

export default ChatWidget;