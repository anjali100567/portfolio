import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-navy/80 backdrop-blur-md border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="font-fira text-2xl font-bold text-cyan-400 tracking-tighter hover:glow-cyan transition-all duration-300">
              &lt;Anli/&gt;
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium font-space group transition-colors"
                >
                  {link.name}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-300"
                    layoutId="underline"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-white hover:bg-cyan-900/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy/95 backdrop-blur-md border-b border-cyan-400/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 hover:bg-cyan-900/20 block px-3 py-2 rounded-md text-base font-medium font-space"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
