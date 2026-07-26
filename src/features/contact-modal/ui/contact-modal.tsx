'use client';

/** @layer features / slice contact-modal / segment ui — client (Radix Modal) */

import { Check, Copy, Mail, Send } from 'lucide-react';
import { useState } from 'react';

import { GitHubIcon, LinkedInIcon } from '@/shared/assets/icons';
import { contacts } from '@/shared/config/contacts';
import type { Dictionary } from '@/shared/i18n';
import { Modal } from '@/shared/ui';

type ContactModalContent = Dictionary['contactModal'];
type SocialLabels = Dictionary['footer']['social'];

type ContactModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: ContactModalContent;
  social: SocialLabels;
};

const socialLinks = [
  {
    id: 'github' as const,
    href: contacts.gitHub,
    handle: contacts.gitHubHandle,
    icon: GitHubIcon,
    rowClassName:
      'bg-gradient-to-br from-zinc-500/10 to-neutral-500/10 border-zinc-500/20',
  },
  {
    id: 'linkedin' as const,
    href: contacts.linkedin,
    handle: contacts.linkedinHandle,
    icon: LinkedInIcon,
    rowClassName:
      'bg-gradient-to-br from-blue-600/10 to-blue-500/10 border-blue-600/20',
  },
  {
    id: 'telegram' as const,
    href: contacts.telegram,
    handle: contacts.telegramHandle,
    icon: Send,
    rowClassName:
      'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20',
  },
] as const;

export function ContactModal({
  open,
  onOpenChange,
  content,
  social,
}: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={content.title}
      contentClassName="space-y-4"
    >
      {socialLinks.map((link) => {
        const Icon = link.icon;
        const label = social[link.id];

        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex w-full items-center gap-4 rounded-xl border p-4 transition-all hover:shadow-lg ${link.rowClassName}`}
          >
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary/50 transition-transform group-hover:scale-110 group-hover:bg-secondary">
              <Icon className="size-5" />
            </div>
            <div className="min-w-0 flex-1 text-left">
              <p className="font-semibold">{label}</p>
              <p className="truncate text-sm text-muted-foreground">
                {link.handle}
              </p>
            </div>
          </a>
        );
      })}

      <div className="flex items-center gap-3 rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-purple-500/20 p-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary/50">
          <Mail className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="mb-1 text-sm text-muted-foreground">{content.email}</p>
          <p className="break-all font-mono text-sm">{contacts.email}</p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex shrink-0 cursor-pointer items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          {copied ? (
            <>
              <Check className="size-3.5" />
              {content.copied}
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              {content.copy}
            </>
          )}
        </button>
      </div>
    </Modal>
  );
}
