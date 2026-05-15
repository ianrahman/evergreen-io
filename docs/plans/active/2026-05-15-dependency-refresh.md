# 2026-05-15 Dependency Refresh

## Status

- State: Active
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

1. Capture the current dependency state and outdated packages.
2. Run the Bun dependency refresh and review direct range changes.
3. Run lightweight validation: `bun run check`, `bun run test`, and
   `bun run build`.
4. Update this plan with results, review findings, and follow-up notes.
