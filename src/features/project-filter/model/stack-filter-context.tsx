'use client';

/** @layer features / slice project-filter / segment model — stack filter context */

import { createContext, useContext } from 'react';

import type { ProjectStack } from '@/entities/project';

const ProjectStackFilterContext = createContext<ProjectStack | null>(null);

export function ProjectStackFilterProvider({
  value,
  children,
}: {
  value: ProjectStack | null;
  children: React.ReactNode;
}) {
  return (
    <ProjectStackFilterContext.Provider value={value}>
      {children}
    </ProjectStackFilterContext.Provider>
  );
}

export function useProjectStackFilterContext(): ProjectStack | null {
  return useContext(ProjectStackFilterContext);
}
