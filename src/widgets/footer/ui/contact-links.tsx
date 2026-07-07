'use client';

/** @layer widgets / slice footer / segment ui — client (social links + tooltips) */

import type { LucideIcon } from 'lucide-react';
import { Send } from 'lucide-react';
import type { ComponentType } from 'react';

import { GitHubIcon, LinkedInIcon } from '@/shared/assets/icons';
import { contacts } from '@/shared/config/contacts';
import type { Dictionary } from '@/shared/i18n';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';

type SocialIconProps = { className?: string };
type SocialIcon = LucideIcon | ComponentType<SocialIconProps>;
type SocialLinkId = keyof Dictionary['footer']['social'];

const socialLinks: ReadonlyArray<{
  id: SocialLinkId;
  icon: SocialIcon;
  href: string;
}> = [
  { id: 'github', icon: GitHubIcon, href: contacts.gitHub || '#' },
  { id: 'linkedin', icon: LinkedInIcon, href: contacts.linkedin || '#' },
  { id: 'telegram', icon: Send, href: contacts.telegram || '#' },
];

type ContactLinksProps = {
  labels: Dictionary['footer']['social'];
};

export function ContactLinks({ labels }: ContactLinksProps) {
  return (
    <div data-segment="contact-links" className="flex items-center gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        const label = labels[link.id];

        return (
          <Tooltip key={link.id}>
            <TooltipTrigger asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
