import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX, FiTerminal } from 'react-icons/fi';

const Navbar = ({ onOpenCommandPalette }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-3.5 glass-nav shadow-lg shadow-black/10' 
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center space-x-2 font-display text-lg font-bold tracking-tight text-white dark:text-white light:text-zinc-900 group"
        >
          <span className="text-blue-500 group-hover:rotate-12 transition-transform duration-300">
            &lt;
          </span>
          <span className="text-zinc-100 dark:text-zinc-100 light:text-zinc-800">Saurabh</span>
          <span className="text-purple-500 group-hover:-rotate-12 transition-transform duration-300">
            /&gt;
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-colors ${
                activeSection === link.id
                  ? 'text-white bg-blue-600/10 dark:text-blue-400 light:text-blue-600'
                  : 'text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-955'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500" />
              )}
            </a>
          ))}
        </nav>

        {/* Global Toolbar */}
        <div className="hidden md:flex items-center space-x-3">
          
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 text-[10px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
            title="Open Command Palette (Ctrl+K)"
          >
            <FiTerminal size={12} className="text-blue-400" />
            <span>Cmd Palette</span>
            <kbd className="bg-zinc-800 text-zinc-500 px-1 py-0.5 rounded text-[8px]">Ctrl+K</kbd>
          </button>

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
        </div>

        {/* Mobile Toolbar & Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          
          {/* Quick theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/20 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/20 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass-nav shadow-xl border-t border-white/5 py-6 px-6 animate-in fade-in slide-in-from-top-4 duration-200 md:hidden">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`py-1.5 text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'text-blue-500'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-zinc-800 my-2 pt-4 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="flex items-center justify-center space-x-2 py-2 rounded-lg border border-zinc-800 bg-zinc-900/40 text-xs font-mono text-zinc-300 hover:text-zinc-100 transition-colors"
              >
                <FiTerminal size={14} className="text-blue-400" />
                <span>Command Palette</span>
                <kbd className="bg-zinc-800 text-zinc-500 px-1 py-0.5 rounded text-[10px]">Ctrl+K</kbd>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
