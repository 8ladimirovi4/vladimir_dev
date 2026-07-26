'use client';

/** @layer features / slice contact-modal / segment ui — client trigger */

import { useState } from 'react';

import type { Dictionary } from '@/shared/i18n';

import { ContactModal } from './contact-modal';

type ContactBtnProps = {
  label: string;
  content: Dictionary['contactModal'];
  social: Dictionary['footer']['social'];
};

export function ContactBtn({ label, content, social }: ContactBtnProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {label}
      </button>
      <ContactModal
        open={open}
        onOpenChange={setOpen}
        content={content}
        social={social}
      />
    </>
  );
}
