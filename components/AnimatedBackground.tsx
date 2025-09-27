import React, { useEffect, useMemo } from 'react';

// Declare tsParticles on the window object to satisfy TypeScript
declare global {
  interface Window {
    tsParticles: any;
  }
}

export const AnimatedBackground: React.FC = () => {
  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#64748b',
      },
      links: {
        color: '#38bdf8',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  useEffect(() => {
    if (window.tsParticles) {
      window.tsParticles.load({ id: 'tsparticles', options: particlesOptions });
    }
  }, [particlesOptions]);

  return <div id="tsparticles" className="fixed top-0 left-0 w-full h-full -z-10" />;
};
