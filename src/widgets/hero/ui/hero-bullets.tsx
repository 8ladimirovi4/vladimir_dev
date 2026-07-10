/** @layer widgets / slice hero / segment ui — server */

type HeroBulletsProps = {
  items: readonly string[];
};

export function HeroBullets({ items }: HeroBulletsProps) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <ul
        data-segment="hero-bullets"
        className="rounded-xl border border-brand-border bg-brand-muted px-5 py-4 md:px-6 md:py-5 space-y-3 text-left text-sm md:text-base text-foreground/80"
      >
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 leading-relaxed">
            <span
              aria-hidden
              className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-brand-accent"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
