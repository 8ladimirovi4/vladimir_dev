/** @layer widgets / slice faq / segment ui — about summary + FAQ for AI citations */

import type { Dictionary } from '@/shared/i18n';
import { SectionGlow } from '@/shared/ui';

type FaqProps = {
  content: Dictionary['faq'];
};

export function Faq({ content }: FaqProps) {
  return (
    <section
      data-widget="faq"
      id="about"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <SectionGlow />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center"
        >
          {content.title}
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 sm:mb-14 text-center">
          {content.summary}
        </p>

        <dl className="space-y-8 text-left">
          {content.items.map((item) => (
            <div key={item.question}>
              <dt className="text-lg sm:text-xl font-semibold mb-2">
                {item.question}
              </dt>
              <dd className="text-base text-muted-foreground leading-relaxed">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
