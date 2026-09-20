/** @layer widgets / slice ask-ai / segment ui — server (presentational, no logic yet) */

import { Sparkles } from 'lucide-react';

type AskInputProps = {
  label: string;
  placeholder: string;
  sendLabel: string;
};

export function AskInput({ label, placeholder, sendLabel }: AskInputProps) {
  return (
    <div data-segment="ask-input" className="relative flex items-start">
      <textarea
        name="ask"
        rows={3}
        autoComplete="off"
        aria-label={label}
        placeholder={placeholder}
        className="w-full py-3 pl-5 pr-14 rounded-xl bg-secondary/50 border border-violet-500/30 text-foreground placeholder:text-muted-foreground leading-relaxed resize-y overflow-y-auto break-words transition-colors duration-200 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="button"
        aria-label={sendLabel}
        className="absolute top-2 right-3 w-9 h-9 rounded-lg bg-violet-600 text-white flex items-center justify-center transition-all duration-200 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 disabled:bg-violet-600/30 disabled:cursor-not-allowed"
      >
        <Sparkles className="w-4 h-4" aria-hidden />
      </button>
    </div>
  );
}
