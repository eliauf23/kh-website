<script>
  import content from '$content/home.json';
</script>

<div class="home">
  <section class="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div class="absolute inset-0 bg-black/50 z-0"></div>
    <div class="container relative z-10 text-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">{content.title}</h1>
      <p class="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
        {content.subtitle}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={content.eventLink} class="btn-primary">Join an Event</a>
        <a href={content.shabbatLink} class="btn-secondary">Join us for Shabbat</a>
      </div>
    </div>
  </section>

  <section class="py-16 bg-white">
    <div class="container text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">{content.welcomeTitle}</h2>
      <p class="max-w-2xl mx-auto text-lg text-gray-600">
        {content.welcomeDescription}
      </p>
    </div>
  </section>

  <section class="py-16 bg-gray-50">
    <div class="container">
      <h2 class="text-3xl text-center mb-12">{content.eventsTitle}</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each content.events as event}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold mb-4">{event.title}</h3>
            <p class="text-gray-600 mb-4">{event.description}</p>
            <a href={event.link} class="text-primary hover:text-primary-dark font-semibold">Learn More →</a>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style lang="postcss">
  .btn-primary {
    @apply bg-primary text-white px-6 py-3 rounded-lg font-semibold 
           hover:bg-primary/90 transition-colors duration-200;
  }

  .btn-secondary {
    @apply bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold
           hover:bg-white/10 transition-colors duration-200;
  }
</style> 