<script lang="ts">
  import { inView } from './actions/inView';
</script>

<section class="resources" id="resources">
  <div class="container">
    <div class="intro">
      <p class="eyebrow">Resources</p>
      <h2 class="title">Keep momentum between releases</h2>
      <p class="summary">
        Explore our playbooks, tooling presets, and articles to help your team stay shipping even when we are
        not in the room.
      </p>
    </div>

    <div class="resource-grid">
      <article class="resource-card" use:inView>
        <div class="badge">Toolkit</div>
        <h3>Fast start Svelte stack</h3>
        <p>Opinionated project template with Vitest, Playwright, and Cloudflare pipelines ready to deploy.</p>
        <a href="#contact" class="resource-link" aria-label="Request the fast start Svelte stack toolkit">
          Request toolkit
        </a>
      </article>

      <article class="resource-card" use:inView>
        <div class="badge">Guide</div>
        <h3>Design tokens that scale</h3>
        <p>Learn how we model colors, spacing, and typography for multi-brand platforms using CSS variables.</p>
        <a href="#contact" class="resource-link" aria-label="Ask for the design tokens article">
          Request article
        </a>
      </article>

      <article class="resource-card" use:inView>
        <div class="badge">Checklist</div>
        <h3>Pre-launch a11y sweep</h3>
        <p>A five-minute accessibility checklist your QA team can run before every release.</p>
        <a href="#contact" class="resource-link" aria-label="Request the pre-launch accessibility checklist">
          Request checklist
        </a>
      </article>
    </div>
  </div>
</section>

<style>
  .resources {
    background: linear-gradient(180deg, #eef5f0 0%, #ffffff 100%);
    padding: 6rem 0;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .intro {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 3rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.28em;
    font-size: 0.75rem;
    font-weight: 700;
    color: #3f7d4a;
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 2.6rem;
    color: #142417;
    margin-bottom: 1.25rem;
    letter-spacing: 0.02em;
  }

  .summary {
    font-size: 1.05rem;
    color: #3a433a;
    line-height: 1.7;
  }

  .resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .resource-card {
    background: white;
    border-radius: 18px;
    padding: 2.5rem 2rem;
    box-shadow: 0 20px 40px rgba(31, 51, 36, 0.08);
    border: 1px solid rgba(63, 125, 74, 0.14);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
  }

  .resource-card:global(.is-visible) {
    opacity: 1;
    transform: translateY(0);
  }

  .resource-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(31, 51, 36, 0.12);
  }

  .resource-card h3 {
    font-size: 1.4rem;
    color: #1f3324;
    letter-spacing: 0.01em;
  }

  .resource-card p {
    font-size: 1rem;
    color: #455145;
    line-height: 1.6;
  }

  .badge {
    align-self: flex-start;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #3f7d4a;
    background: rgba(63, 125, 74, 0.12);
    padding: 0.45rem 1rem;
    border-radius: 999px;
    font-weight: 700;
  }

  .resource-link {
    margin-top: auto;
    font-weight: 600;
    color: #2e6f3d;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    letter-spacing: 0.03em;
  }

  .resource-link::after {
    content: '→';
    font-size: 1.1rem;
  }

  .resource-link:hover {
    text-decoration: underline;
  }

  .resource-link:focus-visible {
    outline: 2px solid rgba(63, 125, 74, 0.7);
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    .resources {
      padding: 4.5rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .title {
      font-size: 2.1rem;
    }
  }
</style>
