<script lang="ts">
  import content from '../content/site.json';
</script>

<footer>
  <div class="footer-content">
    <!-- Organization Info -->
    <div class="footer-section">
      <h3>{content.organization.name}</h3>
      <p>{content.organization.tagline}</p>
      <p>{content.contact.address.full}</p>
      <a href={`mailto:${content.contact.email}`} class="contact-link">
        {content.contact.email}
      </a>
    </div>

    <!-- Quick Links -->
    <div class="footer-section">
      <h3>Quick Links</h3>
      <nav>
        {#each content.navigation.links as link}
          <a href={link.href}>
            {link.text}
          </a>
        {/each}
      </nav>
    </div>

    <!-- Connect -->
    <div class="footer-section">
      <h3>Connect</h3>
      <div class="social-links">
        <a
          href={content.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href={content.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href={content.social.linktree}
          target="_blank"
          rel="noopener noreferrer"
        >
          Linktree
        </a>
      </div>
      <a
        href={content.social.newsletter.link}
        class="contact-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content.social.newsletter.text}
      </a>
    </div>

    <!-- CTA Buttons -->
    <div class="footer-section">
      <h3>Take Action</h3>
      <a href={content.cta.contact.href} class="contact-button secondary">
        {content.cta.contact.text}
      </a>
      <a href={content.cta.donate.href} class="contact-button">
        {content.cta.donate.text}
      </a>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; {new Date().getFullYear()} {content.organization.name}. All rights reserved.</p>
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
    font-size: 1.25rem;
    font-weight: bold;
  }

  .footer-section p {
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  .contact-link {
    color: var(--primary-color);
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  .contact-link:hover {
    opacity: 1;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
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

  nav a {
    color: white;
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  nav a:hover {
    opacity: 1;
    text-decoration: none;
  }

  .contact-button {
    display: block;
    background: var(--primary-color);
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    transition: background-color 0.2s;
    text-align: center;
  }

  .contact-button.secondary {
    background: rgba(255, 255, 255, 0.1);
  }

  .contact-button:hover {
    background: #ff5252;
    text-decoration: none;
  }

  .contact-button.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
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
