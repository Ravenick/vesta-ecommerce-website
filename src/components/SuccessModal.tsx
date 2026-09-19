import type { Plan, PurchaseType } from '../types';

interface SuccessModalProps {
  plan: Plan;
  type: PurchaseType;
  onClose: () => void;
}

export function SuccessModal({ plan, type, onClose }: SuccessModalProps) {
  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-ink-800 border border-white/10 rounded-3xl p-10 text-center animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center animate-scale-in">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-white mb-3">Purchase Complete!</h2>
        <p className="text-sm text-white/50 mb-8">
          You have successfully purchased the {plan.name}{' '}
          {type === 'full' ? 'Full Plans' : 'Preview Package'}.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-accent text-ink-950 px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-accent-dark transition-all duration-300"
        >
          Done
        </button>
      </div>
    </div>
  );
}
