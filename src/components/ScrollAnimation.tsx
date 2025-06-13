'use client';

import { useEffect } from 'react';

export const ScrollAnimation = () => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScrollAnimation = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    // Add floating leaves randomly
    const addFloatingLeaves = () => {
      const body = document.querySelector('body');
      if (!body) return;
      
      const leafTypes = ['leaf-1', 'leaf-2'];
      const leafCount = 12;
      
      for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        const leafType = leafTypes[Math.floor(Math.random() * leafTypes.length)] as string;
        
        leaf.classList.add('leaf', leafType, 'floating-leaf');
        
        // Random positioning
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 10;
        
        leaf.style.top = `${top}vh`;
        leaf.style.left = `${left}vw`;
        leaf.style.animationDelay = `${delay}s`;
        leaf.style.animationDuration = `${duration}s`;
        
        body.appendChild(leaf);
      }
    };
    
    // Initial check and add event listener
    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
    addFloatingLeaves();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  
  return null; // This component doesn't render anything
};
