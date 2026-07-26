/** @layer widgets / slice work / segment ui — server shell */

import type { Dictionary } from '@/shared/i18n';

import { JobCards } from './job-cards';

type WorkProps = {
  content: Dictionary['work'];
};

export function Work({ content }: WorkProps) {
  return (
    <section
      data-widget="work"
      id="work"
      className="py-32 px-6 lg:px-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center">
          {content.title}
        </h2>
        <JobCards content={content} />
      </div>
    </section>
  );
}
