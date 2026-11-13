import { useState } from 'react';
import { AlertCircle, X, Info } from 'lucide-react';

interface DemonstrationNoticeProps {
  compact?: boolean;
}

export const DemonstrationNotice = ({ compact = false }: DemonstrationNoticeProps) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  if (compact) {
    return (
      <div className="flex items-center justify-between text-xs py-1.5 px-3 bg-amber-50 border-b border-amber-200 text-amber-900">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>
            <strong>Prototype Preview:</strong> Sample demonstration listings for Dar es Salaam. No real bookings or private owner contacts.
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-amber-700 hover:text-amber-950 p-0.5 rounded cursor-pointer"
          aria-label="Dismiss notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <aside aria-label="Prototype Demonstration Notice" className="bg-[#174B3A]/90 text-white border-b border-[#C49A45]/40 py-2.5 px-4 text-xs font-medium">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#C49A45] shrink-0" />
          <p className="text-white/95">
            <span className="font-semibold text-[#C49A45] uppercase tracking-wider text-[11px] mr-1.5">Phase 1 Prototype</span>
            Dar Trusted Expats Link frontend demonstration. All listings, rates, and provider profiles are realistic mock data for UI evaluation.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/how-it-works"
            className="text-white/80 hover:text-white underline underline-offset-2 decoration-[#C49A45] whitespace-nowrap text-[11px]"
          >
            How Platform Works
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-white/70 hover:text-white p-1 rounded transition-colors cursor-pointer"
            aria-label="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
