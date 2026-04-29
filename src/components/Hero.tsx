import React, { useRef, useEffect, useState } from 'react';

const GetForWindowsButton: React.FC = () => (
  <button className="group relative flex items-center justify-center gap-2.5 px-4 h-[42px] rounded-xl font-sans font-medium text-[14px] text-[#F5F5F5] transition-all duration-[250ms] ease-out hover:scale-[1.03] hover:-translate-y-[0.5px] active:scale-[0.98] cursor-pointer shadow-[0_10px_20px_-10px_rgba(229,57,53,0.3)] antialiased">
    {/* Base Layer & Main Gradient */}
    <div className="absolute inset-0 bg-[#2C2C2C] rounded-xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-2px_6px_rgba(0,0,0,0.3)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E85D3D] to-[#961E3F] opacity-90 transition-all duration-[250ms] ease-out group-hover:opacity-100 group-active:opacity-80" />
      <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.25)_0%,transparent_60%)] opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100" />
    </div>

    {/* Inner White Border & Glow */}
    <div className="absolute inset-[1.5px] rounded-[9px] border border-white/40 shadow-[inset_0_0_8px_rgba(255,255,255,0.3)] pointer-events-none z-10" />

    {/* Content Container */}
    <div className="relative z-10 flex items-center gap-2.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] px-1">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-95">
        <rect width="8" height="8" x="3" y="3" rx="1.5" />
        <rect width="8" height="8" x="13" y="3" rx="1.5" />
        <rect width="8" height="8" x="13" y="13" rx="1.5" />
        <rect width="8" height="8" x="3" y="13" rx="1.5" />
      </svg>
      <span className="tracking-wide">Get for Windows</span>
    </div>
  </button>
);

const Hero: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!buttonContainerRef.current) return;
      const rect = buttonContainerRef.current.getBoundingClientRect();
      setIsSticky(rect.bottom < 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-24 pb-0 overflow-hidden min-h-screen flex flex-col items-center text-center bg-[#F9F4F0]">
      {/* Warm Sky Background */}
      <div className="absolute top-0 left-0 w-full h-[85vh] z-0 bg-gradient-to-b from-[#FBE3C5]/30 via-[#F9F4F0] to-transparent pointer-events-none animate-pulse will-change-opacity" style={{ animationDuration: '8s' }} />

      {/* Decorative Background Elements */}
      <div className="sexy-blob blob-1 !opacity-20 z-0 relative" />
      <div className="sexy-blob blob-2 !opacity-10 z-0 relative" />

      {/* Mountain Background */}
      <div className="absolute left-0 right-0 w-full z-0 pointer-events-none flex flex-col items-center" style={{ top: '25vh' }}>
        {/* Sun */}
        <div className="absolute right-[20%] top-[20%] flex items-center justify-center z-20">
          <div className="w-24 h-24 bg-white rounded-full blur-[4px] relative z-20 shadow-[0_0_80px_rgba(245,169,125,0.6)] animate-pulse will-change-opacity" style={{ animationDuration: '3s' }} />
          <div className="absolute w-48 h-48 bg-white/90 rounded-full blur-[24px] z-10" />
          <div className="absolute w-[120vw] h-[1px] bg-white/60 blur-[2px] z-10" />
          <div className="absolute w-[80vw] h-[3px] bg-[#F5A97D]/30 blur-[8px] z-10" />
          <div className="absolute w-[400px] h-[400px] bg-[#F5A97D]/10 rounded-full blur-[80px] z-0 animate-pulse will-change-opacity" style={{ animationDuration: '6s' }} />
        </div>

        {/* Mountain Image */}
        <img
          src="/mountainHero.png"
          alt="Mountain scenery"
          className="w-full h-auto object-cover object-bottom relative z-10 opacity-90 transition-transform duration-[2000ms] hover:scale-105"
        />

        {/* Mountain Fade */}
        <div className="absolute bottom-[-5%] left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-[#F9F4F0] z-20 pointer-events-none" />
      </div>

      <div className="container relative z-30 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-[5rem] font-serif text-gradient mb-6 leading-[1.1] tracking-tight hero-reveal">
            Undetectable AI with instant answers for meetings
          </h1>
          <p className="text-lg md:text-[22px] font-sans font-medium text-secondary/80 max-w-2xl mx-auto leading-snug hero-reveal">
            Rewind turns every interview into a flawless performance with real-time precision and zero missed details.
          </p>
        </div>

        {/* Main Hero Button */}
        <div ref={buttonContainerRef} className="mb-24 flex justify-center min-h-[50px] hero-reveal">
          <GetForWindowsButton />
        </div>

        {/* Sticky CTA — appears when main button scrolls out */}
        <div
          className={`fixed top-6 right-6 md:right-10 z-[110] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isSticky
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <GetForWindowsButton />
        </div>

        {/* Product Mockup */}
        <div className="relative w-full max-w-5xl mx-auto mt-16 reveal pb-24 z-30 group hover:-translate-y-2 transition-transform duration-700 ease-out">
          <div className="rounded-[2.5rem] overflow-hidden border border-white/40 relative bg-white/20 backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(103,20,52,0.1)] group-hover:shadow-[0_50px_120px_-20px_rgba(103,20,52,0.15),0_0_60px_-15px_var(--p-2)] transition-all duration-700">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
              alt="Meeting Scene"
              className="w-full aspect-video object-cover opacity-90"
            />
            <div className="absolute inset-4 border border-white/60 pointer-events-none rounded-[1.5rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]" />

            {/* Overlay UI Elements */}
            <div className="absolute inset-0 flex flex-col items-center justify-between p-12 pointer-events-none">
              {/* Top Transcript/AI Card */}
              <div className="w-full max-w-2xl bg-white/95 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/60 text-left shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_rgba(103,20,52,0.15),0_0_30px_-5px_var(--p-3)] pointer-events-auto">
                <div className="flex justify-end mb-6">
                  <button className="bg-gradient-to-r from-accent to-accent-hover text-white px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20 transition-all hover:shadow-accent/40 hover:-translate-y-0.5">What should I say?</button>
                </div>
                <p className="text-primary font-serif text-xl leading-relaxed mb-8">
                  "A <span className="text-accent italic">discounted cash flow model</span> values a company by projecting future free cash flows and discounting them to present value using the weighted average cost of capital."
                </p>
                <div className="flex flex-wrap gap-8 text-[9px] text-secondary font-bold uppercase tracking-[0.2em] border-t border-neutral-200 pt-6">
                  <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">Assist</span>
                  <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">Suggestions</span>
                  <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">Follow-up</span>
                  <span className="flex items-center gap-2 underline decoration-accent/30 underline-offset-4 text-primary cursor-pointer">Recap</span>
                </div>
              </div>

              {/* Bottom Control Bar */}
              <div className="flex items-center gap-4 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full border border-white/40 shadow-xl transition-transform duration-500 hover:scale-105 pointer-events-auto">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-lg text-primary text-xs font-bold shadow-sm">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" /> Hide
                </div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Section Fade to white */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-white z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
