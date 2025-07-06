<section class="services" id="services">
  <div class="services-background"></div>
  <div class="container">
    <h2 class="services-title">WE MAKE MOBILE APPS AND WEBSITES</h2>
    <div class="services-content">
      <p class="services-description">
        We're a team of passionate developers who believe in creating digital experiences 
        that stand the test of time. From concept to deployment, we craft mobile applications 
        and websites that are not just functional, but truly exceptional.
      </p>
      <p class="services-description">
        Our approach combines cutting-edge technology with timeless design principles, 
        ensuring your digital products remain fresh and relevant for years to come.
      </p>
    </div>
  </div>
</section>

<style>
  .services {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    background: #1a1a1a;
    overflow: hidden;
  }
  
  .services-background {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(26, 74, 46, 0.3) 50%,
      rgba(26, 74, 46, 0.5) 100%
    );
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem;
    text-align: center;
    z-index: 1;
    position: relative;
  }
  
  .services-title {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 3rem;
    letter-spacing: 0.1em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .services-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .services-description {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: 300;
  }
  
  .services-description:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 4rem 1rem;
    }
    
    .services-title {
      font-size: 2.2rem;
      margin-bottom: 2rem;
    }
    
    .services-description {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .services-title {
      font-size: 1.8rem;
      letter-spacing: 0.05em;
    }
    
    .services-description {
      font-size: 1rem;
    }
  }
</style>