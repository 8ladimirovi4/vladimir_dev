/** @layer widgets / slice ask-ai / segment ui — server shell */

import type { Dictionary } from '@/shared/i18n';
import { SectionGlow } from '@/shared/ui';

import { AskInput } from './ask-input';
import { AskLiveBadge } from './ask-live-badge';
import { AskSuggestions } from './ask-suggestions';

type AskAiProps = {
  content: Dictionary['ask'];
};

export function AskAi({ content }: AskAiProps) {
  return (
    <section
      data-widget="ask-ai"
      id="ask"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 scroll-mt-24"
    >
      <SectionGlow />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
            {content.title}
          </h2>
          <AskLiveBadge label={content.badge} />
        </div>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
          {content.subtitle}
        </p>

        <div className="mb-3">
          <AskInput
            label={content.title}
            placeholder={content.placeholder}
            sendLabel={content.sendLabel}
          />
        </div>

        <div className="mb-8">
          <AskSuggestions chips={content.chips} />
        </div>

        <p className="text-xs text-muted-foreground/60 leading-relaxed">
          {content.footerNote}
        </p>
      </div>
    </section>
  );
}
