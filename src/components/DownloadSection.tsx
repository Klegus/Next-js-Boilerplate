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
            href="https://wiewiorkiwyspa.itch.io/postaw-na-zoledzie"
            className="btn-modern btn-primary font-troika text-lg"
            aria-label="Pobierz grę dla Windows"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pobierz dla Windows
          </a>
        </div>

        <div className="mt-12 reveal">
          <p className="text-sm text-amber-600">
            Gra jest obecnie dostępna tylko na platformę Windows. Wersje dla innych systemów mogą pojawić się w przyszłości!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
