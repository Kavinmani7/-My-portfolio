import React, { useState, useEffect } from 'react';
import type { Project } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Strengths } from './components/Strengths';
import { Contact } from './components/Contact';
import { AnimatedBackground } from './components/AnimatedBackground';

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-slate-800/90 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-300 z-10">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="p-8">
          <h2 className="text-3xl font-bold text-teal-300 mb-4">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-teal-900/50 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2 border-b border-slate-700 pb-1">Project Goal</h3>
              <p>{project.goal}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2 border-b border-slate-700 pb-1">Key Features</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            {project.figmaLink && (
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-700 text-teal-300 font-bold py-2 px-6 rounded-md hover:bg-slate-600 transition-colors duration-300">
                View on Figma
              </a>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const ScrollToTopButton: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
    <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-teal-500 text-slate-900 rounded-full p-3 shadow-lg hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-300 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        aria-label="Scroll to top"
    >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
    </button>
);


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="font-sans">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onProjectClick={handleProjectClick} />
        <Education />
        <Strengths />
        <Contact />
      </main>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      <ScrollToTopButton isVisible={showScrollTop} />
    </div>
  );
};

export default App;