import { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#plans', label: 'Plans' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-display text-xl lg:text-2xl font-bold tracking-tight text-white">
              VESTA
            </span>
            <span className="font-display text-xl lg:text-2xl font-bold text-accent">
              .
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-white/70 hover:text-white px-4 py-2 transition-colors">
              Sign In
            </button>
            <button className="text-sm font-semibold bg-accent text-ink-950 px-5 py-2.5 rounded-full hover:bg-accent-dark transition-all duration-300 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/50">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-6 bg-ink-900/95 backdrop-blur-xl border-t border-white/5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 text-sm font-medium text-white/70 border border-white/10 px-4 py-2.5 rounded-full">
              Sign In
            </button>
            <button className="flex-1 text-sm font-semibold bg-accent text-ink-950 px-4 py-2.5 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
