/** @layer widgets / slice projects / segment ui — reusable card from config */

import { ExternalLink } from 'lucide-react';

import {
  PROJECT_STACK_STYLES,
  type Project,
  type ProjectAccess,
} from '@/entities/project';

export type ProjectCardCopy = {
  title: string;
  description: string;
};

type ProjectCardProps = {
  project: Project;
  copy: ProjectCardCopy;
  index: number;
  ndaLabel: string;
  openRepoLabel: string;
};

function ProjectAccessAction({
  access,
  ndaLabel,
  openRepoLabel,
}: {
  access: ProjectAccess;
  ndaLabel: string;
  openRepoLabel: string;
}) {
  if (access.kind === 'nda') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"/>
    );
  }

  return (
    <a
      href={access.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={openRepoLabel}
      className="shrink-0 text-muted-foreground group-hover:text-foreground focus-visible:text-foreground transition-colors"
    >
      <ExternalLink className="w-5 h-5" aria-hidden />
    </a>
  );
}

export function ProjectCard({
  project,
  copy,
  index,
  ndaLabel,
  openRepoLabel,
}: ProjectCardProps) {
  const styles = PROJECT_STACK_STYLES[project.accent];
  const number = String(index + 1).padStart(2, '0');

  return (
    <article
      data-segment="project-card"
      data-project={project.id}
      data-stacks={project.stacks.join(' ')}
      className={`group relative flex h-full flex-col p-8 rounded-2xl bg-gradient-to-br ${styles.gradient} backdrop-blur-xl border ${styles.border} hover:shadow-xl transition-all duration-200 hover:-translate-y-1`}
    >
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/30 flex items-center justify-center font-mono text-sm">
        {number}
      </div>

      <h3 className="text-2xl font-bold mb-4 pr-12">{copy.title}</h3>

      <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
        {copy.description}
      </p>

      <div className="flex items-end justify-between gap-4 mt-auto">
        <div className="min-w-0 px-3 py-1.5 bg-background/50 border border-border/50 rounded-lg text-xs font-mono break-words">
          {project.tech}
        </div>
        <ProjectAccessAction
          access={project.access}
          ndaLabel={ndaLabel}
          openRepoLabel={openRepoLabel}
        />
      </div>
    </article>
  );
}
