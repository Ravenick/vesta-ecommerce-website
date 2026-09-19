import { useState } from 'react';

interface ContactProps {
  onInfo: (message: string) => void;
}

export function Contact({ onInfo }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    onInfo('Message sent! We will get back to you within 24 hours.');
    setName('');
    setEmail('');
    setMessage('');
  };

  const contactInfo = [
    { icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A48.75 48.75 0 0012 5.25a48.75 48.75 0 00-10.5 1.5m19.5 0v10.5a2.25 2.25 0 01-2.25 2.25H3.75a2.25 2.25 0 01-2.25-2.25V6.75', label: 'info@vesta.design' },
    { icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z', label: '+1 (555) 123-4567' },
    { icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z', label: 'San Francisco, CA' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Let's build something
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Have questions about a plan or need custom modifications? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm font-medium text-white/70">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="px-4 py-3.5 bg-ink-800 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:bg-ink-700 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-white/70">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="px-4 py-3.5 bg-ink-800 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:bg-ink-700 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-white/70">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                className="px-4 py-3.5 bg-ink-800 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:bg-ink-700 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-accent text-ink-950 px-8 py-4 rounded-full font-semibold text-sm hover:bg-accent-dark transition-all duration-300 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/40"
            >
              Send Message
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center gap-6 p-8 lg:p-10 bg-ink-800/50 border border-white/5 rounded-3xl">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="text-base text-white/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
