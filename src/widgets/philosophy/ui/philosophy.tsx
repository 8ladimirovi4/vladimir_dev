/** @layer widgets / slice philosophy / segment ui — server shell */

import { SectionGlow } from '@/shared/ui';

import { PrinciplesList } from './principles-list';

export function Philosophy() {
  return (
    <section
      data-widget="philosophy"
      id="engineering"
      className="relative overflow-hidden py-32 px-6 lg:px-12"
    >
      <SectionGlow />
      <div className="relative z-10 max-w-5xl mx-auto">
        <PrinciplesList />
      </div>
    </section>
  );
}
