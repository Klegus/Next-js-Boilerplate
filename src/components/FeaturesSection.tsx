import type { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-effect rounded-xl p-6 animate-slide-up">
      <div className="text-amber-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-amber-800">{title}</h3>
      <p className="text-amber-700">{description}</p>
    </div>
  );
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-amber-800 mb-4">
            Unikalne cechy naszej gry
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Poznaj wyjątkowe elementy "Postaw na Żołędzie", które sprawiają, że nasza gra jest niepowtarzalnym doświadczeniem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<span>🌰</span>} // Zmieniono ikonę na kasztan (bliżej żołędzia)
            title="Żołędziowa Stawka"
            description="W świecie Marcina to żołędzie są cenną walutą! Gromadź je, ryzykuj i wygrywaj, by zaimponować i wypełnić spiżarnię."
          />
          <FeatureCard
            icon={<span>🧠</span>}
            title="Wyzwania Intelektualne"
            description="Sprawdź swoją wiedzę w 8 rundach pełnych pytań z różnorodnych kategorii. Odpowiedzi Marcina zadecydują o jego sukcesie!"
          />
          <FeatureCard
            icon={<span>⚖️</span>} // Zmieniono ikonę na wagę
            title="Strategiczne Decyzje"
            description="Każda runda to nowe rozdanie. Rozważnie obstawiaj żołędzie na odpowiedziach – od Twojej strategii zależy końcowy wynik!"
          />
          <FeatureCard
            icon={<span>🎮</span>}
            title="Prosta i Wciągająca"
            description="Jasne zasady i przyjazny interfejs pozwolą Ci od razu wkroczyć do akcji. Skup się na grze, a nie na skomplikowanych mechanikach!"
          />
          <FeatureCard
            icon={<span>🎨</span>} // Zmieniono ikonę na paletę
            title="Urokliwy Świat Gry"
            description="Zanurz się w przytulnym, leśnym klimacie dzięki pięknej grafice z motywami drewna i natury. Graj i podziwiaj!"
          />
        </div>
      </div>
    </section>
  );
};
