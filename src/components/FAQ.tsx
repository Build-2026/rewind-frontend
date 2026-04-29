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
    <section id="faq" className="section-padding bg-white">
      <div className="container max-w-4xl">
        <div className="mb-8 reveal text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6 block">Support</span>
          <h2 className="text-6xl md:text-7xl font-serif text-primary leading-tight">
            Frequently <br />
            <span className="italic text-accent">asked</span> questions.
          </h2>
        </div>

        <div className="space-y-4 reveal">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`group overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                active === i 
                  ? 'bg-white border-p-2 shadow-[0_30px_60px_-20px_rgba(103,20,52,0.1),0_0_30px_-10px_var(--p-2)]' 
                  : 'bg-transparent border-transparent hover:bg-p-2/15'
              }`}
            >
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full px-10 py-8 flex justify-between items-center text-left"
              >
                <h4 className={`text-2xl md:text-3xl font-serif transition-colors duration-500 ${active === i ? 'text-accent' : 'text-primary'}`}>
                  {faq.q}
                </h4>
                <div className={`w-10 h-10 rounded-full border border-black/5 flex items-center justify-center transition-all duration-500 ${active === i ? 'rotate-45 bg-accent text-white border-accent' : 'bg-white text-primary group-hover:border-accent/20'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </div>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  active === i ? 'max-h-[300px] opacity-100 pb-10' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-10">
                  <p className="text-xl text-secondary leading-relaxed font-medium">
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
