/** @layer widgets / slice ask-ai / segment ui — server */

type AskLiveBadgeProps = {
  label: string;
};

export function AskLiveBadge({ label }: AskLiveBadgeProps) {
  return (
    <div
      data-segment="ask-live-badge"
      className="shrink-0 mt-1.5 lg:mt-2.5 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400"
    >
      <span
        aria-hidden
        className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
      />
      {label}
    </div>
  );
}
