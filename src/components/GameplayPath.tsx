'use client';

import React, { useEffect, useRef, useState } from 'react';

type GameplayPathProps = {
  texts: {
    winOutcome?: { title: string; description: string };
    loseOutcome?: { title: string; description: string };
    step1Title?: string;
    step1Desc?: string;
    step2Title?: string;
    step2Desc?: string;
    step3Title?: string;
    step3Desc?: string;
    step4Title?: string;
    step4Desc?: string;
    step5Title?: string;
    step5Desc?: string;
  };
};

const GameplayPath: React.FC<GameplayPathProps> = ({ texts }) => {
  const winText = texts.winOutcome || { title: 'MISTRZOSTWO!', description: 'Marcin obronił imponującą liczbę żołędzi przez 8 rund! Jego spryt i wiedza na pewno zrobiły wrażenie. Czas na zasłużony odpoczynek z pełną spiżarnią!' };
  const loseText = texts.loseOutcome || { title: 'UPS!', description: 'Tym razem Marcin stracił zbyt wiele żołędzi. Ale nie poddaje się! Następnym razem na pewno mu się uda zaimponować i zgromadzić zapasy!' };

  const [revealedSteps, setRevealedSteps] = useState<Set<number>>(new Set());

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null); // Ref for the central timeline itself
  const pathContainerRef = useRef<HTMLDivElement | null>(null); // Ref for the main container for scroll calculations
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: texts.step1Title || 'MARCIN PODEJMUJE WYZWANIE',
      description: texts.step1Desc || 'MARCIN ROZPOCZYNA GRĘ Z IMPONUJĄCĄ GÓRĄ ŻOŁĘDZI! JEGO ZADANIEM JEST OBRONIĆ JAK NAJWIĘCEJ Z NICH PRZEZ 8 EKSCYTUJĄCYCH RUND, ABY ZDOBYĆ UZNANIE PEWNEJ WYJĄTKOWEJ WIEWIÓRKI.',
      branchSide: 'left' as 'left' | 'right',
    },
    {
      number: 2,
      title: texts.step2Title || 'STRATEGIA I RYZYKO W KAŻDEJ RUNDZIE',
      description: texts.step2Desc || 'W KAŻDEJ Z 8 RUND MARCIN WYBIERA KATEGORIĘ PYTAŃ. NASTĘPNIE MUSI STRATEGICZNIE ROZDZIELIĆ CZĘŚĆ SWOICH ŻOŁĘDZI NA DOSTĘPNE ODPOWIEDZI. OSTROŻNOŚĆ CZY RYZYKO? WSZYSTKO, BY ZROBIĆ WRAŻENIE!',
      branchSide: 'right' as 'left' | 'right',
    },
    {
      number: 3,
      title: texts.step3Title || 'CHWILA PRAWDY PO KAŻDYM PYTANIU',
      description: texts.step3Desc || 'PO ROZDZIELENIU ŻOŁĘDZI, NADCHODZI CHWILA PRAWDY – PRAWIDŁOWA ODPOWIEDŹ ZOSTANIE UJAWNIONA! ŻOŁĘDZIE POSTAWIONE NA BŁĘDNYCH ODPOWIEDZIACH PRZEPADAJĄ. MARCIN MUSI BYĆ PEWNY SWOICH DECYZJI, BY ZACHOWAĆ JAK NAJWIĘCEJ DLA SIEBIE... I DLA NIEJ.',
      branchSide: 'left' as 'left' | 'right',
    },
    {
      number: 4,
      title: texts.step4Title || 'FINAŁ PO 8 RUNDACH',
      description: texts.step4Desc || 'PROCES WYBORU KATEGORII I ODPOWIADANIA POWTARZA SIĘ PRZEZ 8 RUND. TYLKO TE ŻOŁĘDZIE, KTÓRE MARCINOWI UDA SIĘ OBRONIĆ DO SAMEGO KOŃCA, ZABIERZE ZE SOBĄ. CZY ZDOBĘDZIE WYSTARCZAJĄCO DUŻO, BY ZWRÓCIĆ NA SIEBIE UWAGĘ I WYPEŁNIĆ SPIŻARNIĘ?',
      branchSide: 'right' as 'left' | 'right',
    },
    {
      number: 5,
      title: texts.step5Title || 'OSTATNIA PROSTA!', // Zakładając, że dodasz step5Title do propsów
      description: texts.step5Desc || 'MARCIN JEST CORAZ BLIŻEJ CELU! ZOSTAŁY OSTATNIE RUNDY, A STAWKA JEST WYSOKA. KAŻDY ŻOŁĄDŹ SIĘ LICZY, BY ZROBIĆ WRAŻENIE I WYPEŁNIĆ SPIŻARNIĘ NA CAŁĄ ZIMĘ!', // Zakładając, że dodasz step5Desc do propsów
      branchSide: 'left' as 'left' | 'right',
    },
  ];

  // Effect for Intersection Observer to reveal steps
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNumber = Number.parseInt(entry.target.getAttribute('data-step-number') || '0', 10);
            if (stepNumber) {
              setRevealedSteps(prev => new Set(prev).add(stepNumber));
            }
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of the element is visible
    );

    stepRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [steps.length]); // Re-run if steps array length changes (safer than deep comparison for this use case)

  return (
    <div ref={pathContainerRef} className="gameplay-tree-path relative py-12 flex flex-col items-center">

      {/* Central Timeline - runs vertically through the center */}
      <div ref={timelineRef} className="central-timeline absolute top-0 bottom-0 left-1/2 w-1 bg-amber-600 -translate-x-1/2 z-0" aria-hidden="true">
      </div>

      {/* Gałęzie z krokami */}
      <div className="relative z-10 w-full max-w-4xl">
        {steps.map((step, index) => (
          <div
            key={step.number}
            ref={(el) => {
              stepRefs.current[index] = el;
            }} // Assign ref to each step container
            data-step-number={step.number} // For IntersectionObserver
            className={`tree-branch-container my-16 flex items-center w-full ${step.branchSide === 'left' ? 'justify-start' : 'justify-end'} step-reveal ${revealedSteps.has(step.number) ? 'is-revealed' : ''}`}
            onMouseEnter={() => setActiveStep(step.number)}
            onMouseLeave={() => setActiveStep(null)}
            style={{ paddingTop: `${index * 2}rem` }} // Stagger branches vertically slightly
          >
            <div
              className={`tree-branch-content bg-yellow-700 p-6 rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2 transform transition-all duration-300 hover:shadow-2xl hover:scale-110 
                          ${step.branchSide === 'left' ? 'mr-auto md:mr-12 lg:mr-20 text-right' : 'ml-auto md:ml-12 lg:ml-20 text-left'} 
                          ${activeStep === step.number ? 'scale-110 shadow-2xl border-2 border-amber-400' : 'border-2 border-transparent'}`}
            >
              {/* Connectors between steps are removed for the central timeline design.
                 The central line visually connects all steps. */}
              <div className="flex items-center mb-2 ">
                {step.branchSide === 'right' && <span className="tree-step-number text-2xl font-troika text-amber-600 mr-3">{step.number}</span>}
                <h3 className="tree-step-title text-xl font-troika text-amber-800 uppercase">{step.title}</h3>
                {step.branchSide === 'left' && <span className="tree-step-number text-2xl font-troika text-amber-600 ml-3">{step.number}</span>}
              </div>
              <p className="tree-step-description text-amber-700 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Win/Lose Outcomes */}
      <div className="win-lose-outcomes-container relative w-full flex justify-center items-start mt-[-20px] md:mt-[-30px] mb-12">
        {/* Placeholder for animated outcome connectors - to be implemented */}

        <div className="flex justify-around w-full max-w-3xl px-4 pt-12 md:pt-20">
          {/* Lose Outcome Card */}
          <div className="outcome-card lose-card bg-red-100 border-2 border-red-400 p-4 rounded-lg shadow-xl w-5/12 md:w-1/3 text-center transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl md:text-2xl font-troika text-red-700 mb-2">{loseText.title}</h4>
            <p className="text-sm md:text-base text-red-600 font-montserrat">{loseText.description}</p>
            {/* Optional: Icon for lose */}
            <div className="text-4xl mt-3">🐿️😢</div>
          </div>

          {/* Win Outcome Card */}
          <div className="outcome-card win-card bg-green-100 border-2 border-green-500 p-4 rounded-lg shadow-xl w-5/12 md:w-1/3 text-center transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl md:text-2xl font-troika text-green-700 mb-2">{winText.title}</h4>
            <p className="text-sm md:text-base text-green-600 font-montserrat">{winText.description}</p>
            {/* Optional: Icon for win */}
            <div className="text-4xl mt-3">🏆🐿️</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameplayPath;
