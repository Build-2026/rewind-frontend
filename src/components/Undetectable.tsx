import React, { useRef, useState, useEffect } from 'react';

const features = [
  {
    id: 1,
    title: 'Precision Capture',
    titleInCard: 'Unrivaled\nPrecision',
    randomText: 'Every nuance, every tone, captured in high-fidelity for absolute clarity.',
    description: 'Our proprietary engine records meetings with 99.9% accuracy, identifying multiple speakers and subtle vocal cues.',
  },
  {
    id: 2,
    title: 'Local Privacy',
    titleInCard: 'Absolute\nPrivacy',
    randomText: 'Your data stays where it belongs. On your machine, never in the cloud.',
    description: 'Rewind runs entirely as a local overlay. No detectable bots, no server-side recordings, and zero trace in call history.',
  },
  {
    id: 3,
    title: 'Instant Insights',
    titleInCard: 'Instant\nAnswers',
    randomText: 'Query your live meeting like it\'s a search engine.',
    description: 'Use real-time AI to pull facts, figures, and historical context while the conversation is still happening.',
  },
  {
    id: 4,
    title: 'Seamless Workflow',
    titleInCard: 'Invisible\nHelper',
    randomText: 'A powerful assistant that never gets in the way.',
    description: 'Integrating directly into your OS, Rewind provides a transparent overlay that feels like a native part of your meeting software.',
  }
];

const Undetectable: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index) && index < features.length) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.6,
      }
    );

    const cards = scrollRef.current.querySelectorAll('.carousel-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.carousel-card');
    const childElement = cards[index] as HTMLElement;
    if (childElement) {
      const scrollPosition = childElement.offsetLeft - scrollRef.current.offsetLeft;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const next = () => {
    if (currentIndex < features.length - 1) scrollTo(currentIndex + 1);
  };

  const prev = () => {
    if (currentIndex > 0) scrollTo(currentIndex - 1);
  };

  return (
    <section id="features-carousel" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-x-0 top-1/3 h-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(127,196,234,0.16)_24%,rgba(57,121,191,0.1)_60%,transparent_100%)] blur-3xl pointer-events-none" />

      {/* Ambient floating orb */}
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-gradient-to-tl from-indigo-100/40 to-transparent rounded-full blur-[80px] pointer-events-none" style={{ animation: 'aurora-drift-alt 22s ease-in-out infinite' }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mb-12 reveal text-left">
          <h2 className="text-4xl md:text-6xl font-serif text-[#3E4759] leading-[1.2] tracking-tight">
            The power to perform under pressure
          </h2>
        </div>
        
        {/* Carousel Container */}
        <div className="relative reveal">
          <div 
            ref={scrollRef}
            className="flex items-center overflow-x-auto snap-x snap-mandatory gap-8 pb-4 relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              #features-carousel .flex::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {features.map((feature, idx) => (
              <div 
                key={feature.id}
                data-index={idx}
                className="carousel-card w-[85%] md:w-[70%] shrink-0 snap-start aspect-[16/9] relative rounded-[2rem] overflow-hidden bg-p-10 border border-p-2/10 group transition-all duration-700 hover:border-p-3/45"
              >
                {/* Decorative Light Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(127,196,234,0.28)_0%,transparent_48%,rgba(13,63,148,0.24)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(3,26,72,0.84)_100%)]" />

                {/* Card number indicator */}
                <div className="absolute top-8 right-10 text-white/10 font-serif text-[6rem] leading-none select-none transition-all duration-700 group-hover:text-white/15 group-hover:scale-105">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end">
                  <div className="max-w-xl transition-transform duration-700 group-hover:-translate-y-4">
                    <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 whitespace-pre-line leading-[1.1] tracking-tight">
                      {feature.titleInCard}
                    </h3>
                    <p className="text-p-2/75 text-lg md:text-xl font-medium max-w-sm leading-relaxed">
                      {feature.randomText}
                    </p>
                  </div>
                </div>

                {/* Subtle Border Glow */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none group-hover:border-p-3/20 transition-colors duration-700" />
                <div className="absolute inset-0 rounded-[2rem] shadow-[0_0_46px_-14px_rgba(127,196,234,0.28)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            ))}
            <div className="w-[10%] md:w-[15%] shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* Info & Controls */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 reveal">
          <div className="max-w-2xl">
            <h4 className="text-3xl font-serif text-[#3E4759] mb-2 tracking-tight">
              {features[currentIndex].title}
            </h4>
            {/* Progress dots */}
            <div className="flex gap-2 mt-4">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentIndex 
                      ? 'w-8 bg-accent' 
                      : 'w-1.5 bg-accent/20 hover:bg-accent/40'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex bg-p-2/16 p-2 rounded-full gap-2 shrink-0 border border-p-3/25 shadow-[0_18px_46px_-30px_rgba(9,47,118,0.24)]">
            <button 
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-14 h-14 rounded-full flex items-center justify-center text-primary hover:bg-white hover:shadow-md disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={next}
              disabled={currentIndex === features.length - 1}
              className="w-14 h-14 rounded-full flex items-center justify-center text-primary hover:bg-white hover:shadow-md disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Undetectable;
