'use client';

/** @layer shared / slice ui — JSON-LD via DOM (no React <script> nodes) */

import { useEffect } from 'react';

type JsonLdProps = {
  id: string;
  data: unknown;
};

function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * Keeps application/ld+json in document.head without rendering <script> in React.
 * Avoids React 19 client warnings on soft-navigation (e.g. locale switch).
 */
export function JsonLd({ id, data }: JsonLdProps) {
  const html = serializeJsonLd(data);

  useEffect(() => {
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.id = id;
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = html;
  }, [id, html]);

  return null;
}
