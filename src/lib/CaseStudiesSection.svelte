<script lang="ts">
  import { inView } from './actions/inView';
</script>

<section class="case-studies" id="work">
  <div class="container">
    <div class="intro">
      <p class="eyebrow">Selected Work</p>
      <h2 class="title">Proof that quality ships fast</h2>
      <p class="summary">
        From climate-tech to SaaS dashboards, we help founders launch measurable outcomes in under 12 weeks.
        Here’s a sample of recent engagements.
      </p>
    </div>

    <div class="grid">
      <article class="card" use:inView>
        <div class="visual visual--spruce" aria-hidden="true">
          <span>Spruce<br/>Delivery</span>
        </div>
        <div class="content">
          <h3>Spruce Delivery</h3>
          <p>
            Built an internal courier ops tool with Svelte + Cloudflare, reducing failed deliveries by 38% and
            cutting dispatch time in half.
          </p>
          <div class="meta">
            <span class="meta-pill">MVP in 9 weeks</span>
            <span class="meta-pill">Ops tooling</span>
          </div>
        </div>
      </article>

      <article class="card" use:inView>
        <div class="visual visual--canopy" aria-hidden="true">
          <span>Canopy<br/>Analytics</span>
        </div>
        <div class="content">
          <h3>Canopy Analytics</h3>
          <p>
            Delivered a real-time sustainability dashboard with streaming data and offline sync built on durable
            edge storage.
          </p>
          <div class="meta">
            <span class="meta-pill">Edge ready</span>
            <span class="meta-pill">Data viz</span>
          </div>
        </div>
      </article>

      <article class="card" use:inView>
        <div class="visual visual--grove" aria-hidden="true">
          <span>Grove<br/>Studios</span>
        </div>
        <div class="content">
          <h3>Grove Studios</h3>
          <p>
            Rebuilt the booking funnel for a creative collective, increasing conversion 24% with accessibility
            improvements and clearer messaging.
          </p>
          <div class="meta">
            <span class="meta-pill">A11y uplift</span>
            <span class="meta-pill">Growth</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<style>
  .case-studies {
    background: #0b1811;
    padding: 6.25rem 0;
  }

  .container {
    max-width: 1200px;
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
    letter-spacing: 0.3em;
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(126, 196, 142, 0.8);
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 2.7rem;
    color: white;
    margin-bottom: 1.25rem;
    letter-spacing: 0.02em;
  }

  .summary {
    font-size: 1.1rem;
    color: rgba(220, 235, 225, 0.82);
    line-height: 1.8;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
  }

  .card {
    background: rgba(12, 25, 17, 0.8);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(126, 196, 142, 0.25);
    display: flex;
    flex-direction: column;
    min-height: 360px;
    box-shadow: 0 20px 40px rgba(5, 15, 10, 0.45);
    transition: transform 0.25s ease, border 0.25s ease, opacity 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
  }

  .card:global(.is-visible) {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover {
    transform: translateY(-8px);
    border-color: rgba(126, 196, 142, 0.45);
  }

  .visual {
    height: 160px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 1.75rem;
    font-weight: 700;
    font-size: 1.35rem;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.04em;
  }

  .visual span {
    line-height: 1.3;
  }

  .visual--spruce {
    background: radial-gradient(circle at 20% 20%, rgba(198, 240, 206, 0.45), transparent 55%),
      linear-gradient(135deg, #1e4328, #122819);
  }

  .visual--canopy {
    background: radial-gradient(circle at 80% 20%, rgba(63, 125, 74, 0.55), transparent 60%),
      linear-gradient(135deg, #183425, #0d2116);
  }

  .visual--grove {
    background: radial-gradient(circle at 40% 30%, rgba(101, 180, 122, 0.45), transparent 55%),
      linear-gradient(135deg, #214931, #102217);
  }

  .content {
    padding: 2.5rem 2.25rem 2.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: rgba(220, 235, 225, 0.85);
  }

  .content h3 {
    font-size: 1.5rem;
    color: white;
    letter-spacing: 0.02em;
  }

  .content p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .meta-pill {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    background: rgba(126, 196, 142, 0.12);
    border: 1px solid rgba(126, 196, 142, 0.35);
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    .case-studies {
      padding: 4.75rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .title {
      font-size: 2.2rem;
    }

    .visual {
      height: 140px;
    }
  }
</style>
