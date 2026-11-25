import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiFolder, FiExternalLink } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const GitHub = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // High-fidelity fallback repos in case GitHub API rate limits
  const fallbackRepos = [
    {
      name: 'job-portal',
      description: 'Enterprise Job Portal supporting Admin, Recruiter, and Job Seeker roles. Powered by Java, Spring Boot, Spring Security, JWT, Hibernate, React.js, and MySQL.',
      html_url: `${personalInfo.github}/job-portal`,
      stargazers_count: 5,
      forks_count: 2,
      language: 'Java'
    },
    {
      name: 'ecommerce-project',
      description: 'Catalog & Product management system dashboard following Controller-Service-Repository backend patterns with asynchronous React integration.',
      html_url: `${personalInfo.github}/ecommerce-project`,
      stargazers_count: 4,
      forks_count: 1,
      language: 'Java'
    },
    {
      name: 'spring-security-jwt-guide',
      description: 'Reference template demonstrating session-less JWT token authorization and route protection rules in Spring Boot environments.',
      html_url: personalInfo.github,
      stargazers_count: 3,
      forks_count: 0,
      language: 'Java'
    },
    {
      name: 'fullstack-portfolio',
      description: 'Source code of Saurabh Mangulkar\'s production-ready portfolio built with React 19, Vite, Tailwind CSS v4, and Framer Motion.',
      html_url: personalInfo.github,
      stargazers_count: 8,
      forks_count: 2,
      language: 'JavaScript'
    }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/saurabhmangulkar/repos?sort=updated&per_page=6`
        );
        if (!response.ok) throw new Error('API fetch failed');
        const data = await response.json();
        
        // Filter out fork repositories to showcase original work
        const originalRepos = data.filter(repo => !repo.fork).slice(0, 4);
        
        if (originalRepos.length > 0) {
          setRepos(originalRepos);
        } else {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-24 px-6 relative overflow-hidden bg-zinc-950/30">
      
      {/* Glow background accent */}
      <div className="absolute top-1/2 right-10 w-72 h-72 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 font-mono">
            // Open Source Contributions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-zinc-100">
            Active <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Repositories</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2" />
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 4 }).map((_, idx) => (
              <div 
                key={idx}
                className="glass-card border border-white/5 rounded-2xl p-6 h-48 animate-pulse flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-4 bg-zinc-800 rounded w-1/3" />
                  <div className="h-3 bg-zinc-800 rounded w-full" />
                  <div className="h-3 bg-zinc-800 rounded w-5/6" />
                </div>
                <div className="h-3 bg-zinc-800 rounded w-1/4 mt-4" />
              </div>
            ))
          ) : (
            repos.map((repo, idx) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card border border-white/5 rounded-2xl p-6 h-fit min-h-48 flex flex-col justify-between text-left shadow-lg hover:border-cyan-500/25 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div>
                  {/* Folder Icon & Repo Title */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                    <span className="flex items-center space-x-2.5 font-bold font-display text-zinc-100 group-hover:text-cyan-400 transition-colors">
                      <FiFolder className="text-cyan-500" size={16} />
                      <span className="truncate">{repo.name}</span>
                    </span>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-cyan-400 transition-colors"
                      title="Open on GitHub"
                    >
                      <FiExternalLink size={14} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-6 line-clamp-3">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>

                {/* Stars, Forks, Language Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  <div className="flex items-center space-x-4">
                    {repo.language && (
                      <span className="flex items-center space-x-1.5">
                        <span className={`w-2 h-2 rounded-full ${
                          repo.language === 'Java' ? 'bg-[#b07219]' : 'bg-[#f1e05a]'
                        }`} />
                        <span>{repo.language}</span>
                      </span>
                    )}
                    <span className="flex items-center space-x-1">
                      <FiStar size={11} />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FiGitBranch size={11} />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>
                  
                  <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">GitHub Repo</span>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Global call to action */}
        <div className="flex justify-center mt-12">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-zinc-800 hover:border-cyan-500/30 bg-zinc-900/30 text-zinc-300 hover:text-cyan-400 text-xs font-mono rounded-xl flex items-center space-x-2 transition-all hover:scale-[1.02]"
          >
            <FiGithub size={14} />
            <span>Follow on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
