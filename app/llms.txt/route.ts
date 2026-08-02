import { buildLlmsTxt } from '@/shared/lib/llms-txt';

/** @layer app — /llms.txt for AI agents */

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
