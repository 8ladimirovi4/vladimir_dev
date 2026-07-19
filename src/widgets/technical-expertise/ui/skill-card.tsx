/** @layer widgets / slice technical-expertise / segment ui — client (stack filter trigger) */

'use client';

import type { LucideIcon } from 'lucide-react';

import { cn } from '@/shared/lib';

import type { SkillCardId } from '../model/skill-card-styles';
import { SKILL_CARD_STYLES } from '../model/skill-card-styles';

type SkillCardProps = {
  id: SkillCardId;
  icon: LucideIcon;
  title: string;
  description: string;
  items: readonly string[];
  selected?: boolean;
  filterHint: string;
  onSelect: () => void;
};

export function SkillCard({
  id,
  icon: Icon,
  title,
  description,
  items,
  selected = false,
  filterHint,
  onSelect,
}: SkillCardProps) {
  const styles = SKILL_CARD_STYLES[id];

  return (
    <button
      type="button"
      data-segment="skill-card"
      data-skill={id}
      data-selected={selected ? 'true' : 'false'}
      aria-pressed={selected}
      aria-label={`${title}. ${filterHint}`}
      title={filterHint}
      onClick={onSelect}
      className={cn(
        'group relative p-8 rounded-2xl bg-gradient-to-br backdrop-blur-xl border text-left cursor-pointer',
        'hover:shadow-xl transition-all duration-200 hover:-translate-y-1',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        styles.gradient,
        styles.border,
        selected && 'ring-2 ring-foreground/25 shadow-xl -translate-y-1'
      )}
    >
      <div
        className={cn(
          'w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform',
          styles.iconColor
        )}
      >
        <Icon className="w-6 h-6" aria-hidden />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm flex items-center gap-2">
            <span
              aria-hidden
              className={cn(
                'w-1.5 h-1.5 rounded-full bg-current',
                styles.iconColor
              )}
            />
            {item}
          </li>
        ))}
      </ul>
    </button>
  );
}
