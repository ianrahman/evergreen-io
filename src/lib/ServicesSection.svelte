<section class="work-model" id="work-model">
  <div class="container">
    <div class="intro">
      <p class="eyebrow">Work Model</p>
      <h2 class="title">A small product team without the permanent overhead.</h2>
      <p class="summary">
        Evergreen Labs works best when there is real product momentum to protect:
        enough ambiguity to shape, enough code to build, and enough responsibility
        to keep the release maintainable.
      </p>
    </div>

    <div class="work-list">
      <article class="work-item">
        <span class="index">01</span>
        <h3>Shape</h3>
        <p>
          Turn fuzzy requests into a release plan with crisp tradeoffs, named
          risks, and the smallest useful path forward.
        </p>
      </article>

      <article class="work-item">
        <span class="index">02</span>
        <h3>Build</h3>
        <p>
          Design and implement product surfaces with enough documentation,
          tests, and review discipline for your team to own them afterward.
        </p>
      </article>

      <article class="work-item">
        <span class="index">03</span>
        <h3>Stabilize</h3>
        <p>
          Reduce fragile handoffs by tightening accessibility, performance,
          observability, and release notes before the work leaves our hands.
        </p>
      </article>
    </div>
  </div>
</section>

<style>
  .work-model {
    background: var(--color-paper);
    color: var(--color-ink);
    padding: 6.5rem 0;
    border-bottom: 1px solid var(--color-rule);
  }

  .container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .intro {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    gap: 4rem;
    margin-bottom: 4.5rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--color-accent-strong);
  }

  .title {
    font-size: clamp(2.2rem, 4vw, 4rem);
    color: var(--color-ink);
    letter-spacing: 0;
    line-height: 1.05;
    margin: 0;
  }

  .summary {
    grid-column: 2;
    font-size: 1.12rem;
    color: var(--color-muted);
    line-height: 1.65;
    margin: 0;
  }

  .work-list {
    border-top: 1px solid var(--color-rule-strong);
  }

  .work-item {
    display: grid;
    grid-template-columns: 96px 0.7fr 1.3fr;
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--color-rule);
  }

  .index {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--color-accent-strong);
  }

  .work-item h3 {
    font-size: 1.6rem;
    color: var(--color-ink);
    margin: 0;
    letter-spacing: 0;
  }

  .work-item p {
    font-size: 1.05rem;
    color: var(--color-muted);
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    .work-model {
      padding: 4.5rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .intro {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .summary {
      grid-column: auto;
    }

    .work-item {
      grid-template-columns: 1fr;
      gap: 0.8rem;
      padding: 1.5rem 0;
    }
  }
</style>
