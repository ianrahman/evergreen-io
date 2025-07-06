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
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 5L50 25L40 45L30 25L40 5Z" fill="#4F7942"/>
        <path d="M40 45L50 65L40 75L30 65L40 45Z" fill="#3A5A32"/>
        <rect x="38" y="65" width="4" height="10" fill="#5A4A3A"/>
      </svg>
    </div>
    <h1 class="hero-title">EVERGREEN LABS</h1>
    <p class="hero-tagline">Fresh code for the long run</p>
    <div class="scroll-indicator">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
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
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .hero-title {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: white;
    margin: 0 0 1rem 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .hero-tagline {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 4rem 0;
    font-weight: 300;
    letter-spacing: 0.05em;
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
    cursor: pointer;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
      letter-spacing: 0.1em;
    }
    
    .hero-tagline {
      font-size: 1.2rem;
    }
    
    .hero-logo svg {
      width: 60px;
      height: 60px;
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