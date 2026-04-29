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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(232,93,61,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mb-8 reveal">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6 block">Capabilities</span>
          <h2 className="text-6xl md:text-7xl font-serif text-primary leading-[1.05] tracking-tight">
            The power to <br />
            <span className="italic text-accent">perform</span> under pressure.
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
                className="carousel-card w-[85%] md:w-[70%] shrink-0 snap-start aspect-[16/9] relative rounded-[3rem] overflow-hidden bg-[#0A0A0A] border border-white/10 group transition-all duration-700 hover:border-p-4/30"
              >
                {/* Decorative Light Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_0%,rgba(232,93,61,0.25)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

                {/* Content */}
                <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end">
                  <div className="max-w-xl transition-transform duration-700 group-hover:-translate-y-4">
                    <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 whitespace-pre-line leading-[1.1]">
                      {feature.titleInCard}
                    </h3>
                    <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-sm leading-relaxed">
                      {feature.randomText}
                    </p>
                  </div>
                </div>

                {/* Subtle Border Glow */}
                <div className="absolute inset-0 rounded-[3rem] border border-white/5 pointer-events-none group-hover:border-p-4/10 transition-colors duration-700" />
                <div className="absolute inset-0 rounded-[3rem] shadow-[0_0_40px_-10px_rgba(232,93,61,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            ))}
            <div className="w-[10%] md:w-[15%] shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* Info & Controls */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 reveal">
          <div className="max-w-2xl">
            <h4 className="text-3xl font-serif text-primary mb-6">
              {features[currentIndex].title}
            </h4>
            <p className="text-secondary text-xl leading-relaxed font-medium">
              {features[currentIndex].description}
            </p>
          </div>
          
          <div className="flex bg-p-2/40 p-2 rounded-full gap-2 shrink-0 border border-p-3/30">
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
