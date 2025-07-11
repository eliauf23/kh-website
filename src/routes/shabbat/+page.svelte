<script lang="ts">
  import { onMount } from "svelte";

  const GCAL_PUBLIC_URL =
    "https://calendar.google.com/calendar/embed?src=kehillatharlem%40gmail.com&ctz=America%2FNew_York";
  const CAL_ID = "kehillatharlem@gmail.com";
  import { PUBLIC_GCAL_API_KEY } from "$env/static/public";

  const MAX_RESULTS = 50;
  
  // Event titles we're looking for
  const TARGET_TITLES_FRIDAY_NIGHT = new Set([
    "Learner's Shabbat",
    "Sushi Shabbat",
    "Shabbat Around the World",
    "Harlem Home Hoppin' Shabbat",
    "Shabbat at Hops",
  ]);
  
  const SATURDAY_MORNING_KEYWORDS = ["Saturday Morning Services", "Shacharit", "Torah Service"];
  const FRIDAY_NIGHT_KEYWORDS = ["Kabbalat Shabbat", "Friday Night Services"];

  type Event = {
    startDate: Date;
    endDate?: Date;
    title: string;
    url?: string;
    description?: string;
    location?: string;
  };
  
  let fridayNightEvents: Event[] = [];
  let saturdayMorningEvents: Event[] = [];
  let upcomingFridayServices: Event[] = [];
  let loading = true;

  onMount(async () => {
    try {
      const timeMin = new Date().toISOString();
      const timeMax = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(); // 90 days ahead
      
      const url =
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CAL_ID)}/events` +
        `?key=${PUBLIC_GCAL_API_KEY}&singleEvents=true&orderBy=startTime` +
        `&timeMin=${timeMin}&maxResults=${MAX_RESULTS}&timeMax=${timeMax}`;
        
      const { items } = await fetch(url).then((r) => r.json());

      const events = (items ?? []).map((ev: any) => ({
        title: ev.summary,
        startDate: new Date(ev.start.dateTime || ev.start.date),
        endDate: ev.end ? new Date(ev.end.dateTime || ev.end.date) : undefined,
        url: ev.htmlLink,
        description: ev.description,
        location: ev.location,
      }));

      // Filter Friday night themed events
      fridayNightEvents = events
        .filter((ev: Event) => TARGET_TITLES_FRIDAY_NIGHT.has(ev.title))
        .slice(0, 5); // Get next 5 themed events

      // Filter Friday night service times
      upcomingFridayServices = events
        .filter((ev: Event) => 
          FRIDAY_NIGHT_KEYWORDS.some(keyword => 
            ev.title.toLowerCase().includes(keyword.toLowerCase())
          )
        )
        .slice(0, 4); // Get next 4 Friday services

      // Filter Saturday morning events
      saturdayMorningEvents = events
        .filter((ev: Event) => 
          SATURDAY_MORNING_KEYWORDS.some(keyword => 
            ev.title.toLowerCase().includes(keyword.toLowerCase())
          ) && ev.startDate.getDay() === 6 // Ensure it's a Saturday
        )
        .slice(0, 4); // Get next 4 Saturday services

    } catch (e) {
      console.error("Could not load events from calendar:", e);
    } finally {
      loading = false;
    }
  });
</script>

{#await import("$content/shabbat.json") then content}
  <div class="container px-4 py-8 mx-auto max-w-7xl">
    <h1 class="mb-12 text-4xl md:text-5xl font-bold text-center">{content.pageTitle}</h1>

    <!-- Friday Night Services -->
    <section class="mb-16">
      <h2 class="mb-8 text-3xl font-semibold">
        {content.sections.fridayNight.title}
      </h2>
      
      <!-- Service Times Section -->
      {#if loading}
        <div class="mb-8 p-4 bg-gray-100 rounded-lg">
          <p class="text-gray-600">Loading service times...</p>
        </div>
      {:else if upcomingFridayServices.length > 0}
        <div class="mb-8 p-6 bg-blue-50 rounded-lg">
          <h3 class="mb-4 text-xl font-semibold">Upcoming Friday Night Services</h3>
          <div class="space-y-2">
            {#each upcomingFridayServices.slice(0, 2) as service}
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span class="font-medium">
                  {service.startDate.toLocaleDateString("en-US", { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span class="text-gray-700">
                  {service.startDate.toLocaleTimeString("en-US", { 
                    hour: 'numeric', 
                    minute: '2-digit' 
                  })}
                  {#if service.endDate}
                    - {service.endDate.toLocaleTimeString("en-US", { 
                      hour: 'numeric', 
                      minute: '2-digit' 
                    })}
                  {/if}
                </span>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Friday Night Themes Grid -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each content.sections.fridayNight.themes as theme}
          <div class="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
            <!-- Theme Image -->
            <div class="aspect-w-16 aspect-h-9 relative h-48 overflow-hidden bg-gray-200">
              <img
                src={theme.image}
                alt={theme.theme}
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                on:error={(e) => { 
                  e.currentTarget.src = 'https://eliauf23.github.io/kh-website/homepage-image.jpg'; 
                }}
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <span class="text-sm font-semibold opacity-90">{theme.week} Friday</span>
                <h3 class="text-xl font-bold">{theme.theme}</h3>
              </div>
            </div>
            
            <!-- Next Occurrence -->
            {#if !loading && fridayNightEvents.length > 0}
              {#each fridayNightEvents as event}
                {#if event.title === theme.theme || (theme.week === "5th" && event.title === "Shabbat at Hops")}
                  <div class="p-4 bg-white">
                    <p class="text-sm text-gray-600 mb-1">Next occurrence:</p>
                    <p class="font-semibold">
                      {event.startDate.toLocaleDateString("en-US", { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                    <a 
                      href={event.url} 
                      target="_blank" 
                      rel="noopener"
                      class="inline-flex items-center mt-2 text-sm text-blue-600 hover:text-blue-800"
                    >
                      View in Calendar
                      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                {/if}
              {/each}
            {/if}
          </div>
        {/each}
      </div>
    </section>

    <!-- Saturday Morning Services -->
    <section class="mb-16">
      <div class="bg-gray-50 rounded-2xl p-6 md:p-8">
        <div class="flex flex-col lg:flex-row gap-8 items-center">
          <div class="w-full lg:w-1/2">
            <img
              src={content.sections.saturdayMorning.image}
              alt="Saturday Morning Services"
              class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div class="w-full lg:w-1/2">
            <h2 class="mb-4 text-3xl font-semibold">
              {content.sections.saturdayMorning.title}
            </h2>
            <p class="text-gray-700 mb-6">
              {content.sections.saturdayMorning.description}
            </p>
            
            <!-- Saturday Service Times -->
            {#if !loading && saturdayMorningEvents.length > 0}
              <div class="bg-white p-4 rounded-lg">
                <h3 class="font-semibold mb-3">Upcoming Services:</h3>
                <div class="space-y-2">
                  {#each saturdayMorningEvents.slice(0, 3) as service}
                    <div class="flex items-center justify-between text-sm">
                      <span>
                        {service.startDate.toLocaleDateString("en-US", { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span class="text-gray-600">
                        {service.startDate.toLocaleTimeString("en-US", { 
                          hour: 'numeric', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </section>

    <!-- Kidz Shabbat -->
    <section>
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8">
        <div class="flex flex-col lg:flex-row-reverse gap-8 items-center">
          <div class="w-full lg:w-1/2">
            <img
              src={content.sections.kidzShabbat.image}
              alt="Kidz Shabbat"
              class="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div class="w-full lg:w-1/2">
            <h2 class="mb-4 text-3xl font-semibold">
              {content.sections.kidzShabbat.title}
            </h2>
            <p class="text-gray-700">
              {content.sections.kidzShabbat.description}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Calendar Link -->
    <div class="mt-12 text-center">
      <a 
        href={GCAL_PUBLIC_URL} 
        target="_blank" 
        rel="noopener"
        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        View Full Calendar
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </a>
    </div>
  </div>
{/await}

<style lang="postcss">
  :global(body) {
    font-family: system-ui, -apple-system, sans-serif;
  }

  .text-primary {
    @apply text-blue-600;
  }

  section {
    @apply transition-all duration-300;
  }

  img {
    @apply transition-all duration-500;
  }
  
  /* Aspect ratio utility for images */
  .aspect-w-16 {
    position: relative;
    padding-bottom: 56.25%;
  }
  
  .aspect-w-16 > img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>