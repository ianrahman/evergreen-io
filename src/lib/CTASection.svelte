<section class="cta" id="cta">
  <div class="cta-background"></div>
  <div class="container">
    <h2 class="cta-title">LET'S MAKE SOMETHING AWESOME</h2>
    <p class="cta-description">
      Ready to bring your vision to life? We're excited to partner with you 
      on your next digital journey.
    </p>
    <a href="#contact" class="cta-button">Start Your Project</a>
  </div>
</section>

<style>
  .cta {
    min-height: 80vh;
    position: relative;
    display: flex;
    align-items: center;
    background: #1a1a1a;
    overflow: hidden;
  }
  
  .cta-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(26, 74, 46, 0.3) 0%,
      rgba(45, 90, 61, 0.4) 25%,
      rgba(63, 107, 79, 0.3) 50%,
      rgba(26, 74, 46, 0.4) 75%,
      rgba(45, 90, 61, 0.3) 100%
    );
    animation: roadShift 30s ease-in-out infinite;
  }
  
  @keyframes roadShift {
    0%, 100% { transform: translateX(0px) scale(1); }
    50% { transform: translateX(20px) scale(1.02); }
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem;
    text-align: center;
    z-index: 1;
    position: relative;
  }
  
  .cta-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 2rem;
    letter-spacing: 0.1em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .cta-description {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 3rem;
    font-weight: 300;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-button {
    display: inline-block;
    background: linear-gradient(135deg, #4F7942, #7A9B6D);
    color: white;
    padding: 1.2rem 3rem;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 50px;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(79, 121, 66, 0.3);
    border: 2px solid transparent;
  }
  
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(79, 121, 66, 0.4);
    background: linear-gradient(135deg, #5A8A4D, #85A678);
  }
  
  .cta-button:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 4rem 1rem;
    }
    
    .cta-title {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
    
    .cta-description {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
    }
    
    .cta-button {
      padding: 1rem 2.5rem;
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .cta-title {
      font-size: 2rem;
      letter-spacing: 0.05em;
    }
    
    .cta-description {
      font-size: 1.1rem;
    }
    
    .cta-button {
      padding: 0.9rem 2rem;
      font-size: 0.9rem;
    }
  }
</style>