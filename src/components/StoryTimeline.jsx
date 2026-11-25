import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FiBookOpen, FiCpu, FiDatabase, FiLayers, FiCode, 
  FiBriefcase, FiTrendingUp, FiActivity, FiShield, FiSend 
} from 'react-icons/fi';

const StoryTimeline = () => {
  const containerRef = useRef(null);

  // Scroll tracking for custom vertical progress bar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timelineSteps = [
    {
      title: "Engineering Student",
      subtitle: "Jawaharlal Darda Institute of Engineering & Technology",
      date: "2021 – 2023",
      desc: "Began BE in Electronics & Telecommunication. Mastered logical thinking, mathematical problem solving, and low-level engineering principles.",
      icon: <FiBookOpen size={16} />,
      color: "from-blue-500 to-indigo-500",
      glowColor: "rgba(59, 130, 246, 0.15)"
    },
    {
      title: "Discovered Software Development",
      subtitle: "A New Passion Unlocked",
      date: "2023",
      desc: "Discovered a passion for programming. Transitioned from hardware registers to software development, learning data structures, algorithms, and clean architecture.",
      icon: <FiCode size={16} />,
      color: "from-indigo-500 to-purple-500",
      glowColor: "rgba(99, 102, 241, 0.15)"
    },
    {
      title: "Learned Java",
      subtitle: "The Foundation of Enterprise Logic",
      date: "Late 2023",
      desc: "Immersed in Java programming. Mastered Object-Oriented principles, collections, exception handling, and core syntax to write maintainable code.",
      icon: <FiCode size={16} />,
      color: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.15)"
    },
    {
      title: "Built Backend Systems",
      subtitle: "Architecting the Core",
      date: "Early 2024",
      desc: "Mastered the Spring framework ecosystem, including Spring Boot, Hibernate ORM, JPA entity mapping, and JDBC to build secure, robust backend architectures.",
      icon: <FiServerIcon size={16} />,
      color: "from-pink-500 to-rose-500",
      glowColor: "rgba(236, 72, 153, 0.15)"
    },
    {
      title: "Learned React",
      subtitle: "Crafting Interactive Client Views",
      date: "Mid 2024",
      desc: "Explored modern frontend engineering with React, Vite, JavaScript, HTML5/CSS3, and Tailwind CSS. Built high-fidelity UI elements.",
      icon: <FiLayers size={16} />,
      color: "from-rose-500 to-orange-500",
      glowColor: "rgba(244, 63, 94, 0.15)"
    },
    {
      title: "Built Full Stack Projects",
      subtitle: "Decoupled End-to-End Handshakes",
      date: "Late 2024",
      desc: "Began connecting Spring Boot REST APIs with React clients using Axios, implementing stateful controllers, CORS settings, and JSON data pipelines.",
      icon: <FiDatabase size={16} />,
      color: "from-orange-500 to-yellow-500",
      glowColor: "rgba(249, 115, 22, 0.15)"
    },
    {
      title: "Built JobHub",
      subtitle: "Flagship Recruitment Portal",
      date: "Early 2025",
      desc: "Engineered JobHub, a multi-tenant portal with JWT session-less security, role-based controls for candidate/recruiter profiles, and resume upload pipelines.",
      icon: <FiShield size={16} />,
      color: "from-emerald-500 to-teal-500",
      glowColor: "rgba(16, 185, 129, 0.15)"
    },
    {
      title: "Built Enterprise Dashboard",
      subtitle: "Corporate Analytics Panel",
      date: "Mid 2025",
      desc: "Designed and built an ERP dashboard containing branch overview statistics, department logistics, and employee databases, styled with premium glassmorphism.",
      icon: <FiActivity size={16} />,
      color: "from-teal-500 to-cyan-500",
      glowColor: "rgba(20, 184, 166, 0.15)"
    },
    {
      title: "Exploring AI",
      subtitle: "Integrating Generative Intelligence",
      date: "Ongoing",
      desc: "Currently learning Spring AI, Generative LLM APIs, prompt engineering, and utilizing AI-assisted developer workflows to optimize execution speed.",
      icon: <FiCpu size={16} />,
      color: "from-cyan-500 to-blue-500",
      glowColor: "rgba(6, 182, 212, 0.15)"
    },
    {
      title: "Preparing for Top Software Companies",
      subtitle: "Continuous Improvement",
      date: "Future Ready",
      desc: "Refining data structures, algorithms, and system design patterns. Ready to join a product team to ship scalable, production-grade solutions.",
      icon: <FiTrendingUp size={16} />,
      color: "from-blue-500 to-indigo-500",
      glowColor: "rgba(59, 130, 246, 0.15)"
    }
  ];

  return (
    <div ref={containerRef} className="relative py-8">
      {/* Scroll Progress Bar Track (Desktop Only) */}
      <div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-[2px] bg-zinc-800/80 -translate-x-1/2 hidden sm:block" />

      {/* Animated Scroll Progress Bar (Desktop Only) */}
      <motion.div 
        style={{ scaleY }}
        className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 -translate-x-1/2 origin-top hidden sm:block"
      />

      <div className="space-y-12">
        {timelineSteps.map((step, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div key={idx} className="relative flex flex-col sm:flex-row items-start md:justify-between group">
              {/* Timeline dot connector */}
              <div className="absolute left-[31px] md:left-1/2 top-1.5 -translate-x-1/2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-cyan-400/50 transition-all duration-300">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300" />
              </div>

              {/* Step Left Block (Desktop alignment) */}
              <div className={`w-full md:w-[45%] text-left sm:pl-16 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                {/* Date display */}
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 font-bold uppercase block mb-1">
                  {step.date}
                </span>

                {/* Main Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="glass-card border border-white/5 rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:border-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    boxShadow: `0 10px 30px -15px ${step.glowColor}`
                  }}
                >
                  {/* Decorative glowing gradient banner */}
                  <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${step.color} opacity-40`} />

                  {/* Header */}
                  <div className={`flex items-start gap-3.5 mb-2.5 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-xl text-zinc-400 group-hover:text-cyan-400 transition-colors shrink-0`}>
                      {step.icon}
                    </div>
                    <div className={`${isEven ? 'md:text-right' : 'text-left'}`}>
                      <h4 className="text-sm font-bold text-zinc-100 font-display">
                        {step.title}
                      </h4>
                      <p className="text-[11px] font-medium text-zinc-400 font-mono mt-0.5">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </div>

              {/* Empty placeholder to maintain symmetry on desktop */}
              <div className="hidden md:block w-[45%]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Simple Fallback Backend Server icon
const FiServerIcon = (props) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

export default StoryTimeline;
