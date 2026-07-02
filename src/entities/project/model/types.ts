/** @layer entities / slice project / segment model */

export type ProjectStack = 'core' | 'architecture' | 'emerging' | 'performance';

export type Project = {
  id: string;
  stack: ProjectStack;
};
