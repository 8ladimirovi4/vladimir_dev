/** @layer widgets / slice projects / segment ui — server shell */

import { ProjectFilter } from '@/features/project-filter';

import { ProjectCards } from './project-cards';

export function Projects() {
  return (
    <section data-widget="projects" id="projects">
      <ProjectFilter>
        <ProjectCards />
      </ProjectFilter>
    </section>
  );
}
