/** @layer entities / slice job / segment data */

import type { Job } from '../model';

export const jobs: readonly Job[] = [
  {
    id: 'mechatronica',
    isCurrent: true,
    companyUrl: 'https://systeme.ru',
    accent: 'violet',
  },
  {
    id: 'itfrog',
    isCurrent: false,
    companyUrl: 'https://itfrog.ru/',
    accent: 'blue',
  },
  {
    id: 'ait-instructor',
    isCurrent: false,
    companyUrl: 'https://www.ait-tr.de/',
    materialsUrl: 'https://github.com/8ladimirovi4/AIT_frontend',
    accent: 'emerald',
  },
];
