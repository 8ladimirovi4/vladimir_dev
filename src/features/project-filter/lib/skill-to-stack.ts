/** @layer features / slice project-filter / segment lib — skill card id → ProjectStack */

import type { ProjectStack } from '@/entities/project';

const SKILL_TO_STACK = {
  core: 'core',
  architecture: 'architecture',
  ai: 'emerging',
  performance: 'performance',
} as const satisfies Record<string, ProjectStack>;

export type SkillFilterId = keyof typeof SKILL_TO_STACK;

export function skillIdToStack(id: string): ProjectStack | null {
  if (id in SKILL_TO_STACK) {
    return SKILL_TO_STACK[id as SkillFilterId];
  }
  return null;
}
