import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Difference from './components/Difference';
import UndetectableShowcase from './components/UndetectableShowcase';
import Undetectable from './components/Undetectable';
import FAQ from './components/FAQ';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero entrance — direct timeline, no ScrollTrigger (above fold)
      gsap.fromTo('.hero-reveal',
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: 'expo.out', delay: 0.3 }
      );

      // Scroll reveals — batch is more performant than per-element triggers
      ScrollTrigger.batch('.reveal', {
        onEnter: (batch) => {
          gsap.fromTo(batch,
            { y: 44, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'expo.out', overwrite: true }
          );
        },
        start: 'top 88%',
        once: true,
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative" ref={mainRef}>
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <Difference />
        <UndetectableShowcase />
        <Undetectable />
        <FAQ />
        <PreFooter />
      </main>
      <Footer />

      {/* Clean Accent Border & Corner Glows */}
      <div className="fixed inset-0 border-[1px] border-accent/10 pointer-events-none z-[200]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
      </div>

      {/* SVG Displacement Filter */}
      <svg style={{ position: 'fixed', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="displacementFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </div>
  );
};

export default App;
