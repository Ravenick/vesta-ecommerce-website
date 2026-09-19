import { TICKER_ITEMS } from '../data';

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="bg-ink-900 border-y border-white/5 py-5 overflow-hidden">
      <div className="flex w-max animate-ticker">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-12 flex-shrink-0">
            <span className="font-display text-lg font-semibold text-white/90">
              {item.name}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              {item.tag}
            </span>
            <span className="w-1 h-1 rounded-full bg-accent/50 ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
