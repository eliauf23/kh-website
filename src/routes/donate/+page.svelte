<script>
  const givingLevels = [
    {
      name: "Friend",
      amount: "$180",
      description: "Support our weekly Shabbat kiddush and community meals.",
      benefits: [
        "Recognition in our annual report",
        "Priority registration for high holiday services"
      ]
    },
    {
      name: "Sustainer",
      amount: "$360",
      description: "Help us maintain and improve our community spaces.",
      benefits: [
        "All Friend level benefits",
        "Reserved seating at high holiday services",
        "Invitation to annual donor appreciation event"
      ]
    },
    {
      name: "Builder",
      amount: "$1,800",
      description: "Invest in our community's growth and educational programs.",
      benefits: [
        "All Sustainer level benefits",
        "Private meeting with the Rabbi",
        "Recognition on our donor wall"
      ]
    }
  ];

  const otherWaysToGive = [
    {
      title: "Sponsor a Kiddush",
      description: "Honor a special occasion or remember a loved one by sponsoring a Shabbat kiddush.",
      link: "/contact"
    },
    {
      title: "Planned Giving",
      description: "Include Kehillat Harlem in your estate planning to ensure our community's future.",
      link: "/contact"
    },
    {
      title: "Matching Gifts",
      description: "Many employers match charitable contributions. Check if your company participates.",
      link: "/contact"
    }
  ];
</script>

<div class="bg-gray-50 min-h-screen">
  <!-- Hero Section -->
  <section class="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div class="absolute inset-0 bg-black/50 z-0"></div>
    <div class="container relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">Support Our Community</h1>
      <p class="text-xl text-center max-w-2xl mx-auto">
        Your generous support helps us maintain our inclusive community and expand our programming.
      </p>
    </div>
  </section>

  <!-- Giving Levels -->
  <section class="py-16">
    <div class="container">
      <h2 class="text-3xl font-bold mb-12 text-center">Annual Giving Levels</h2>
      <div class="grid gap-8 md:grid-cols-3">
        {#each givingLevels as level}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-2xl font-bold mb-2">{level.name}</h3>
            <div class="text-primary text-3xl font-bold mb-4">{level.amount}</div>
            <p class="text-gray-600 mb-6">{level.description}</p>
            <ul class="space-y-2 mb-6">
              {#each level.benefits as benefit}
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              {/each}
            </ul>
            <a href="/contact" class="btn-primary block text-center">
              Donate {level.amount}
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Other Ways to Give -->
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-3xl font-bold mb-12 text-center">Other Ways to Give</h2>
      <div class="grid gap-8 md:grid-cols-3">
        {#each otherWaysToGive as way}
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-bold mb-3">{way.title}</h3>
            <p class="text-gray-600 mb-4">{way.description}</p>
            <a href={way.link} class="text-primary hover:text-primary-dark font-semibold">
              Learn More →
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Tax Information -->
  <section class="py-16">
    <div class="container">
      <div class="bg-primary text-white rounded-lg p-8">
        <h2 class="text-2xl font-bold mb-4">Tax Information</h2>
        <p class="text-lg mb-6">
          Kehillat Harlem is a 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law.
        </p>
        <div class="text-sm opacity-90">
          Tax ID: XX-XXXXXXX
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="py-16 bg-white">
    <div class="container text-center">
      <h2 class="text-3xl font-bold mb-6">Questions About Giving?</h2>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Our team is here to help you with any questions about donations, planned giving, or other ways to support our community.
      </p>
      <a href="/contact" class="btn-primary">
        Contact Us
      </a>
    </div>
  </section>
</div>

<style lang="postcss">
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .btn-primary {
    @apply inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold 
           hover:bg-primary/90 transition-colors duration-200;
  }
</style> 