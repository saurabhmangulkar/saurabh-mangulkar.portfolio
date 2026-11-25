import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown, FiTerminal } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const glowRef = useRef(null);

  const roles = [
    "Java Full Stack Developer",
    "Spring Boot & REST API Specialist",
    "React.js Frontend Engineer",
    "Software Development Intern"
  ];

  // Mouse Glow Event Handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      const rect = glowRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.setProperty('--mouse-x', `${x}px`);
      glowRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentWord = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypingText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 55);
    } else {
      timer = setTimeout(() => {
        setTypingText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 105);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait at word end
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length); // Switch words
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      ref={glowRef}
      className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden aurora-bg"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      }}
    >
      {/* Aurora Radial mouse Glow effect */}
      <div 
        className="absolute inset-0 opacity-25 dark:opacity-20 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 100%)`
        }}
      />

      {/* Background Blobs (Soft floating gradients) */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Hero Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 lg:pr-6">
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-xs font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400 dark:text-blue-400 rounded-full px-3.5 py-1.5 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold uppercase tracking-wider">{personalInfo.relocation}</span>
          </motion.div>

          {/* Large Title */}
          <div className="space-y-2">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-400 text-sm font-semibold tracking-wider uppercase font-mono"
            >
              Hi there, I am
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight font-display"
            >
              <span className="text-zinc-100 dark:text-zinc-100 light:text-zinc-900 block leading-tight">Saurabh</span>
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent block leading-tight">
                Mangulkar.
              </span>
            </motion.h1>
          </div>

          {/* Typing Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-8 flex items-center font-mono text-base md:text-lg text-blue-400 dark:text-cyan-400 light:text-blue-600 font-semibold"
          >
            <FiTerminal className="mr-2 text-zinc-500" />
            <span>{typingText}</span>
            <span className="w-1.5 h-5 bg-blue-500 ml-1 animate-pulse" />
          </motion.div>

          {/* Tagline Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl font-light"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Actions Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center w-full"
          >
            <button
              onClick={handleScrollToProjects}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore Projects</span>
              <FiArrowDown size={14} className="animate-bounce" />
            </button>
            <button
              onClick={handleScrollToContact}
              className="px-6 py-3.5 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-medium text-xs rounded-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Hire Me
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-4 py-3 bg-transparent text-zinc-400 hover:text-blue-400 font-medium text-xs rounded-xl flex items-center space-x-1.5 transition-colors"
            >
              <FiDownload size={14} />
              <span>Download CV</span>
            </button>
          </motion.div>

          {/* Social Links Panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-4 pt-4"
          >
            <span className="text-xs uppercase font-mono text-zinc-500 tracking-wider">Social Links:</span>
            <div className="flex space-x-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-zinc-800 hover:border-blue-500/30 hover:bg-blue-500/5 text-zinc-400 hover:text-blue-400 transition-all duration-200"
                title="GitHub Profile"
              >
                <FiGithub size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-zinc-800 hover:border-purple-500/30 hover:bg-purple-500/5 text-zinc-400 hover:text-purple-400 transition-all duration-200"
                title="LinkedIn Profile"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border border-zinc-800 hover:border-cyan-500/30 hover:bg-cyan-500/5 text-zinc-400 hover:text-cyan-400 transition-all duration-200"
                title="Send Direct Email"
              >
                <FiMail size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Column (Floating code card or illustration) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end select-none relative">
          
          {/* Main Visual Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-80 h-96 md:w-96 md:h-[450px] glass-card rounded-3xl p-6 flex flex-col justify-between border border-white/10 dark:border-white/5 shadow-2xl hover:border-blue-500/30 transition-all duration-500 group overflow-hidden"
          >
            {/* Neon Border Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-50" />
            
            {/* Embedded Glow Ball */}
            <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue-500/20 blur-2xl group-hover:scale-125 transition-transform duration-500" />
            
            {/* Code Header */}
            <div className="flex justify-between items-center text-xs font-mono text-zinc-500 pb-4 border-b border-white/5">
              <span>developer.profile</span>
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            {/* Code Body */}
            <div className="flex-1 font-mono text-xs text-zinc-300 py-6 space-y-4 text-left leading-relaxed">
              <div>
                <span className="text-purple-400">const</span> developer = &#123;
              </div>
              <div className="pl-4">
                name: <span className="text-emerald-400">"{personalInfo.name}"</span>,
              </div>
              <div className="pl-4">
                stack: <span className="text-cyan-400">["Java", "Spring Boot", "React.js"]</span>,
              </div>
              <div className="pl-4">
                internship: <span className="text-yellow-400">"BatosIT"</span>,
              </div>
              <div className="pl-4 text-zinc-500">
                // secure JWT role-based routes
              </div>
              <div className="pl-4">
                security: <span className="text-rose-400">"Spring Security + JWT"</span>,
              </div>
              <div className="pl-4">
                relocation: <span className="text-purple-400">true</span>,
              </div>
              <div>&#125;;</div>
              
              <div className="pt-2 text-zinc-500">
                &gt; compiling modules... OK
              </div>
            </div>

            {/* Code Footer */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>UTF-8</span>
              <span>Java / JS / CSS</span>
            </div>
          </motion.div>

          {/* Floating Accents */}
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl animate-float" />
          <div className="absolute -top-6 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-float-delayed" />
        </div>
      </div>

      {/* Bottom Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-1.5 select-none opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border-2 border-zinc-600 flex justify-center p-1.5">
          <motion.div 
            className="w-1 h-2 rounded-full bg-blue-500"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
