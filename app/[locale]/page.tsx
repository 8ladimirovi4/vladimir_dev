/** @layer app / Page — app/[locale]/page.tsx */

import { Hero } from '@/widgets/hero';
import { Philosophy } from '@/widgets/philosophy';
import { Projects } from '@/widgets/projects';
import { TechnicalExpertise } from '@/widgets/technical-expertise';
import { Work } from '@/widgets/work';

export default function Page() {
  return (
    <main>
      <Hero />
      <TechnicalExpertise />
      <Projects />
      <Work />
      <Philosophy />
    </main>
  );
}
