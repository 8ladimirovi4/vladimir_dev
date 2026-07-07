'use client';

/** @layer widgets / slice footer / segment ui — client (copy email) */

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';

type EmailCopyProps = {
  email: string;
  copyLabel: string;
  copiedLabel: string;
};

export function EmailCopy({ email, copyLabel, copiedLabel }: EmailCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      data-segment="email-copy"
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      <Tooltip open={copied ? true : undefined}>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? copiedLabel : copyLabel}
            className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors shrink-0"
          >
            {copied ? (
              <Check className="w-4 h-4" aria-hidden />
            ) : (
              <Copy className="w-4 h-4" aria-hidden />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>{copied ? copiedLabel : copyLabel}</TooltipContent>
      </Tooltip>
      <span className="font-mono truncate">{email}</span>
    </div>
  );
}
