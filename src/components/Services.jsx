import React from 'react';
import { FiServer, FiDatabase, FiCpu, FiTrendingUp } from 'react-icons/fi';
import { services } from '../data/portfolioData';

const iconMap = {
  FiServer: FiServer,
  FiDatabase: FiDatabase,
  FiCpu: FiCpu
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-zinc-950/30">
      
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-500 font-mono">
            // Technical Competency Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-zinc-100">
            Professional <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = iconMap[srv.icon] || FiServer;
            return (
              <div
                key={idx}
                className="group relative glass-card border border-white/5 rounded-3xl p-8 text-left shadow-xl hover:border-blue-500/25 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Visual hover mesh */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none rounded-3xl transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-indigo-500" />
                
                {/* Icon header */}
                <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl w-fit text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-all duration-300">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold font-display text-zinc-100 mt-6 mb-3 group-hover:text-blue-400 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                  {srv.description}
                </p>

                {/* Subtitle bottom code accent */}
                <div className="flex items-center text-[10px] font-mono text-zinc-600 mt-6 pt-4 border-t border-white/5 uppercase tracking-wider group-hover:text-zinc-500 transition-colors">
                  <FiTrendingUp size={10} className="mr-1.5 text-blue-500" />
                  <span>Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
