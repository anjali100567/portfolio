import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Calendar } from 'lucide-react';

const certifications = [
  {
    title: "Google Cloud Career Launchpad",
    issuer: "Google Cloud",
    date: "May 2025",
    credentialId: "GCCL-83920194",
    link: "#"
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL / IIT Madras",
    date: "April 2025",
    credentialId: "NPTEL25CS1023",
    link: "#"
  },
  {
    title: "Python for Data Science",
    issuer: "Coursera / IBM",
    date: "Dec 2024",
    credentialId: "COURSERA-PY-980",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#080c17] relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-space font-bold text-white mb-2">
            <span className="text-cyan-400 font-fira text-xl mr-2">05.</span> Certifications
          </h2>
          <div className="w-20 h-1 bg-cyan-400/50 rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy rounded-lg p-6 border border-slate-800 hover:border-cyan-400/30 hover:shadow-[0_0_15px_rgba(0,255,231,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#0f172a] rounded-lg">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="flex items-center text-xs font-fira text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/20">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" /> VERIFIED
                  </span>
                </div>
                <h3 className="font-space font-bold text-white text-lg mb-2">{cert.title}</h3>
                <p className="text-sm text-slate-400 font-space mb-1">Issuer: {cert.issuer}</p>
                <div className="flex items-center text-xs text-slate-500 font-fira mb-4">
                  <Calendar className="w-3.5 h-3.5 mr-1" /> {cert.date}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-fira text-slate-500">ID: {cert.credentialId}</span>
                <a 
                  href={cert.link} 
                  className="text-xs font-fira text-cyan-400 hover:text-white transition-colors"
                >
                  View Credential &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
