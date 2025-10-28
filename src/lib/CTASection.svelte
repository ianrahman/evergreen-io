<section class="cta" id="cta">
  <div class="ornament ornament--left" aria-hidden="true"></div>
  <div class="ornament ornament--right" aria-hidden="true"></div>
  <div class="container">
    <p class="eyebrow">Ready when you are</p>
    <h2 class="title">Let’s launch the next durable release together</h2>
    <p class="summary">
      Share your goals and we’ll outline a two-week sprint plan, complete with deliverables, success metrics,
      and team rituals.
    </p>
    <a href="#contact" class="cta-button">Start Your Project</a>
  </div>
</section>

<style>
  .cta {
    position: relative;
    background: linear-gradient(135deg, #cfe9d6 0%, #9ed0ab 100%);
    padding: 5.5rem 0;
    overflow: hidden;
    color: #0f2317;
  }

  .container {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 1.5rem;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.28em;
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(15, 35, 23, 0.75);
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 2.8rem;
    letter-spacing: 0.02em;
    margin-bottom: 1.5rem;
  }

  .summary {
    font-size: 1.1rem;
    color: rgba(15, 35, 23, 0.78);
    line-height: 1.7;
    margin-bottom: 3rem;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: #0f2317;
    color: white;
    padding: 1rem 2.75rem;
    border-radius: 999px;
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-decoration: none;
    box-shadow: 0 12px 28px rgba(15, 35, 23, 0.4);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .cta-button::after {
    content: '↗';
    font-size: 1.2rem;
  }

  .cta-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 32px rgba(15, 35, 23, 0.45);
  }

  .cta-button:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.8);
    outline-offset: 3px;
  }

  .ornament {
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.26);
    filter: blur(0);
    mix-blend-mode: screen;
  }

  .ornament--left {
    top: -80px;
    left: -80px;
  }

  .ornament--right {
    bottom: -120px;
    right: -60px;
  }

  @media (max-width: 768px) {
    .cta {
      padding: 4.75rem 0;
    }

    .title {
      font-size: 2.3rem;
    }

    .summary {
      font-size: 1rem;
      margin-bottom: 2.5rem;
    }
  }
</style>
