<script>
  const fridayNightThemes = [
    { week: "1st", theme: "Learner's Shabbat" },
    { week: "2nd", theme: "Sushi Shabbat" },
    { week: "3rd", theme: "Shabbat Around the World" },
    { week: "4th", theme: "Harlem Home Hoppin' Meals" },
    { week: "5th", theme: "When a month has five Shabbats, we celebrate the last one at Harlem Hops" }
  ];
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <!-- Friday Night Section -->
  <section class="mb-16">
    <div class="max-w-2xl">
      <h2 class="text-2xl font-bold mb-2">Friday Night Services & Meals</h2>
      <p class="text-xl text-gray-700 mb-6 leading-relaxed">
        We gather every Friday evening to pray and connect. Join us for Kabbalat Shabbat at <span class="font-semibold">[TIME]</span>. Each Shabbat of the month has a different theme.
      </p>
      
      <div class="relative max-w-2xl">
        <div class="absolute left-[2.5rem] top-0 bottom-0 w-px bg-gray-200"></div>
        <div class="space-y-4">
          {#each fridayNightThemes as { week, theme }}
            <div class="relative flex items-center">
              <div class="absolute left-[2.5rem] w-2.5 h-2.5 bg-primary rounded-full transform -translate-x-1/2"></div>
              <div class="ml-16 bg-white rounded-lg shadow-sm p-4 w-full transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div class="flex items-baseline gap-4">
                  <span class="text-primary font-semibold">{week}</span>
                  <span class="font-medium text-gray-900">{theme}</span>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Saturday Morning Section -->
  <section class="mb-24">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <div class="md:w-1/2 relative">
        <div class="relative aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src="https://eliauf23.github.io/kh-website/saturday-morning.jpg"
            alt="Saturday Morning at Kehillat Harlem"
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-2xl font-bold border-2 border-white px-6 py-3">
              PUT SHABBAT GRAPHIC HERE
            </div>
          </div>
        </div>
      </div>

      <div class="md:w-1/2">
        <h2 class="text-2xl font-bold mb-4">Saturday Morning Services</h2>
        <div class="space-y-4">
          <p class="text-gray-700">
            Join us every Saturday at <span class="font-semibold">9am</span> for Torah learning, coffee, and treats followed by Shacharit at <span class="font-semibold">9:30am</span>.
          </p>
          <p class="text-gray-700">
            Torah reading and musaf will be preceded by first kiddush at <span class="font-semibold">10:15am</span> and followed by second kiddush around <span class="font-semibold">12:30pm</span>.
          </p>
          <p class="text-gray-700 italic">
            Torah reading is open to community members of any gender identity to read.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Kids Section -->
  <section class="mb-24">
    <div class="flex flex-col md:flex-row gap-8 items-start">
      <div class="md:w-1/2 relative">
        <div class="relative aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src="https://eliauf23.github.io/kh-website/kidz-shabbat.jpg"
            alt="Kidz Shabbat at Kehillat Harlem"
            class="object-cover w-full h-full grayscale"
          />
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-2xl font-bold border-2 border-white px-6 py-3">
              KIDZ SHABBAT GRAPHIC
            </div>
          </div>
        </div>
      </div>

      <div class="md:w-1/2">
        <h2 class="text-2xl font-bold mb-4">Kidz Shabbat</h2>
        <p class="text-gray-700">
          We celebrate Shabbat together with children's services on the first Shabbat of every month.
        </p>
      </div>
    </div>
  </section>
</div>

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
