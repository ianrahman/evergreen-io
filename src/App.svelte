<script lang="ts">
  import Header from "./lib/Header.svelte";
  import HeroSection from "./lib/HeroSection.svelte";
  import ServicesSection from "./lib/ServicesSection.svelte";
  import CaseStudiesSection from "./lib/CaseStudiesSection.svelte";
  import AboutSection from "./lib/AboutSection.svelte";
  import ResourcesSection from "./lib/ResourcesSection.svelte";
  import CTASection from "./lib/CTASection.svelte";
  import ContactSection from "./lib/ContactSection.svelte";
  import BackToTop from "./lib/BackToTop.svelte";
</script>

<Header />
<main id="main">
  <HeroSection />
  <ServicesSection />
  <CaseStudiesSection />
  <AboutSection />
  <ResourcesSection />
  <CTASection />
  <ContactSection />
</main>
<BackToTop />

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
