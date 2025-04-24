<div class="home">
  <section class="hero">
    <h1>Kehillat Harlem</h1>
    <p class="tagline">
      The uptown partnership-style shul community where All Are Welcome. Always.
    </p>
    <div class="cta-buttons">
      <a href="/kh-website/events" class="cta-button">Join an Event</a>
      <a href="/kh-website/shabbat" class="cta-button secondary"
        >Join us for Shabbat</a
      >
    </div>
  </section>

  <section class="welcome">
    <div class="content">
      <h2>Welcome to Our Community</h2>
      <p>
        Kehillat Harlem is a vibrant Jewish community in the heart of Harlem. We
        are committed to creating an inclusive, welcoming space for Jewish life
        and learning, where everyone can find their place and grow together.
      </p>
    </div>
  </section>

  <section class="image-gallery">
    <div class="image-grid">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="https://eliauf23.github.io/kh-website/homepage-image.jpg"
        alt="Homepage Image"
        class="gallery-image"
      />
    </div>
  </section>
  <section class="featured-events">
    <h2>Upcoming Events</h2>
    <div class="event-grid">
      <div class="event-card">
        <h3>Shabbat Services</h3>
        <p>
          Join us every Friday evening and Saturday morning for services and
          community.
        </p>
        <Link to="/kh-website/shabbat">Learn More</Link>
      </div>
      <div class="event-card">
        <h3>Shtiebel Sundays</h3>
        <p>
          Visit our kosher café in Harlem, offering coffee and treats every
          Sunday.
        </p>
        <Link to="/kh-website/events">Learn More</Link>
      </div>
      <div class="event-card">
        <h3>Women's Rosh Chodesh</h3>
        <p>Monthly gatherings for Torah study and community building.</p>
        <Link to="/kh-website/events">Learn More</Link>
      </div>
    </div>
  </section>
</div>

<style>
  .home {
    width: 100%;
  }

  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/images/harlem-mural.jpg");
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 6rem 2rem;
    margin: -2rem -2rem 2rem -2rem;
  }

  .hero h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .tagline {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .cta-button {
    background: #ff6b6b;
    color: white;
    padding: 1rem 2rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.2s;
  }

  .cta-button:hover {
    background: #ff5252;
  }

  .cta-button.secondary {
    background: transparent;
    border: 2px solid white;
  }

  .cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .welcome {
    padding: 4rem 0;
    text-align: center;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
  }

  .featured-events {
    padding: 4rem 0;
  }

  .featured-events h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .event-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .event-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .event-card h3 {
    margin-bottom: 1rem;
  }

  .event-card p {
    margin-bottom: 1.5rem;
  }

  .event-card a {
    color: #ff6b6b;
    text-decoration: none;
    font-weight: bold;
  }

  .event-card a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 3rem;
    }

    .tagline {
      font-size: 1.25rem;
    }

    .cta-buttons {
      flex-direction: column;
    }

    .event-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
