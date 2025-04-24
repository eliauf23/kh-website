<script>
  import content from '$content/site.json';
  let isMenuOpen = false;
  const toggleMenu = () => (isMenuOpen = !isMenuOpen);
  import { page } from "$app/stores";
</script>

<nav class="bg-white shadow-md sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <a
        href={$page.url.pathname === "/kh-website/" ? "/" : "/kh-website/"}
        class="flex items-center space-x-3"
      >
        <img
          src={content.organization.logo.src}
          alt={content.organization.logo.alt}
          class="h-10 w-auto"
        />
      </a>

      <button
        class="md:hidden p-2 rounded-md hover:bg-gray-100"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div class="hidden md:flex items-center space-x-8">
        {#each content.navigation.links as link}
          <a 
            href={link.href} 
            class={link.isPrimary ? "btn-primary" : "nav-link"}
          >
            {link.text}
          </a>
        {/each}
      </div>
    </div>

    {#if isMenuOpen}
      <div class="md:hidden py-4 space-y-2">
        {#each content.navigation.links as link}
          <a 
            href={link.href} 
            class={link.isPrimary ? "mobile-nav-link text-primary font-semibold" : "mobile-nav-link"}
          >
            {link.text}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</nav>

<style lang="postcss">
  .nav-link {
    @apply text-gray-600 hover:text-primary transition-colors duration-200;
  }

  .mobile-nav-link {
    @apply block py-2 px-4 text-gray-600 hover:bg-gray-50 hover:text-primary 
           transition-colors duration-200 rounded-md;
  }

  .btn-primary {
    @apply bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 
           transition-colors duration-200;
  }
</style>
