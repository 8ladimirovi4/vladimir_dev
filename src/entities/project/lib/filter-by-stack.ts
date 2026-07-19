/** @layer entities / slice project / segment lib — foundation for ?stack= filter */

import type { Project, ProjectStack } from '../model';

export function filterProjectsByStack(
  projects: readonly Project[],
  stack: ProjectStack | null
): readonly Project[] {
  if (!stack) return projects;
  return projects.filter((project) => project.stacks.includes(stack));
}
