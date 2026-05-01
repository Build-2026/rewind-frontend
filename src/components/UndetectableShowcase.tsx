import React, { useState, useCallback } from 'react';
import { AudioLines, Sparkles } from 'lucide-react';

const HeadingPill: React.FC<{ children: React.ReactNode, variant?: 'blue' | 'grey', icon?: React.ReactNode }> = ({ children, variant = 'blue', icon }) => {
  const bgColor = variant === 'blue' ? 'bg-[#7C9EF7]' : 'bg-[#E6E8EB]';
  const textColor = variant === 'blue' ? 'text-white' : 'text-[#3E4759]';
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${bgColor} ${textColor} font-bold text-[14px] shadow-sm mx-1 transition-transform duration-300 hover:scale-105`}>
      {icon}
      {children}
    </span>
  );
};

const UndetectableShowcase: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.min(Math.max(((e.clientX - rect.left) / rect.width) * 100, 2), 98);
    setSliderPos(pos);
  }, []);

  // Shared code lines for both sides
  const codeLines = [
    { num: '1', code: <span className="text-neutral-400">{"// Fetch data from API and display results"}</span> },
    { num: '2', code: <span>&nbsp;</span> },
    { num: '3', code: <><span className="text-[#D339A3]">import</span> axios <span className="text-[#D339A3]">from</span> <span className="text-[#008E5D]">'axios'</span>;</> },
    { num: '4', code: <span>&nbsp;</span> },
    { num: '5', code: <><span className="text-[#0070E0]">async function</span> <span className="text-[#6F42C1]">fetchUserData</span>(userId) {"{"}</> },
    { num: '6', code: <span className="pl-4">{"try {"}</span> },
    { num: '7', code: <span>&nbsp;</span> },
    { num: '8', code: <span>&nbsp;</span> },
    { num: '9', code: <span>&nbsp;</span> },
    { num: '10', code: <span>&nbsp;</span> },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3979BF 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      
      {/* Ambient glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-100/30 via-sky-100/20 to-indigo-100/30 rounded-full blur-[100px] pointer-events-none" style={{ animation: 'aurora-drift 18s ease-in-out infinite' }} />

      <div className="container relative z-10">
        <div className="text-left mb-16 reveal">
          <h2 className="text-3xl md:text-[2.75rem] font-sans font-bold text-[#3E4759] mb-6 tracking-tight leading-[1.2]">
            How Rewine helps during a meeting
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 reveal">

          {/* ═══ Card 1: Cluely-style Before/After ═══ */}
          <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-visible transform-gpu backface-hidden group/card">
            {/* Blue glow behind frosted glass */}
            <div className="absolute inset-10 bg-[#4A7AFF] blur-[70px] opacity-60 transform-gpu transition-opacity duration-700 group-hover/card:opacity-75" />

            {/* Frosted outer frame */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-[3.5rem] border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden transform-gpu backface-hidden transition-all duration-700 group-hover/card:shadow-[0_40px_80px_-20px_rgba(74,122,255,0.2)]">
              <div className="absolute inset-0 p-6">
                {/* Inner blue card */}
                <div className="bg-[#E8EDFB] rounded-[2rem] h-full w-full shadow-2xl relative overflow-hidden transform-gpu backface-hidden">

                  {/* ── RIGHT SIDE (base): "Invisible to others" ── */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Cluely-style Heading */}
                    <div className="p-8 pb-0">
                      <h3 className="text-[22px] font-sans font-bold text-[#3E4759] leading-[1.3] max-w-[240px]">
                        Rewine
                        <HeadingPill variant="blue" icon={<AudioLines size={14} />}>listens</HeadingPill>
                        in to the conversation
                      </h3>
                    </div>
                    {/* Label */}
                    <div className="flex justify-end p-5">
                      <span className="text-neutral-500 text-[11px] font-semibold tracking-wide">Invisible to others</span>
                    </div>
                    {/* Mac window — plain code, no AI overlay */}
                    <div className="flex-1 px-5 pb-5">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-neutral-200/60">
                        <div className="h-7 bg-[#F5F5F7] flex items-center px-3 gap-1.5 border-b border-neutral-100 shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                          <div className="ml-auto flex items-center gap-2">
                            <span className="text-[9px] text-neutral-300">←</span>
                            <span className="text-[9px] text-neutral-300">→</span>
                            <div className="bg-neutral-100 rounded px-2 py-0.5 text-[8px] text-neutral-400">🔍 fetchUserData</div>
                          </div>
                        </div>
                        <div className="p-4 font-mono text-[9px] leading-[1.8] text-neutral-800 flex-1 overflow-hidden">
                          {codeLines.map((line, i) => (
                            <div key={i} className="flex">
                              <span className="w-6 text-right mr-4 text-neutral-300 select-none">{line.num}</span>
                              <span>{line.code}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── LEFT SIDE (overlay): "Visible to you" — clips with slider ── */}
                  <div
                    className="absolute inset-0 z-20 overflow-hidden transform-gpu backface-hidden"
                    style={{ width: `${sliderPos}%` }}
                  >
                    <div className="absolute inset-0 min-w-[300px]">
                      {/* Label */}
                      <div className="absolute top-5 left-5">
                        <span className="text-[#4A7AFF] text-[11px] font-bold tracking-wide bg-white rounded-md px-3 py-1 shadow-sm border border-blue-100">Visible to you</span>
                      </div>

                      {/* AI Response bubble — floats above the code window */}
                      <div className="absolute top-[48px] left-5 right-5 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-3 border border-neutral-100 z-20">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-cyan-500 text-sm">✦</span>
                          <span className="font-bold text-[10px] text-neutral-800">AI Response</span>
                        </div>
                        <p className="text-[9px] text-neutral-500 leading-relaxed">
                          Add a check for missing <span className="bg-blue-50 text-blue-600 px-1 rounded text-[8px] font-mono">userId</span>.
                          Also handle <span className="bg-blue-50 text-blue-600 px-1 rounded text-[8px] font-mono">data.name</span> safely.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ── SLIDER ── */}
                  <div
                    className="absolute inset-0 z-30 cursor-ew-resize select-none"
                    onMouseMove={(e) => { if (e.buttons === 1) handleSliderMove(e); }}
                    onMouseDown={handleSliderMove}
                  >
                    {/* Vertical line */}
                    <div className="absolute top-0 bottom-0 w-[1px] bg-neutral-400/50" style={{ left: `${sliderPos}%` }}>
                      {/* Handle */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1A1A1A] shadow-xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
                        <span className="text-white text-[10px] font-bold select-none">&lt; &gt;</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* ═══ Card 2: Participants ═══ */}
          <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-visible transform-gpu backface-hidden group/card2">
            <div className="absolute inset-10 bg-[#4A7AFF] blur-[70px] opacity-60 transform-gpu transition-opacity duration-700 group-hover/card2:opacity-75" />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-[3.5rem] border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden transform-gpu backface-hidden transition-all duration-700 group-hover/card2:shadow-[0_40px_80px_-20px_rgba(74,122,255,0.2)]">
              <div className="absolute inset-0 p-8">
                <div className="bg-white rounded-[2.5rem] h-full w-full shadow-[0_20px_50px_rgba(74,122,255,0.15)] relative overflow-hidden p-10 flex flex-col transform-gpu backface-hidden">
                  <div className="mb-8">
                    <h3 className="text-[22px] font-sans font-bold text-[#3E4759] leading-[1.3]">
                      When you need help, Rewine
                      <HeadingPill variant="grey" icon={<Sparkles size={14} />}>assists</HeadingPill>
                      you instantly
                    </h3>
                  </div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-[10px] font-bold text-white opacity-40 uppercase tracking-[0.2em] leading-relaxed">
                      Real-time <br /> Participants
                    </div>
                    <div className="bg-white/20 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20">Verified</div>
                  </div>
                  <div className="space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-4 opacity-10">
                        <div className="w-10 h-10 rounded-full bg-white" />
                        <div className="h-2 w-32 bg-white rounded-full" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col items-center gap-6">
                    <div className="bg-white shadow-xl px-6 py-3 rounded-full flex items-center gap-3 w-fit transition-all duration-500 hover:shadow-[0_8px_30px_rgba(74,122,255,0.25)] hover:scale-105">
                      <div className="w-2.5 h-2.5 bg-[#4A7AFF] rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold text-[#4A7AFF] uppercase tracking-widest">Stealth Tech</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ Card 3: Shortcuts ═══ */}
          <div className="relative aspect-[4/5] rounded-[3.5rem] bg-[#1A1A1A] overflow-hidden transform-gpu backface-hidden group/card3">
            {/* Ambient light effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-indigo-900/10 opacity-0 group-hover/card3:opacity-100 transition-opacity duration-1000" />
            
            <div className="absolute inset-0 p-10 flex flex-col items-center justify-center gap-12">
              <div className="flex gap-6">
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-3xl font-serif backdrop-blur-md transition-all duration-500 group-hover/card3:border-white/20 group-hover/card3:bg-white/10 group-hover/card3:shadow-[0_0_30px_rgba(74,122,255,0.15)]">⌘</div>
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-3xl font-serif backdrop-blur-md transition-all duration-500 group-hover/card3:border-white/20 group-hover/card3:bg-white/10 group-hover/card3:shadow-[0_0_30px_rgba(74,122,255,0.15)]">K</div>
              </div>
              <div className="w-full max-w-[240px] h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-[#4A7AFF] shadow-[0_0_15px_rgba(74,122,255,0.8)] rounded-full transition-all duration-1000 group-hover/card3:w-2/3" />
              </div>
              <p className="text-white/30 text-[11px] font-medium tracking-wider uppercase opacity-0 group-hover/card3:opacity-100 transition-all duration-700 translate-y-2 group-hover/card3:translate-y-0">Instant access with shortcuts</p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 px-4 text-left">
          <div className="group/desc">
            <h3 className="text-2xl font-sans font-bold text-[#3E4759] mb-2 tracking-tight transition-colors duration-300 group-hover/desc:text-accent">Invisible to screen share</h3>
            <p className="text-secondary text-base opacity-60">Rewine never appears in shared screens or recordings.</p>
          </div>
          <div className="group/desc">
            <h3 className="text-2xl font-sans font-bold text-[#3E4759] mb-2 tracking-tight transition-colors duration-300 group-hover/desc:text-accent">Doesn't join meetings</h3>
            <p className="text-secondary text-base opacity-60">No bots, no extra people on the guest list.</p>
          </div>
          <div className="group/desc">
            <h3 className="text-2xl font-sans font-bold text-[#3E4759] mb-2 tracking-tight transition-colors duration-300 group-hover/desc:text-accent">Follows your eyes</h3>
            <p className="text-secondary text-base opacity-60">Move the window exactly where you need it.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UndetectableShowcase;
