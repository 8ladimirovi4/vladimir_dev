/** @layer widgets / slice work / segment ui — server */

import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

import { JOB_ACCENT_STYLES, type Job } from '@/entities/job';

export type JobCardCopy = {
  title: string;
  company: string;
  period: string;
  description: string;
};

type JobCardProps = {
  job: Job;
  copy: JobCardCopy;
  currentBadge: string;
  materialsLabel: string;
};

export function JobCard({
  job,
  copy,
  currentBadge,
  materialsLabel,
}: JobCardProps) {
  const styles = JOB_ACCENT_STYLES[job.accent];

  return (
    <article
      data-segment="job-card"
      data-job={job.id}
      className={`relative p-8 rounded-2xl bg-gradient-to-br ${styles.gradient} backdrop-blur-xl border ${styles.border} hover:shadow-xl transition-all duration-200 hover:-translate-y-1`}
    >
      {job.isCurrent && (
        <div className="absolute top-6 right-6">
          <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400 font-mono">
            {currentBadge}
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 mb-4 pr-20">
        <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center shrink-0">
          <Briefcase className="w-5 h-5 text-muted-foreground" aria-hidden />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold">
            {job.companyUrl ? (
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground/80 transition-colors"
              >
                {copy.company}
              </a>
            ) : (
              copy.company
            )}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3 shrink-0" aria-hidden />
            <span>{copy.period}</span>
          </div>
        </div>
      </div>

      <h4 className="text-xl font-bold mb-4">{copy.title}</h4>

      <p className="text-muted-foreground leading-relaxed">
        {copy.description}
      </p>

      {job.materialsUrl && (
        <a
          href={job.materialsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="w-4 h-4" aria-hidden />
          {materialsLabel}
        </a>
      )}
    </article>
  );
}
