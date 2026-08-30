/** @layer widgets / slice hero / segment ui — server */

import { ArrowRight } from 'lucide-react';

import { Button } from '@/shared/ui/button';

type ViewCasesBtnProps = {
  label: string;
};

export function ViewCasesBtn({ label }: ViewCasesBtnProps) {
  return (
    <Button asChild size="lg" className="shadow-lg group">
      <a data-segment="view-cases-btn" href="#projects">
        {label}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </Button>
  );
}
