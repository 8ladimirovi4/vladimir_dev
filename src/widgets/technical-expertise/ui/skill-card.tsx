/** @layer widgets / slice technical-expertise / segment ui — server */

import type { LucideIcon } from 'lucide-react';

import type { SkillCardId } from '../model/skill-card-styles';
import { SKILL_CARD_STYLES } from '../model/skill-card-styles';

type SkillCardProps = {
  id: SkillCardId;
  icon: LucideIcon;
  title: string;
  description: string;
  items: readonly string[];
};

export function SkillCard({
  id,
  icon: Icon,
  title,
  description,
  items,
}: SkillCardProps) {
  const styles = SKILL_CARD_STYLES[id];

  return (
    <article
      data-segment="skill-card"
      data-skill={id}
      className={`group relative p-8 rounded-2xl bg-gradient-to-br ${styles.gradient} backdrop-blur-xl border ${styles.border} hover:shadow-xl transition-all duration-200 hover:-translate-y-1`}
    >
      <div
        className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${styles.iconColor}`}
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
              className={`w-1.5 h-1.5 rounded-full bg-current ${styles.iconColor}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
