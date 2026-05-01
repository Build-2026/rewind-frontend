import React from 'react';

const Difference: React.FC = () => {
  const points = [
    {
      title: "Local-First AI",
      tag: "Security",
      num: "01",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      title: "Truly Undetectable",
      tag: "Stealth",
      num: "02",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.956 9.956 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
    },
    {
      title: "Zero Setup",
      tag: "Speed",
      num: "03",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full blur-[100px] pointer-events-none" style={{ animation: 'aurora-drift-alt 20s ease-in-out infinite' }} />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-[#3E4759] leading-[1.2] tracking-tight">
              Fundamentally different.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-xs">
            <p className="text-sm text-secondary font-medium leading-relaxed opacity-60">
              Most meeting tools are built for managers. Rewind is built for the person in the seat.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {points.map((point, i) => (
            <div key={i} className="group relative p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] hover:border-accent/10 card-glow">
              {/* Number watermark */}
              <span className="absolute top-8 right-10 text-[5rem] font-serif font-bold text-neutral-100/80 leading-none select-none transition-all duration-700 group-hover:text-accent/8 group-hover:scale-110">
                {point.num}
              </span>
              
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-accent mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_8px_24px_-8px_rgba(57,121,191,0.3)] group-hover:border-accent/20">
                {point.icon}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent/60 mb-3 block">
                {point.tag}
              </span>
              <h3 className="text-2xl font-serif text-[#3E4759] tracking-tight">{point.title}</h3>
              
              {/* Decorative line */}
              <div className="w-0 group-hover:w-16 h-[2px] bg-gradient-to-r from-accent/40 to-accent/10 mt-6 transition-all duration-700 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;
