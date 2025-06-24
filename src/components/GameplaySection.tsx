'use client';

import GameplayPath from './GameplayPath';
import FallingElements from './FallingElements';
import { useState } from 'react';

export const GameplaySection = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  return (
    <section id="gameplay" className="py-20 bg-[#f9f3e5] relative overflow-hidden">
      {/* Dodajemy komponent spadających elementów */}
      <FallingElements />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in reveal">
          <h2 className="text-4xl font-bold text-amber-800 mb-4 font-troika">
            Postaw Na żołędzie
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Poznaj historię Marcina, wiewiórki, która musi wygrać fortunę w teleturnieju, aby zdobyć serce swojej ukochanej.
            Pomóż mu zdobyć jak najwięcej żołędzi w emocjonującej rozgrywce!
          </p>
        </div>

        {/* Ścieżka rozgrywki */}
        <div className="reveal mb-16">
          <GameplayPath texts={{ winOutcome: undefined, loseOutcome: undefined }} />
        </div>


        <div className="flex flex-col lg:flex-row gap-10 items-center mt-16">
          <div className="lg:w-1/2 reveal-left">
            <div className="glass-effect rounded-xl p-6 mb-6 transform hover:scale-105 transition-transform duration-500">
              <video
                src="/vid/trailer-720p.mp4"
                controls
                className="w-full h-full aspect-video rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 reveal-right">
            <h3 className="text-2xl font-bold text-amber-800 mb-6 font-troika">Historia Marcina</h3>
            
            <p className="text-amber-700 mb-8 leading-relaxed">
              Marcin to zwykła wiewiórka z niezwykłym marzeniem - zdobyć serce wymagającej ukochanej. Aby tego dokonać, musi zebrać fortunę w żołędziach. Jego jedyną szansą jest udział w słynnym teleturnieju "Postaw Na żołędzie", gdzie będzie musiał wykazać się wiedzą, odwagą i umiejętnością strategicznego myślenia.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="btn-modern btn-primary font-troika">
                Zagraj teraz
              </a>
              <a href="#features" className="btn-modern font-troika">
                Poznaj zasady
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          <h3 className="text-2xl font-bold text-amber-800 col-span-full mb-6 font-troika text-center">Galeria z teleturnieju</h3>
          {['2.webp','3.webp','4.webp','5.webp'].map((file, idx) => (
            <div
              key={file}
              className="glass-effect rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-zoom-in"
              onClick={() => setLightboxImage(file)}
            >
              <img
                src={`/img/${file}`}
                alt={`Zrzut ekranu ${idx + 2} z gry Postaw Na Żołędzie`}
                className="w-full h-full object-cover aspect-video"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={`/img/${lightboxImage}`}
            alt="Powiększone zdjęcie z gry"
            className="max-w-4xl max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GameplaySection;
