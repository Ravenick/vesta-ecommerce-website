import { PLANS } from '../data';
import { PlanCard } from './PlanCard';

interface PlansSectionProps {
  onCardClick: (id: number) => void;
}

export function PlansSection({ onCardClick }: PlansSectionProps) {
  return (
    <section id="plans" className="py-24 lg:py-32 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Premium House Plans
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Expertly crafted designs from award-winning architects, ready to build your dream home.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} onClick={onCardClick} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
