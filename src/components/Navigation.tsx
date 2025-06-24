'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('game');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function for smooth scrolling and closing mobile menu
  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    scrollToSection(e, sectionId); // scrollToSection is already defined
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style when scrolled
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');

        if (sectionTop < window.innerHeight / 3) {
          current = sectionId || '';
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function for smooth scrolling to sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 relative">
        {/* Small decorative leaf elements */}
        <div className="absolute top-0 left-4 w-8 h-8 leaf leaf-1 opacity-30"></div>
        <div className="absolute top-1 right-8 w-6 h-6 leaf leaf-2 opacity-20" style={{ transform: 'rotate(15deg)' }}></div>

        <div className="wooden-navbar rounded-xl flex justify-between items-center py-3 px-6 relative">
          {/* Wood grain overlay */}
          <div className="wood-grain-overlay rounded-xl"></div>

          {/* Logo */}
          <Link href="/" className="relative z-10">
            <img src="/assets/images/logo-new.png" alt="Postaw na Żołędzie Logo" className="h-10 md:h-12 transition-all duration-300" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#game" onClick={e => scrollToSection(e, 'game')} className={`wooden-nav-link ${activeSection === 'game' ? 'active' : ''}`}>Gra</a>
            <a href="#features" onClick={e => scrollToSection(e, 'features')} className={`wooden-nav-link ${activeSection === 'features' ? 'active' : ''}`}>Cechy</a>
            <a href="#gameplay" onClick={e => scrollToSection(e, 'gameplay')} className={`wooden-nav-link ${activeSection === 'gameplay' ? 'active' : ''}`}>Rozgrywka</a>
            <a href="#team" onClick={e => scrollToSection(e, 'team')} className={`wooden-nav-link ${activeSection === 'team' ? 'active' : ''}`}>Zespół</a>
          </div>
          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-amber-50 hover:text-amber-200 hover:bg-amber-700 hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Otwórz menu główne</span>
              {isMobileMenuOpen
                ? (
                    <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )
                : (
                    <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
            </button>
          </div>

          {/* Additional decorative element - small branch */}
          <div
            className="absolute -bottom-3 -right-2 w-16 h-10 bg-contain bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 50\' fill=\'none\' stroke=\'%236D4C41\' stroke-width=\'2\'%3E%3Cpath d=\'M5,25 Q30,10 50,25 T95,25\' stroke=\'%23795548\' stroke-width=\'3\'/%3E%3Cpath d=\'M25,8 L30,20\' stroke=\'%23795548\' stroke-width=\'2\'/%3E%3Cpath d=\'M40,5 L45,22\' stroke=\'%23795548\' stroke-width=\'2\'/%3E%3Cpath d=\'M60,7 L55,20\' stroke=\'%23795548\' stroke-width=\'2\'/%3E%3Cpath d=\'M75,10 L70,22\' stroke=\'%23795548\' stroke-width=\'2\'/%3E%3C/svg%3E")' }}
          >
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden mt-1 wooden-navbar rounded-xl shadow-lg py-3 px-4 relative">
              {/* Wood grain overlay for mobile menu */}
              <div className="wood-grain-overlay rounded-xl"></div>
              <div className="relative z-10 flex flex-col space-y-2">
                <a href="#game" onClick={e => handleMobileLinkClick(e, 'game')} className="block px-3 py-2 rounded-md text-base font-medium text-amber-50 hover:text-amber-100 hover:bg-amber-700 hover:bg-opacity-60 transition-colors">Gra</a>
                <a href="#features" onClick={e => handleMobileLinkClick(e, 'features')} className="block px-3 py-2 rounded-md text-base font-medium text-amber-50 hover:text-amber-100 hover:bg-amber-700 hover:bg-opacity-60 transition-colors">Cechy</a>
                <a href="#gameplay" onClick={e => handleMobileLinkClick(e, 'gameplay')} className="block px-3 py-2 rounded-md text-base font-medium text-amber-50 hover:text-amber-100 hover:bg-amber-700 hover:bg-opacity-60 transition-colors">Rozgrywka</a>
                <a href="#team" onClick={e => handleMobileLinkClick(e, 'team')} className="block px-3 py-2 rounded-md text-base font-medium text-amber-50 hover:text-amber-100 hover:bg-amber-700 hover:bg-opacity-60 transition-colors">Zespół</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
