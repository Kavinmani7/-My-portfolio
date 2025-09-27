import React from 'react';

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const AnimatedSubText: React.FC<{ text: string, delay: number }> = ({ text, delay }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: `${delay + index * 0.03}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};


export const Hero: React.FC = () => {
  const mainText = "Hi, I’m Kavinmani M.";
  const subText = "A UI/UX Designer & Product Designer.";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Shapes Background */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-500/10 rounded-full animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-sky-500/10 rounded-full animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">
          <AnimatedText text={mainText} />
        </h1>
        <p className="text-xl md:text-2xl text-slate-300">
           <AnimatedSubText text={subText} delay={mainText.length * 0.05} />
        </p>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </a>
    </section>
  );
};