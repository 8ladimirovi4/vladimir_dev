/** @layer widgets / slice philosophy / segment ui — server shell */

import type { Dictionary } from '@/shared/i18n';
import { SectionGlow } from '@/shared/ui';

import { PrinciplesList } from './principles-list';

type PhilosophyProps = {
  content: Dictionary['philosophy'];
};

export function Philosophy({ content }: PhilosophyProps) {
  return (
    <section
      data-widget="philosophy"
      id="engineering"
      className="relative overflow-hidden py-32 px-6 lg:px-12 scroll-mt-24"
    >
      <SectionGlow />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">{content.title}</h2>
        <p className="text-lg text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto">
          {content.description}
        </p>
        <PrinciplesList principles={content.principles} />
      </div>
    </section>
  );
}
