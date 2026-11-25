import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGithub, FiExternalLink, FiSearch, FiCode, FiCpu, 
  FiAlertCircle, FiSettings, FiCheckCircle, FiAward, FiBookOpen 
} from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Embedded & IoT'];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  // Separate JobHub (Flagship) from other projects if no active search/filter
  const isDefaultView = searchQuery === '' && activeFilter === 'All';
  const flagshipProject = projects.find(p => p.isFlagship);
  const secondaryProjects = isDefaultView 
    ? filteredProjects.filter(p => !p.isFlagship) 
    : filteredProjects;

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-zinc-950/30">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-500 font-mono">
            // Core Portfolio Engines
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-zinc-100">
            Featured <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2" />
        </div>

        {/* Dashboard Controls (Search & Filters) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 w-full">
          {/* Search bar */}
          <div className="relative w-full md:max-w-xs flex items-center">
            <FiSearch className="absolute left-3.5 text-zinc-500" size={16} />
            <input
              type="text"
              placeholder="Search by title or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/30 text-sm placeholder-zinc-500 text-zinc-200 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-2 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono transition-all ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Flagship Project Highlight (Large Card) */}
        {isDefaultView && flagshipProject && (
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative glass-card border border-blue-500/10 rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 shadow-2xl hover:border-blue-500/35 transition-all duration-500"
            >
              {/* Flagship accent glow */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] pointer-events-none rounded-3xl transition-opacity duration-500 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500" />
              
              {/* Flagship Left side Visual representation */}
              <div className="w-full lg:w-[40%] flex flex-col justify-between items-start text-left relative z-10">
                <div>
                  <span className="text-[10px] font-extrabold font-mono tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full uppercase">
                    ★ FLAGSHIP CASE STUDY
                  </span>
                  
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white font-display mt-5 group-hover:text-blue-400 transition-colors leading-tight">
                    {flagshipProject.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-500 font-mono mt-1 mb-4">
                    {flagshipProject.subtitle}
                  </p>
                  
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-6">
                    {flagshipProject.description}
                  </p>
                </div>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {flagshipProject.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-[9px] font-mono tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 rounded px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flagship Right side Case study outline preview */}
              <div className="w-full lg:w-[60%] bg-slate-950/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between text-left relative z-10">
                <div className="space-y-5">
                  <div className="border-b border-white/5 pb-3">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-300 font-mono flex items-center">
                      <FiAward className="mr-1.5 text-blue-400" /> Project Objective
                    </h4>
                    <p className="text-zinc-400 text-xs md:text-sm font-light mt-1.5">
                      {flagshipProject.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-300 font-mono flex items-center">
                      <FiCheckCircle className="mr-1.5 text-emerald-400" /> Solution Highlights
                    </h4>
                    <p className="text-zinc-400 text-xs md:text-sm font-light mt-1.5">
                      {flagshipProject.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6 mt-6">
                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs rounded-xl shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <FiCode size={14} />
                    <span>Explore Case Study</span>
                  </button>

                  <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-center">
                    <a
                      href={flagshipProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/30 hover:text-blue-400 transition-colors"
                      title="GitHub Repository"
                    >
                      <FiGithub size={15} />
                    </a>
                    <a
                      href={flagshipProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/30 hover:text-blue-400 transition-colors"
                      title="Live Preview"
                    >
                      <FiExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* 2. Secondary Projects (Grid Layout) */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {secondaryProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative glass-card border border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:border-blue-500/35 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Accent glow on card hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] pointer-events-none rounded-3xl transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-purple-500" />

                <div>
                  {/* Category Tag */}
                  <span className="text-[9px] font-bold font-mono tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full uppercase">
                    {project.category}
                  </span>

                  {/* Title & Sub */}
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100 font-display mt-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="text-[9px] font-mono tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 rounded px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer links */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-1.5 text-xs font-mono font-bold text-zinc-400 hover:text-blue-400 transition-colors"
                  >
                    <FiCode size={14} />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-blue-500/30 hover:text-blue-400 transition-colors"
                      title="GitHub Repository"
                    >
                      <FiGithub size={14} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-blue-500/30 hover:text-blue-400 transition-colors"
                      title="Live Preview"
                    >
                      <FiExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when no matches found */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
            <FiAlertCircle size={32} className="mb-2 opacity-50" />
            <p className="text-sm font-mono">No matching projects found</p>
          </div>
        )}
      </div>

      {/* Case Study / Project Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl glass-card border border-white/10 dark:border-white/5 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[88vh]"
            >
              {/* Header */}
              <div className="flex justify-between items-start p-6 bg-zinc-950/40 border-b border-white/5">
                <div className="text-left space-y-1">
                  <span className="text-[9px] font-bold font-mono tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full uppercase">
                    {selectedProject.isFlagship ? "★ Flagship Case Study" : selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white font-display pt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Body Content */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
                
                {/* Challenge Summary Grid (Problem & Solution) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-rose-500/10 bg-rose-500/5 rounded-2xl p-5 text-left">
                    <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-rose-400 flex items-center mb-2">
                      <FiAlertCircle className="mr-1.5" /> The Bottleneck (Problem)
                    </h4>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="border border-emerald-500/10 bg-emerald-500/5 rounded-2xl p-5 text-left">
                    <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400 flex items-center mb-2">
                      <FiCheckCircle className="mr-1.5" /> The Resolution (Solution)
                    </h4>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* System Architecture */}
                <div className="text-left space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-300 font-mono flex items-center">
                    <FiSettings className="mr-1.5 text-blue-400" /> Layered System Design (Architecture)
                  </h4>
                  <div className="p-4 bg-black/40 border border-zinc-800 rounded-xl font-mono text-xs text-zinc-400 leading-relaxed">
                    {selectedProject.architecture}
                  </div>
                </div>

                {/* Core Features */}
                <div className="text-left space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-300 font-mono flex items-center">
                    <FiCpu className="mr-1.5 text-purple-400" /> Core Features Checklist
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start text-xs md:text-sm text-zinc-400 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study Specific Details: Challenges & What I Learned */}
                {selectedProject.challenges && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                    <div className="text-left space-y-2">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-300 font-mono flex items-center">
                        <FiSettings className="mr-1.5 text-amber-500" /> Engineering Challenges
                      </h4>
                      <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div className="text-left space-y-2">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-300 font-mono flex items-center">
                        <FiBookOpen className="mr-1.5 text-emerald-400" /> What I Learned
                      </h4>
                      <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                        {selectedProject.whatILearned}
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Action Footer */}
              <div className="flex items-center justify-between p-6 bg-zinc-950/40 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5 max-w-sm">
                  {selectedProject.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-[9px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-500 rounded px-2.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-mono text-xs rounded-xl flex items-center space-x-1.5 transition-colors"
                  >
                    <FiGithub size={14} />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs rounded-xl flex items-center space-x-1.5 transition-all shadow-md shadow-blue-600/10 hover:shadow-blue-500/20"
                  >
                    <span>Launch App</span>
                    <FiExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
