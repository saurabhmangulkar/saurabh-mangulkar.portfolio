import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiCpu, FiDatabase, FiServer, FiCheckCircle, FiUsers } from 'react-icons/fi';
import { stats, leadership } from '../data/portfolioData';
import StoryTimeline from './StoryTimeline';

// Utility for animating a number
const Counter = ({ value, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseFloat(value);
    if (start === end) return;

    const decimals = value.toString().split('.')[1]?.length || 0;
    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    let timer = setInterval(() => {
      start += (end - start) * 0.1;
      
      if (Math.ceil(start) >= end) {
        clearInterval(timer);
        setCount(end.toFixed(decimals));
      } else {
        setCount(start.toFixed(decimals));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const recruiterPoints = [
    {
      title: "Production-Quality Code",
      desc: "Writes clean, secure, and maintainable MVC architectures with Spring Boot and Hibernate mapping."
    },
    {
      title: "Full-Stack Capabilities",
      desc: "Engineers both low-latency Java REST APIs and reactive, state-managed React applications."
    },
    {
      title: "Scalable Architecture",
      desc: "Focuses on clean data modeling, robust security filters (JWT), and system modularity."
    },
    {
      title: "UI/UX & Recruiter-Minded",
      desc: "Cares about speed, animations, responsiveness, and presenting information with clear visual hierarchy."
    },
    {
      title: "Continuous Improvement",
      desc: "Graduated with 8.36 CGPA and continuously studies system design, cloud, and Generative AI (Spring AI)."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-zinc-950/30">
      
      {/* Decorative Blur elements */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-500 font-mono">
            // The Engineer's Core
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-zinc-100">
            About <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Saurabh</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2" />
        </div>

        {/* Top Section: Recruiter Pitch & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
          
          {/* Left Column: Why Hire Saurabh? (Checklist) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-100 font-display mb-4">
                Why Hire Saurabh Mangulkar?
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light mb-6">
                I do not just write syntax; I design complete, scalable software products. Combining an electronics engineering background with deep full-stack training, I bridge the gap between robust system backends and intuitive user interfaces.
              </p>

              {/* Recruiter checklists */}
              <div className="space-y-4">
                {recruiterPoints.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <FiCheckCircle className="text-emerald-500 mt-1 shrink-0" size={16} />
                    <div className="space-y-0.5">
                      <h4 className="text-xs md:text-sm font-semibold text-zinc-200">{point.title}</h4>
                      <p className="text-xs text-zinc-500 font-light leading-relaxed">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat) => (
                <div 
                  key={stat.id}
                  className="glass-card border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:border-blue-500/20 transition-colors"
                >
                  <span className="text-2xl md:text-3xl font-extrabold text-white font-mono leading-none">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-2 font-mono uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Leadership & Collaboration */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-card border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            
            {/* Header accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 opacity-40" />

            <div className="space-y-5 text-left">
              <h3 className="text-lg font-bold text-zinc-200 font-display flex items-center gap-2">
                <FiUsers className="text-purple-400" />
                <span>Leadership & Soft Skills</span>
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                Engineering success requires strong teamwork, communication, and financial accountability. My university contributions demonstrate this commitment:
              </p>

              {/* Leadership roles checklist */}
              <div className="space-y-4">
                {leadership.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl hover:border-purple-500/20 transition-colors"
                  >
                    <h4 className="text-xs font-bold font-mono text-purple-400 uppercase tracking-wide">
                      {item.role}
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-light mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Custom Interactive Timeline Story */}
        <div className="border-t border-white/5 pt-20">
          <div className="flex flex-col items-center justify-center text-center space-y-3 mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 font-mono">
              // My Development Story
            </span>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight font-display text-zinc-100">
              The Journey of a <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Product Builder</span>
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm max-w-lg mt-2 font-light leading-relaxed">
              Explore Saurabh's transition from an engineering student to a high-capacity Java full-stack engineer.
            </p>
          </div>

          <StoryTimeline />
        </div>

      </div>
    </section>
  );
};

export default About;
