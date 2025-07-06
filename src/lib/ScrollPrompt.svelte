<section class="scroll-prompt">
  <div class="scroll-background"></div>
  <div class="scroll-content">
    <p class="scroll-text">SCROLL DOWN</p>
  </div>
</section>

<style>
  .scroll-prompt {
    height: 60vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .scroll-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(26, 74, 46, 0.8) 0%,
      rgba(26, 74, 46, 0.6) 50%,
      rgba(26, 74, 46, 0.9) 100%
    );
  }
  
  .scroll-content {
    text-align: center;
    z-index: 1;
    position: relative;
  }
  
  .scroll-text {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    letter-spacing: 0.3em;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: fadeInOut 3s ease-in-out infinite;
  }
  
  @keyframes fadeInOut {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  
  @media (max-width: 768px) {
    .scroll-prompt {
      height: 40vh;
    }
    
    .scroll-text {
      font-size: 1.2rem;
      letter-spacing: 0.2em;
    }
  }
</style>