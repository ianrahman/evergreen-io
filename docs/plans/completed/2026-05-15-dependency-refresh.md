# 2026-05-15 Dependency Refresh

## Status

- State: Completed
- Owner: Codex
- Last updated: 2026-05-15

## Goal

Update the project's Bun-managed dependencies to current compatible releases,
refresh `bun.lock`, and verify the Svelte/Vite/Cloudflare build surface still
passes the repo's normal checks.

## Assumptions

- "All deps" means direct dependency specifiers in `package.json` plus the
  transitive graph captured in `bun.lock`.
- The repo should remain on `main`; no branch or worktree will be created.
- The existing `.codex/config.toml` modification is unrelated and will not be
  touched or staged.

## Non-Goals

- No UI redesign or product behavior changes.
- No Cloudflare deployment.
- No unrelated cleanup of source, generated output, or local Codex config.

## Options Considered

- Use `bun update --latest`: preferred because this repo uses Bun and the
  request is a broad dependency refresh.
- Manually edit package ranges one by one: rejected for this pass because it is
  slower and more error-prone for a full refresh.
- Keep package ranges fixed and update only the lockfile: rejected because "all
  deps" implies direct package targets should move too.

## Plan

1. Capture the current dependency state and outdated packages. Completed.
2. Run the Bun dependency refresh and review direct range changes. Completed.
3. Run validation: `bun run check`, `bun run test`, `bun run build`, and
   `bun run test:e2e`. Completed.
4. Update this plan with results, review findings, and follow-up notes.
   Completed.

## Outcome

- Refreshed all Bun-managed direct dependency ranges and regenerated
  `bun.lock`.
- Updated the Cloudflare worker handler to use Cloudflare worker request and
  response types exposed by the current `@cloudflare/workers-types` package.
- Removed unused Svelte selectors that the updated checker now reports as
  warnings.
- Brought unit and Playwright specs in line with the current landing page
  surface, including the intentionally hidden Work section.
- Fixed the mobile navigation menu stacking and verified mobile contact
  navigation across Chromium and WebKit.

## Validation

- `bun outdated`: no remaining outdated direct packages reported.
- `bun run check`: 0 errors, 0 warnings.
- `bun run test`: 1 file passed, 3 tests passed.
- `bun run build`: Vite production build and Cloudflare worker bundle passed.
- `bun run test:e2e`: 75 tests passed across Chromium, Firefox, WebKit, Mobile
  Chrome, and Mobile Safari.

## Notes

- The first e2e run after updating Playwright required installing the matching
  browser binaries with `bunx playwright install`.
- The repo was already ahead of `origin/main` by 1, behind by 2, and had
  unrelated `.codex/config.toml` changes before this work began.
- Commit `236a8d1` appeared during this run and includes dependency work plus
  `.codex/config.toml` and About-section copy changes outside the original
  dependency-refresh scope. Those committed changes were not reverted here to
  avoid discarding simultaneous work from another actor.
