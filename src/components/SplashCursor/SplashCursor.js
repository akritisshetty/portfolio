import React, { useEffect } from 'react';
import './SplashCursor.css';

const SplashCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const splash = document.createElement('div');
      splash.className = 'splash';
      document.body.appendChild(splash);

      splash.style.left = `${e.clientX}px`;
      splash.style.top = `${e.clientY}px`;

      setTimeout(() => {
        splash.remove();
      }, 900);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
};

export default SplashCursor;