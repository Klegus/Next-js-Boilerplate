'use client';

import React from 'react';

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-16 bg-amber-100/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-amber-800 mb-4 font-troika reveal">
          Pobierz Grę "Postaw Na Żołędzie"!
        </h2>
        <p className="text-lg text-amber-700 max-w-2xl mx-auto mb-8 reveal">
          Gotowy, aby pomóc Marcinowi w jego przygodzie? Pobierz grę już teraz i zacznij zbierać żołędzie!
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 reveal">
          <a 
            href="#" // Replace with actual download link for Windows
            className="btn-modern btn-primary font-troika text-lg"
            aria-label="Pobierz grę dla Windows"
            target="_blank" // Good practice for download links
            rel="noopener noreferrer"
          >
            Pobierz dla Windows
          </a>
          <a 
            href="#" // Replace with actual download link for macOS
            className="btn-modern font-troika text-lg"
            aria-label="Pobierz grę dla macOS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pobierz dla macOS
          </a>
          <a 
            href="#" // Replace with actual download link for Linux
            className="btn-modern font-troika text-lg"
            aria-label="Pobierz grę dla Linux"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pobierz dla Linux
          </a>
        </div>

        <div className="mt-12 reveal">
          <p className="text-sm text-amber-600">
            Gra jest dostępna na platformy Windows, macOS i Linux. Wkrótce także na urządzenia mobilne!
          </p>
          <p className="text-xs text-amber-500 mt-2">
            (Uwaga: Linki są placeholderami. Rzeczywiste pliki do pobrania zostaną dodane wkrótce.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
