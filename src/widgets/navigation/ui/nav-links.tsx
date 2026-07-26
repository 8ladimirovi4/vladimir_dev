/** @layer widgets / slice navigation / segment ui — server (anchor links) */

type NavLabels = {
  work: string;
  stack: string;
  projects: string;
  engineering: string;
};

const linkClassName =
  'text-sm text-muted-foreground hover:text-foreground transition-colors';

type NavLinksProps = {
  labels: NavLabels;
};

export function NavLinks({ labels }: NavLinksProps) {
  return (
    <nav
      data-segment="nav-links"
      aria-label="Primary"
      className="hidden md:flex items-center gap-8"
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
