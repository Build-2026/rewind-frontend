import React from 'react';

const Difference: React.FC = () => {
  const points = [
    {
      title: "Local-First AI",
      desc: "Unlike other tools that send your meeting audio to the cloud, Rewind processes everything on your device. Zero latency, total privacy.",
      tag: "Security"
    },
    {
      title: "Truly Undetectable",
      desc: "We don't join calls as a bot. Rewind lives as a system-level overlay, meaning no one—not even the platform—knows you're using it.",
      tag: "stealth"
    },
    {
      title: "Zero Setup",
      desc: "No complicated integrations or API keys. Download, launch, and start performing in under 60 seconds.",
      tag: "Speed"
    }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-4xl reveal mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6 block">The Rewind Edge</span>
          <h2 className="text-6xl md:text-7xl font-serif text-primary leading-[1.05] tracking-tight mb-8">
            Why we are <br />
            <span className="italic text-accent">fundamentally</span> different.
          </h2>
          <p className="text-xl text-secondary leading-relaxed max-w-2xl font-medium">
            Most meeting tools are built for managers. Rewind is built for the person in the seat—the one who needs to perform, respond, and lead without distractions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {points.map((point, i) => (
            <div key={i} className="group premium-card premium-card-hover p-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 py-1.5 px-4 bg-p-2/30 rounded-full border border-p-3/20">
                  {point.tag}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">{point.title}</h3>
              <p className="text-secondary text-base leading-relaxed font-medium">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;
