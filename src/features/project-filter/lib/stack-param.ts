/** @layer features / slice project-filter / segment lib — URL ?stack= helpers */

import { PROJECT_STACKS, type ProjectStack } from '@/entities/project';

export const STACK_PARAM = 'stack';

export function parseStackParam(value: string | null): ProjectStack | null {
  if (!value) return null;
  return (PROJECT_STACKS as readonly string[]).includes(value)
    ? (value as ProjectStack)
    : null;
}
