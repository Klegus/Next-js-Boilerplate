'use client';

import { useEffect, useState } from 'react';

export const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('game');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');

        if (sectionTop < window.innerHeight / 3) {
          current = sectionId || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-indicator">
      <div
        className={`scroll-indicator__dot ${activeSection === 'game' ? 'active' : ''}`}
        onClick={() => scrollToSection('game')}
        title="Gra"
      />
      <div
        className={`scroll-indicator__dot ${activeSection === 'features' ? 'active' : ''}`}
        onClick={() => scrollToSection('features')}
        title="Cechy"
      />
      <div
        className={`scroll-indicator__dot ${activeSection === 'gameplay' ? 'active' : ''}`}
        onClick={() => scrollToSection('gameplay')}
        title="Rozgrywka"
      />
      <div
        className={`scroll-indicator__dot ${activeSection === 'team' ? 'active' : ''}`}
        onClick={() => scrollToSection('team')}
        title="Zespół"
      />
    </div>
  );
};
