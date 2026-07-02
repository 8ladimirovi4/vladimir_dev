/** @layer widgets / slice work / segment ui — server shell */

import { CurrentJob } from './current-job';
import { PreviousJob } from './previous-job';

export function Work() {
  return (
    <section data-widget="work" id="work">
      <CurrentJob />
      <PreviousJob />
    </section>
  );
}
