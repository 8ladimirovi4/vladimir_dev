'use client';

import dynamic from 'next/dynamic';

/** @layer widgets / slice hero / segment ui — client loader (dynamic ssr:false) */

export const CodeAnimation = dynamic(
  () => import('./code-animation').then((m) => m.CodeAnimation),
  { ssr: false }
);
