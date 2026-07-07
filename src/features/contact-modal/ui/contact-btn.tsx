'use client';

/** @layer features / slice contact-modal / segment ui — client trigger */

type ContactBtnProps = {
  label: string;
};

export function ContactBtn({ label }: ContactBtnProps) {
  return (
    <button
      type="button"
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </button>
  );
}
