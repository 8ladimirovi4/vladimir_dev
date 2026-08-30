/** @layer widgets / slice footer / segment ui — server shell */

import type { Dictionary } from '@/shared/i18n';
import { contacts } from '@/shared/config/contacts';

import { ContactLinks } from './contact-links';
import { EmailCopy } from './email-copy';

type FooterProps = {
  dictionary: Dictionary;
};

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer
      data-widget="footer"
      id="contact"
      className="py-4 px-4 sm:px-6 lg:px-12 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#top"
            className="font-mono text-xl tracking-tight hover:text-foreground transition-colors"
          >
            {dictionary.logo}
          </a>
          <ContactLinks labels={dictionary.footer.social} />
          <EmailCopy
            email={contacts.email}
            copyLabel={dictionary.footer.copyEmail}
            copiedLabel={dictionary.footer.copied}
          />
        </div>
      </div>
    </footer>
  );
}
