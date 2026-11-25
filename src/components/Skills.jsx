import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiJavascript, SiPython, SiCplusplus, 
  SiSpringboot, SiSpringsecurity, SiJsonwebtokens, SiHibernate, 
  SiReact, SiTailwindcss, SiHtml5, SiAxios, 
  SiMysql, SiMongodb, SiGit, SiApachemaven, SiPostman,
  SiDocker, SiJenkins, SiNodedotjs, SiFramer
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiDatabase, FiCode, FiCpu } from 'react-icons/fi';
import { AiOutlineApi } from 'react-icons/ai';
import { DiMysql } from 'react-icons/di';
import { skills } from '../data/portfolioData';

// Map icon strings to imported components
const iconMap = {
  SiJava: FaJava,
  SiJavascript: SiJavascript,
  DiMysql: DiMysql,
  SiPython: SiPython,
  SiCplusplus: SiCplusplus,
  SiSpringboot: SiSpringboot,
  SiSpringsecurity: SiSpringsecurity,
  SiJsonwebtokens: SiJsonwebtokens,
  SiHibernate: SiHibernate,
  AiOutlineApi: AiOutlineApi,
  SiReact: SiReact,
  SiTailwindcss: SiTailwindcss,
  SiHtml5: SiHtml5,
  SiAxios: SiAxios,
  SiFramer: SiFramer,
  SiMysql: SiMysql,
  SiOracle: FiDatabase,
  SiMongodb: SiMongodb,
  SiGit: SiGit,
  SiApachemaven: SiApachemaven,
  SiPostman: SiPostman,
  SiVisualstudiocode: FiCode,
  SiDocker: SiDocker,
  SiJenkins: SiJenkins,
  SiNodedotjs: SiNodedotjs,
  SiCpu: FiCpu
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = [
    { id: 'languages', label: 'Languages' },
    { id: 'backend', label: 'Backend Architecture' },
    { id: 'frontend', label: 'Frontend Integration' },
    { id: 'databases', label: 'Database Systems' },
    { id: 'tools', label: 'Developer Tools' },
    { id: 'ai', label: 'AI & Generative AI' }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-zinc-950/20">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 font-mono">
            // Technical Competency Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-zinc-100">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 w-full max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold font-mono tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/10 border border-cyan-500/35 text-cyan-400 shadow-md shadow-cyan-500/5'
                  : 'bg-zinc-900/40 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="w-full max-w-4xl mx-auto">
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {skills[activeCategory]?.map((skill) => {
                const IconComponent = iconMap[skill.icon] || FiCode;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="glass-card border border-white/5 rounded-2xl p-5 flex items-center justify-between shadow-lg hover:border-cyan-500/25 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    {/* Left Icon and Label */}
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-cyan-400 transition-colors group-hover:scale-105 duration-300">
                        <IconComponent size={20} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-zinc-100 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] text-zinc-500 font-mono">Expertise: {skill.level}%</span>
                      </div>
                    </div>

                    {/* Right Progress Ring/Bar */}
                    <div className="w-32 flex flex-col space-y-1.5 justify-end">
                      <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
