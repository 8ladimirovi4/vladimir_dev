/** @layer entities / slice project / segment model */

export const PROJECT_STACKS = [
  'core',
  'architecture',
  'emerging',
  'performance',
] as const;

export type ProjectStack = (typeof PROJECT_STACKS)[number];

/** Public repo/demo link, or NDA-bound commercial work (no public URL). */
export type ProjectAccess =
  { kind: 'external'; href: string } | { kind: 'nda' };

export type Project = {
  id: string;
  /** Stacks used by future `?stack=` filter (OR match). */
  stacks: readonly ProjectStack[];
  /** Visual accent (gradient/border) — usually primary stack. */
  accent: ProjectStack;
  /** Language-agnostic tech chip (etalon: one mono string). */
  tech: string;
  access: ProjectAccess;
};
