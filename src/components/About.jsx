import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const codeString = `const studentInfo = {
  degree: "B.Tech CSE",
  year: "2nd Year",
  focus: "AI & ML",
  goal: "GATE → PSU"
};`;

  return (
    <section id="about" className="py-20 bg-navy relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold text-white mb-2">
            <span className="text-cyan-400 font-fira text-xl mr-2">01.</span> About Me
          </h2>
          <div className="w-20 h-1 bg-cyan-400/50 rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 font-space text-lg leading-relaxed space-y-4"
          >
            <p>
              Hello! I'm a 2nd-year B.Tech student majoring in Computer Science and Engineering. 
              My journey in tech is driven by a deep fascination with how systems work under the hood.
            </p>
            <p>
              Currently, I'm intensely focused on <span className="text-cyan-400">Artificial Intelligence & Machine Learning</span>, building models that solve real-world problems. 
              Alongside my practical development skills, I'm also rigorously preparing for the GATE examination to strengthen my theoretical computer science foundation.
            </p>
            <p>
              When I'm not coding or studying, you'll find me exploring new Web3 technologies or dissecting complex algorithms.
            </p>
          </motion.div>

          {/* Code Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-[#0f172a] p-6 rounded-lg border border-slate-700 shadow-2xl">
              
              {/* Window Controls */}
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>

              <pre className="font-fira text-sm md:text-base text-slate-300 overflow-x-auto">
                <code>
                  <span className="text-pink-400">const</span> <span className="text-blue-400">studentInfo</span> <span className="text-cyan-400">=</span> {'{'}
                  <br/>
                  <span className="text-slate-400">  degree:</span> <span className="text-yellow-300">"B.Tech CSE"</span>,
                  <br/>
                  <span className="text-slate-400">  year:</span> <span className="text-yellow-300">"2nd Year"</span>,
                  <br/>
                  <span className="text-slate-400">  focus:</span> <span className="text-yellow-300">"AI & ML"</span>,
                  <br/>
                  <span className="text-slate-400">  goal:</span> <span className="text-yellow-300">"GATE → PSU"</span>
                  <br/>
                  {'}'};
                </code>
              </pre>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
