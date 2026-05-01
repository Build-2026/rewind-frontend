import React, { useRef, useEffect, useState } from 'react';

import { Home, Settings, Search } from 'lucide-react';
import { Dock, DockIcon } from '@/components/ui/dock';

const Icons = {
  gitHub: (props: any) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
    </svg>
  ),
  chrome: (props: any) => (
    <svg viewBox="0 0 48 48" {...props}>
      <defs>
        <linearGradient id="a" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#d93025" />
          <stop offset="1" stop-color="#ea4335" />
        </linearGradient>
        <linearGradient id="b" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fcc934" />
          <stop offset="1" stop-color="#fbbc04" />
        </linearGradient>
        <linearGradient id="c" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#1e8e3e" />
          <stop offset="1" stop-color="#34a853" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="23.9947" r="12" style={{ fill: '#fff' }} />
      <path d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z" style={{ fill: 'none' }} />
      <path d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z" fill="url(#a)" />
      <circle cx="24" cy="24" r="9.5" style={{ fill: '#1a73e8' }} />
      <path d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z" fill="url(#b)" />
      <path d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z" fill="url(#c)" />
    </svg>
  ),
};

const GetForWindowsButton: React.FC = () => (
  <button className="btn-shimmer group relative flex items-center justify-center gap-2.5 px-4 h-[42px] rounded-xl font-sans font-medium text-[14px] text-[#F5F5F5] transition-all duration-[350ms] ease-out hover:scale-[1.03] hover:-translate-y-[1px] active:scale-[0.98] cursor-pointer shadow-[0_20px_50px_-12px_rgba(13,63,148,0.45),0_0_20px_rgba(57,121,191,0.25)] hover:shadow-[0_25px_60px_-12px_rgba(13,63,148,0.55),0_0_30px_rgba(57,121,191,0.35)] antialiased border border-white/20">
    {/* Base Layer & Main Gradient */}
    <div className="absolute inset-0 bg-[#031A48] rounded-xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-2px_8px_rgba(3,26,72,0.45)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7FC4EA] via-[#3979BF] to-[#0D3F94] opacity-95 transition-all duration-[250ms] ease-out group-hover:opacity-100 group-active:opacity-85" />
      <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.4)_0%,transparent_60%)] opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100" />
    </div>

    {/* Intense Rim Glow (projects from edge to inside) */}
    <div className="absolute inset-0 rounded-xl shadow-[inset_0_1.5px_4px_rgba(255,255,255,0.6),inset_0_0_12px_rgba(255,255,255,0.3),inset_0_0_6px_rgba(255,255,255,0.7)] pointer-events-none z-10" />

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

  const titleRef = useRef<HTMLHeadingElement>(null);
  const accentRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    }

    if (!titleRef.current) return;
    
    // Title Coordinates (%)
    const titleRect = titleRef.current.getBoundingClientRect();
    const mx = ((e.clientX - titleRect.left) / titleRect.width) * 100;
    const my = ((e.clientY - titleRect.top) / titleRect.height) * 100;
    titleRef.current.style.setProperty('--mx', `${mx}%`);
    titleRef.current.style.setProperty('--my', `${my}%`);

    // Accent Coordinates (%)
    if (accentRef.current) {
      const accentRect = accentRef.current.getBoundingClientRect();
      const ax = ((e.clientX - accentRect.left) / accentRect.width) * 100;
      const ay = ((e.clientY - accentRect.top) / accentRect.height) * 100;
      accentRef.current.style.setProperty('--ax', `${ax}%`);
      accentRef.current.style.setProperty('--ay', `${ay}%`);
    }
  };

  return (
    <section ref={heroRef} onMouseMove={handleMouseMove} className="group/hero relative pt-24 pb-16 overflow-hidden min-h-screen flex flex-col items-center text-center">
      {/* Abstract Striped Background — Sharp Bands with Overlay Light */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* 22 Opaque Bands (The Glass Panels) */}
        <div className="absolute inset-0 flex z-0">
          {[
            '#95a6c1', '#9fb0c9', '#a6b7cf', '#afbfd6', '#b6c7dc',
            '#bdcde2', '#c5d4e8', '#cbdaec', '#d3e1f0', '#dae7f4',
            '#e1ebf7', '#e7eff9', '#ebf3fa', '#e5edf6', '#dae5f2',
            '#cedcee', '#c1d3e8', '#b5cbe4', '#a9c2df', '#9cb8da',
            '#8fafd5', '#84a6d0'
          ].map((color, i) => (
            <div key={`band-${i}`} className="flex-1 h-full" style={{ backgroundColor: color }} />
          ))}
        </div>

        {/* Cursor tracking orange glow (Overlaying the panels) */}
        <div 
          className="absolute pointer-events-none opacity-0 group-hover/hero:opacity-100 z-10"
          style={{
            top: 'var(--mouse-y, 50%)',
            left: 'var(--mouse-x, 50%)',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(255, 110, 0, 0.6) 0%, rgba(255, 80, 0, 0.15) 40%, transparent 60%)',
            filter: 'blur(40px)',
            mixBlendMode: 'overlay',
            transition: 'top 0.4s cubic-bezier(0.2, 0.9, 0.3, 1), left 0.4s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.5s ease'
          }}
        />

        {/* Top-to-bottom soft lighting to give it depth */}
        <div className="absolute inset-0 pointer-events-none z-20" style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.02) 100%)'
        }} />

        {/* Smooth Bottom Fade to White to seamlessly blend with the next section */}
        <div className="absolute bottom-0 left-0 w-full h-[60vh] pointer-events-none bg-gradient-to-b from-transparent via-white/80 to-white z-20" />
      </div>

      {/* ═══ Animated Aurora Orbs ═══ */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sky-300/25 via-blue-400/15 to-transparent blur-[100px]"
          style={{ animation: 'aurora-drift 12s ease-in-out infinite' }}
        />
        <div
          className="absolute top-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-indigo-300/20 via-cyan-300/10 to-transparent blur-[90px]"
          style={{ animation: 'aurora-drift-alt 16s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-[30%] left-[35%] w-[600px] h-[300px] rounded-full bg-gradient-to-r from-blue-200/15 via-sky-300/20 to-transparent blur-[120px]"
          style={{ animation: 'aurora-drift 20s ease-in-out infinite 4s' }}
        />
      </div>

      {/* ═══ Floating Light Particles ═══ */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 bg-blue-300/50 rounded-full" style={{ animation: 'particle-float 10s ease-in-out infinite' }} />
        <div className="absolute top-[35%] left-[70%] w-1 h-1 bg-sky-400/40 rounded-full" style={{ animation: 'particle-float 14s ease-in-out infinite 2s' }} />
        <div className="absolute top-[50%] left-[40%] w-1.5 h-1.5 bg-indigo-300/30 rounded-full" style={{ animation: 'particle-float 12s ease-in-out infinite 5s' }} />
        <div className="absolute top-[25%] left-[55%] w-1 h-1 bg-cyan-300/50 rounded-full" style={{ animation: 'particle-float 16s ease-in-out infinite 3s' }} />
        <div className="absolute top-[60%] left-[25%] w-1 h-1 bg-blue-400/35 rounded-full" style={{ animation: 'particle-float 11s ease-in-out infinite 7s' }} />
        <div className="absolute top-[45%] left-[80%] w-1.5 h-1.5 bg-sky-300/45 rounded-full" style={{ animation: 'particle-float 13s ease-in-out infinite 1s' }} />
      </div>

      <div className="container relative z-30 px-4">
        <div className="hero-copy max-w-6xl mx-auto text-center mt-12 md:mt-16 mb-10 md:mb-16">
          <h1 
            ref={titleRef}
            className="hero-title interactive-title text-[3.25rem] md:text-[5.25rem] font-serif font-medium mb-8 leading-[0.95] tracking-[-0.03em] hero-reveal group"
          >
            <span className="block pointer-events-none">Undetectable AI with</span>
            <span className="block pointer-events-none">
              <span ref={accentRef} className="hero-title-accent px-1">instant answers</span> for meetings
            </span>
          </h1>

          {/* ═══ Subtitle ═══ */}
          <p className="text-lg md:text-xl text-secondary/55 font-sans font-light max-w-2xl mx-auto leading-relaxed hero-reveal">
            The invisible AI companion that listens, understands, and delivers
            <br className="hidden md:block" />
            {' '}real-time intelligence — without anyone knowing.
          </p>
        </div>




        {/* Main Hero Button */}
        <div ref={buttonContainerRef} className="mb-12 flex justify-center min-h-[50px] hero-reveal">
          <GetForWindowsButton />
        </div>

        {/* Sticky CTA — appears when main button scrolls out */}
        <div
          className={`fixed top-2 right-4 md:right-8 z-[150] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isSticky
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <GetForWindowsButton />
        </div>

        {/* Product Mockup — with floating animation */}
        <div className="relative w-full max-w-5xl mx-auto mt-8 reveal pb-24 z-30">
          <div className="rounded-[2rem] overflow-hidden border border-white/55 relative bg-white/30 backdrop-blur-md shadow-[0_42px_120px_-42px_rgba(9,47,118,0.32)]">
            <img
              src="/mac.png"
              alt="Rewind UI on macOS"
              className="w-full aspect-video object-top object-cover opacity-95"
            />
            {/* Massive Inner Glow Overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-[2rem] shadow-[inset_0_0_60px_rgba(255,255,255,0.8),inset_0_0_20px_rgba(255,255,255,1)] z-10" />

            {/* macOS Style Dock using Magic UI */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
              <Dock direction="middle">
                <DockIcon className="bg-white/10 border-white/20">
                  <Home className="size-full text-white/90" />
                </DockIcon>
                <DockIcon className="bg-white/10 border-white/20">
                  <Icons.gitHub className="size-full text-white/90" />
                </DockIcon>
                <DockIcon className="bg-white/10 border-white/20">
                  <Icons.chrome className="size-full" />
                </DockIcon>
                <DockIcon className="bg-white/10 border-white/20">
                  <Settings className="size-full text-white/90" />
                </DockIcon>
                <DockIcon className="bg-white/10 border-white/20">
                  <Search className="size-full text-white/90" />
                </DockIcon>
              </Dock>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
