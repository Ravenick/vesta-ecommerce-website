import { ABOUT_FEATURES } from '../data';

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Why Vesta
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Built for those who refuse to settle
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10">
              At Vesta, we understand that your home is more than just a building — it's where
              life unfolds, memories are made, and dreams take shape.
            </p>
            <div className="space-y-8">
              {ABOUT_FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={
                        feature.icon === 'compass-drafting'
                          ? 'M12 21a9 9 0 100-18 9 9 0 000 18zm-1-13l3 3m-3-3l-3 3m3-3v6'
                          : feature.icon === 'shield-check'
                          ? 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.06a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21a3.745 3.745 0 01-3.06-1.593 3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12a3.745 3.745 0 011.593-3.06 3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3a3.746 3.746 0 013.06 1.593 3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
                          : 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                      } />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern Architecture"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/10 border border-accent/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-accent/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
