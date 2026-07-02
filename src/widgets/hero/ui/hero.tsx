/** @layer widgets / slice hero / segment ui — server shell */

import { CodeAnimation } from './code-animation-loader';
import { CvDownload } from './cv-download';
import { ExperienceBadge } from './experience-badge';
import { ViewCasesBtn } from './view-cases-btn';

export function Hero() {
  return (
    <section data-widget="hero">
      <ExperienceBadge />
      <ViewCasesBtn />
      <CvDownload />
      <CodeAnimation />
    </section>
  );
}
