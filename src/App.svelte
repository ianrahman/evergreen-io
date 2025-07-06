<script lang="ts">
  import Header from './lib/Header.svelte';
  import HeroSection from './lib/HeroSection.svelte';
  import ScrollPrompt from './lib/ScrollPrompt.svelte';
  import ServicesSection from './lib/ServicesSection.svelte';
  import AboutSection from './lib/AboutSection.svelte';
  import CTASection from './lib/CTASection.svelte';
  import ContactSection from './lib/ContactSection.svelte';
</script>

<Header />
<main>
  <HeroSection />
  <ScrollPrompt />
  <ServicesSection />
  <AboutSection />
  <CTASection />
  <ContactSection />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  main {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }
</style>