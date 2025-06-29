import { getTranslations, setRequestLocale } from 'next-intl/server';

import { DownloadSection } from '@/components/DownloadSection';
import FallingElements from '@/components/FallingElements';
import { FeaturesSection } from '@/components/FeaturesSection';
import { Footer } from '@/components/Footer';
import { GameplaySection } from '@/components/GameplaySection';
import { HeroSection } from '@/components/HeroSection';
// Import custom components
import { Navigation } from '@/components/Navigation';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { TeamSection } from '@/components/TeamSection';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: 'Postaw na Żołędzie - Strategiczna gra quizowa',
    description: 'Emocjonująca gra quizowa oparta na formacie "Postaw na Milion", gdzie walutą są żołędzie!',
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // We can still use translations if needed
  await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <div className="min-h-screen flex flex-col relative">
      <FallingElements />
      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="flex-grow">
        {/* Hero section */}
        <HeroSection />

        {/* Features section */}
        <FeaturesSection />

        {/* Gameplay section */}
        <GameplaySection />
        <DownloadSection />

        <TeamSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll indicator and animation components */}
      <ScrollIndicator />
      <ScrollAnimation />

    </div>
  );
};
