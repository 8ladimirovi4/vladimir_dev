'use client';

/** @layer features / slice project-filter / segment ui — client (read ?stack=) */

import type { Dictionary } from '@/shared/i18n';

import { useProjectStackFilter } from '../lib';
import { ProjectStackFilterProvider } from '../model/stack-filter-context';

type ProjectFilterProps = {
  content: Dictionary['projects'];
  children: React.ReactNode;
};

export function ProjectFilter({ content, children }: ProjectFilterProps) {
  const { activeStack, clearStack } = useProjectStackFilter();

  return (
    <ProjectStackFilterProvider value={activeStack}>
      <div data-segment="project-filter" className="space-y-8">
        {activeStack ? (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={clearStack}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline transition-colors"
            >
              {content.clearFilter}
            </button>
          </div>
        ) : null}
        {children}
      </div>
    </ProjectStackFilterProvider>
  );
}
