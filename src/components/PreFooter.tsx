import React from 'react';

const PreFooter: React.FC = () => {
  const columns = [
    '#F2FAFF', '#DFF3FC', '#C6E8F8', '#A5D8F1', '#7FC4EA',
    '#76BDE6', '#6EB4E1', '#5998D2', '#4789C9', '#3979BF',
    '#2D69B5', '#2059AA', '#174B9F', '#0D3F94', '#092F76'
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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.78)_0%,rgba(242,250,255,0.5)_52%,rgba(255,255,255,0.16)_100%)] pointer-events-none" />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Animated light sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: 'shimmer-slide 8s ease-in-out infinite' }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl reveal text-left">
          <h2 className="text-4xl md:text-[3.25rem] font-serif font-normal text-primary mb-12 tracking-tighter leading-[1]">
            Experience meeting AI <br />
            <span className="italic text-accent">without a trace.</span>
          </h2>

          
          {/* 🚀 Premium Black CTA with Prominent Border & Hover */}
          <button className="btn-shimmer group relative flex items-center justify-center gap-2.5 px-5 h-[46px] rounded-xl font-sans font-medium text-[15px] text-[#F5F5F5] transition-all duration-[250ms] ease-out hover:scale-[1.03] hover:-translate-y-[0.5px] active:scale-[0.98] cursor-pointer shadow-[0_16px_36px_-16px_rgba(9,47,118,0.5)] hover:shadow-[0_22px_48px_-18px_rgba(9,47,118,0.6)] antialiased w-fit">
            {/* Base Layer & Main Black Gradient */}
            <div className="absolute inset-0 bg-p-10 rounded-xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.28),inset_0_-2px_8px_rgba(3,26,72,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-p-4 via-p-5 to-p-7 opacity-100 transition-all duration-[250ms] ease-out group-hover:from-p-3 group-hover:to-p-6" />
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
