'use client';

import React, { useEffect } from 'react';

const FallingElements: React.FC = () => {
  const MAX_ELEMENTS_DESKTOP = 30;
const MAX_ELEMENTS_MOBILE = 10; // Mniejsza liczba dla urządzeń mobilnych

useEffect(() => {
    let maxElements = MAX_ELEMENTS_DESKTOP;
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      maxElements = MAX_ELEMENTS_MOBILE;
    }

    // Funkcja dodająca elementy spadające na stronę
    const createFallingElement = () => {
      // Tworzenie elementu spadającego
      const element = document.createElement('div');
      
      // Losowy wybór między żołędziem a liściem (większa szansa na żołędzie)
      const isAcorn = Math.random() > 0.4;
      
      // Ustawienie klasy animacji
      element.className = isAcorn ? 'falling-acorn' : 'falling-leaf';

      // Losowe pozycjonowanie i opóźnienie
      const startPosX = Math.random() * window.innerWidth;
      const animationDuration = 7 + Math.random() * 5;
      const animationDelay = Math.random() * 5;
      const rotation = Math.random() * 360;
      const size = isAcorn ? (20 + Math.random() * 15) : (15 + Math.random() * 25); // Większe żołędzie, różnorodne liście
      const scale = 0.8 + Math.random() * 0.4; // Dodatkowe skalowanie dla większej różnorodności
      
      // Zastosowanie stylów
      Object.assign(element.style, {
        position: 'fixed',
        top: '-50px',
        left: `${startPosX}px`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: '0.9',
        pointerEvents: 'none',
        zIndex: '1',
        animation: `${isAcorn ? 'fallingAcorn' : 'fallingLeaf'} ${animationDuration}s linear ${animationDelay}s forwards`,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))', // Dodajemy cień dla głębi
        backgroundImage: isAcorn ? 
          `url('/assets/acorn.svg')` :
          // SVG liścia dębu - bardziej szczegółowy (przywrócony z poprzedniej wersji)
          `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 10C60 10 75 15 85 25C90 30 95 35 95 40C90 45 85 48 75 45C80 50 82 60 80 65C75 70 65 70 60 65C65 75 65 80 60 85C55 90 45 90 40 85C35 80 35 75 40 65C35 70 25 70 20 65C15 60 20 50 25 45C15 48 10 45 5 40C5 35 10 30 15 25C25 15 40 10 50 10Z' fill='%2367af45'/%3E%3Cpath d='M50 10C60 10 75 15 85 25C90 30 95 35 95 40C90 45 85 48 75 45M75 45C80 50 82 60 80 65C75 70 65 70 60 65M60 65C65 75 65 80 60 85C55 90 45 90 40 85C35 80 35 75 40 65M40 65C35 70 25 70 20 65C15 60 20 50 25 45M25 45C15 48 10 45 5 40C5 35 10 30 15 25C25 15 40 10 50 10' stroke='%23467a2f' stroke-width='1' fill='none'/%3E%3Cpath d='M50 43L50 90' stroke='%23467a2f' stroke-width='3'/%3E%3C/svg%3E")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      });
      
      // Dodanie do body
      document.body.appendChild(element);
      
      // Usunięcie po zakończeniu animacji - zapobiega przepełnianiu DOM
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, (animationDuration + animationDelay) * 1000);
    };
    
    // Tworzenie nowych elementów co jakiś czas
    const interval = setInterval(() => {
      // Ograniczenie liczby elementów jednocześnie na stronie
      if (document.querySelectorAll('.falling-acorn, .falling-leaf').length < maxElements) {
        createFallingElement();
      }
    }, 300); // Częstsze dodawanie elementów
    
    // Czyszczenie interwału
    return () => clearInterval(interval);
  }, []);
  
  return null;
};

export default FallingElements;
