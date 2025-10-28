<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = $state(false);

  const handleScroll = () => {
    isVisible = window.scrollY > 460;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<button
  class="back-to-top"
  class:visible={isVisible}
  onclick={scrollToTop}
  aria-label="Back to top"
  type="button"
>
  ↑
</button>

<style>
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: rgba(15, 35, 23, 0.85);
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
    box-shadow: 0 12px 24px rgba(15, 35, 23, 0.3);
    transition: transform 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease;
    opacity: 0;
    pointer-events: none;
    z-index: 1200;
    transform: translateY(20px);
  }

  .back-to-top.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .back-to-top:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 32px rgba(15, 35, 23, 0.4);
  }

  .back-to-top:focus-visible {
    outline: 3px solid rgba(126, 196, 142, 0.85);
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    .back-to-top {
      right: 1.25rem;
      bottom: 1.25rem;
    }
  }
</style>
