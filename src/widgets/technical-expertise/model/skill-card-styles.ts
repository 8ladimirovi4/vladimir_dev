/** @layer widgets / slice technical-expertise / segment model — card visuals */

export type SkillCardId = 'core' | 'architecture' | 'ai' | 'performance';

export const SKILL_CARD_STYLES: Record<
  SkillCardId,
  {
    gradient: string;
    border: string;
    iconColor: string;
  }
> = {
  core: {
    gradient: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/30',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  architecture: {
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  ai: {
    gradient: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  performance: {
    gradient: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
};
