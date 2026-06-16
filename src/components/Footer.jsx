import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 bg-navy text-center border-t border-slate-800">
      <p className="font-fira text-slate-500 text-sm">
        Built with <span className="text-cyan-400">❤️</span> by ANJALI RAJ · &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
