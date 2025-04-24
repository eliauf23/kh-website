{#await import('$content/shabbat.json') then content}
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">{content.pageTitle}</h1>

    <!-- Friday Night Services -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">{content.sections.fridayNight.title}</h2>
      <p class="mb-6">{content.sections.fridayNight.kabbalatShabbat.description}</p>
      
      <div class="relative max-w-2xl">
        <div class="absolute left-[2.5rem] top-0 bottom-0 w-px bg-gray-200"></div>
        <div class="space-y-4">
          {#each content.sections.fridayNight.themes as theme}
            <div class="relative flex items-center">
              <div class="absolute left-[2.5rem] w-2.5 h-2.5 bg-primary rounded-full transform -translate-x-1/2"></div>
              <div class="ml-16 bg-white rounded-lg shadow-sm p-4 w-full transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div class="flex items-baseline gap-4">
                  <span class="text-primary font-semibold">{theme.week}</span>
                  <span class="font-medium text-gray-900">{theme.theme}</span>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Saturday Morning Services -->
    <section class="mb-12">
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="w-full md:w-1/2">
          <img
            src={content.sections.saturdayMorning.image}
            alt="Saturday Morning Services"
            class="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-semibold mb-4">{content.sections.saturdayMorning.title}</h2>
          <p class="text-gray-600">{content.sections.saturdayMorning.description}</p>
        </div>
      </div>
    </section>

    <!-- Kidz Shabbat -->
    <section>
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="w-full md:w-1/2">
          <img
            src={content.sections.kidzShabbat.image}
            alt="Kidz Shabbat"
            class="w-full h-64 object-cover rounded-lg grayscale"
          />
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="text-2xl font-semibold mb-4">{content.sections.kidzShabbat.title}</h2>
          <p class="text-gray-600">{content.sections.kidzShabbat.description}</p>
        </div>
      </div>
    </section>
  </div>
{/await}

<style lang="postcss">
  .text-primary {
    @apply text-blue-600;
  }
  
  section {
    @apply transition-all duration-300;
  }
  
  img {
    @apply transition-all duration-500;
  }
</style>
