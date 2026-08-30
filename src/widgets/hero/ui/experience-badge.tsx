/** @layer widgets / slice hero / segment ui — server */

type ExperienceBadgeProps = {
  label: string;
};

export function ExperienceBadge({ label }: ExperienceBadgeProps) {
  return (
    <div data-segment="experience-badge" className="inline-block">
      <div className="px-4 py-2 bg-brand-muted border border-brand-border rounded-full text-sm text-brand-foreground font-mono">
        {label}
      </div>
    </div>
  );
}
