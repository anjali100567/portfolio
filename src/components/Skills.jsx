import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

export default function Skills() {
  const { skills } = usePortfolio();

  return (
    <section id="skills" className="py-20 bg-navy relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold text-white mb-2">
            <span className="text-cyan-400 font-fira text-xl mr-2">02.</span> Skills & Proficiency
          </h2>
          <div className="w-20 h-1 bg-cyan-400/50 rounded"></div>
          <p className="mt-4 text-slate-400 font-space text-sm">
            * Proficiency percentages increase dynamically based on my latest GitHub projects!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0f172a] rounded-lg p-6 border border-slate-700/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,231,0.2)] transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.emoji}</span>
                  <h3 className="text-lg font-space font-bold text-slate-200">{skill.name}</h3>
                </div>
                <span className="text-cyan-400 font-fira text-sm">{skill.proficiency}%</span>
              </div>
              
              {/* Progress Bar Background */}
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                {/* Animated Progress Fill */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 relative"
                >
                  {/* Subtle shine effect on the progress bar */}
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 blur-[2px] w-full h-full"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
