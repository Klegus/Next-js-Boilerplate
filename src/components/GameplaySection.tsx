'use client';

import GameplayPath from './GameplayPath';
import FallingElements from './FallingElements';

export const GameplaySection = () => {
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
              {/* 
                Placeholder for gameplay video. 
                To embed, replace the div below with an iframe, e.g.:
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Gameplay Video" frameBorder="0" allowFullScreen></iframe>
              */}
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-300 rounded-lg flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="wood-bg w-full h-full"></div>
                </div>
                <div className="relative z-10">
                  <svg className="w-16 h-16 text-amber-800 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="text-amber-800 mt-2 font-medium">Zobacz zwiastun teleturnieju</p>
                </div>
              </div>
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
          {/* Game screenshot placeholders with enhanced glass effect */}
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="glass-effect rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-amber-50 to-amber-200 flex items-center justify-center p-4 relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="dark-wood-bg w-full h-full"></div>
                </div>
                <div className="w-full h-full flex items-center justify-center text-amber-700 font-medium">
                  {[
                    "Marcin wybiera kategorię",
                    "Rozdzielanie żołędzi",
                    "Emocje po wygranej",
                    "Marcin z ukochaną"
                  ][num-1]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;
