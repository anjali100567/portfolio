import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import BasicProjects from './components/BasicProjects';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-navy text-slate-300 font-space selection:bg-cyan-400/30 selection:text-cyan-100">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <BasicProjects />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
