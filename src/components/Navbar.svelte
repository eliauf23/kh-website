<script>
  let isMenuOpen = false;
  const toggleMenu = () => isMenuOpen = !isMenuOpen;
</script>

<nav class="bg-white shadow-md sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <a href="/" class="flex items-center space-x-3">
        <img src="/logo.png" alt="Kehillat Harlem" class="h-10 w-auto">
      </a>

      <button 
        class="md:hidden p-2 rounded-md hover:bg-gray-100"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
        </svg>
      </button>

      <div class="hidden md:flex items-center space-x-8">
        <a href="/about" class="nav-link">About</a>
        <a href="/events" class="nav-link">Events</a>
        <a href="/shabbat" class="nav-link">Shabbat</a>
        <a href="/team" class="nav-link">Team</a>
        <a href="/calendar" class="nav-link">Calendar</a>
        <a href="/donate" class="btn-primary">Donate</a>
      </div>
    </div>

    {#if isMenuOpen}
      <div class="md:hidden py-4 space-y-2">
        <a href="/about" class="mobile-nav-link">About</a>
        <a href="/events" class="mobile-nav-link">Events</a>
        <a href="/shabbat" class="mobile-nav-link">Shabbat</a>
        <a href="/team" class="mobile-nav-link">Team</a>
        <a href="/calendar" class="mobile-nav-link">Calendar</a>
        <a href="/donate" class="mobile-nav-link text-primary font-semibold">Donate</a>
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