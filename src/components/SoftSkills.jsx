import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, HeartHandshake, Zap, BrainCircuit, MessageSquareCode } from 'lucide-react';

const softSkills = [
  {
    name: "Problem Solving",
    desc: "Analytical approach to dissecting bugs and building algorithms.",
    icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />
  },
  {
    name: "Team Collaboration",
    desc: "Active listener and driver of collective technical alignment.",
    icon: <HeartHandshake className="w-6 h-6 text-cyan-400" />
  },
  {
    name: "Adaptability",
    desc: "Thrive in rapidly changing tech stacks and development environments.",
    icon: <Zap className="w-6 h-6 text-cyan-400" />
  },
  {
    name: "Effective Communication",
    desc: "Bridging the gap between technical complexity and business logic.",
    icon: <MessageSquareCode className="w-6 h-6 text-cyan-400" />
  }
];

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="py-20 bg-navy relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold text-white mb-2">
            <span className="text-cyan-400 font-fira text-xl mr-2">04.</span> Soft Skills
          </h2>
          <div className="w-20 h-1 bg-cyan-400/50 rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0f172a] rounded-lg p-6 border border-slate-800 hover:border-cyan-400/20 transition-all duration-300 flex items-start space-x-4"
            >
              <div className="p-3 bg-navy rounded-lg border border-slate-700/30">
                {skill.icon}
              </div>
              <div>
                <h3 className="font-space text-lg font-bold text-slate-200 mb-1 flex items-center">
                  {skill.name}
                  <CheckCircle2 className="w-4 h-4 text-cyan-400/80 ml-2" />
                </h3>
                <p className="text-slate-400 font-space text-sm leading-relaxed">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
