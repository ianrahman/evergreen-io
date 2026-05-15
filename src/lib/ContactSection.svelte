<section class="contact" id="contact">
  <div class="container">
    <div class="contact-header">
      <p class="eyebrow">Contact</p>
      <h2 class="title">Send the context. We will make the next move clear.</h2>
    </div>

    <div class="contact-body">
      <div class="contact-copy">
        <p>
          Email is the intake path for this pass because it keeps the first
          conversation direct and avoids pretending a form exists before it is
          wired to a real delivery path.
        </p>
        <p>
          A useful note includes the product stage, the decision or release that
          is stuck, the team involved, and the timeline you are trying to protect.
        </p>
      </div>

      <aside class="contact-panel" aria-label="Project conversation checklist">
        <h3>Include if you have it</h3>
        <ul>
          <li>Current product or prototype link</li>
          <li>What needs to ship next</li>
          <li>Team size and technical ownership</li>
          <li>Risks that already feel expensive</li>
        </ul>
        <a
          class="contact-button"
          href="/contact-email?subject=Project%20conversation"
        >
          Email Evergreen Labs
        </a>
      </aside>
    </div>
  </div>
</section>

<style>
  .contact {
    background: var(--color-paper);
    color: var(--color-ink);
    padding: 6.5rem 0;
  }

  .container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .contact-header {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--color-accent-strong);
  }

  .title {
    font-size: clamp(2.2rem, 4vw, 4.3rem);
    line-height: 1.05;
    letter-spacing: 0;
    margin: 0;
  }

  .contact-body {
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 4rem;
    border-top: 1px solid var(--color-rule-strong);
    padding-top: 2rem;
  }

  .contact-copy {
    max-width: 680px;
    display: grid;
    gap: 1.25rem;
  }

  .contact-copy p {
    color: var(--color-muted);
    font-size: 1.12rem;
    line-height: 1.65;
    margin: 0;
  }

  .contact-panel {
    border-left: 1px solid var(--color-rule);
    padding-left: 2rem;
  }

  .contact-panel h3 {
    font-size: 1.25rem;
    margin: 0 0 1.25rem;
  }

  .contact-panel ul {
    list-style: none;
    display: grid;
    gap: 0.8rem;
    margin: 0 0 2rem;
    padding: 0;
  }

  .contact-panel li {
    color: var(--color-muted);
    line-height: 1.5;
    padding-left: 1.1rem;
    position: relative;
  }

  .contact-panel li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.72em;
    width: 0.42rem;
    height: 1px;
    background: var(--color-accent-strong);
  }

  .contact-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    border: 1px solid var(--color-ink);
    border-radius: 2px;
    background: var(--color-ink);
    color: var(--color-paper);
    padding: 0.85rem 1.1rem;
    font-weight: 600;
    transition:
      transform 0.2s ease,
      background 0.2s ease,
      border-color 0.2s ease;
  }

  .contact-button:hover {
    transform: translateY(-2px);
    background: var(--color-accent-strong);
    border-color: var(--color-accent-strong);
  }

  .contact-button:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 3px;
  }

  @media (max-width: 900px) {
    .contact-header,
    .contact-body {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .contact-panel {
      border-left: 0;
      border-top: 1px solid var(--color-rule);
      padding: 2rem 0 0;
    }
  }

  @media (max-width: 768px) {
    .contact {
      padding: 4.5rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .contact-button {
      width: 100%;
    }
  }
</style>
