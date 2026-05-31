import React from 'react';
import { motion } from 'framer-motion';
import { Code2, CircleDollarSign, LayoutTemplate } from 'lucide-react';

const basicProjects = [
  {
    id: 1,
    title: "Tic Tac Toe",
    tagline: "Mastering the logic grid.",
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    tech: "C Language",
  },
  {
    id: 2,
    title: "Currency Converter",
    tagline: "Real-time API wizardry.",
    icon: <CircleDollarSign className="w-8 h-8 text-cyan-400" />,
    tech: "Python",
  },
  {
    id: 3,
    title: "1st Website",
    tagline: "Where the journey began.",
    icon: <LayoutTemplate className="w-8 h-8 text-cyan-400" />,
    tech: "HTML/CSS",
  }
];

export default function BasicProjects() {
  return (
    <section className="py-16 bg-[#080c17] relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-space font-bold text-slate-300 mb-2">
            The Building Blocks
          </h2>
          <p className="text-slate-500 font-fira text-sm mt-2">Some of the early creations that sparked the passion.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {basicProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy rounded-lg p-6 border border-slate-800 hover:border-cyan-400/50 group transition-colors flex flex-col items-center text-center"
            >
              <div className="p-4 bg-[#0f172a] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,231,0.1)] group-hover:shadow-[0_0_20px_rgba(0,255,231,0.3)]">
                {project.icon}
              </div>
              <h3 className="text-xl font-space font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 font-space text-sm mb-4">"{project.tagline}"</p>
              <span className="text-xs font-fira text-cyan-400 border border-cyan-400/30 rounded-full px-3 py-1 bg-cyan-400/5">
                {project.tech}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
