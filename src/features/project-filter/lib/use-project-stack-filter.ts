'use client';

/** @layer features / slice project-filter / segment lib — read/write ?stack= + scroll */

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

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
  const router = useRouter();
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

      router.replace(href, { scroll: false });

      if (options?.scroll !== false) {
        requestAnimationFrame(() => {
          scrollToProjects();
        });
      }
    },
    [pathname, router, searchParams]
  );

  const selectStack = useCallback(
    (stack: ProjectStack) => {
      setStack(activeStack === stack ? null : stack, { scroll: true });
    },
    [activeStack, setStack]
  );

  const clearStack = useCallback(() => {
    setStack(null, { scroll: false });
  }, [setStack]);

  return { activeStack, selectStack, clearStack, setStack };
}
