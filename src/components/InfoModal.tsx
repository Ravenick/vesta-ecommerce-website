interface InfoModalProps {
  message: string;
  onClose: () => void;
}

export function InfoModal({ message, onClose }: InfoModalProps) {
  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-ink-800 border border-white/10 rounded-3xl p-10 text-center animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-base text-white/80 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-accent text-ink-950 px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-accent-dark transition-all duration-300"
        >
          OK
        </button>
      </div>
    </div>
  );
}
