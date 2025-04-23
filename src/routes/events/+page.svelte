<script>
  const upcomingEvents = [
    {
      title: "Women's Rosh Chodesh Social",
      date: "Monthly",
      description: "Join Rebbetzin Liran Messinger monthly to celebrate Rosh Chodesh with Torah, snacks, and drinks! (Note: This event is open to all non-male identified folks who are comfortable in a female centered space).",
      image: "/images/rosh-chodesh.jpg"
    },
    {
      title: "Shtiebel Sundays",
      date: "Every Sunday",
      description: "Join us on Sundays for a rotating lineup of events! Each week, we'll open the ONLY kosher café in Harlem, offering coffee and a selection of sweet treats for all to enjoy.",
      image: "/images/shtiebel.jpg"
    },
    {
      title: "Learners Shabbat",
      date: "First Shabbat of the Month",
      description: "A Shabbat service designed for those new to Judaism or looking to deepen their understanding of prayer and ritual.",
      image: "/images/learners-shabbat.jpg"
    }
  ];
</script>

<div class="bg-gray-50 min-h-screen">
  <!-- Hero Section -->
  <section class="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div class="absolute inset-0 bg-black/50 z-0"></div>
    <div class="container relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">Upcoming Events</h1>
      <p class="text-xl text-center max-w-2xl mx-auto">
        Join us for prayer, learning, and community building. All are welcome at Kehillat Harlem events.
      </p>
    </div>
  </section>

  <!-- Featured Events -->
  <section class="py-16">
    <div class="container">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each upcomingEvents as event}
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48 bg-gray-200">
              <img 
                src={event.image} 
                alt={event.title}
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <div class="text-sm text-primary font-semibold mb-2">{event.date}</div>
              <h3 class="text-xl font-bold mb-3">{event.title}</h3>
              <p class="text-gray-600 mb-4">{event.description}</p>
              <a href="/contact" class="inline-block text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Calendar Section -->
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-3xl font-bold mb-8 text-center">Monthly Calendar</h2>
      <div class="bg-gray-50 p-6 rounded-lg shadow-md">
        <div class="grid gap-4">
          <div class="bg-white p-4 rounded border">
            <h3 class="font-bold">March 2024</h3>
            <ul class="mt-4 space-y-4">
              <li>
                <div class="text-sm text-primary">March 7</div>
                <div class="font-semibold">Learners Shabbat</div>
              </li>
              <li>
                <div class="text-sm text-primary">March 13</div>
                <div class="font-semibold">Rosh KH: Purim</div>
              </li>
              <li>
                <div class="text-sm text-primary">March 14</div>
                <div class="font-semibold">Purim Day + Sushi Shabbat</div>
              </li>
              <li>
                <div class="text-sm text-primary">March 21</div>
                <div class="font-semibold">Around the World Shabbat: Mexico</div>
              </li>
              <li>
                <div class="text-sm text-primary">March 28</div>
                <div class="font-semibold">Harlem Home Hoppin'</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-6 text-center">
          <a href="/calendar" class="btn-primary">
            View Full Calendar
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Get Involved -->
  <section class="py-16">
    <div class="container text-center">
      <h2 class="text-3xl font-bold mb-6">Get Involved</h2>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Want to help organize events or have an idea for a program? We'd love to hear from you!
      </p>
      <a href="/contact" class="btn-primary">
        Contact Us
      </a>
    </div>
  </section>
</div>

<style lang="postcss">
  .btn-primary {
    @apply inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold 
           hover:bg-primary/90 transition-colors duration-200;
  }

  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
</style> 