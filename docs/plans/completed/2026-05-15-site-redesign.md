# 2026-05-15 Site Redesign

## Status

- State: Completed
- Owner: Codex
- Last updated: 2026-05-15

## Goal

Rework the public site around a fractional product team positioning with a
precise editorial operating-manual feel, remove unsupported or fake credibility
signals, and replace the simulated contact form with a Cloudflare Worker email
gate.

## Assumptions

- Stay on `main`; no branch or worktree will be created.
- The target offer is fractional product team support, not a generic product
  agency or a narrow Svelte/Cloudflare specialist.
- Minimal proof is the right scope for this pass: no invented case studies,
  fake resources, client logos, or unsupported metrics.
- `CONTACT_EMAIL` will be configured outside source control with the production
  intake alias.
- The email gate reduces passive scraping but does not eliminate spam risk.

## Non-Goals

- No real form submission endpoint, storage, CRM integration, or calendar-first
  booking flow.
- No new case studies until source material is available.
- No deployment from this implementation pass.
- No new external visual asset or font dependency unless already available in
  the project.

## Options Considered

- Keep the current Resources and CTA sections but rewrite them: rejected because
  they preserve the current template-page structure.
- Add a real form endpoint now: rejected because reliable email contact is the
  required outcome and a form adds delivery, spam, and privacy scope.
- Show the email address directly in the Svelte app: rejected because the plan
  requires keeping the address out of the static bundle.
- Make the page highly technical and dense: rejected in favor of an editorial
  operating-manual direction that still allows charm.

## Plan

1. Commit this durable active plan and `PLAN.md` index update.
2. Rewrite the page structure and copy around hero, work model, operating
   principles, and contact.
3. Replace the fake contact form with a Worker-backed `/contact-email` handoff
   route and update tests.
4. Refine visual design and accessibility, including reduced motion and closed
   mobile navigation behavior.
5. Run full validation plus xhigh UX and implementation reviews, address
   findings, update docs, and move this plan to completed.

## Progress

- 2026-05-15: Plan created from the approved redesign brief.
- 2026-05-15: Rewrote the site around the fractional product team positioning,
  removed the fake form and unused pseudo-resource sections, added the Worker
  email handoff route, and updated unit/e2e coverage.
- 2026-05-15: Addressed xhigh UX and implementation review findings, including
  focus visibility, reduced-motion scrolling, branded email fallback behavior,
  trailing-slash contact routing, and keeping the production email alias out of
  committed docs/tests/build output.

## Outcome

- Repositioned the site around fractional product team support with an editorial
  operating-manual visual system.
- Removed the fake contact form, generic resources, and unused CTA/case-study
  sections.
- Added `/contact-email` and `/contact-email/` Worker handoff routes driven by
  `CONTACT_EMAIL`.
- Updated tests for the new content, mobile navigation hiding, contact handoff,
  Worker fallback, and trailing-slash routing.
- Updated README environment and validation documentation.

## Validation

- `bun run check`: 0 errors, 0 warnings.
- `bun run test -- --run`: 2 files passed, 8 tests passed.
- `bun run test:e2e`: 80 tests passed.
- `bun run build`: Vite app and Worker bundle passed.
- `rg "contact@evergreenlabs\\.io" .`: no matches.
- `rg "contact@evergreenlabs\\.io" dist`: no matches after build.
- Manual viewport review: desktop, tablet, and mobile showed no horizontal
  overflow or obvious overlap; mobile navigation is hidden when closed.

## Review

- xhigh UX review found seven issues; all were addressed.
- xhigh implementation review found three issues; all were addressed.
