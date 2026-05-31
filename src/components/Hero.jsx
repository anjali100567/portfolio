import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.png';

const roles = ["CSE Student", "AI & ML Enthusiast", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = 100;
    
    if (isDeleting) typingSpeed = 50;
    
    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setText(prev => 
        isDeleting 
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 radial-glow overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Profile Picture */}
        <div className="relative w-40 h-40 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50"
            style={{ padding: '4px' }}
          />
          <div className="w-[130px] h-[130px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400 glow-cyan overflow-hidden">
            <img 
              src={profileImg} 
              alt="Anli Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-fira text-cyan-400 tracking-[0.3em] mb-4 text-sm md:text-base"
        >
          HELLO WORLD
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-space text-white mb-6"
        >
          Hi, I'm Anli<motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-cyan-400"
          >_</motion.span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 font-fira h-8 mb-10"
        >
          &gt; {text}
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >|</motion.span>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <a href="#projects" className="px-8 py-3 rounded border border-cyan-400 text-cyan-400 font-fira font-medium hover:bg-cyan-400/10 transition-colors glow-cyan-hover">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded bg-white/5 text-slate-300 font-fira font-medium hover:bg-white/10 transition-colors">
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400/50"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>

    </section>
  );
}
