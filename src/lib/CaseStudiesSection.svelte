<script lang="ts">
  import { inView } from "./actions/inView";
</script>

<section class="case-studies" id="work">
  <div class="container">
    <div class="intro">
      <p class="eyebrow">Selected Work</p>
      <h2 class="title">Proof that quality ships fast</h2>
      <p class="summary">
        Embedded with Evergreen Labs as an iOS developer and tech consultant, we
        shipped production-ready apps for founders and enterprise partners in
        just a few sprints.
      </p>
    </div>

    <div class="grid">
      <article class="card" use:inView>
        <div class="visual visual--paid" aria-hidden="true">
          <span>PAID Marketplace</span>
        </div>
        <div class="content">
          <h3>PAID</h3>
          <p>
            Full-stack influencer and advertiser marketplace spanning iOS, web,
            and Firebase.
          </p>
          <ul>
            <li>
              Architected the mobile app, advertiser web dashboard, and realtime
              Firebase backend.
            </li>
            <li>
              Designed end-to-end UX/UI to accelerate founder feedback loops.
            </li>
            <li>
              Refined marketplace incentives with product strategy workshops
              focused on engagement.
            </li>
          </ul>
          <div class="meta">
            <span class="meta-pill">Marketplace</span>
            <span class="meta-pill">Full stack</span>
          </div>
        </div>
      </article>

      <article class="card" use:inView>
        <div class="visual visual--vouch" aria-hidden="true">
          <span>Vouch App</span>
        </div>
        <div class="content">
          <h3>Vouch</h3>
          <p>App Store released iOS experience for a matchmaking startup.</p>
          <ul>
            <li>
              Crafted custom onboarding, notification, and chat UI components
              tuned for retention.
            </li>
            <li>
              Implemented Crashlytics and Mixpanel analytics to monitor funnels
              and triage bugs.
            </li>
            <li>
              Handled in-app purchases and message state tracking via
              UserDefaults.
            </li>
          </ul>
          <div class="meta">
            <span class="meta-pill">App Store launch</span>
            <span class="meta-pill">Growth loops</span>
          </div>
        </div>
      </article>

      <article class="card" use:inView>
        <div class="visual visual--airstream" aria-hidden="true">
          <span>Airstream 2 Go</span>
        </div>
        <div class="content">
          <h3>Airstream 2 Go</h3>
          <p>
            Enterprise iPad modernization of a legacy Objective-C reservation
            platform.
          </p>
          <ul>
            <li>
              Updated the codebase for compatibility with current iOS releases
              and device form factors.
            </li>
            <li>
              Refactored the media player to use AVFoundation for video and
              audio reliability.
            </li>
            <li>
              Refreshed layouts in Interface Builder to deliver a responsive,
              modern UI.
            </li>
          </ul>
          <div class="meta">
            <span class="meta-pill">Enterprise</span>
            <span class="meta-pill">AVFoundation</span>
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

  .role {
    font-size: 0.9rem;
    color: rgba(220, 235, 225, 0.6);
    margin-top: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
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
    transition:
      transform 0.25s ease,
      border 0.25s ease,
      opacity 0.3s ease;
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

  .visual--paid {
    background: radial-gradient(
        circle at 20% 20%,
        rgba(198, 240, 206, 0.45),
        transparent 55%
      ),
      linear-gradient(135deg, #1e4328, #122819);
  }

  .visual--vouch {
    background: radial-gradient(
        circle at 80% 20%,
        rgba(63, 125, 74, 0.55),
        transparent 60%
      ),
      linear-gradient(135deg, #183425, #0d2116);
  }

  .visual--airstream {
    background: radial-gradient(
        circle at 40% 30%,
        rgba(101, 180, 122, 0.45),
        transparent 55%
      ),
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

  .content ul {
    margin: 0;
    padding-left: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: 0.95rem;
    line-height: 1.6;
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
