<script>
  import content from '$content/team.json';
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <!-- Rabbi Section -->
  <div class="flex flex-col md:flex-row gap-8 mb-16">
    <div class="md:w-1/3">
      <img src={content.rabbi.image} alt={content.rabbi.name} class="w-full rounded-lg" />
    </div>
    <div class="md:w-2/3">
      <h1 class="text-3xl font-bold mb-4">{content.rabbi.name}</h1>
      <p class="text-gray-700 leading-relaxed">
        {content.rabbi.bio}
      </p>
    </div>
  </div>

  <!-- Trustees Section -->
  <h2 class="text-3xl font-bold mb-8 text-center">Trustees</h2>
  <div class="space-y-8 mb-16">
    {#each content.trustees as trustee}
      <div class="flex items-center gap-6">
        <img
          src={trustee.image}
          alt={trustee.name}
          class="w-32 h-32 object-cover rounded-lg"
        />
        <h3 class="text-xl">{trustee.name}</h3>
      </div>
    {/each}
  </div>

  <!-- Leadership Committee Section -->
  <h2 class="text-3xl font-bold mb-8 text-center">Leadership Committee</h2>
  <div class="mb-16">
    <div class="text-center">
      <p class="text-lg leading-relaxed mb-4">
        {content.leadershipCommittee.join(" | ")}
      </p>
    </div>
  </div>

  <!-- Get Involved -->
  <div class="py-16 bg-primary text-white rounded-lg">
    <div class="text-center px-8">
      <h2 class="text-3xl font-bold mb-6">{content.getInvolved.title}</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        {content.getInvolved.description}
      </p>
      <a href={content.getInvolved.buttonLink} class="btn-secondary">
        {content.getInvolved.buttonText}
      </a>
    </div>
  </div>
</div>

<style lang="postcss">
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .btn-secondary {
    @apply inline-block bg-white text-primary px-6 py-3 rounded-lg font-semibold 
             hover:bg-gray-100 transition-colors duration-200;
  }
</style>
