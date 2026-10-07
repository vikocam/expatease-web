import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Zet het base-pad (bv. /expatease-web) voor alle interne links die met "/" beginnen.
// Zonder dit breken links op een GitHub Pages projectsite (gebruiker.github.io/repo/).
async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}

export function prefixBase(base) {
  const prefix = base.replace(/\/$/, '');
  return {
    name: 'prefix-base',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (!prefix) return;
        const root = fileURLToPath(dir);
        const re = new RegExp(`(\\s(?:href|src|action)=["'])/(?!/|${prefix.slice(1)}/|${prefix.slice(1)}["'])`, 'g');
        for (const f of await walk(root)) {
          const html = await readFile(f, 'utf8');
          const fixed = html.replace(re, `$1${prefix}/`);
          if (fixed !== html) await writeFile(f, fixed);
        }
      },
    },
  };
}
