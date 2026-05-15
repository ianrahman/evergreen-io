<section class="hero" id="welcome">
  <div class="hero-content">
    <div class="hero-kicker">Evergreen Labs</div>
    <div class="hero-layout">
      <div class="hero-copy">
        <h1 class="hero-title">
          A fractional product team for software that needs to keep moving.
        </h1>
        <p class="hero-tagline">
          We help small teams shape, build, and stabilize product work without
          turning every release into a rebuild.
        </p>
        <div class="hero-actions" aria-label="Primary actions">
          <a
            class="hero-button primary"
            href="/contact-email?subject=Project%20conversation"
          >
            Start a conversation
          </a>
          <a class="hero-button secondary" href="#work-model">
            See the work model
          </a>
        </div>
      </div>
      <div class="hero-mark-wrap" aria-hidden="true">
        <img
          class="hero-mark"
          src="/assets/tree-256.png"
          srcset="/assets/tree-256.png 1x, /assets/tree-512.png 2x"
          alt=""
          width="108"
          height="108"
        />
        <p>Shape. Build. Stabilize.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 88vh;
    background: var(--color-paper);
    color: var(--color-ink);
    border-bottom: 1px solid var(--color-rule);
  }

  .hero-content {
    max-width: 1180px;
    margin: 0 auto;
    padding: 9rem 2rem 6rem;
  }

  .hero-kicker {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.24em;
    line-height: 1;
    margin-bottom: 3.5rem;
    text-transform: uppercase;
    color: var(--color-accent-strong);
  }

  .hero-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: 5rem;
    align-items: end;
  }

  .hero-copy {
    max-width: 860px;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: clamp(3.25rem, 7vw, 6.8rem);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 0.95;
    max-width: 920px;
    margin: 0;
  }

  .hero-tagline {
    font-size: clamp(1.15rem, 2vw, 1.35rem);
    color: var(--color-muted);
    margin: 2rem 0 0;
    max-width: 660px;
    line-height: 1.55;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.9rem;
    margin-top: 2.75rem;
  }

  .hero-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0.85rem 1.1rem;
    border: 1px solid var(--color-ink);
    border-radius: 2px;
    font-weight: 600;
    letter-spacing: 0;
    text-decoration: none;
    transition:
      transform 0.2s ease,
      background 0.2s ease,
      color 0.2s ease;
  }

  .hero-button.primary {
    background: var(--color-ink);
    color: var(--color-paper);
  }

  .hero-button.secondary {
    background: transparent;
    color: var(--color-ink);
  }

  .hero-button:hover {
    transform: translateY(-2px);
  }

  .hero-button.primary:hover {
    background: var(--color-accent-strong);
    border-color: var(--color-accent-strong);
  }

  .hero-button.secondary:hover {
    background: var(--color-ink);
    color: var(--color-paper);
  }

  .hero-button:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 3px;
  }

  .hero-mark-wrap {
    border-top: 1px solid var(--color-rule-strong);
    padding-top: 1.5rem;
    color: var(--color-muted);
  }

  .hero-mark {
    width: 92px;
    height: 92px;
    object-fit: contain;
    margin-bottom: 1.5rem;
  }

  .hero-mark-wrap p {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .hero {
      min-height: auto;
    }

    .hero-content {
      padding: 7rem 1.25rem 4.5rem;
    }

    .hero-layout {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .hero-button {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .hero-content {
      padding-top: 6.5rem;
    }
  }
</style>
