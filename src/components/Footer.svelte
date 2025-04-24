<script lang="ts">
</script>


<footer>
  <div class="footer-content">
    <div class="footer-section">
      <h3>Kehillat Harlem</h3>
      <p>
        The uptown partnership-style shul community where All Are Welcome.
        Always.
      </p>

      <!-- TODO: style these more obviously so they're clearly links -->

      <div class="social-links">
          <!-- Subscribe to KH newsletter -->
          <a href="https://us3.list-manage.com/subscribe?u=7917da8ba10966284661ed310&id=b8928661ab" target="_blank" rel="noopener noreferrer">Subscribe to KH newsletter</a>
        </div>

      <div class="social-links">
    
        <!-- Linktree: https://linktr.ee/kehillatharlem -->
        <a href="https://linktr.ee/kehillatharlem" target="_blank" rel="noopener noreferrer">Linktree</a>
        <a href="https://www.facebook.com/KehillatHarlem/" target="_blank" rel="noopener noreferrer"
          >Facebook</a
        >
        <a
          href="https://www.instagram.com/kehillatharlem/"
          target="_blank"
          rel="noopener noreferrer">Instagram</a
        >
      </div>
    </div>

    <div class="footer-section">
      <h3>Quick Links</h3>
      <nav>
        <a href="/kh-website/about">About</a>
        <a href="/kh-website/events">Events</a>
        <a href="/kh-website/shabbat">Shabbat</a>
        <a href="/kh-website/team">Team</a>
        <a href="/kh-website/calendar">Calendar</a>
        <a href="/kh-website/donate">Donate</a>
      </nav>
    </div>

    <div class="footer-section">
      <h3>Contact Us</h3>
      <p>Email: info@kehillatharlem.org</p>
      <p>2248 Adam Clayton Powell Jr Blvd<br>
        Harlem, NY 10027</p>
      <a href="/kh-website/contact" class="contact-button">Get in Touch</a>
    </div>
  </div>

  <div class="footer-bottom">
    <p>
      &copy; {new Date().getFullYear()} Kehillat Harlem. All rights reserved.
    </p>
  </div>
</footer>

<style>
  footer {
    background: #2d3436;
    color: white;
    padding: 4rem 2rem 2rem;
    margin-top: 4rem;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
  }

  .footer-section h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
  }

  .footer-section p {
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .social-links a {
    color: white;
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  .social-links a:hover {
    opacity: 1;
    text-decoration: none;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  nav :global(a) {
    color: white;
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  nav :global(a:hover) {
    opacity: 1;
    text-decoration: none;
  }

  .contact-button {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    transition: background-color 0.2s;
  }

  .contact-button:hover {
    background: #ff5252;
    text-decoration: none;
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 3rem auto 0;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .social-links {
      justify-content: center;
    }

    nav {
      align-items: center;
    }
  }
</style>
