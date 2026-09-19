import { useEffect, useCallback } from 'react';
import type { Plan, PurchaseType } from '../types';

interface PlanDetailModalProps {
  plan: Plan;
  onClose: () => void;
  onPurchase: (plan: Plan, type: PurchaseType) => void;
}

export function PlanDetailModal({ plan, onClose, onPurchase }: PlanDetailModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-ink-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto scrollbar-hide bg-ink-800 border border-white/10 rounded-3xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-ink-950/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-ink-600 transition-all duration-300"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-72 md:h-auto md:min-h-[500px] overflow-hidden">
            <img
              src={plan.image}
              alt={plan.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Info */}
          <div className="p-8 md:p-12 flex flex-col">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-semibold uppercase tracking-wider text-accent mb-5 w-fit">
              {plan.tag}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              {plan.name}
            </h2>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-6">
              {[
                { label: 'Bedrooms', value: plan.beds, icon: 'M2.25 12l8.954-8.955a3 3 0 014.592 0L24.75 12M4.5 9.75v10.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5V9.75' },
                { label: 'Bathrooms', value: plan.baths, icon: 'M9 3.75h6m-6 16.5h6m-9-12h12m-12 6h12m-9 9V3.75m6 0v16.5' },
                { label: 'Sqft', value: plan.sqft, icon: 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                  <span className="text-sm text-white/70">
                    {stat.value} {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              {plan.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/70">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price + Actions */}
            <div className="mt-auto">
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-xs text-white/40 uppercase tracking-wider">Starting at</span>
                <span className="text-4xl font-bold text-white">
                  ${plan.price.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onPurchase(plan, 'full')}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-ink-950 px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-accent-dark transition-all duration-300 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/40"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  Buy Full Plans
                </button>
                <button
                  onClick={() => onPurchase(plan, 'preview')}
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-white/15 text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white/5 hover:border-white/25 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Preview Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
