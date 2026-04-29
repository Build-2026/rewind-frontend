import React from 'react';

const PreFooter: React.FC = () => {
  // 🎨 Palette: Peach -> White -> Lavender
  const columns = [
    '#E3BABA', '#E9C3C3', '#F0CCCC', '#F6D5D5', '#FCEEEE',
    '#FFFFFF',
    '#F1F1F5', '#E3E3EB', '#D5D5E1', '#C7C7D7', '#B9B9CD', '#ABAAC3', '#9D9DB9', '#8F8FAF', '#8181A5'
  ];

  return (
    <section className="h-[40vh] relative overflow-hidden flex flex-col justify-center">
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
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container relative z-10">
        <div className="max-w-2xl reveal text-left">
          <h2 className="text-3xl md:text-[2.85rem] font-serif font-normal text-black mb-3 tracking-tight leading-[1.1]">
            Meeting AI that helps during the call, not after.
          </h2>
          
          <div className="mb-6">
            <p className="text-lg md:text-[1.35rem] font-sans font-medium text-black/50 tracking-tight leading-relaxed">
              Try Rewind on your next meeting today.
            </p>
          </div>
          
          {/* 🚀 Premium Black CTA with Prominent Border & Hover */}
          <button className="group relative flex items-center justify-center gap-2.5 px-5 h-[46px] rounded-xl font-sans font-medium text-[15px] text-[#F5F5F5] transition-all duration-[250ms] ease-out hover:scale-[1.03] hover:-translate-y-[0.5px] active:scale-[0.98] cursor-pointer shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] antialiased w-fit">
            {/* Base Layer & Main Black Gradient */}
            <div className="absolute inset-0 bg-[#000000] rounded-xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-2px_6px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#333333] to-[#000000] opacity-100 transition-all duration-[250ms] ease-out group-hover:from-[#444444] group-hover:to-[#050505]" />
              {/* More prominent radial glow on hover */}
              <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.35)_0%,transparent_60%)] opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100" />
            </div>

            {/* Prominent Inner Border & Glow */}
            <div className="absolute inset-[1.2px] rounded-[9.5px] border border-white/30 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] pointer-events-none z-10 transition-colors duration-300 group-hover:border-white/50" />

            {/* Content Container */}
            <div className="relative z-10 flex items-center gap-2.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] px-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-100 transition-transform duration-300 group-hover:scale-110">
                <rect width="8" height="8" x="3" y="3" rx="1.5" />
                <rect width="8" height="8" x="13" y="3" rx="1.5" />
                <rect width="8" height="8" x="13" y="13" rx="1.5" />
                <rect width="8" height="8" x="3" y="13" rx="1.5" />
              </svg>
              <span className="tracking-wide">Get for Windows</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
