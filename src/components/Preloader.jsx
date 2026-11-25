import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing system modules...');
  const [terminalLogs, setTerminalLogs] = useState([]);

  const logs = [
    { text: 'npm run start:portfolio', delay: 100 },
    { text: '> saurabh-mangulkar@1.0.0 start', delay: 400 },
    { text: '> loading core modules...', delay: 700 },
    { text: '✔ java-development-kit (JDK 17) loaded', delay: 1000 },
    { text: '✔ spring-boot-starter-web loaded', delay: 1300 },
    { text: '✔ spring-security-core & jwt-auth handshake initialized', delay: 1600 },
    { text: '✔ hibernate-jpa-orm entity relationships synced', delay: 1900 },
    { text: '✔ react-dom-renderer (v19) client mounting', delay: 2200 },
    { text: '✔ tailwindcss-vite-v4 parsing styles', delay: 2500 },
    { text: '✔ connection to batosit-dev-environment established', delay: 2800 },
    { text: '✔ compiling production portfolio build... 100%', delay: 3100 },
    { text: '🚀 System Ready. Launching viewport...', delay: 3400 },
  ];

  useEffect(() => {
    // 1. Tick the percentage counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random incremental jumps for realistic loading feel
        const increment = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    // 2. Queue terminal logs sequentially
    logs.forEach((log) => {
      const logTimer = setTimeout(() => {
        setTerminalLogs((prev) => [...prev, log.text]);
        // Update the main helper subtitle
        if (log.text.startsWith('✔') || log.text.startsWith('🚀')) {
          setLoadingText(log.text.replace('✔', '').replace('🚀', '').trim());
        }
      }, log.delay);
      return () => clearTimeout(logTimer);
    });

    // 3. Complete overall loading after a fixed duration (3.8 seconds)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -100,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center p-6 font-mono select-none"
    >
      <div className="w-full max-w-xl flex flex-col space-y-6">
        
        {/* Terminal Window Header */}
        <div className="w-full border border-zinc-800 rounded-xl bg-slate-950/80 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 block" />
            </div>
            <span className="text-[10px] text-zinc-500 tracking-wide uppercase font-bold">saurabh-system-boot.log</span>
            <div className="w-12" /> {/* Spacer */}
          </div>

          {/* Terminal Console Output */}
          <div className="p-5 h-[220px] overflow-y-auto text-xs text-zinc-300 flex flex-col space-y-1.5 scrollbar-none">
            {terminalLogs.map((log, index) => {
              const isCommand = log.startsWith('npm') || log.startsWith('>');
              const isSuccess = log.startsWith('✔') || log.startsWith('🚀');
              return (
                <div 
                  key={index}
                  className={`${
                    isCommand 
                      ? 'text-cyan-400' 
                      : isSuccess 
                        ? 'text-emerald-400 font-semibold' 
                        : 'text-zinc-400'
                  }`}
                >
                  {log}
                </div>
              );
            })}
            <span className="w-2 h-4 bg-zinc-400 inline-block animate-pulse ml-0.5" />
          </div>
        </div>

        {/* Progress bar container */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between text-xs text-zinc-400">
            <span className="font-medium animate-pulse">{loadingText}</span>
            <span className="font-bold text-blue-400">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
