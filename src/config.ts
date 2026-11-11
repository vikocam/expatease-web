// Build-time switches.
//
// ExpaTable (the weekly walk-in hours) is shown on the main site. The second
// link is built from the "sin-expatable" branch, where everything about
// ExpaTable is left out: menu item, home band, pop-up, page, and mentions in
// other texts. Both links run the same code; only the branch name differs.
// PUBLIC_SHOW_EXPATABLE=false does the same on any build.
const branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.GITHUB_REF_NAME || '';
export const NO_EXPATABLE_BRANCH = 'sin-expatable';
export const SHOW_EXPATABLE = branch !== NO_EXPATABLE_BRANCH && process.env.PUBLIC_SHOW_EXPATABLE !== 'false';
