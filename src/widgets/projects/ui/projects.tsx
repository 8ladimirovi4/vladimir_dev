/** @layer widgets / slice projects / segment ui — server shell */

import { Suspense } from 'react';

import { ProjectFilter } from '@/features/project-filter';
import type { Dictionary } from '@/shared/i18n';

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
      className="py-32 px-6 lg:px-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center">
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
