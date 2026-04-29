import React, { useState } from 'react';

const UndetectableShowcase: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-8 reveal">
          <h2 className="text-5xl md:text-7xl font-serif text-primary mb-6 tracking-tight">
            Undetectable in every way
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-medium">
            Suite of features to use Rewind without a trace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 reveal">
          <div className="flex flex-col gap-8">
            <div className="aspect-[4/5] rounded-[2.5rem] bg-[#F7C9A1]/15 p-8 flex flex-col relative overflow-hidden border border-p-3/20 shadow-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(247,201,161,0.2)]">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/60 flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-sm font-bold text-primary opacity-80 uppercase tracking-wider">Meeting participants (4)</h4>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[10px] font-bold text-green-600 uppercase">No bots detected</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Gina Huels", email: "ginahue65@cluely.com", role: "Owner" },
                    { name: "Todd Cremin", email: "todd.cremin@cluely.com", role: "Speaker" },
                    { name: "Holly Gleason", email: "holly_gleaso1972@cluely.com", role: "Speaker" },
                    { name: "Tomas Hansen", email: "tomas_hansen@cluely.com", role: "Speaker" }
                  ].map((user, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-neutral-200 border border-black/5" />
                        <div>
                          <p className="text-sm font-bold text-primary">{user.name}</p>
                          <p className="text-[10px] text-neutral-400 font-medium">{user.email}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{user.role}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bottom UI Bar */}
              <div className="mt-6 flex justify-between items-center px-2">
                <div className="flex items-center gap-2 opacity-30">
                   <div className="w-6 h-6 rounded-full bg-primary" />
                   <div className="text-[10px] font-bold uppercase tracking-widest">Rewind</div>
                </div>
                <div className="opacity-30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg text-secondary leading-relaxed">
                <span className="text-primary font-bold">Doesn't join meetings.</span> Rewind never joins your meetings, so there are no bots and no extra people on the guest list.
              </p>
            </div>
          </div>

          {/* Card 2: Invisible to screen share (Slider) */}
          <div className="flex flex-col gap-8">
            <div className="aspect-[4/5] rounded-[2.5rem] bg-[#FBE3C5]/20 p-4 flex flex-col relative overflow-hidden border border-p-2/20 shadow-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,227,197,0.3)]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-black/[0.03]">
                {/* Left Side (Visible to you) */}
                <div className="absolute inset-0 z-10 flex flex-col p-6 pointer-events-none" style={{ width: `${sliderPos}%`, overflow: 'hidden' }}>
                  <div className="min-w-[320px]">
                    <div className="bg-[#52525B] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg w-fit mb-4">Visible to you</div>
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-black/5 w-full">
                       <div className="flex items-center gap-2 mb-4">
                          <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">AI Response</span>
                       </div>
                       <div className="h-2 w-full bg-neutral-100 rounded-full mb-2" />
                       <div className="h-2 w-2/3 bg-neutral-100 rounded-full mb-2" />
                       <div className="h-2 w-3/4 bg-neutral-100 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Right Side (Invisible to others) */}
                <div className="absolute inset-0 z-0 flex flex-col items-end p-6 bg-neutral-50">
                  <div className="bg-[#52525B] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg w-fit mb-4">Invisible to others</div>
                  {/* Blurred/Empty state */}
                  <div className="w-[80%] h-32 bg-white rounded-xl border border-black/5 p-4 flex flex-col gap-2">
                    <div className="h-2 w-full bg-neutral-50 rounded-full" />
                    <div className="h-2 w-2/3 bg-neutral-50 rounded-full" />
                  </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute inset-0 z-20 cursor-ew-resize"
                  onMouseMove={(e) => {
                    if (e.buttons === 1) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = ((e.clientX - rect.left) / rect.width) * 100;
                      setSliderPos(Math.max(0, Math.min(100, x)));
                    }
                  }}
                  onMouseDown={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    setSliderPos(Math.max(0, Math.min(100, x)));
                  }}
                >
                  <div 
                    className="absolute top-0 bottom-0 w-0.5 bg-neutral-400 pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#18181B] flex items-center justify-center text-white shadow-xl">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" transform="rotate(90 10 10)" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg text-secondary leading-relaxed">
                <span className="text-primary font-bold">Invisible to screen share.</span> Rewind never shows up in shared screens, recordings, or external meeting tools.
              </p>
            </div>
          </div>

          {/* Card 3: Follows your eyes (Shortcuts) */}
          <div className="flex flex-col gap-8">
            <div className="aspect-[4/5] rounded-[2.5rem] bg-[#F5A97D]/10 p-8 flex flex-col items-center justify-center relative overflow-hidden border border-p-4/15 shadow-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,169,125,0.15)]">
               {/* Shortcuts UI */}
               <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-white/60 flex flex-col items-center gap-8">
                 <div className="flex items-center gap-4">
                   <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-black/5 flex flex-col items-center justify-center gap-1">
                     <span className="text-xl">⌘</span>
                     <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">command</span>
                   </div>
                   <span className="text-2xl text-neutral-300">+</span>
                   <div className="flex flex-wrap gap-2 w-32">
                     <div className="w-10 h-10 rounded-lg bg-white shadow-md border border-black/5 flex items-center justify-center">↑</div>
                     <div className="w-10 h-10 rounded-lg bg-white shadow-md border border-black/5 flex items-center justify-center">↓</div>
                     <div className="w-10 h-10 rounded-lg bg-white shadow-md border border-black/5 flex items-center justify-center">←</div>
                     <div className="w-10 h-10 rounded-lg bg-white shadow-md border border-black/5 flex items-center justify-center">→</div>
                   </div>
                 </div>
                 
                 <div className="w-full h-1 bg-neutral-100 rounded-full relative">
                   <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-md" />
                 </div>
               </div>

               {/* Background Decorative Circles */}
               <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            </div>
            <div>
              <p className="text-lg text-secondary leading-relaxed">
                <span className="text-primary font-bold">Follows your eyes.</span> Rewind window is fully moveable so you can position it exactly where you're looking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UndetectableShowcase;
