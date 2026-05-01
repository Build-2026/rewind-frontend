import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Capabilities', href: '#features-carousel' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 flex justify-center w-full transition-all duration-500 ease-out ${scrolled ? 'navbar-scrolled' : 'bg-transparent'}`}>
      <div className="max-w-full px-4 md:px-6 h-12 flex justify-between items-center w-full">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-serif text-primary">
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
            Rewind
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-sans font-medium text-black/80 hover:text-accent transition-all duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-accent/50 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-6">
          <button className="text-[13px] font-sans font-medium text-black/80 hover:text-accent transition-all duration-300">
            Login
          </button>
          <button className="cursor-pointer relative px-4 h-[28px] rounded-full bg-black text-white text-[11px] font-sans font-medium tracking-wide transition-all duration-300 ease-out hover:bg-zinc-800 border border-black shadow-sm hover:-translate-y-[0.5px] hover:shadow-md active:scale-[0.97]">
            Get BETA Version
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
