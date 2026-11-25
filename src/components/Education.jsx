import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCheckCircle } from 'react-icons/fi';
import { education, certifications } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden bg-zinc-950/20">
      
      {/* Background decoration */}
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-400 font-mono">
            // Academic Records
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-zinc-100">
            Education & <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-2" />
        </div>

        {/* Side-by-side grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold tracking-tight text-zinc-200 font-display flex items-center space-x-2">
              <FiBookOpen className="text-purple-400" size={18} />
              <span>Academic Foundation</span>
            </h3>
            
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card border border-white/5 rounded-3xl p-6 shadow-xl relative overflow-hidden"
              >
                {/* Decorative border glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30" />
                
                <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full uppercase">
                  {edu.duration}
                </span>
                
                <h4 className="text-lg font-bold text-zinc-100 font-display mt-4">
                  {edu.degree}
                </h4>
                <p className="text-sm font-semibold text-zinc-400 font-mono mt-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-zinc-500 font-mono mt-1 flex items-center">
                  <span>{edu.location}</span>
                  <span className="mx-2">•</span>
                  <span className="text-emerald-400 font-bold">CGPA: {edu.gpa}</span>
                </p>
                
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light mt-4 pt-4 border-t border-white/5">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold tracking-tight text-zinc-200 font-display flex items-center space-x-2">
              <FiAward className="text-purple-400" size={18} />
              <span>Professional Credentials</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-card border border-white/5 rounded-2xl p-4 flex items-center space-x-3.5 shadow-md hover:border-purple-500/25 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-xl text-purple-400 group-hover:scale-105 transition-transform duration-300">
                    <FiCheckCircle size={16} />
                  </div>
                  <div className="text-left space-y-0.5">
                    <h4 className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-zinc-500 font-mono">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
