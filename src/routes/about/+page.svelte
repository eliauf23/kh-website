<script>
  import content from '$content/about.json';
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <div class="text-center my-12">
    <h1 class="text-4xl font-bold mb-6">
      About Kehillat Harlem (optional heading)
    </h1>
    <p class="text-xl font-medium text-gray-700 mb-8">(optional subheading)</p>
  </div>
  <!-- TODO: could add image carousel here! -->
  <!-- TODO: make this a square image -->
  <div class="mb-12">
    <img
      src={content.imageSrc}
      alt={content.imageAlt}
      class="w-full max-h-[50vh] aspect-square object-cover rounded-lg shadow-lg mb-8"
    />
  </div>

  <div class="prose prose-lg max-w-none">
    {#each content.paragraphs as paragraph}
      <p class="mb-6">{paragraph}</p>
    {/each}

    <div class="mt-12 p-6 bg-gray-50 rounded-lg text-sm">
      <!-- <h2 class="text-2xl font-semibold mb-4">Visit Us</h2> -->
      {#each content.addressString.split("\n") as line}
        {#if line}
          <p class="mb-2">{line}</p>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  :global(.prose) {
    @apply text-gray-700;
  }

  :global(.prose p) {
    @apply leading-relaxed;
  }
</style>
