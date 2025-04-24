import { c as create_ssr_component, d as add_attribute, e as each, f as escape } from "../../../chunks/ssr.js";
const paragraphs = [
  "Kehillat Harlem was founded on a crowded sidewalk in Harlem in 2017. Determined to create a space in Harlem which embraced tradition while also aiming to be fully inclusive, our founders created a minyan (prayer community) which they could be proud to participate in.",
  "Founded on the 18th day of the omer (the period between the holidays of Passover and Shavuot), the day is associated with Netzach She'b'tiferet (endurance/consistency in compassion). Feeling that this was core to the mission of our minyan, the name Kehillat Netzach She'b'tiferet was adopted.",
  "We strive to make each person feel at home in our prayer space by upholding our commitment to halachah (Jewish law) while working hard to hold our commitments to maximum inclusivity. Our tefillot (prayer services) are liturgically traditional and there is a mehitza (separation between genders) while davening. Daveners (those who pray) sit in the section with which they identify, and we make space for anyone who identifies outside of the gender binary. Tefillot are male-led, and the Kabbalat Shabbat service (which introduces the onset of Shabbat) is open to be led by any community member. Torah reading is open to community members of any gender identity to read.",
  "In addition to tefillot, we have regular meals, learning opportunities, and gatherings for the community. We hope we will have the opportunity to share space with you soon."
];
const addressString = "Address (not for mail)\n2248 Adam Clayton Powell Jr Blvd\nLocated in Storefront\nFor mailing address, please email us\n";
const content = {
  paragraphs,
  addressString
};
const css = {
  code: ".prose{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))\n}.prose p{line-height:1.625\n}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import content from '$content/about.json';\\n<\/script>\\n\\n<div class=\\"container mx-auto px-4 py-8 max-w-4xl\\">\\n  <div class=\\"text-center my-12\\">\\n    <h1 class=\\"text-4xl font-bold mb-6\\">\\n      About Kehillat Harlem (optional heading)\\n    </h1>\\n    <p class=\\"text-xl font-medium text-gray-700 mb-8\\">(optional subheading)</p>\\n  </div>\\n  <!-- TODO: could add image carousel here! -->\\n  <!-- TODO: make this a square image -->\\n  <div class=\\"mb-12\\">\\n    <img\\n      src={content.imageSrc}\\n      alt={content.imageAlt}\\n      class=\\"w-full max-h-[50vh] aspect-square object-cover rounded-lg shadow-lg mb-8\\"\\n    />\\n  </div>\\n\\n  <div class=\\"prose prose-lg max-w-none\\">\\n    {#each content.paragraphs as paragraph}\\n      <p class=\\"mb-6\\">{paragraph}</p>\\n    {/each}\\n\\n    <div class=\\"mt-12 p-6 bg-gray-50 rounded-lg text-sm\\">\\n      <!-- <h2 class=\\"text-2xl font-semibold mb-4\\">Visit Us</h2> -->\\n      {#each content.addressString.split(\\"\\\\n\\") as line}\\n        {#if line}\\n          <p class=\\"mb-2\\">{line}</p>\\n        {/if}\\n      {/each}\\n    </div>\\n  </div>\\n</div>\\n\\n<style lang=\\"postcss\\">\\n  :global(.prose) {\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(55 65 81 / var(--tw-text-opacity, 1))\\n}\\n\\n  :global(.prose p) {\\n\\n    line-height: 1.625\\n}\\n</style>\\n"],"names":[],"mappings":"AAsCU,MAAQ,CAEd,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACnD,CAEU,QAAU,CAEhB,WAAW,CAAE;AACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container mx-auto px-4 py-8 max-w-4xl"><div class="text-center my-12" data-svelte-h="svelte-1d28587"><h1 class="text-4xl font-bold mb-6">About Kehillat Harlem (optional heading)</h1> <p class="text-xl font-medium text-gray-700 mb-8">(optional subheading)</p></div>   <div class="mb-12" data-svelte-h="svelte-1psf1pl"><img${add_attribute("src", content.imageSrc, 0)}${add_attribute("alt", content.imageAlt, 0)} class="w-full max-h-[50vh] aspect-square object-cover rounded-lg shadow-lg mb-8"></div> <div class="prose prose-lg max-w-none">${each(content.paragraphs, (paragraph) => {
    return `<p class="mb-6">${escape(paragraph)}</p>`;
  })} <div class="mt-12 p-6 bg-gray-50 rounded-lg text-sm"> ${each(content.addressString.split("\n"), (line) => {
    return `${line ? `<p class="mb-2">${escape(line)}</p>` : ``}`;
  })}</div></div> </div>`;
});
export {
  Page as default
};
