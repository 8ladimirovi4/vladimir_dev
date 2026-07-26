/** @layer widgets / slice navigation / segment ui — server (desktop anchor links) */

type NavLabels = {
  work: string;
  stack: string;
  projects: string;
  engineering: string;
};

const linkClassName =
  'cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground';

type NavLinksProps = {
  labels: NavLabels;
};

export function NavLinks({ labels }: NavLinksProps) {
  return (
    <nav
      data-segment="nav-links"
      aria-label="Primary"
      className="flex items-center gap-8"
    >
      <a href="#work" className={linkClassName}>
        {labels.work}
      </a>
      <a href="#stack" className={linkClassName}>
        {labels.stack}
      </a>
      <a href="#projects" className={linkClassName}>
        {labels.projects}
      </a>
      <a href="#engineering" className={linkClassName}>
        {labels.engineering}
      </a>
    </nav>
  );
}
