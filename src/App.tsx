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
    <div className="min-h-screen flex flex-col relative bg-[#F5F2EB]" ref={mainRef}>
      <Navbar />
      <main className="flex-grow relative z-10">        <Hero />
        <UndetectableShowcase />
        <Difference />
        <Undetectable />

        <FAQ />
        <PreFooter />
      </main>
      <Footer />

      {/* Subtle Corner Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-[200]">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/4 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/4 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
