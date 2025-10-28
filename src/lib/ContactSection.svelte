<section class="contact" id="contact">
  <div class="container">
    <h2 class="contact-title">HOW CAN WE HELP?</h2>
    <p class="contact-description">
      We'd love to hear about your project and discuss how we can bring it to life.
    </p>
    <a href="mailto:hello@evergreenlabs.io" class="contact-button">GET IN TOUCH</a>

    <div class="social-links">
      <a href="https://linkedin.com/company/evergreenlabs" class="social-link" aria-label="Connect with us on LinkedIn" target="_blank" rel="noopener">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(
      135deg,
      #1a1a1a 0%,
      #2a2a2a 25%,
      #1a1a1a 50%,
      #2a2a2a 75%,
      #1a1a1a 100%
    );
    position: relative;
    overflow: hidden;
  }

  .contact::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(26, 74, 46, 0.1) 0%,
      rgba(45, 90, 61, 0.2) 50%,
      rgba(26, 74, 46, 0.1) 100%
    );
    animation: contactShift 20s ease-in-out infinite;
  }

  @keyframes contactShift {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2rem;
    text-align: center;
    z-index: 1;
    position: relative;
  }

  .contact-title {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 2rem;
    letter-spacing: 0.1em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .contact-description {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 3rem;
    font-weight: 300;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .contact-button {
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
    margin-bottom: 4rem;
  }

  .contact-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(79, 121, 66, 0.4);
    background: linear-gradient(135deg, #5A8A4D, #85A678);
  }

  .contact-button:active {
    transform: translateY(0);
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .social-link:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    .container {
      padding: 4rem 1rem;
    }

    .contact-title {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
    }

    .contact-description {
      font-size: 1.1rem;
      margin-bottom: 2.5rem;
    }

    .contact-button {
      padding: 1rem 2.5rem;
      font-size: 1rem;
      margin-bottom: 3rem;
    }

    .social-links {
      gap: 1.5rem;
    }

    .social-link {
      width: 45px;
      height: 45px;
    }
  }

  @media (max-width: 480px) {
    .contact-title {
      font-size: 1.8rem;
      letter-spacing: 0.05em;
    }

    .contact-description {
      font-size: 1rem;
    }

    .contact-button {
      padding: 0.9rem 2rem;
      font-size: 0.9rem;
    }

    .social-links {
      gap: 1rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
    }
  }
</style>
