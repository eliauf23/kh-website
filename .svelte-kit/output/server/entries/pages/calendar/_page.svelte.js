import { c as create_ssr_component, f as escape, d as add_attribute } from "../../../chunks/ssr.js";
const title = "Calendar";
const calendar = {
  src: "https://calendar.google.com/calendar/embed?src=kehillatharlem%40gmail.com&ctz=America%2FNew_York",
  title: "Kehillat Harlem Calendar"
};
const content = {
  title,
  calendar
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto px-4 py-8 max-w-6xl"><h1 class="text-3xl font-bold mb-6">${escape(content.title)}</h1> <div class="relative w-full" style="padding-bottom: 75%;" data-svelte-h="svelte-j9mzfj"><iframe${add_attribute("src", content.calendar.src, 0)} class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" style="border: 0" scrolling="no"${add_attribute("title", content.calendar.title, 0)}></iframe></div> </div>`;
});
export {
  Page as default
};
