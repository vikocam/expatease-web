import variant from './variant.json';
// Build-time switches.
//
// ExpaTable (the weekly walk-in hours) is shown on the main site. The second
// link is built from the "sin-expatable" branch, where everything about
// ExpaTable is left out: menu item, home band, pop-up, page, and mentions in
// other texts. Both links run the same code; only the branch name differs.
// PUBLIC_SHOW_EXPATABLE=false does the same on any build.
// src/variant.json is the explicit switch: true on main, false on the
// sin-expatable branch, so the result never depends on hosting settings.
const branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.GITHUB_REF_NAME || '';
export const NO_EXPATABLE_BRANCH = 'sin-expatable';
// WhatsApp contact (buttons, links, wizard hand-off). Off on the second link,
// where the contact form is the only channel for now.
export const SHOW_WHATSAPP = variant.showWhatsApp !== false;

export const SHOW_EXPATABLE =
  variant.showExpaTable && branch !== NO_EXPATABLE_BRANCH && process.env.PUBLIC_SHOW_EXPATABLE !== 'false';
