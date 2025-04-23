<script>
  import { onMount } from 'svelte';
  
  let calendarEl;
  
  onMount(() => {
    // Load the Google Calendar iframe after the component mounts
    if (calendarEl) {
      const iframe = document.createElement('iframe');
      iframe.src = 'YOUR_GOOGLE_CALENDAR_EMBED_URL'; // Replace with actual Google Calendar URL
      iframe.style.border = '0';
      iframe.width = '100%';
      iframe.height = '600';
      iframe.frameBorder = '0';
      iframe.scrolling = 'no';
      calendarEl.appendChild(iframe);
    }
  });

  const upcomingEvents = [
    {
      date: "March 7",
      title: "Learners Shabbat",
      time: "6:30 PM",
      location: "Kehillat Harlem"
    },
    {
      date: "March 13",
      title: "Rush KH: Purim",
      time: "7:00 PM",
      location: "Kehillat Harlem"
    },
    {
      date: "March 14",
      title: "Purim Day + Sushi Shabbat",
      time: "9:00 AM",
      location: "Kehillat Harlem"
    },
    {
      date: "March 21",
      title: "Around the World Shabbat: Mexico",
      time: "6:30 PM",
      location: "Kehillat Harlem"
    }
  ];
</script>

<div class="bg-gray-50 min-h-screen">
  <!-- Hero Section -->
  <section class="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div class="absolute inset-0 bg-black/50 z-0"></div>
    <div class="container relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">Community Calendar</h1>
      <p class="text-xl text-center max-w-2xl mx-auto">
        Stay up to date with all of our events, services, and community gatherings.
      </p>
    </div>
  </section>

  <!-- Calendar Section -->
  <section class="py-16">
    <div class="container">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div bind:this={calendarEl} class="calendar-container">
          <!-- Google Calendar will be loaded here -->
          <div class="text-center py-8 text-gray-500">
            Loading calendar...
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Upcoming Events -->
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
      <div class="grid gap-6 md:grid-cols-2">
        {#each upcomingEvents as event}
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="text-primary font-semibold">{event.date}</div>
            <h3 class="text-xl font-bold my-2">{event.title}</h3>
            <div class="text-gray-600">
              <div class="mb-1">Time: {event.time}</div>
              <div>Location: {event.location}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Subscribe Section -->
  <section class="py-16">
    <div class="container">
      <div class="bg-primary text-white rounded-lg p-8 text-center">
        <h2 class="text-3xl font-bold mb-6">Stay Connected</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Subscribe to our calendar to never miss an event. You can add our calendar to your Google Calendar, Apple Calendar, or other calendar apps.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="YOUR_GOOGLE_CALENDAR_SUBSCRIPTION_URL" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-secondary"
          >
            Add to Google Calendar
          </a>
          <a 
            href="YOUR_ICAL_SUBSCRIPTION_URL" 
            class="btn-secondary"
          >
            Download iCal File
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

<style lang="postcss">
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .calendar-container {
    @apply w-full min-h-[600px] bg-white rounded-lg;
  }

  .btn-secondary {
    @apply inline-block bg-white text-primary px-6 py-3 rounded-lg font-semibold 
           hover:bg-gray-100 transition-colors duration-200;
  }
</style> 