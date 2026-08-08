// Build-time re-export of the site's data modules for
// generate-ai-content.mjs. Bundled with esbuild (asset imports stubbed via
// `empty` loaders) so the generator reads the same single source of truth
// the app renders — no duplicated copy to drift.
export { projects } from "../src/types/project";
export { publications, googleScholarUrl, scholarMetrics } from "../src/types/publications";
export { researchRoles, industryRoles, educationRoles, policyRoles } from "../src/types/roles";
