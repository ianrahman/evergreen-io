# 2026-05-15 Site Redesign

## Status

- State: Active
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
- `CONTACT_EMAIL` will be configured outside source control as
  `contact@evergreenlabs.io`.
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
