'use client';

/** @layer widgets / slice technical-expertise / segment ui — client (write ?stack=) */

import { Code2, Layers, Sparkles, Zap } from 'lucide-react';
import { Suspense } from 'react';

import {
  skillIdToStack,
  useProjectStackFilter,
} from '@/features/project-filter';
import type { Dictionary } from '@/shared/i18n';

import type { SkillCardId } from '../model/skill-card-styles';
import { SkillCard } from './skill-card';

const SKILL_ICONS = {
  core: Code2,
  architecture: Layers,
  ai: Sparkles,
  performance: Zap,
} as const;

type SkillCardsGridProps = {
  cards: Dictionary['expertise']['cards'];
  filterHint: string;
};

function SkillCardsGridInner({ cards, filterHint }: SkillCardsGridProps) {
  const { activeStack, selectStack } = useProjectStackFilter();

  return (
    <div
      data-segment="skill-cards"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {cards.map((card) => {
        const Icon = SKILL_ICONS[card.id];
        const stack = skillIdToStack(card.id);
        const selected = stack !== null && activeStack === stack;

        return (
          <SkillCard
            key={card.id}
            id={card.id as SkillCardId}
            icon={Icon}
            title={card.title}
            description={card.description}
            items={card.items}
            selected={selected}
            filterHint={filterHint}
            onSelect={() => {
              if (stack) selectStack(stack);
            }}
          />
        );
      })}
    </div>
  );
}

export function SkillCardsGrid({ cards, filterHint }: SkillCardsGridProps) {
  return (
    <Suspense
      fallback={
        <div
          data-segment="skill-cards"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card) => {
            const Icon = SKILL_ICONS[card.id];
            return (
              <SkillCard
                key={card.id}
                id={card.id as SkillCardId}
                icon={Icon}
                title={card.title}
                description={card.description}
                items={card.items}
                filterHint={filterHint}
                onSelect={() => undefined}
              />
            );
          })}
        </div>
      }
    >
      <SkillCardsGridInner cards={cards} filterHint={filterHint} />
    </Suspense>
  );
}
