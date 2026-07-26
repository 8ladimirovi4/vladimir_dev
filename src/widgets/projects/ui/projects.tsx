/** @layer widgets / slice projects / segment ui — server shell */

import { Suspense } from 'react';

import { ProjectFilter } from '@/features/project-filter';
import type { Dictionary } from '@/shared/i18n';
import { SectionGlow } from '@/shared/ui';

import { ProjectCards } from './project-cards';

type ProjectsProps = {
  content: Dictionary['projects'];
};

function ProjectCardsFallback({ content }: ProjectsProps) {
  return <ProjectCards content={content} stackFilter={null} />;
}

export function Projects({ content }: ProjectsProps) {
  return (
    <section
      data-widget="projects"
      id="projects"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 scroll-mt-24"
    >
      <SectionGlow />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-10 sm:mb-16 text-center">
          {content.title}
        </h2>
        <Suspense fallback={<ProjectCardsFallback content={content} />}>
          <ProjectFilter content={content}>
            <ProjectCards content={content} />
          </ProjectFilter>
        </Suspense>
      </div>
    </section>
  );
}
