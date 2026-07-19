/** @layer entities / slice project / segment model — card visuals by stack */

import type { ProjectStack } from './types';

export const PROJECT_STACK_STYLES: Record<
  ProjectStack,
  {
    gradient: string;
    border: string;
  }
> = {
  core: {
    gradient: 'from-violet-500/10 to-purple-500/10',
    border: 'border-violet-500/20',
  },
  architecture: {
    gradient: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20',
  },
  emerging: {
    gradient: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/20',
  },
  performance: {
    gradient: 'from-orange-500/10 to-red-500/10',
    border: 'border-orange-500/20',
  },
};
