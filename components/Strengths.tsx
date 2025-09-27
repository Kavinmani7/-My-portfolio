import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { STRENGTHS_DATA } from '../constants';

export const Strengths: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.2 });

  return (
    <section id="strengths" className="py-20">
      <div ref={sectionRef} className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4">
          Core Strengths
        </h2>
        <div className="w-24 h-1 bg-teal-300 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STRENGTHS_DATA.map((strength, index) => (
            <div
              key={strength.title}
              className={`bg-slate-800/90 p-8 rounded-lg shadow-lg text-center transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-slate-700 mx-auto mb-6">
                {strength.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{strength.title}</h3>
              <p className="text-slate-400">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};