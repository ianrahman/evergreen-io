<section class="about" id="about">
  <div class="about-background"></div>
  <div class="container">
    <h2 class="about-title">ABOUT US</h2>
    
    <div class="about-grid">
      <div class="about-card">
        <h3 class="card-title">WHO WE ARE</h3>
        <p class="card-description">
          We're a team of bootcamp graduates who chose to forge our own path in the tech industry. 
          Fresh perspectives, combined with intensive training and real-world experience, 
          allow us to approach problems with creativity and innovation.
        </p>
      </div>
      
      <div class="about-card">
        <h3 class="card-title">WHAT WE STAND FOR</h3>
        <p class="card-description">
          We only build products we believe in, and we believe in products that do good. 
          Our mission is to create technology that makes a positive impact on people's lives 
          and contributes to a better digital world.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    background: #1a1a1a;
    overflow: hidden;
  }
  
  .about-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(26, 74, 46, 0.2) 0%,
      rgba(45, 90, 61, 0.3) 25%,
      rgba(26, 74, 46, 0.2) 50%,
      rgba(63, 107, 79, 0.3) 75%,
      rgba(26, 74, 46, 0.2) 100%
    );
    animation: forestShift 25s ease-in-out infinite;
  }
  
  @keyframes forestShift {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem;
    text-align: center;
    z-index: 1;
    position: relative;
  }
  
  .about-title {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 4rem;
    letter-spacing: 0.1em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .about-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 3rem 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, background 0.3s ease;
  }
  
  .about-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7A9B6D;
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
  }
  
  .card-description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    font-weight: 300;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 4rem 1rem;
    }
    
    .about-title {
      font-size: 2.2rem;
      margin-bottom: 3rem;
    }
    
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .about-card {
      padding: 2rem 1.5rem;
    }
    
    .card-title {
      font-size: 1.3rem;
    }
    
    .card-description {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .about-title {
      font-size: 1.8rem;
      letter-spacing: 0.05em;
    }
    
    .about-card {
      padding: 1.5rem 1rem;
    }
    
    .card-title {
      font-size: 1.2rem;
    }
    
    .card-description {
      font-size: 0.9rem;
    }
  }
</style>