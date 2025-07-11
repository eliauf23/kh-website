<script lang="ts">
  import { onMount } from "svelte";

  $: currentDateOfMonth = new Date().getDay();
  // console.log({currentDateOfMonth})

  const GCAL_PUBLIC_URL =
    "https://calendar.google.com/calendar/embed?src=kehillatharlem%40gmail.com&ctz=America%2FNew_York";
  const CAL_ID = "kehillatharlem@gmail.com";
  import { PUBLIC_GCAL_API_KEY } from "$env/static/public";

  const MAX_RESULTS = 18;
  const TARGET_TITLES_FRIDAY_NIGHT = new Set([
    "Learner's Shabbat",
    "Sushi Shabbat",
    "Shabbat Around the World",
    "Harlem Home Hoppin' Shabbat",
    "Shabbat at Hops", // TODO: clarify name for this event
  ]);

  type Event = {
    startDate: string;
    title: string;
    url?: string;
  };
  let events: Event[] = [];
  let loading = true;
  let error: string | null = null;

  onMount(async () => {
    try {
      const timeMin = new Date().toISOString(); // only upcoming
      // TODO: add the search for target titles in the query

      const url =
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CAL_ID)}/events` +
        `?key=${PUBLIC_GCAL_API_KEY}&singleEvents=true&orderBy=startTime` +
        `&timeMin=${timeMin}&maxResults=${MAX_RESULTS}`;
        // `&q=${Array.from(TARGET_TITLES_FRIDAY_NIGHT).join(",")}`;
      const { items } = await fetch(url).then((r) => r.json());

      events = (items ?? [])
        .filter((ev) => TARGET_TITLES_FRIDAY_NIGHT.has(ev.summary))
        .map((ev) => ({
          title: ev.summary,
          startDate: new Date(ev.start.dateTime || ev.start.date),
          url: ev.htmlLink, // optional deep-link
        }));
    } catch (e) {
      console.error(e);
      error = "Could not load events.";
    } finally {
      loading = false;
    }
  });
</script>

{#if loading}
  <p>Loading…</p>
{:else if error}
  <p class="text-red-600">{error}</p>
{:else if !events.length}
  <p>No matching events.</p>
{:else}
  <ul class="space-y-3">
    {#each events as e}
      {#if e.title && e?.startDate}
        <li class="p-3 rounded-lg shadow bg-white/5">
          <a
            class="font-semibold hover:underline"
            href={e.url}
            rel="noopener"
            target="_blank"
          >
            {e.title}
          </a><br />
          <span class="text-sm">
            {e.startDate.toLocaleString("en-US", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </span>
        </li>
      {/if}
    {/each}
  </ul>
{/if}
<!-- TODO: also await loading events -->
{#await import("$content/shabbat.json") then content}
  <div class="container px-4 py-8 mx-auto">
    <h1 class="mb-8 text-4xl font-bold">{content.pageTitle}</h1>

    <!-- Friday Night Services -->
    <section class="mb-12">
      <h2 class="mb-6 text-2xl font-semibold">
        {content.sections.fridayNight.title}
      </h2>
      <p class="mb-6">
        {content.sections.fridayNight.kabbalatShabbat.description}
      </p>

      <div class="relative max-w-2xl">
        <div
          class="absolute left-[2.5rem] top-0 bottom-0 w-px bg-gray-200"
        ></div>
        <div class="space-y-4">
          {#each content.sections.fridayNight.themes as theme}
            <div class="relative flex items-center">
              <div
                class="absolute left-[2.5rem] w-2.5 h-2.5 bg-primary rounded-full transform -translate-x-1/2"
              ></div>
              <div
                class="ml-16 bg-white rounded-lg shadow-sm p-4 w-full transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div class="flex items-baseline gap-4">
                  <span class="font-semibold text-primary">{theme.week}</span>
                  <span class="font-medium text-gray-900">{theme.theme}</span>
                  <!-- TODO: pull in the next saturday for 1-4th, 5th only if month has 5 weeks -->

                  <!-- Calendar link call to action -->
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Saturday Morning Services -->
    <section class="mb-12">
      <div class="flex flex-col items-center gap-8 md:flex-row">
        <div class="w-full md:w-1/2">
          <img
            src={content.sections.saturdayMorning.image}
            alt="Saturday Morning Services"
            class="object-cover w-full h-64 rounded-lg"
          />
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="mb-4 text-2xl font-semibold">
            {content.sections.saturdayMorning.title}
          </h2>
          <p class="text-gray-600">
            {content.sections.saturdayMorning.description}
          </p>
        </div>
      </div>
    </section>

    <!-- Kidz Shabbat -->
    <section>
      <div class="flex flex-col items-center gap-8 md:flex-row">
        <div class="w-full md:w-1/2">
          <img
            src={content.sections.kidzShabbat.image}
            alt="Kidz Shabbat"
            class="object-cover w-full h-64 rounded-lg grayscale"
          />
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="mb-4 text-2xl font-semibold">
            {content.sections.kidzShabbat.title}
          </h2>
          <p class="text-gray-600">
            {content.sections.kidzShabbat.description}
          </p>
        </div>
      </div>
    </section>
  </div>
{/await}

<style lang="postcss">
  :global(body) {
    font-family: system-ui;
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
</style>
