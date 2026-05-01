import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { 
      q: "How does the real-time assistance work?", 
      a: "Rewind uses local AI models to analyze the live audio stream of your meeting. By processing data on your machine, it can provide instant answers and suggestions without the lag of cloud-based systems." 
    },
    { 
      q: "Is my data secure and private?", 
      a: "Yes, absolutely. Rewind is built with a privacy-first architecture. All processing happens locally on your device. We never store meeting data on our servers, and our application is invisible to the meeting software you use." 
    },
    { 
      q: "Which meeting platforms are supported?", 
      a: "Rewind works as an OS-level overlay, meaning it's compatible with all major meeting platforms including Zoom, Microsoft Teams, Google Meet, and Slack Huddles." 
    },
    {
      q: "Can I use it for in-person meetings?",
      a: "Yes. Rewind can capture and assist with in-person meetings as long as your computer's microphone can clearly pick up the conversation."
    }
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-[50%] left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-50/40 to-transparent rounded-full blur-[100px] pointer-events-none" style={{ animation: 'aurora-drift 25s ease-in-out infinite' }} />

      <div className="container max-w-4xl relative z-10">
        <div className="mb-12 reveal text-left">
          <h2 className="text-4xl md:text-6xl font-serif text-[#3E4759] leading-tight tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4 reveal">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`group overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                active === i 
                  ? 'bg-white border-p-2/45 shadow-[0_30px_70px_-30px_rgba(9,47,118,0.22),0_0_34px_-16px_var(--color-p-2)]' 
                  : 'bg-transparent border-transparent hover:bg-p-2/8 hover:border-p-2/15'
              }`}
            >
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full px-10 py-8 flex justify-between items-center text-left gap-4"
              >
                <h4 className={`text-xl md:text-2xl font-serif font-medium transition-colors duration-500 ${active === i ? 'text-accent' : 'text-[#3E4759]'}`}>
                  {faq.q}
                </h4>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ${active === i ? 'rotate-45 bg-accent text-white border-accent shadow-[0_0_20px_rgba(57,121,191,0.3)]' : 'bg-white text-primary border-black/5 group-hover:border-accent/20 group-hover:shadow-sm'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </div>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  active === i ? 'max-h-[300px] opacity-100 pb-10' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-10">
                  <p className="text-md text-secondary leading-relaxed font-light opacity-80">
                    {faq.a}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
