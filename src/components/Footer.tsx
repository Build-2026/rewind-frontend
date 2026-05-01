import React from 'react';

const Footer: React.FC = () => {
  const columns = [
    '#F2FAFF', '#DFF3FC', '#C6E8F8', '#A5D8F1', '#7FC4EA',
    '#76BDE6', '#6EB4E1', '#5998D2', '#4789C9', '#3979BF',
    '#2D69B5', '#2059AA', '#174B9F', '#0D3F94', '#092F76'
  ];

  return (
    <footer className="relative h-[60vh] px-6 overflow-hidden flex flex-col justify-between pt-16 pb-10">
      {/* 📊 Column Background */}
      <div className="absolute inset-0 flex">
        {columns.map((color, i) => (
          <div 
            key={i} 
            className="flex-1 h-full" 
            style={{ backgroundColor: color }} 
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.82)_0%,rgba(242,250,255,0.56)_46%,rgba(255,255,255,0.2)_100%)] pointer-events-none" />
      
      {/* Texture for editorial quality */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto max-w-6xl relative z-10 text-primary flex-grow flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="flex flex-col gap-6 max-w-[280px]">
            <div className="text-4xl font-serif text-primary tracking-normal font-normal">Rewind</div>
            <p className="text-primary/65 text-[15px] leading-relaxed font-sans font-medium">
              High-performance intelligence <br /> 
              for the modern age.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-6">
              <h5 className="text-[11px] font-sans font-bold text-primary/45 uppercase tracking-[0.2em]">Platform</h5>
              <div className="flex flex-col gap-4 text-sm font-sans font-bold text-primary/80">
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1">Desktop App</a>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1">Manifesto</a>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1">Security</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h5 className="text-[11px] font-sans font-bold text-primary/45 uppercase tracking-[0.2em]">Legal</h5>
              <div className="flex flex-col gap-4 text-sm font-sans font-bold text-primary/80">
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1">Privacy</a>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1">Terms</a>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1">Cookies</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h5 className="text-[11px] font-sans font-bold text-primary/45 uppercase tracking-[0.2em]">Connect</h5>
              <div className="flex flex-col gap-4 text-sm font-sans font-bold text-primary/80">
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1">Twitter / X</a>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1">GitHub</a>
                <a href="#" className="hover:text-accent transition-all duration-300 hover:translate-x-1">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 pt-8 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="text-[10px] font-sans font-bold text-primary/45 uppercase tracking-[0.25em]">
            © 2026 Rewind AI.
          </p>
          <div className="hidden sm:block w-[1px] h-3 bg-primary/10" />
          <div className="flex items-center gap-2.5">
            <div className="w-1 h-1 bg-accent rounded-full animate-pulse opacity-70" />
            <span className="text-[9px] font-sans font-bold text-primary/45 uppercase tracking-[0.2em]">Systems Nominal</span>
          </div>
        </div>
        
        <div className="text-[10px] font-sans font-bold text-primary/45 uppercase tracking-[0.25em] flex gap-6">
          <span>v2.0.4</span>
          <span className="text-primary/15">|</span>
          <span>Tokyo, JPN</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
