import { useEffect, useState, useCallback } from 'react';
import { HERO_SLIDES, PLANS } from '../data';

interface HeroProps {
  onExplore: (id: number) => void;
}

export function Hero({ onExplore }: HeroProps) {
  const [current, setCurrent] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {HERO_SLIDES.map((slide, i) => {
        const plan = PLANS.find((p) => p.id === slide.planId);
        const isActive = i === current;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 cursor-pointer ${
              isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => onExplore(slide.planId)}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out"
              style={{
                backgroundImage: `url('${plan?.image}')`,
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/50 to-ink-950/80" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
              <div
                className={`max-w-2xl transition-all duration-700 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold tracking-widest uppercase text-white/90 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {slide.tag}
                </span>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] text-balance">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-lg mb-8 leading-relaxed">
                  {slide.desc}
                </p>
                <button
                  className="group inline-flex items-center gap-3 bg-white text-ink-950 px-7 py-4 rounded-full font-semibold text-sm hover:bg-accent transition-all duration-300 hover:shadow-[0_0_40px_-5px] hover:shadow-accent/40"
                  onClick={(e) => {
                    e.stopPropagation();
                    onExplore(slide.planId);
                  }}
                >
                  Explore Plan
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(i);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 h-2 bg-accent'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 z-20">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-bounce-slow" />
      </div>
    </section>
  );
}
