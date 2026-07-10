/** @layer widgets / slice technical-expertise / segment ui — server */

import { Code2, Layers, Sparkles, Zap } from 'lucide-react';

import type { Dictionary } from '@/shared/i18n';

import { SkillCard } from './skill-card';

const SKILL_ICONS = {
  core: Code2,
  architecture: Layers,
  ai: Sparkles,
  performance: Zap,
} as const;

type SkillCardsGridProps = {
  cards: Dictionary['expertise']['cards'];
};

export function SkillCardsGrid({ cards }: SkillCardsGridProps) {
  return (
    <div
      data-segment="skill-cards"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {cards.map((card) => {
        const Icon = SKILL_ICONS[card.id];

        return (
          <SkillCard
            key={card.id}
            id={card.id}
            icon={Icon}
            title={card.title}
            description={card.description}
            items={card.items}
          />
        );
      })}
    </div>
  );
}
