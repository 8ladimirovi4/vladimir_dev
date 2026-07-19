/** @layer entities / slice job / segment model — card visuals by accent */

import type { JobAccent } from './types';

export const JOB_ACCENT_STYLES: Record<
  JobAccent,
  {
    gradient: string;
    border: string;
  }
> = {
  violet: {
    gradient: 'from-violet-500/10 to-purple-500/10',
    border: 'border-violet-500/20',
  },
  blue: {
    gradient: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20',
  },
  emerald: {
    gradient: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/20',
  },
};
