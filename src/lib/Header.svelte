<script lang="ts">
  import { onMount } from 'svelte';
  
  let scrolled = $state(false);
  
  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class="header" class:scrolled>
  <div class="nav-container">
    <div class="logo">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L20 10L16 18L12 10L16 2Z" fill="#4F7942"/>
        <path d="M16 18L20 26L16 30L12 26L16 18Z" fill="#3A5A32"/>
        <rect x="15" y="26" width="2" height="4" fill="#5A4A3A"/>
      </svg>
      <span class="company-name">EVERGREEN LABS</span>
    </div>
    
    <nav class="nav-menu">
      <a href="#welcome">WELCOME</a>
      <a href="#contact">GET IN TOUCH</a>
      <a href="#blog">BLOG</a>
      <a href="#resources">RESOURCES</a>
    </nav>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    background: rgba(26, 26, 26, 0.1);
    backdrop-filter: blur(10px);
  }
  
  .header.scrolled {
    background: rgba(26, 26, 26, 0.95);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  }
  
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .company-name {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: white;
  }
  
  .nav-menu {
    display: flex;
    gap: 2rem;
  }
  
  .nav-menu a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    transition: color 0.2s ease;
  }
  
  .nav-menu a:hover {
    color: #7A9B6D;
  }
  
  @media (max-width: 768px) {
    .nav-container {
      padding: 1rem;
    }
    
    .company-name {
      font-size: 1rem;
    }
    
    .nav-menu {
      gap: 1rem;
    }
    
    .nav-menu a {
      font-size: 0.8rem;
    }
  }
</style>