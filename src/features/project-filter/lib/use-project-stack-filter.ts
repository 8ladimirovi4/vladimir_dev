'use client';

/** @layer features / slice project-filter / segment lib — read/write ?stack= + scroll */

import { useCallback } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

import type { ProjectStack } from '@/entities/project';

import { STACK_PARAM, parseStackParam } from './stack-param';

const PROJECTS_SECTION_ID = 'projects';

function scrollToProjects() {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  document.getElementById(PROJECTS_SECTION_ID)?.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start',
  });
}

export function useProjectStackFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeStack = parseStackParam(searchParams.get(STACK_PARAM));

  const setStack = useCallback(
    (stack: ProjectStack | null, options?: { scroll?: boolean }) => {
      const params = new URLSearchParams(searchParams.toString());

      if (stack) {
        params.set(STACK_PARAM, stack);
      } else {
        params.delete(STACK_PARAM);
      }

      const query = params.toString();
      const href = query ? `${pathname}?${query}` : pathname;

      window.history.replaceState(null, '', href);

      if (options?.scroll !== false) {
        requestAnimationFrame(() => {
          scrollToProjects();
        });
      }
    },
    [pathname, searchParams]
  );

  const selectStack = useCallback(
    (stack: ProjectStack) => {
      setStack(stack, { scroll: true });
    },
    [setStack]
  );

  const clearStack = useCallback(() => {
    setStack(null, { scroll: false });
  }, [setStack]);

  return { activeStack, selectStack, clearStack, setStack };
}
