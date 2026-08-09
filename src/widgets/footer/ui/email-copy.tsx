'use client';

/** @layer widgets / slice footer / segment ui — client (copy email) */

import { Check, Copy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { copyTextToClipboard } from '@/shared/lib';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';

type EmailCopyProps = {
  email: string;
  copyLabel: string;
  copiedLabel: string;
};

export function EmailCopy({ email, copyLabel, copiedLabel }: EmailCopyProps) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    const ok = await copyTextToClipboard(email);
    if (!ok) return;

    setCopied(true);
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      data-segment="email-copy"
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      {/* Controlled open while copied — works on touch / Safari (no hover) */}
      <Tooltip open={copied}>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? copiedLabel : copyLabel}
            className="shrink-0 cursor-pointer rounded-lg bg-secondary/50 p-2 transition-colors hover:bg-secondary"
          >
            {copied ? (
              <Check className="h-4 w-4" aria-hidden />
            ) : (
              <Copy className="h-4 w-4" aria-hidden />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={6}>
          {copiedLabel}
        </TooltipContent>
      </Tooltip>
      <span className="truncate font-mono">{email}</span>
      <span className="sr-only" aria-live="polite">
        {copied ? copiedLabel : ''}
      </span>
    </div>
  );
}
