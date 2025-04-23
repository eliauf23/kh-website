<script lang="ts">
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div> 