import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Capabilities', href: '#features-carousel' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-40 flex justify-center w-full">
      <div className="max-w-full px-6 md:px-10 h-16 flex justify-between items-center w-full bg-transparent border-transparent">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-serif text-primary" style={{ letterSpacing: '-0.02em' }}>
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
            Rewind
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-sans font-medium text-slate-500 hover:text-black transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-8">
          <button className="text-[14px] font-sans font-medium text-slate-500 hover:text-black transition-colors duration-300">
            Login
          </button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-[13px] font-sans font-medium hover:bg-black transition-all duration-300 shadow-lg shadow-black/5 active:scale-95">
            Get Rewind
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
