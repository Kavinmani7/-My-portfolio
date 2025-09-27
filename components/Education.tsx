import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { EDUCATION_DATA } from '../constants';
import type { EducationItem } from '../types';

const TimelineItem: React.FC<{ item: EducationItem; index: number }> = ({ item, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(itemRef, { threshold: 0.5 });
  const isLeft = index % 2 === 0;

  return (
    <div ref={itemRef} className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-slate-800 shadow-xl w-8 h-8 rounded-full">
        <div className={`mx-auto text-white font-semibold text-lg ${isVisible ? 'scale-100' : 'scale-0'} transition-transform duration-500`}>
          <svg className="w-5 h-5 text-teal-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </div>
      </div>
      <div className={`order-1 bg-slate-800/90 rounded-lg shadow-xl w-5/12 px-6 py-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <p className="font-bold text-slate-200 text-sm">{item.year}</p>
        <h3 className="mb-2 font-bold text-teal-300 text-lg">{item.degree}</h3>
        <p className="text-sm leading-snug tracking-wide text-slate-400">
          {item.institution}, {item.location}
        </p>
      </div>
    </div>
  );
};


export const Education: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-slate-800/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4">
          Education
        </h2>
        <div className="w-24 h-1 bg-teal-300 mx-auto mb-12"></div>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-slate-700 h-full border" style={{ left: '50%' }}></div>
          {EDUCATION_DATA.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};