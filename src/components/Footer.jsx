import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="w-full relative mt-24 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md py-12 px-6">
      
      {/* Decorative top glow border */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Identity Column */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center space-x-1.5 font-display text-lg font-bold tracking-tight text-zinc-100"
          >
            <span className="text-blue-500">&lt;</span>
            <span>Saurabh</span>
            <span className="text-purple-500">/&gt;</span>
          </a>
          <p className="text-zinc-400 text-sm max-w-sm font-light leading-relaxed">
            Java Full-Stack Developer specializing in secure, high-performance backends using Spring Boot, Hibernate, and modern React frontend architectures.
          </p>
          
          {/* Availability Badge */}
          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded-full px-3 py-1.5 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="flex items-center space-x-1">
              <FiMapPin size={11} className="mr-0.5" />
              <span>Available in Pune / Remote</span>
            </span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-300">Navigation</h4>
          <ul className="flex flex-col space-y-2.5 text-sm text-zinc-400">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((id) => (
              <li key={id}>
                <a 
                  href={`#${id}`} 
                  onClick={(e) => handleLinkClick(e, id)}
                  className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-300">Connect</h4>
          <ul className="flex flex-col space-y-3 text-sm text-zinc-400">
            <li>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <FiMail size={16} className="text-blue-400" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
            </li>
            <li>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <FiLinkedin size={16} className="text-purple-400" />
                <span>LinkedIn Profile</span>
              </a>
            </li>
            <li>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <FiGithub size={16} className="text-cyan-400" />
                <span>GitHub Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500">
        <p>&copy; {currentYear} Saurabh Mangulkar. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0 font-mono">
          Handcrafted with React 19 • Tailwind v4 • Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
