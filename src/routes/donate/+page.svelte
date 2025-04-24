<script>
  import content from '$content/donate.json';
  const { pageTitle, mainDescription, recommendedDonation, donationTiers, oneTimeGift } = content;
</script>

<div class="container mx-auto px-4 py-12 max-w-6xl">
  <div class="text-center mb-12">
    <h1 class="text-3xl md:text-4xl font-bold mb-6">{pageTitle}</h1>
    <p class="text-xl mb-4">
      {mainDescription}
    </p>
    <p class="text-lg text-gray-700">
      {recommendedDonation}
    </p>
  </div>

  <!-- Donation Tiers -->
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    {#each donationTiers as tier}
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-4">{tier.title}</h2>
          <p class="text-gray-600 mb-6">
            {tier.description}
          </p>
          <div class="space-y-3">
            {#each tier.options as option}
              <a 
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full text-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors duration-200"
              >
                {option.label}
              </a>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- One Time Gift -->
  <div class="text-center">
    <a 
      href={oneTimeGift.link}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block px-8 py-4 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
    >
      {oneTimeGift.label}
    </a>
  </div>
</div>

<style lang="postcss">
  .bg-primary {
    @apply bg-blue-600;
  }

  /* Enhanced hover styles for donation buttons */
  a[href*="stripe.com"] {
    @apply hover:no-underline text-white hover:text-white transition-all duration-200 ease-in-out;
    transform: translateY(0);
  }

  a[href*="stripe.com"]:hover {
    @apply bg-blue-700 shadow-lg;
    transform: translateY(-1px);
  }
</style> 