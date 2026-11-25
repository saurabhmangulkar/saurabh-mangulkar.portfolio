import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase, FiCornerDownRight } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

const Experience = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-zinc-950/20">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-500 font-mono">
            // Professional Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-zinc-100">
            Work <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-2" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-zinc-800/80 ml-4 md:ml-32 space-y-12 pb-4">
          
          {experience.map((item, index) => {
            const isActive = activeItem === index;
            return (
              <div key={index} className="relative pl-6 md:pl-10 group">
                
                {/* Timeline node dot */}
                <span className={`absolute left-0 -translate-x-1/2 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isActive 
                    ? 'bg-purple-500 border-purple-500 scale-125 shadow-md shadow-purple-500/30' 
                    : 'bg-zinc-950 border-zinc-700 group-hover:border-purple-400'
                }`} />

                {/* Left Date Panel (Desktop Only) */}
                <div className="hidden md:block absolute right-full mr-10 top-0.5 text-right w-24">
                  <span className="text-xs font-mono text-zinc-500 font-bold block">{item.duration}</span>
                  <span className="text-[10px] text-purple-400 font-mono tracking-wide">{item.location.split(' ')[0]}</span>
                </div>

                {/* Main Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setActiveItem(index)}
                  className={`glass-card border rounded-2xl p-6 text-left shadow-lg cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'border-purple-500/40 bg-zinc-900/40 shadow-purple-500/5' 
                      : 'border-white/5 hover:border-zinc-700'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-100 font-display flex items-center space-x-2">
                        <FiBriefcase size={16} className="text-purple-400" />
                        <span>{item.role}</span>
                      </h3>
                      <p className="text-sm font-semibold text-purple-400 font-mono mt-1">
                        {item.company}
                      </p>
                    </div>

                    {/* Mobile Date/Location Info */}
                    <div className="flex flex-wrap gap-3 text-xs text-zinc-500 font-mono md:hidden pt-1">
                      <span className="flex items-center"><FiCalendar size={12} className="mr-1" /> {item.duration}</span>
                      <span className="flex items-center"><FiMapPin size={12} className="mr-1" /> {item.location}</span>
                    </div>
                    
                    {/* Desktop Location Info */}
                    <div className="hidden md:flex items-center text-xs text-zinc-500 font-mono space-x-1">
                      <FiMapPin size={12} className="text-zinc-600" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-3.5">
                    {item.highlights.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start text-xs md:text-sm text-zinc-400 leading-relaxed group/bullet">
                        <FiCornerDownRight className="text-purple-500 mt-1 mr-3 shrink-0 opacity-70 group-hover/bullet:translate-x-0.5 transition-transform" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges Used in the Internship */}
                  <div className="flex flex-wrap gap-2 pt-6 mt-4 border-t border-white/5">
                    {["Java", "Spring Boot", "React.js", "Hibernate", "MySQL", "REST APIs", "Git"].map((tech) => (
                      <span 
                        key={tech}
                        className="text-[9px] font-mono tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 rounded px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
