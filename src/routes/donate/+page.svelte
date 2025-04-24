<script>
  const donationTiers = [
    {
      title: "Community Supporter",
      description: "Support Jewish life in Harlem with a donation of up to $36 each month!",
      options: [
        { amount: 18, label: "Make a Monthly $18 Donation", link: "https://buy.stripe.com/cN25m2a6Uf756gUdQR" },
        { amount: 36, label: "Make a Monthly $36 Donation", link: "https://buy.stripe.com/aEUg0G6UI2kjgVyaEG" }
      ]
    },
    {
      title: "Community Sustainer",
      description: "Become a community sustainer by donating up to $100 each month to keep our community going!",
      options: [
        { amount: 54, label: "Make a Monthly $54 Donation", link: "https://buy.stripe.com/aEUeWCcf26AzgVyfZ1" },
        { amount: 72, label: "Make a Monthly $72 Donation", link: "https://buy.stripe.com/4gwaGmfre3ongVy28c" },
        { amount: 100, label: "Make a Monthly $100 Donation", link: "https://buy.stripe.com/bIY15Mena3onbBe7sx" }
      ]
    },
    {
      title: "Community Builder",
      description: "Build our community in Harlem with a monthly gift of up to $360!",
      options: [
        { amount: 180, label: "Make a Monthly $180 Donation", link: "https://buy.stripe.com/8wM15Ma6U9ML8p2cMS" },
        { amount: 250, label: "Make a Monthly $250 Donation", link: "https://buy.stripe.com/bIY9Ci92Qe310WA6ov" },
        { amount: 360, label: "Make a Monthly 360 Donation", link: "https://buy.stripe.com/fZe15Mdj66Az7kYbIQ" }
      ]
    },
    {
      title: "Community Sponsor",
      description: "Sponsor all of the work we are doing in Harlem with a gift of $500 per month or more!",
      options: [
        { amount: 500, label: "Make a Monthly $500 Donation", link: "https://buy.stripe.com/6oE4hY3Iw6Az0WA28j" },
        { amount: 750, label: "Make a Monthly $750 Donation", link: "https://buy.stripe.com/7sIbKqa6Uf757kYaEN" },
        { amount: 1000, label: "Make a Monthly $1000 Donation", link: "https://buy.stripe.com/cN2g0Gdj6aQPgVyfZ8" }
      ]
    }
  ];
</script>

<div class="container mx-auto px-4 py-12 max-w-6xl">
  <div class="text-center mb-12">
    <h1 class="text-3xl md:text-4xl font-bold mb-6">Support Kehillat Harlem</h1>
    <p class="text-xl mb-4">
      Please show your commitment to our community through a gift which will help us continue to grow and flourish.
    </p>
    <p class="text-lg text-gray-700">
      The recommended monthly donation for those who can afford it is $100 per person.
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
      href="https://donate.stripe.com/8wM7uafre2kj8p2288"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block px-8 py-4 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
    >
      Click Here to Make a One Time Gift
    </a>
  </div>
</div>

<style lang="postcss">
  .bg-primary {
    @apply bg-blue-600;
  }
</style> 