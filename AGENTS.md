# Repository Guidelines

## Project Structure & Module Organization

- `src/` contains the Svelte entry point and shared UI in `src/lib/`. Add new sections as `PascalCase.svelte` components alongside `HeroSection.svelte`.
- `src/tests/setup.ts` centralizes Vitest + Testing Library hooks; extend this file when adding globals.
- `public/` serves static assets, while end-to-end specs live under `tests/`.
- `dist/` and the `playwright-report/` folder are generated artifacts—inspect them locally but never commit manual changes.

## Build, Test, and Development Commands

- `bun install` keeps dependencies in sync with `bun.lock`.
- `bun run dev` starts the Vite dev server on localhost with hot-module reload.
- `bun run build` outputs the production bundle into `dist/`; pair with `bun run preview` for smoke tests.
- `bun run test` runs the Vitest suite; use `bun run test:ui` to debug interactively.
- `bun run test:e2e` executes Playwright; follow with `bun run test:e2e:report` when a failure needs triage.
- `bun run deploy` (or `deploy:staging`/`deploy:prod`) builds and publishes via Cloudflare Wrangler.

## Coding Style & Naming Conventions

- Use TypeScript across `.ts` and `<script lang="ts">`; keep 2-space indentation and enable strict compiler warnings.
- Components in `src/lib` follow PascalCase filenames; utility modules export camelCase helpers.
- Run `bun run check` (Svelte Check) before submitting and prefer scoped styles, reserving `app.css` for shared tokens.

## Testing Guidelines

- Unit tests use Vitest + Testing Library; name files `*.spec.ts` and colocate with the component when practical.
- Check edge cases (loading states, empty data) and add Playwright journeys in `tests/` for new UX flows.
- Use `bun run test:coverage` before submit; keep coverage at or above the current ~80% baseline.

## Commit & Pull Request Guidelines

- Tests should pass before commits, and TDD should be used for new features.
- Mirror the existing history with short, imperative commit summaries (`Implement landing page`, `Configure project for Pages`); add body text for context or follow-up tasks.
- PRs should state scope, tests run, linked issues, and include before/after screenshots for UI updates; flag any `wrangler.toml` changes explicitly.
- Request at least one review and convert temporary notes to tracked TODOs before merging.

## Deployment & Cloudflare Tips

- Cloudflare Pages settings live in `wrangler.toml`; update environment bindings there and document secrets in the PR.
- Use `bun run deploy:staging` for smoke tests and share the generated URL before requesting a review merge.
