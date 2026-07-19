/** @layer widgets / slice work / segment ui — server */

import { jobs } from '@/entities/job';
import type { Dictionary } from '@/shared/i18n';

import { JobCard } from './job-card';

type JobCardsProps = {
  content: Dictionary['work'];
};

export function JobCards({ content }: JobCardsProps) {
  return (
    <div
      data-segment="job-cards"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      {jobs.map((job) => {
        const copy = content.jobs[job.id];

        return (
          <JobCard
            key={job.id}
            job={job}
            copy={copy}
            currentBadge={content.currentBadge}
            materialsLabel={content.materialsLabel}
          />
        );
      })}
    </div>
  );
}
