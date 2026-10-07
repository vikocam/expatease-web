import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://expatease.nl')).origin;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const noindex = import.meta.env.PUBLIC_NOINDEX === 'true';
  const body = noindex
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${origin}${base}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
