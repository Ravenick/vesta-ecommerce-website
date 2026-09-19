import type { Plan, PurchaseType } from '../types';

interface PurchaseModalProps {
  plan: Plan;
  type: PurchaseType;
  onClose: () => void;
  onCheckout: () => void;
}

export function PurchaseModal({ plan, type, onClose, onCheckout }: PurchaseModalProps) {
  const typeLabel = type === 'full' ? 'Full Construction Plans' : 'Preview Package';
  const price = type === 'full' ? plan.price : Math.round(plan.price * 0.15);

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-ink-800 border border-white/10 rounded-3xl p-10 text-center animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ink-950/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-ink-600 transition-all"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="font-display text-2xl font-bold text-white mb-2">{typeLabel}</h2>
        <p className="text-sm text-white/50 mb-8">{plan.name}</p>

        <div className="text-5xl font-bold text-accent mb-2">
          ${price.toLocaleString()}
        </div>
        <p className="text-xs text-white/40 mb-8">Secure checkout powered by Stripe</p>

        <button
          onClick={onCheckout}
          className="w-full inline-flex items-center justify-center gap-2 bg-accent text-ink-950 px-6 py-4 rounded-full font-semibold text-sm hover:bg-accent-dark transition-all duration-300 hover:shadow-[0_0_30px_-5px] hover:shadow-accent/40"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75M5.25 14.25h13.5c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125H5.25a1.125 1.125 0 01-1.125-1.125v-5.25c0-.621.504-1.125 1.125-1.125z" />
          </svg>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
