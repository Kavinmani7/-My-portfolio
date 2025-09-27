import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void; isVisible: boolean, delay: number }> = ({ project, onClick, isVisible, delay }) => (
  <div
    className={`bg-slate-800/90 rounded-lg overflow-hidden shadow-lg group transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms`}}
    onClick={onClick}
  >
    <div className="relative cursor-pointer">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-300 transition-colors duration-300">{project.title}</h3>
      <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-teal-900/50 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);


export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.1 });

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-teal-300 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => onProjectClick(project)} 
                isVisible={isVisible}
                delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};