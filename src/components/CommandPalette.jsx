import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSearch, FiCopy, FiDownload, FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiTerminal, FiX, FiCheck, FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const CommandPalette = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const actions = [
    { id: 'nav-home', title: 'Go to Home / Hero', shortcut: 'G H', category: 'Navigation', action: () => scrollToSection('home') },
    { id: 'nav-about', title: 'Go to About', shortcut: 'G A', category: 'Navigation', action: () => scrollToSection('about') },
    { id: 'nav-experience', title: 'Go to Experience Timeline', shortcut: 'G E', category: 'Navigation', action: () => scrollToSection('experience') },
    { id: 'nav-projects', title: 'Go to Projects Engine', shortcut: 'G P', category: 'Navigation', action: () => scrollToSection('projects') },
    { id: 'nav-skills', title: 'Go to Skills Matrix', shortcut: 'G S', category: 'Navigation', action: () => scrollToSection('skills') },
    { id: 'nav-contact', title: 'Go to Contact', shortcut: 'G C', category: 'Navigation', action: () => scrollToSection('contact') },
    { id: 'action-theme', title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`, shortcut: 'T', category: 'Preferences', action: () => toggleTheme() },
    { id: 'action-email', title: 'Copy Email to Clipboard', shortcut: 'C E', category: 'Actions', action: () => copyEmail() },
    { id: 'action-resume', title: 'Download Resume (PDF)', shortcut: 'D R', category: 'Actions', action: () => downloadResume() },
    { id: 'social-linkedin', title: 'Visit LinkedIn Profile', shortcut: 'L I', category: 'External Links', action: () => window.open(personalInfo.linkedin, '_blank') },
    { id: 'social-github', title: 'Visit GitHub Profile', shortcut: 'G H', category: 'External Links', action: () => window.open(personalInfo.github, '_blank') },
  ];

  const filteredActions = actions.filter(action =>
    action.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    action.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredActions]);

  // Adjust scroll position of list when navigating via arrow keys
  useEffect(() => {
    if (listRef.current) {
      const selectedItem = listRef.current.children[selectedIndex];
      if (selectedItem) {
        selectedItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div className="relative w-full max-w-lg glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 dark:border-white/5 bg-black/20">
          <FiSearch className="text-zinc-400 mr-3 text-lg shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent border-0 outline-none text-zinc-100 placeholder-zinc-400 text-sm focus:ring-0"
          />
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-md transition-colors text-zinc-400 hover:text-zinc-100"
          >
            <FiX size={16} />
          </button>
        </div>

        {/* Command List */}
        <div 
          ref={listRef}
          className="max-h-[300px] overflow-y-auto p-2 divide-y divide-transparent"
        >
          {filteredActions.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-zinc-500">
              <FiTerminal size={24} className="mb-2 opacity-50" />
              <p className="text-xs">No matching commands found</p>
            </div>
          ) : (
            filteredActions.map((action, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={action.id}
                  onClick={() => {
                    action.action();
                    onClose();
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-150 ${
                    isSelected 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                      : 'hover:bg-white/5 text-zinc-300 hover:text-zinc-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                      isSelected 
                        ? 'bg-blue-700 text-zinc-100' 
                        : 'bg-white/10 dark:bg-white/5 text-zinc-400'
                    }`}>
                      {action.category}
                    </span>
                    <span className="text-sm font-medium">{action.title}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    {action.id === 'action-email' && copied && (
                      <span className="text-[10px] text-emerald-400 flex items-center mr-2">
                        <FiCheck size={12} className="mr-0.5" /> Copied
                      </span>
                    )}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isSelected 
                        ? 'bg-blue-800 text-white/90' 
                        : 'bg-white/10 dark:bg-white/5 text-zinc-500'
                    }`}>
                      {action.shortcut}
                    </span>
                    <FiArrowRight size={12} className={`opacity-0 transition-opacity ${isSelected ? 'opacity-100' : ''}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-4 py-2 bg-black/30 border-t border-white/15 text-[10px] text-zinc-500">
          <div className="flex space-x-3">
            <span><kbd className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300">↑↓</kbd> Navigate</span>
            <span><kbd className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300">Enter</kbd> Select</span>
            <span><kbd className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300">ESC</kbd> Close</span>
          </div>
          <span className="hidden sm:inline">Press <kbd className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-300">Ctrl + K</kbd> to open from anywhere</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
