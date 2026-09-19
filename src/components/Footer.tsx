export function Footer() {
  const quickLinks = ['Browse Plans', 'About Us', 'Contact'];
  const resources = ['FAQ', 'Custom Design', 'Building Guide'];
  const socials = [
    { label: 'Instagram', icon: 'M12 2.25c-2.629 0-2.969.012-4.015.058-1.045.048-1.758.213-2.382.457a4.812 4.812 0 00-1.742 1.134 4.812 4.812 0 00-1.134 1.742c-.244.624-.41 1.337-.457 2.382C2.012 9.031 2 9.371 2 12s.012 2.969.058 4.015c.048 1.045.213 1.758.457 2.382a4.812 4.812 0 001.134 1.742 4.812 4.812 0 001.742 1.134c.624.244 1.337.41 2.382.457C9.031 21.988 9.371 22 12 22s2.969-.012 4.015-.058c1.045-.048 1.758-.213 2.382-.457a4.812 4.812 0 001.742-1.134 4.812 4.812 0 001.134-1.742c.244-.624.41-1.337.457-2.382.046-1.046.058-1.386.058-4.015s-.012-2.969-.058-4.015c-.048-1.045-.213-1.758-.457-2.382a4.812 4.812 0 00-1.134-1.742 4.812 4.812 0 00-1.742-1.134c-.624-.244-1.337-.41-2.382-.457C14.969 2.012 14.629 2 12 2.25z M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z M16.5 4.5a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z' },
    { label: 'Pinterest', icon: 'M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.125 2.55 7.665 6.18 9.15-.087-.78-.165-1.98.033-2.835.18-.78 1.17-4.965 1.17-4.965s-.3-.6-.3-1.485c0-1.395.81-2.437 1.815-2.437.855 0 1.275.645 1.275 1.417 0 .862-.55 2.152-.832 3.345-.237.998.5 1.811 1.483 1.811 1.782 0 3.15-1.879 3.15-4.585 0-2.397-1.723-4.073-4.18-4.073-2.848 0-4.519 2.135-4.519 4.344 0 .86.33 1.781.742 2.282a.3.3 0 01.078.285c-.075.315-.243.998-.276 1.137-.043.183-.144.222-.33.133-1.225-.57-1.99-2.36-1.99-3.798 0-3.09 2.247-5.925 6.483-5.925 3.402 0 6.045 2.424 6.045 5.662 0 3.38-2.13 6.102-5.085 6.102-.993 0-1.927-.517-2.247-1.128l-.612 2.333c-.222.852-.82 1.92-1.222 2.573.922.285 1.9.438 2.918.438 5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z' },
    { label: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
  ];

  return (
    <footer className="bg-ink-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-1 mb-4">
              <span className="font-display text-xl font-bold text-white">VESTA</span>
              <span className="font-display text-xl font-bold text-accent">.</span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Premium architectural house plans designed for modern living. Build your dream home with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-accent transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-accent transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-accent hover:text-ink-950 hover:border-accent transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Vesta Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
