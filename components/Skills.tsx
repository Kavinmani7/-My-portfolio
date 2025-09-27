
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SKILLS_DATA } from '../constants';
import type { Skill } from '../types';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(barRef);

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-slate-300">{skill.name}</span>
        <span className="text-sm font-semibold text-teal-300">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2.5">
        <div
          className="bg-teal-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.1 });

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-slate-800/20">
      <div className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4">
          My Skills
        </h2>
        <div className="w-24 h-1 bg-teal-300 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SKILLS_DATA.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold text-slate-200 mb-6">{category.title}</h3>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
