import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const TABS = ['All', 'Django', 'C', 'Java', 'WebDev'];

export default function Projects() {
  const { projects, loading, GITHUB_USERNAME } = usePortfolio();
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Django') return project.title.toLowerCase().includes('django') || project.language === 'Python';
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="py-20 bg-navy relative border-t border-slate-800/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-space font-bold text-white mb-2">
                <span className="text-cyan-400 font-fira text-xl mr-2">03.</span> Featured Projects
              </h2>
              <div className="w-20 h-1 bg-cyan-400/50 rounded"></div>
            </div>
            <a 
              href={`https://github.com/${GITHUB_USERNAME}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-cyan-400 hover:text-white font-fira text-sm group transition-colors"
            >
              View Full GitHub
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-fira text-sm transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-cyan-400 text-navy font-bold shadow-[0_0_15px_rgba(0,255,231,0.4)]' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-slate-700 border-t-cyan-400 rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.length > 0 ? filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0f172a] rounded-lg p-6 border border-slate-700/50 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,231,0.15)] hover:border-cyan-400/30 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <FolderGit2 className="w-10 h-10 text-cyan-400" />
                    <div className="flex space-x-3">
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </a>
                      {project.homepage && (
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-space font-bold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors capitalize">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 font-space text-sm mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-xs font-fira text-cyan-400 border border-cyan-400/30 rounded px-2 py-1 bg-cyan-400/5">
                      {project.language || project.category}
                    </span>
                  </div>
                </motion.div>
              )) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20 text-slate-500 font-fira"
                >
                  No projects found for this category yet.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
}
