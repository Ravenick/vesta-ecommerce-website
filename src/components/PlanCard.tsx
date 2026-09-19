import type { Plan } from '../types';

interface PlanCardProps {
  plan: Plan;
  onClick: (id: number) => void;
  index: number;
}

export function PlanCard({ plan, onClick, index }: PlanCardProps) {
  return (
    <div
      onClick={() => onClick(plan.id)}
      className="group relative bg-ink-800/50 border border-white/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-accent/20 hover:bg-ink-700/50 hover:-translate-y-2 animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={plan.image}
          alt={plan.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-transparent to-transparent opacity-60" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ink-950/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold uppercase tracking-wider text-accent">
          {plan.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300">
          {plan.name}
        </h3>
        <div className="flex items-center gap-5 mb-5 text-sm text-white/50">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a3 3 0 014.592 0L24.75 12M4.5 9.75v10.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5V9.75" />
            </svg>
            {plan.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75h6m-6 16.5h6m-9-12h12m-12 6h12m-9 9V3.75m6 0v16.5" />
            </svg>
            {plan.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
            </svg>
            {plan.sqft} sqft
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            ${plan.price.toLocaleString()}
          </span>
          <span className="text-sm font-medium text-accent group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
            View Details
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
