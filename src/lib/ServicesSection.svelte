<script lang="ts">
  import { inView } from "./actions/inView";
</script>

<section class="services" id="services">
  <div class="container">
    <div class="intro">
      <p class="eyebrow">What We Do</p>
      <h2 class="title">Sustainable products from idea to launch</h2>
      <p class="summary">
        We combine thoughtful strategy, elegant interfaces, and dependable
        engineering so your teams can scale without rebuilding every quarter.
      </p>
    </div>

    <div class="service-grid">
      <article class="service-card" use:inView>
        <div class="icon">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M6 10h20M6 16h20M6 22h12" />
          </svg>
        </div>
        <h3>Product Strategy</h3>
        <p>
          Workshop your roadmap, define KPIs, and ship a validated MVP in weeks,
          not months.
        </p>
      </article>

      <article class="service-card" use:inView>
        <div class="icon">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9 25V11a7 7 0 0 1 14 0v14M7 25h18M12 15h8" />
          </svg>
        </div>
        <h3>Interface &amp; Experience</h3>
        <p>
          Accessible Svelte interfaces, design systems, and motion that keeps
          teams on-brand.
        </p>
      </article>

      <article class="service-card" use:inView>
        <div class="icon">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M6 22 16 8l10 14M6 22h20M12 22l4-6 4 6" />
          </svg>
        </div>
        <h3>Full-Stack Delivery</h3>
        <p>
          TypeScript-first web and fully native mobile apps, ensuring resilient
          performance.
        </p>
      </article>
    </div>
  </div>
</section>

<style>
  .services {
    background: linear-gradient(180deg, #f7fbf7 0%, #eef5f0 100%);
    padding: 6rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .intro {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 3.5rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 0.75rem;
    font-weight: 700;
    color: #3f7d4a;
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 2.75rem;
    color: #1f3324;
    margin-bottom: 1.5rem;
    letter-spacing: 0.02em;
    line-height: 1.2;
  }

  .summary {
    font-size: 1.1rem;
    color: #3a443a;
    line-height: 1.7;
  }

  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background: white;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    box-shadow: 0 20px 40px rgba(31, 51, 36, 0.08);
    border: 1px solid rgba(63, 125, 74, 0.08);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
    opacity: 0;
    transform: translateY(30px);
  }

  .service-card:global(.is-visible) {
    opacity: 1;
    transform: translateY(0);
  }

  .service-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(31, 51, 36, 0.12);
  }

  .service-card h3 {
    font-size: 1.35rem;
    color: #1f3324;
    margin-bottom: 1rem;
    letter-spacing: 0.01em;
  }

  .service-card p {
    font-size: 1rem;
    color: #445044;
    line-height: 1.6;
  }

  .icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: linear-gradient(
      135deg,
      rgba(63, 125, 74, 0.12),
      rgba(31, 51, 36, 0.08)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.75rem;
  }

  .icon svg {
    width: 24px;
    height: 24px;
    stroke: #3f7d4a;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (max-width: 768px) {
    .services {
      padding: 4.5rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .title {
      font-size: 2.1rem;
    }

    .summary {
      font-size: 1rem;
    }

    .service-card {
      padding: 2rem 1.75rem;
    }
  }
</style>
