import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiFigma, SiCanva, SiNotion, SiGit 
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { Cpu, Bot, Sparkles, Code, FileText } from 'lucide-react';

const tools = [
  { name: 'Claude', desc: 'Advanced LLM reasoning', category: 'AI', icon: <Bot className="w-6 h-6 text-cyan-400" /> },
  { name: 'Gemini', desc: 'Multimodal AI assistant', category: 'AI', icon: <Sparkles className="w-6 h-6 text-cyan-400" /> },
  { name: 'NotebookLM', desc: 'AI-powered research notes', category: 'AI', icon: <Cpu className="w-6 h-6 text-cyan-400" /> },
  { name: 'OpenAI Codex', desc: 'AI code generation', category: 'AI', icon: <Code className="w-6 h-6 text-cyan-400" /> },
  { name: 'Figma', desc: 'UI/UX & Prototyping', category: 'Design', icon: <SiFigma className="w-6 h-6 text-pink-400" /> },
  { name: 'Canva', desc: 'Visual design templates', category: 'Design', icon: <SiCanva className="w-6 h-6 text-blue-400" /> },
  { name: 'Notion', desc: 'Project management & notes', category: 'Productivity', icon: <SiNotion className="w-6 h-6 text-white" /> },
  { name: 'MS Office', desc: 'Documentation & analysis', category: 'Productivity', icon: <FileText className="w-6 h-6 text-orange-500" /> },
  { name: 'VS Code', desc: 'Development IDE', category: 'Development', icon: <VscCode className="w-6 h-6 text-blue-500" /> },
  { name: 'Git & GitHub', desc: 'Version control & collaboration', category: 'Development', icon: <SiGit className="w-6 h-6 text-red-500" /> },
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 bg-[#080c17] relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold text-white mb-2">
            <span className="text-cyan-400 font-fira text-xl mr-2">03.</span> AI & Tools
          </h2>
          <div className="w-20 h-1 bg-cyan-400/50 rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-navy rounded-lg p-5 border border-slate-800 hover:border-cyan-400/30 hover:shadow-[0_0_15px_rgba(0,255,231,0.1)] transition-all duration-300 group flex items-start space-x-4"
            >
              <div className="p-3 bg-[#0f172a] rounded-lg group-hover:scale-105 transition-transform duration-300">
                {tool.icon}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-space font-bold text-white group-hover:text-cyan-400 transition-colors">{tool.name}</h3>
                  <span className="text-[10px] font-fira px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 uppercase">
                    {tool.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 font-space">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
