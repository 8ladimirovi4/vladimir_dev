/** @layer entities / slice job / segment model */

export const JOB_IDS = ['mechatronica', 'itfrog', 'ait-instructor'] as const;

export type JobId = (typeof JOB_IDS)[number];

export const JOB_ACCENTS = ['violet', 'blue', 'emerald'] as const;

export type JobAccent = (typeof JOB_ACCENTS)[number];

export type Job = {
  id: JobId;
  isCurrent: boolean;
  companyUrl?: string;
  materialsUrl?: string;
  accent: JobAccent;
};
