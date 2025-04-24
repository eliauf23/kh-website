import { c as create_ssr_component, f as escape, e as each, d as add_attribute } from "../../../chunks/ssr.js";
const hero = {
  title: "Events"
};
const upcomingEvents = [
  {
    title: "Women's Rosh Chodesh Social",
    date: "Monthly",
    description: "Join Rebbetzin Liran Messinger monthly to celebrate Rosh Chodesh with Torah, snacks, and drinks! (Note: This event is open to all non-male identified folks who are comfortable in a female centered space).",
    image: "https://eliauf23.github.io/kh-website/rosh-chodesh.png"
  },
  {
    title: "Shtiebel Sundays",
    date: "Every Sunday",
    description: "Join us on Sundays for a rotating lineup of events! Each week, we'll open the ONLY kosher café in Harlem, offering coffee and a selection of sweet treats for all to enjoy. \nWe're excited to launch this initiative in mid-December, featuring Hebrew-speaking hours, an art gallery, and a family Hanukkah party! Interested in showcasing a program at the Shtiebel? Get in touch!",
    image: "https://eliauf23.github.io/kh-website/shtiebel-sundays.jpg"
  }
];
const calendar = {
  title: "Monthly Calendar (example of what we can put here)",
  month: "March 2024",
  events: [
    {
      date: "March 7",
      title: "Learners Shabbat"
    },
    {
      date: "March 13",
      title: "Rosh KH: Purim"
    },
    {
      date: "March 14",
      title: "Purim Day + Sushi Shabbat"
    },
    {
      date: "March 21",
      title: "Around the World Shabbat: Mexico"
    },
    {
      date: "March 28",
      title: "Harlem Home Hoppin'"
    }
  ]
};
const getInvolved = {
  title: "Get Involved",
  description: "Want to help organize events or have an idea for a program? We'd love to hear from you!",
  buttonText: "Contact Us",
  buttonLink: "/contact"
};
const content = {
  hero,
  upcomingEvents,
  calendar,
  getInvolved
};
const css = {
  code: ".btn-primary.svelte-3jtag8{display:inline-block;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(255 107 107 / var(--tw-bg-opacity, 1));padding-left:1.5rem;padding-right:1.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-weight:600;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}.btn-primary.svelte-3jtag8:hover{background-color:rgb(255 107 107 / 0.9)\n}.container.svelte-3jtag8{margin-left:auto;margin-right:auto;max-width:80rem;padding-left:1rem;padding-right:1rem\n}@media(min-width: 640px){.container.svelte-3jtag8{padding-left:1.5rem;padding-right:1.5rem\n    }}@media(min-width: 1024px){.container.svelte-3jtag8{padding-left:2rem;padding-right:2rem\n    }}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import content from '$content/events.json';\\n<\/script>\\n\\n<div class=\\"bg-gray-50 min-h-screen\\">\\n  <!-- Hero Section -->\\n  <section\\n    class=\\"relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white\\"\\n  >\\n    <div class=\\"absolute inset-0 bg-black/50 z-0\\"></div>\\n    <div class=\\"container relative z-10\\">\\n      <h1 class=\\"text-4xl md:text-5xl font-bold mb-6 text-center\\">\\n        {content.hero.title}\\n      </h1>\\n    </div>\\n  </section>\\n\\n  <!-- Featured Events -->\\n  <section class=\\"py-16\\">\\n    <div class=\\"container\\">\\n      <div class=\\"grid gap-8 md:grid-cols-2 lg:grid-cols-3\\">\\n        {#each content.upcomingEvents as event}\\n          <div class=\\"bg-white rounded-lg shadow-md overflow-hidden\\">\\n            <div class=\\"h-48 bg-gray-200\\">\\n              <img\\n                src={event.image}\\n                alt={event.title}\\n                class=\\"w-full h-full object-cover\\"\\n              />\\n            </div>\\n            <div class=\\"p-6\\">\\n              <div class=\\"text-sm text-primary font-semibold mb-2\\">\\n                {event.date}\\n              </div>\\n              <h3 class=\\"text-xl font-bold mb-3\\">{event.title}</h3>\\n              <p class=\\"text-gray-600 mb-4\\">{event.description}</p>\\n              <a\\n                href=\\"/contact\\"\\n                class=\\"inline-block text-primary hover:text-primary-dark font-semibold\\"\\n              >\\n                Learn More →\\n              </a>\\n            </div>\\n          </div>\\n        {/each}\\n      </div>\\n    </div>\\n  </section>\\n\\n  <!-- Calendar Section -->\\n  <section class=\\"py-16 bg-white\\">\\n    <div class=\\"container\\">\\n      <h2 class=\\"text-3xl font-bold mb-8 text-center\\">{content.calendar.title}</h2>\\n      <div class=\\"bg-gray-50 p-6 rounded-lg shadow-md\\">\\n        <div class=\\"grid gap-4\\">\\n          <div class=\\"bg-white p-4 rounded border\\">\\n            <h3 class=\\"font-bold\\">{content.calendar.month}</h3>\\n            <ul class=\\"mt-4 space-y-4\\">\\n              {#each content.calendar.events as event}\\n                <li>\\n                  <div class=\\"text-sm text-primary\\">{event.date}</div>\\n                  <div class=\\"font-semibold\\">{event.title}</div>\\n                </li>\\n              {/each}\\n            </ul>\\n          </div>\\n        </div>\\n        <div class=\\"mt-6 text-center\\">\\n          <a href=\\"/kh-website/calendar\\" class=\\"btn-primary\\">\\n            View Full Calendar\\n          </a>\\n        </div>\\n      </div>\\n    </div>\\n  </section>\\n\\n  <!-- Get Involved -->\\n  <section class=\\"py-16\\">\\n    <div class=\\"container text-center\\">\\n      <h2 class=\\"text-3xl font-bold mb-6\\">{content.getInvolved.title}</h2>\\n      <p class=\\"text-xl text-gray-600 mb-8 max-w-2xl mx-auto\\">\\n        {content.getInvolved.description}\\n      </p>\\n      <a href={content.getInvolved.buttonLink} class=\\"btn-primary\\">\\n        {content.getInvolved.buttonText}\\n      </a>\\n    </div>\\n  </section>\\n</div>\\n\\n<style lang=\\"postcss\\">\\n  .btn-primary {\\n\\n    display: inline-block;\\n\\n    border-radius: 0.5rem;\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(255 107 107 / var(--tw-bg-opacity, 1));\\n\\n    padding-left: 1.5rem;\\n\\n    padding-right: 1.5rem;\\n\\n    padding-top: 0.75rem;\\n\\n    padding-bottom: 0.75rem;\\n\\n    font-weight: 600;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1));\\n\\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\\n\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\n    transition-duration: 200ms\\n}\\n\\n.btn-primary:hover {\\n\\n    background-color: rgb(255 107 107 / 0.9)\\n}\\n\\n  .container {\\n\\n    margin-left: auto;\\n\\n    margin-right: auto;\\n\\n    max-width: 80rem;\\n\\n    padding-left: 1rem;\\n\\n    padding-right: 1rem\\n}\\n\\n  @media (min-width: 640px) {\\n\\n    .container {\\n\\n        padding-left: 1.5rem;\\n\\n        padding-right: 1.5rem\\n    }\\n}\\n\\n  @media (min-width: 1024px) {\\n\\n    .container {\\n\\n        padding-left: 2rem;\\n\\n        padding-right: 2rem\\n    }\\n}\\n</style>\\n"],"names":[],"mappings":"AA2FE,0BAAa,CAEX,OAAO,CAAE,YAAY,CAErB,aAAa,CAAE,MAAM,CAErB,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAE5D,YAAY,CAAE,MAAM,CAEpB,aAAa,CAAE,MAAM,CAErB,WAAW,CAAE,OAAO,CAEpB,cAAc,CAAE,OAAO,CAEvB,WAAW,CAAE,GAAG,CAEhB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CAEnD,mBAAmB,CAAE,KAAK,CAAC,CAAC,gBAAgB,CAAC,CAAC,YAAY,CAAC,CAAC,qBAAqB,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAE/F,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAExD,mBAAmB,CAAE;AACzB,CAEA,0BAAY,MAAO,CAEf,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,GAAG;AAC3C,CAEE,wBAAW,CAET,WAAW,CAAE,IAAI,CAEjB,YAAY,CAAE,IAAI,CAElB,SAAS,CAAE,KAAK,CAEhB,YAAY,CAAE,IAAI,CAElB,aAAa,CAAE;AACnB,CAEE,MAAO,YAAY,KAAK,CAAE,CAExB,wBAAW,CAEP,YAAY,CAAE,MAAM,CAEpB,aAAa,CAAE;AACvB,IAAI,CACJ,CAEE,MAAO,YAAY,MAAM,CAAE,CAEzB,wBAAW,CAEP,YAAY,CAAE,IAAI,CAElB,aAAa,CAAE;AACvB,IAAI,CACJ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="bg-gray-50 min-h-screen"> <section class="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white"><div class="absolute inset-0 bg-black/50 z-0"></div> <div class="container relative z-10 svelte-3jtag8"><h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">${escape(content.hero.title)}</h1></div></section>  <section class="py-16"><div class="container svelte-3jtag8"><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">${each(content.upcomingEvents, (event) => {
    return `<div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="h-48 bg-gray-200" data-svelte-h="svelte-1xzsypl"><img${add_attribute("src", event.image, 0)}${add_attribute("alt", event.title, 0)} class="w-full h-full object-cover"></div> <div class="p-6"><div class="text-sm text-primary font-semibold mb-2">${escape(event.date)}</div> <h3 class="text-xl font-bold mb-3">${escape(event.title)}</h3> <p class="text-gray-600 mb-4">${escape(event.description)}</p> <a href="/contact" class="inline-block text-primary hover:text-primary-dark font-semibold" data-svelte-h="svelte-fotvkk">Learn More →
              </a></div> </div>`;
  })}</div></div></section>  <section class="py-16 bg-white"><div class="container svelte-3jtag8"><h2 class="text-3xl font-bold mb-8 text-center">${escape(content.calendar.title)}</h2> <div class="bg-gray-50 p-6 rounded-lg shadow-md"><div class="grid gap-4"><div class="bg-white p-4 rounded border"><h3 class="font-bold">${escape(content.calendar.month)}</h3> <ul class="mt-4 space-y-4">${each(content.calendar.events, (event) => {
    return `<li><div class="text-sm text-primary">${escape(event.date)}</div> <div class="font-semibold">${escape(event.title)}</div> </li>`;
  })}</ul></div></div> <div class="mt-6 text-center" data-svelte-h="svelte-4wj5fc"><a href="/kh-website/calendar" class="btn-primary svelte-3jtag8">View Full Calendar</a></div></div></div></section>  <section class="py-16"><div class="container text-center svelte-3jtag8"><h2 class="text-3xl font-bold mb-6">${escape(content.getInvolved.title)}</h2> <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">${escape(content.getInvolved.description)}</p> <a${add_attribute("href", content.getInvolved.buttonLink, 0)} class="btn-primary svelte-3jtag8">${escape(content.getInvolved.buttonText)}</a></div></section> </div>`;
});
export {
  Page as default
};
