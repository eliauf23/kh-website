<script>
  const shabbatServices = [
    {
      title: "Friday Night Services",
      time: "6:30 PM",
      description: "Welcome in Shabbat with joyful prayer and song, followed by a community dinner."
    },
    {
      title: "Saturday Morning Services",
      time: "9:00 AM",
      description: "Torah learning, coffee, and treats followed by Shacharit at 9:30am. Torah reading and musaf will be preceded by first kiddush at 10:15am and followed by second kiddush around 12:30pm."
    },
    {
      title: "Torah Reading",
      time: "10:15 AM",
      description: "Torah reading is open to community members of any gender identity to read."
    }
  ];

  const monthlyThemes = [
    {
      week: "1st Shabbat",
      theme: "Learner's Shabbat",
      description: "A service designed for those new to Judaism or looking to deepen their understanding of prayer and ritual."
    },
    {
      week: "2nd Shabbat",
      theme: "Sushi Shabbat",
      description: "Join us for a special kiddush featuring sushi and Asian-inspired dishes."
    },
    {
      week: "3rd Shabbat",
      theme: "Shabbat Around the World",
      description: "Each month we explore the customs and cuisine of a different Jewish community around the world."
    },
    {
      week: "4th Shabbat",
      theme: "Harlem Home Hoppin' Meals",
      description: "Community members host intimate Shabbat meals in their homes."
    }
  ];
</script>

<div class="bg-gray-50 min-h-screen">
  <!-- Hero Section -->
  <section class="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div class="absolute inset-0 bg-black/50 z-0"></div>
    <div class="container relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">Shabbat with Kehillat Harlem</h1>
      <p class="text-xl text-center max-w-2xl mx-auto">
        Join us for warm, inclusive, and spirited Shabbat services. All are welcome—always.
      </p>
    </div>
  </section>

  <!-- Service Times -->
  <section class="py-16">
    <div class="container">
      <h2 class="text-3xl font-bold mb-12 text-center">Service Times</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each shabbatServices as service}
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-2">{service.title}</h3>
            <div class="text-primary font-semibold mb-3">{service.time}</div>
            <p class="text-gray-600">{service.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Monthly Themes -->
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-3xl font-bold mb-12 text-center">Monthly Themes</h2>
      <div class="grid gap-6 md:grid-cols-2">
        {#each monthlyThemes as theme}
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="text-primary font-semibold mb-2">{theme.week}</div>
            <h3 class="text-xl font-bold mb-3">{theme.theme}</h3>
            <p class="text-gray-600">{theme.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Additional Info -->
  <section class="py-16">
    <div class="container">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6">What to Expect</h2>
        <div class="grid gap-8 md:grid-cols-2">
          <div>
            <h3 class="text-xl font-bold mb-4">Prayer Style</h3>
            <p class="text-gray-600 mb-4">
              Our services follow traditional liturgy with a modern, egalitarian approach. We use both Hebrew and English, 
              and our prayer style incorporates both traditional and contemporary melodies.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Community</h3>
            <p class="text-gray-600 mb-4">
              We are a diverse community that welcomes Jews of all backgrounds, as well as their families and friends. 
              Whether you're new to Jewish prayer or have been davening for years, you'll find a place here.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-16 bg-primary text-white">
    <div class="container text-center">
      <h2 class="text-3xl font-bold mb-6">Join Us This Shabbat</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        First time joining us? Let us know you're coming and we'll make sure to welcome you personally.
      </p>
      <a href="/contact" class="btn-secondary">
        Get in Touch
      </a>
    </div>
  </section>
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