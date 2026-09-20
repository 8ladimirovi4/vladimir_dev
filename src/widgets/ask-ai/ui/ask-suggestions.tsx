/** @layer widgets / slice ask-ai / segment ui — server (presentational, no logic yet) */

import type { Dictionary } from '@/shared/i18n';

type AskSuggestionsProps = {
  chips: Dictionary['ask']['chips'];
};

export function AskSuggestions({ chips }: AskSuggestionsProps) {
  return (
    <ul
      data-segment="ask-suggestions"
      className="flex flex-wrap gap-2"
      aria-label="Suggested questions"
    >
      {chips.map((chip) => (
        <li key={chip.id}>
          <button
            type="button"
            className="px-4 py-2 rounded-full border border-border/70 text-sm text-muted-foreground transition-all duration-200 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/30"
          >
            {chip.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
