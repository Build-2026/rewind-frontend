import React from 'react';

const Footer: React.FC = () => {
  // 🎨 Cleaned palette: Peach -> White -> Lavender
  const columns = [
    '#E3BABA', '#E9C3C3', '#F0CCCC', '#F6D5D5', '#FCEEEE',
    '#FFFFFF',
    '#F1F1F5', '#E3E3EB', '#D5D5E1', '#C7C7D7', '#B9B9CD', '#ABAAC3', '#9D9DB9', '#8F8FAF', '#8181A5'
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
      
      {/* Texture for editorial quality */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto max-w-6xl relative z-10 text-black flex-grow flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="flex flex-col gap-6 max-w-[280px]">
            <div className="text-4xl font-serif text-black tracking-tight font-normal">Rewind</div>
            <p className="text-black/60 text-[15px] leading-relaxed font-sans font-medium">
              High-performance intelligence <br /> 
              for the modern age.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-6">
              <h5 className="text-[11px] font-sans font-bold text-black/40 uppercase tracking-[0.2em]">Platform</h5>
              <div className="flex flex-col gap-4 text-sm font-sans font-bold text-black/80">
                <a href="#" className="hover:text-black transition-colors duration-300">Desktop App</a>
                <a href="#" className="hover:text-black transition-colors duration-300">Manifesto</a>
                <a href="#" className="hover:text-black transition-colors duration-300">Security</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h5 className="text-[11px] font-sans font-bold text-black/40 uppercase tracking-[0.2em]">Legal</h5>
              <div className="flex flex-col gap-4 text-sm font-sans font-bold text-black/80">
                <a href="#" className="hover:text-black transition-colors duration-300">Privacy</a>
                <a href="#" className="hover:text-black transition-colors duration-300">Terms</a>
                <a href="#" className="hover:text-black transition-colors duration-300">Cookies</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h5 className="text-[11px] font-sans font-bold text-black/40 uppercase tracking-[0.2em]">Connect</h5>
              <div className="flex flex-col gap-4 text-sm font-sans font-bold text-black/80">
                <a href="#" className="hover:text-black transition-colors duration-300">Twitter / X</a>
                <a href="#" className="hover:text-black transition-colors duration-300">GitHub</a>
                <a href="#" className="hover:text-black transition-colors duration-300">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="text-[10px] font-sans font-bold text-black/40 uppercase tracking-[0.25em]">
            © 2026 Rewind AI.
          </p>
          <div className="hidden sm:block w-[1px] h-3 bg-black/10" />
          <div className="flex items-center gap-2.5">
            <div className="w-1 h-1 bg-black rounded-full animate-pulse opacity-40" />
            <span className="text-[9px] font-sans font-bold text-black/40 uppercase tracking-[0.2em]">Systems Nominal</span>
          </div>
        </div>
        
        <div className="text-[10px] font-sans font-bold text-black/40 uppercase tracking-[0.25em] flex gap-6">
          <span>v2.0.4</span>
          <span className="text-black/10">|</span>
          <span>Tokyo, JPN</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
