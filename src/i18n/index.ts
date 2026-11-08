// Languages and URL helpers. Dutch lives at the root (/diensten/), the other
// languages under a prefix with the same Dutch slugs (/en/diensten/), so every
// page has the same path in each language and the switcher can link across.
export const langs = ['nl', 'en', 'es', 'fr'] as const;
export type Lang = (typeof langs)[number];
/** languages that live under a URL prefix; used by the [lang] routes */
export const prefixedLangs = ['en', 'es', 'fr'] as const;

export const prefix = (lang: Lang) => (lang === 'nl' ? '' : `/${lang}`);
/** localized href for a root-relative path such as "/contact/" */
export const href = (lang: Lang, path: string) => `${prefix(lang)}${path}`;
/** home link for a language ("/" or "/en/") */
export const homeHref = (lang: Lang) => (lang === 'nl' ? '/' : `/${lang}/`);
/** replaces {base} in translated HTML snippets with the language prefix */
export const withBase = (lang: Lang, html: string) => html.replaceAll('{base}', prefix(lang));

export const langPaths = () => prefixedLangs.map((lang) => ({ params: { lang } }));
