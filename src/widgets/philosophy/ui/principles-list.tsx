/** @layer widgets / slice philosophy / segment ui — server */

import type { Dictionary } from '@/shared/i18n';

type PrinciplesListProps = {
  principles: Dictionary['philosophy']['principles'];
};

export function PrinciplesList({ principles }: PrinciplesListProps) {
  return (
    <ul
      data-segment="principles-list"
      className="flex flex-wrap justify-center gap-6"
    >
      {principles.map((principle) => (
        <li
          key={principle.id}
          className="px-6 py-3 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-full text-sm font-medium"
        >
          {principle.label}
        </li>
      ))}
    </ul>
  );
}
