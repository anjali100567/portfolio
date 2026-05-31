import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { usePortfolio } from '../context/PortfolioContext';

export default function Contact() {
  const { GITHUB_USERNAME } = usePortfolio();

  return (
    <section id="contact" className="py-24 bg-navy relative border-t border-slate-800/50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-fira text-lg mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 font-space text-lg mb-10">
            Currently looking for internship opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-12 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Name" 
              className="w-full bg-[#0f172a] border border-slate-700 text-slate-200 rounded p-4 font-fira focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              className="w-full bg-[#0f172a] border border-slate-700 text-slate-200 rounded p-4 font-fira focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Message" 
              className="w-full bg-[#0f172a] border border-slate-700 text-slate-200 rounded p-4 font-fira focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-4 rounded border border-cyan-400 text-cyan-400 font-fira font-bold hover:bg-cyan-400/10 transition-colors glow-cyan-hover"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center space-x-8"
        >
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="mailto:hello@example.com" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
            <span className="sr-only">Email</span>
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
