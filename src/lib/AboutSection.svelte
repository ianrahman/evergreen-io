<script lang="ts">
  import { inView } from './actions/inView';
</script>

<section class="about" id="about">
  <div class="about-overlay"></div>
  <div class="container">
    <div class="intro">
      <p class="eyebrow">About Evergreen Labs</p>
      <h2 class="title">Bootcamp grads building for the long run</h2>
      <p class="summary">
        We bring the curiosity of fresh talent and the discipline of product teams who have shipped at scale.
        Every engagement pairs discovery facilitation with thoughtful delivery so releases stay durable.
      </p>
    </div>

    <div class="about-grid">
      <article class="about-card" use:inView>
        <h3>Integrated partners</h3>
        <p>
          We embed alongside your squad for fortnightly sprints, sharing rituals, backlog priorities, and
          metrics so the hand-off is frictionless.
        </p>
        <ul>
          <li>Weekly demos with real metrics</li>
          <li>Design files and code in shared repos</li>
          <li>Documentation shipped with every release</li>
        </ul>
      </article>

      <article class="about-card" use:inView>
        <h3>Principled delivery</h3>
        <p>
          Accessibility, performance, and maintainability are part of definition-of-done. We build observability
          in from day one so teams catch regressions early.
        </p>
        <ul>
          <li>Svelte + TypeScript-first stack</li>
          <li>Cloudflare-native deployment</li>
          <li>Coverage and accessibility gates</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<style>
  .about {
    position: relative;
    background: radial-gradient(circle at 15% 25%, rgba(53, 107, 76, 0.35), transparent 45%),
      radial-gradient(circle at 85% 20%, rgba(20, 57, 35, 0.45), transparent 50%),
      #102218;
    padding: 6rem 0;
    color: white;
    overflow: hidden;
  }

  .about-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 60%);
    pointer-events: none;
    animation: drift 26s ease-in-out infinite;
  }

  @keyframes drift {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
  }

  .intro {
    max-width: 720px;
    margin: 0 auto 3.5rem;
    text-align: center;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(198, 240, 206, 0.8);
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 2.9rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.04em;
  }

  .summary {
    font-size: 1.15rem;
    line-height: 1.8;
    color: rgba(230, 241, 233, 0.88);
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
  }

  .about-card {
    background: rgba(12, 26, 19, 0.75);
    border-radius: 20px;
    padding: 2.75rem 2.25rem;
    border: 1px solid rgba(126, 196, 142, 0.2);
    box-shadow: 0 24px 48px rgba(5, 15, 10, 0.4);
    transition: transform 0.3s ease, border 0.3s ease, opacity 0.3s ease;
    opacity: 0;
    transform: translateY(35px);
  }

  .about-card:global(.is-visible) {
    opacity: 1;
    transform: translateY(0);
  }

  .about-card:hover {
    transform: translateY(-6px);
    border-color: rgba(126, 196, 142, 0.4);
  }

  .about-card h3 {
    font-size: 1.4rem;
    margin-bottom: 1.25rem;
    letter-spacing: 0.05em;
  }

  .about-card p {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1.75rem;
    color: rgba(230, 241, 233, 0.85);
  }

  .about-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.65rem;
  }

  .about-card li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.98rem;
    color: rgba(198, 240, 206, 0.95);
  }

  .about-card li::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #4fbd77;
    box-shadow: 0 0 12px rgba(79, 189, 119, 0.6);
  }

  @media (max-width: 768px) {
    .about {
      padding: 4.5rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .title {
      font-size: 2.3rem;
    }

    .summary {
      font-size: 1.05rem;
    }

    .about-card {
      padding: 2.25rem 1.75rem;
    }
  }
</style>
