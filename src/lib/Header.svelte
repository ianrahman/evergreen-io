<script lang="ts">
  import { onMount } from "svelte";

  let scrolled = $state(false);
  let menuOpen = $state(false);
  let isMobile = $state(false);

  const navigationHidden = $derived(isMobile && !menuOpen);

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };

  const closeMenu = () => {
    menuOpen = false;
  };

  onMount(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    const handleMediaChange = () => {
      isMobile = mediaQuery.matches;
      if (!isMobile) {
        menuOpen = false;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    handleMediaChange();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  });
</script>

<a href="#main" class="skip-link">Skip to main content</a>

<header class="header" class:scrolled>
  <div class="nav-container">
    <div class="logo">
      <img
        class="logo-mark"
        src="/assets/tree-64.png"
        srcset="/assets/tree-64.png 1x, /assets/tree-128.png 2x"
        alt="Evergreen Labs logo"
        width="36"
        height="36"
      />
      <span class="company-name">EVERGREEN LABS</span>
    </div>

    <button
      class="menu-toggle"
      aria-expanded={menuOpen}
      aria-controls="primary-navigation"
      onclick={toggleMenu}
    >
      <span class="visually-hidden">Toggle navigation</span>
      <span class="menu-icon" class:open={menuOpen}></span>
    </button>

    <nav
      id="primary-navigation"
      class="nav-menu"
      class:open={menuOpen}
      hidden={navigationHidden}
      inert={navigationHidden}
      aria-hidden={navigationHidden ? "true" : undefined}
    >
      <a href="#welcome" onclick={closeMenu}>Welcome</a>
      <a href="#work-model" onclick={closeMenu}>Work Model</a>
      <a href="#principles" onclick={closeMenu}>Principles</a>
      <a href="#contact" onclick={closeMenu}>Contact</a>
    </nav>
  </div>
</header>

<style>
  .skip-link {
    position: absolute;
    top: -100%;
    left: 1rem;
    padding: 0.75rem 1.25rem;
    background: #4F7942;
    color: white;
    border-radius: 999px;
    font-weight: 600;
    letter-spacing: 0.05em;
    transition: top 0.2s ease;
    z-index: 2000;
  }

  .skip-link:focus {
    top: 1rem;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    background: rgba(242, 241, 232, 0.94);
    border-bottom: 1px solid rgba(42, 54, 42, 0.12);
    backdrop-filter: blur(12px);
  }

  .header.scrolled {
    background: rgba(242, 241, 232, 0.98);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 8px;
  }

  .menu-toggle:focus-visible {
    outline: 2px solid rgba(126, 196, 142, 0.8);
    outline-offset: 3px;
  }

  .menu-icon {
    position: relative;
    width: 24px;
    height: 2px;
    background: var(--color-ink);
    display: inline-block;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .menu-icon::before,
  .menu-icon::after {
    content: '';
    position: absolute;
    left: 0;
    width: 24px;
    height: 2px;
    background: var(--color-ink);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .menu-icon::before {
    top: -7px;
  }

  .menu-icon::after {
    top: 7px;
  }

  .menu-icon.open {
    background: transparent;
  }

  .menu-icon.open::before {
    transform: translateY(7px) rotate(45deg);
  }

  .menu-icon.open::after {
    transform: translateY(-7px) rotate(-45deg);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo-mark {
    width: 36px;
    height: 36px;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(28, 74, 46, 0.35));
  }

  .company-name {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--color-ink);
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 1.75rem;
  }

  .nav-menu a {
    color: var(--color-ink);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    transition: color 0.2s ease;
    border-radius: 8px;
    padding: 0.35rem 0.4rem;
  }

  .nav-menu a:hover {
    color: var(--color-accent-strong);
  }

  .nav-menu a:focus-visible {
    outline: 2px solid rgba(126, 196, 142, 0.8);
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    .nav-container {
      padding: 1rem;
    }

    .company-name {
      font-size: 1rem;
    }

    .menu-toggle {
      display: block;
    }

    .nav-menu {
      position: absolute;
      z-index: 1;
      top: 100%;
      right: 1rem;
      width: calc(100% - 2rem);
      max-width: 320px;
      background: var(--color-paper);
      border: 1px solid rgba(42, 54, 42, 0.12);
      border-radius: 2px;
      padding: 1.25rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .nav-menu.open {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .nav-menu a {
      font-size: 0.95rem;
      width: 100%;
      padding: 0.6rem 0.85rem;
      border-radius: 8px;
      background: rgba(71, 98, 68, 0.08);
    }
  }

  @media (max-width: 480px) {
    .nav-container {
      padding: 0.75rem 1rem;
    }
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
