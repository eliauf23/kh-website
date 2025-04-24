<script>
  const paragraphs = [
    "Kehillat Harlem was founded on a crowded sidewalk in Harlem in 2017. Determined to create a space in Harlem which embraced tradition while also aiming to be fully inclusive, our founders created a minyan (prayer community) which they could be proud to participate in.",
    "Founded on the 18th day of the omer (the period between the holidays of Passover and Shavuot), the day is associated with Netzach She'b'tiferet (endurance/consistency in compassion). Feeling that this was core to the mission of our minyan, the name Kehillat Netzach She'b'tiferet was adopted.",
    "We strive to make each person feel at home in our prayer space by upholding our commitment to halachah (Jewish law) while working hard to hold our commitments to maximum inclusivity. Our tefillot (prayer services) are liturgically traditional and there is a mehitza (separation between genders) while davening. Daveners (those who pray) sit in the section with which they identify, and we make space for anyone who identifies outside of the gender binary. Tefillot are male-led, and the Kabbalat Shabbat service (which introduces the onset of Shabbat) is open to be led by any community member. Torah reading is open to community members of any gender identity to read.",
    "In addition to tefillot, we have regular meals, learning opportunities, and gatherings for the community. We hope we will have the opportunity to share space with you soon.",
  ];

  const addressString = `Address (not for mail)\n2248 Adam Clayton Powell Jr Blvd\nLocated in Storefront\nFor mailing address, please email us\n`;
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
      src="https://eliauf23.github.io/kh-website/purim.jpg"
      alt="Purim at Kehillat Harlem"
      class="w-full max-h-[50vh] aspect-square object-cover rounded-lg shadow-lg mb-8"
    />
  </div>

  <div class="prose prose-lg max-w-none">
    {#each paragraphs as paragraph}
      <p class="mb-6">{paragraph}</p>
    {/each}

    <div class="mt-12 p-6 bg-gray-50 rounded-lg text-sm">
      <!-- <h2 class="text-2xl font-semibold mb-4">Visit Us</h2> -->
      {#each addressString.split("\n") as line}
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
