/** @layer widgets / slice hero / segment ui — server (<a download>) */

import { Download } from 'lucide-react';

import { Button } from '@/shared/ui/button';

type CvFile = {
  path: string;
  filename: string;
};

type CvDownloadPrimaryProps = {
  label: string;
  primary: CvFile;
};

type CvAltLinkProps = {
  altLabel: string;
  alternate: CvFile;
};

export function CvDownloadPrimary({ label, primary }: CvDownloadPrimaryProps) {
  return (
    <Button
      asChild
      variant="secondary"
      size="lg"
      className="bg-secondary/50 border border-border"
    >
      <a
        data-segment="cv-download"
        href={primary.path}
        download={primary.filename}
      >
        <Download className="w-4 h-4" />
        {label}
      </a>
    </Button>
  );
}

export function CvAltLink({ altLabel, alternate }: CvAltLinkProps) {
  return (
    <a
      data-segment="cv-download-alt"
      href={alternate.path}
      download={alternate.filename}
      className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
    >
      {altLabel}
    </a>
  );
}
