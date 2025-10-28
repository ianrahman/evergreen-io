<script lang="ts">
  import { onMount } from 'svelte';
  
  let mounted = $state(false);
  
  onMount(() => {
    mounted = true;
  });
</script>

<section class="hero" id="welcome">
  <div class="hero-background"></div>
  <div class="hero-content" class:mounted>
    <div class="hero-logo">
      <img
        class="hero-mark"
        src="/assets/tree-256.png"
        srcset="/assets/tree-256.png 1x, /assets/tree-512.png 2x"
        alt="Evergreen Labs tree logo"
        width="108"
        height="108"
      />
    </div>
    <h1 class="hero-title">Evergreen Labs</h1>
    <p class="hero-tagline">Designing resilient products that grow with your business.</p>
    <div class="hero-actions">
      <a class="hero-button primary" href="#contact">Start a Project</a>
      <a class="hero-button ghost" href="#work">See Our Work</a>
    </div>
    <a class="scroll-indicator" href="#services" aria-label="Scroll to services">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>
</section>

<style>
  .hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(26, 26, 26, 0.7) 0%,
      rgba(26, 26, 26, 0.5) 50%,
      rgba(26, 26, 26, 0.8) 100%
    ),
    linear-gradient(
      45deg,
      #1a4a2e 0%,
      #2d5a3d 25%,
      #3f6b4f 50%,
      #2d5a3d 75%,
      #1a4a2e 100%
    );
    animation: backgroundShift 20s ease-in-out infinite;
  }
  
  @keyframes backgroundShift {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.05) rotate(0.5deg); }
  }
  
  .hero-content {
    text-align: center;
    z-index: 1;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease;
  }
  
  .hero-content.mounted {
    opacity: 1;
    transform: translateY(0);
  }
  
  .hero-logo {
    margin-bottom: 2rem;
    animation: float 3s ease-in-out infinite;
  }

  .hero-mark {
    width: clamp(84px, 10vw, 112px);
    height: clamp(84px, 10vw, 112px);
    object-fit: contain;
    filter: drop-shadow(0 14px 32px rgba(25, 64, 41, 0.4));
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .hero-title {
    font-size: 4.25rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: white;
    margin: 0 0 1rem 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .hero-tagline {
    font-size: 1.35rem;
    color: rgba(255, 255, 255, 0.92);
    margin: 0 auto 2.5rem;
    max-width: 520px;
    font-weight: 300;
    letter-spacing: 0.03em;
  }

  .hero-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .hero-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.95rem 2.5rem;
    border-radius: 999px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }

  .hero-button.primary {
    background: linear-gradient(135deg, #5fa761, #3f7d4a);
    color: white;
    box-shadow: 0 10px 20px rgba(63, 125, 74, 0.35);
  }

  .hero-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(63, 125, 74, 0.4);
  }

  .hero-button.ghost {
    border: 1px solid rgba(255, 255, 255, 0.55);
    color: white;
    background: rgba(255, 255, 255, 0.08);
  }

  .hero-button.ghost:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
  }

  .hero-button:focus-visible {
    outline: 3px solid rgba(198, 240, 206, 0.9);
    outline-offset: 3px;
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
    cursor: pointer;
    display: inline-flex;
  }

  .scroll-indicator:focus-visible {
    outline: 2px solid rgba(198, 240, 206, 0.85);
    outline-offset: 6px;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.75rem;
      letter-spacing: 0.08em;
    }
    
    .hero-tagline {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }

    .hero-actions {
      flex-direction: column;
      gap: 1rem;
    }
    
    .hero-mark {
      width: 72px;
      height: 72px;
    }
  }
  
  @media (max-width: 480px) {
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-tagline {
      font-size: 1rem;
    }
  }
</style>
