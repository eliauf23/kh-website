<script>
  const rabbi = {
    name: "Rabbi Kyle Savitch",
    title: "Rabbi",
    bio: "Rabbi Savitch received semikha from Yeshivat Chovevei Torah in 2021. He has been active in the Harlem Jewish community since 2016 and helped to found the Harlem Moishe House in 2018. Kyle and his wife, Liran, live in Central Harlem where they enjoy having guests for Shabbat meals. In his free time, Kyle enjoys cooking and rock climbing.",
    image: "/images/rabbi-kyle.jpg"
  };

  const trustees = [
    {
      name: "Elizabeth Aufzien",
      title: "Trustee",
      image: "/images/elizabeth-aufzien.jpg"
    },
    {
      name: "Mark Eckstein",
      title: "Trustee",
      image: "/images/mark-eckstein.jpg"
    },
    {
      name: "Arielle Flax",
      title: "Trustee",
      image: "/images/arielle-flax.jpg"
    },
    {
      name: "Marisa Laks",
      title: "Trustee",
      image: "/images/marisa-laks.jpg"
    },
    {
      name: "Adam Rosenberg",
      title: "Trustee",
      image: "/images/adam-rosenberg.jpg"
    },
    {
      name: "Jonathan Schachter",
      title: "Trustee",
      image: "/images/jonathan-schachter.jpg"
    },
    {
      name: "Jay Worenklein",
      title: "Trustee",
      image: "/images/jay-worenklein.jpg"
    }
  ];
</script>

<div class="bg-gray-50 min-h-screen">
  <!-- Hero Section -->
  <section class="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div class="absolute inset-0 bg-black/50 z-0"></div>
    <div class="container relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">Our Team</h1>
      <p class="text-xl text-center max-w-2xl mx-auto">
        Meet the dedicated individuals who help make Kehillat Harlem a vibrant and welcoming community.
      </p>
    </div>
  </section>

  <!-- Rabbi Section -->
  <section class="py-16">
    <div class="container">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/3">
            <img 
              src={rabbi.image} 
              alt={rabbi.name}
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-8 md:w-2/3">
            <h2 class="text-3xl font-bold mb-2">{rabbi.name}</h2>
            <div class="text-primary font-semibold mb-4">{rabbi.title}</div>
            <p class="text-gray-600 text-lg leading-relaxed">
              {rabbi.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trustees Section -->
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-3xl font-bold mb-12 text-center">Board of Trustees</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each trustees as trustee}
          <div class="bg-gray-50 rounded-lg overflow-hidden">
            <div class="h-64">
              <img 
                src={trustee.image} 
                alt={trustee.name}
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{trustee.name}</h3>
              <div class="text-primary font-semibold">{trustee.title}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Get Involved -->
  <section class="py-16 bg-primary text-white">
    <div class="container text-center">
      <h2 class="text-3xl font-bold mb-6">Get Involved</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        Interested in contributing to our community? We're always looking for volunteers and committee members.
      </p>
      <a href="/contact" class="btn-secondary">
        Contact Us
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