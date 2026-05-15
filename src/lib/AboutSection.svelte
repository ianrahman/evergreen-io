<section class="principles" id="principles">
  <div class="container">
    <div class="intro">
      <p class="eyebrow">Operating Principles</p>
      <h2 class="title">How the work stays useful after launch.</h2>
      <p class="summary">
        The point is not to make a louder landing page or a bigger backlog. The
        point is to leave your team with decisions, interfaces, and release
        habits that can survive the next sprint.
      </p>
    </div>

    <div class="principle-grid">
      <article class="principle">
        <h3>Specific before expansive</h3>
        <p>
          Every engagement starts by narrowing the problem, naming tradeoffs,
          and deciding what does not need to exist yet.
        </p>
      </article>

      <article class="principle">
        <h3>Readable systems over clever systems</h3>
        <p>
          Code, copy, and UI structure should be boring enough that the next
          person can understand what changed and why.
        </p>
      </article>

      <article class="principle">
        <h3>Release quality is part of the work</h3>
        <p>
          Accessibility, performance, docs, and review are treated as delivery
          requirements, not cleanup tasks for someone else.
        </p>
      </article>
    </div>
  </div>
</section>

<style>
  .principles {
    background: var(--color-ink);
    color: var(--color-paper);
    padding: 6.5rem 0;
  }

  .container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .intro {
    max-width: 860px;
    margin-bottom: 4rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: clamp(2.2rem, 4vw, 4rem);
    line-height: 1.05;
    margin: 0 0 1.5rem;
    letter-spacing: 0;
  }

  .summary {
    max-width: 720px;
    font-size: 1.12rem;
    line-height: 1.65;
    color: var(--color-paper-muted);
    margin: 0;
  }

  .principle-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid rgba(238, 241, 232, 0.28);
  }

  .principle {
    padding: 2rem 2rem 0 0;
    border-top: 3px solid var(--color-accent);
  }

  .principle h3 {
    font-size: 1.4rem;
    margin: 0 0 1rem;
    letter-spacing: 0;
    line-height: 1.25;
  }

  .principle p {
    font-size: 1rem;
    line-height: 1.65;
    margin: 0;
    color: var(--color-paper-muted);
  }

  @media (max-width: 768px) {
    .principles {
      padding: 4.5rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .principle-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>
