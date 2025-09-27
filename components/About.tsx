
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.2 });

  return (
    <section id="about" ref={sectionRef} className="py-20">
      <div className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-teal-300 mx-auto mb-12"></div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-300 leading-relaxed">
            I am a creative and detail-oriented UI/UX designer with a passion for crafting intuitive and beautiful user experiences. My design philosophy is rooted in a user-centered approach, ensuring that every design decision is backed by research and empathy.
          </p>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            As a Figma expert, I specialize in turning complex problems into elegant solutions through wireframing, prototyping, and building comprehensive design systems. I am dedicated to pushing the boundaries of design to create products that are not only functional but also delightful to use.
          </p>
        </div>
      </div>
    </section>
  );
};
