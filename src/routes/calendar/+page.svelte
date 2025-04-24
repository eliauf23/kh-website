<script>
  import content from '$content/calendar.json';
</script>

<div class="container mx-auto px-4 py-8 max-w-6xl">
  <h1 class="text-3xl font-bold mb-6">{content.title}</h1>
  
  <div class="relative w-full" style="padding-bottom: 75%;">
    <iframe
      src={content.calendar.src}
      class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
      style="border: 0"
      scrolling="no"
      title={content.calendar.title}
    ></iframe>
  </div>
</div>

<style>
  /* Add any custom styles here if needed */
</style>