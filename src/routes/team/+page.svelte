<script>
  const rabbi = {
    name: "Rabbi Kyle Savitch",
    bio: "Rabbi Savitch received semikha from Yeshivat Chovevei Torah in 2021. He has been active in the Harlem Jewish community since 2016 and helped to found the Harlem Moishe House in 2018. Kyle and his wife, Liran, live in Central Harlem where they enjoy having guests for Shabbat meals. In his free time, Kyle enjoys cooking and rock climbing.",
    image: "/images/rabbi-kyle.jpg",
  };

  const trustees = [
    { name: "Elizabeth Aufzien", image: "/images/elizabeth-aufzien.jpg" },
    { name: "Mark Eckstein", image: "/images/mark-eckstein.jpg" },
    { name: "Arielle Flax", image: "/images/arielle-flax.jpg" },
    { name: "Marisa Laks", image: "/images/marisa-laks.jpg" },
    { name: "Adam Rosenberg", image: "/images/adam-rosenberg.jpg" },
    { name: "Jonathan Schachter", image: "/images/jonathan-schachter.jpg" },
    { name: "Jay Worenklein", image: "/images/jay-worenklein.jpg" },
  ];

  const leadershipCommittee = [
    "Arielle Flax",
    "Liran Messinger",
    "Zachary Carruthers-Rothberg",
    "Ariel Kaye",
    "Chesed Leon",
    "Sam Lipschitz",
    "Michel Liv",
    "Sarah Schecker",
    "Jonathan Zuckerman",
  ];
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <!-- Rabbi Section -->
  <div class="flex flex-col md:flex-row gap-8 mb-16">
    <div class="md:w-1/3">
      <img src={rabbi.image} alt={rabbi.name} class="w-full rounded-lg" />
    </div>
    <div class="md:w-2/3">
      <h1 class="text-3xl font-bold mb-4">{rabbi.name}</h1>
      <p class="text-gray-700 leading-relaxed">
        {rabbi.bio}
      </p>
    </div>
  </div>

  <!-- Trustees Section -->
  <h2 class="text-3xl font-bold mb-8 text-center">Trustees</h2>
  <div class="space-y-8 mb-16">
    {#each trustees as trustee}
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
        {leadershipCommittee.join(" | ")}
      </p>

      
    </div>
  </div>

  <!-- Get Involved -->
  <div class="py-16 bg-primary text-white rounded-lg">
    <div class="text-center px-8">
      <h2 class="text-3xl font-bold mb-6">Get Involved</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        Interested in contributing to our community? We're always looking for
        volunteers and committee members.
      </p>
      <a href="/contact" class="btn-secondary"> Contact Us </a>
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
