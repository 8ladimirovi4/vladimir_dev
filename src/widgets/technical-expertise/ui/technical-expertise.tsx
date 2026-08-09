/** @layer widgets / slice technical-expertise / segment ui — server shell */

import type { Dictionary } from '@/shared/i18n';

import { SkillCardsGrid } from './skill-cards-grid';

type TechnicalExpertiseProps = {
  content: Dictionary['expertise'];
};

export function TechnicalExpertise({ content }: TechnicalExpertiseProps) {
  return (
    <section
      data-widget="technical-expertise"
      id="stack"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-10 sm:mb-16 text-center">
          {content.title}
        </h2>
        <SkillCardsGrid cards={content.cards} filterHint={content.filterHint} />
      </div>
    </section>
  );
}
