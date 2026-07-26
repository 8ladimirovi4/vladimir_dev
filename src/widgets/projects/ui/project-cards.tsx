'use client';

/** @layer widgets / slice projects / segment ui — client (reads stack filter context) */

import {
  filterProjectsByStack,
  projects,
  type ProjectStack,
} from '@/entities/project';
import { useProjectStackFilterContext } from '@/features/project-filter';
import type { Dictionary } from '@/shared/i18n';
import { CardsSlider } from '@/shared/ui';

import { ProjectCard } from './project-card';

type ProjectCardsProps = {
  content: Dictionary['projects'];
  stackFilter?: ProjectStack | null;
};

export function ProjectCards({ content, stackFilter }: ProjectCardsProps) {
  const contextStack = useProjectStackFilterContext();
  const activeStack = stackFilter !== undefined ? stackFilter : contextStack;
  const visibleProjects = filterProjectsByStack(projects, activeStack);

  if (visibleProjects.length === 0) {
    return (
      <p
        data-segment="project-cards-empty"
        className="text-center text-muted-foreground"
      >
        {content.emptyFilter}
      </p>
    );
  }

  return (
    <CardsSlider
      segment="project-cards-slider"
      prevLabel={content.prevLabel}
      nextLabel={content.nextLabel}
    >
      {visibleProjects.map((project, index) => {
        const copy = content.cards[project.id as keyof typeof content.cards];
        if (!copy) return null;

        return (
          <ProjectCard
            key={project.id}
            project={project}
            copy={copy}
            index={index}
            ndaLabel={content.ndaLabel}
            openRepoLabel={content.openRepoLabel}
          />
        );
      })}
    </CardsSlider>
  );
}
