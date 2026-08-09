/** @layer widgets / slice hero / segment ui — server shell */

import type { Dictionary, Locale } from '@/shared/i18n';
import { getCvDownload } from '@/shared/config/cv';
import { SectionGlow } from '@/shared/ui';

import { CodeAnimation } from './code-animation-loader';
import { CvAltLink, CvDownloadPrimary } from './cv-download';
import { ExperienceBadge } from './experience-badge';
import { HeroBullets } from './hero-bullets';
import { ViewCasesBtn } from './view-cases-btn';

type HeroProps = {
  content: Dictionary['hero'];
  locale: Locale;
};

export function Hero({ content, locale }: HeroProps) {
  const cv = getCvDownload(locale);
  return (
    <section
      data-widget="hero"
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 relative overflow-hidden"
    >
      <SectionGlow />

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full py-8 md:py-20">
        <CodeAnimation />

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
          <span className="block">{content.title}</span>
          <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl text-foreground/75 mt-2 sm:mt-3 font-semibold">
            {content.titleLine2}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          {content.subheadline}
        </p>

        <div className="mb-8">
          <ExperienceBadge label={content.badge} />
        </div>

        <div className="mb-10">
          <HeroBullets items={content.bullets} />
        </div>

        <div className="flex flex-col items-center gap-3 mb-2">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ViewCasesBtn label={content.ctaCases} />
            <CvDownloadPrimary label={content.ctaCv} primary={cv.primary} />
          </div>
          <CvAltLink altLabel={content.cvAlt} alternate={cv.alternate} />
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          {content.microcopy}
        </p>

        <p className="sr-only">{content.seoKeywords}</p>
      </div>
    </section>
  );
}
