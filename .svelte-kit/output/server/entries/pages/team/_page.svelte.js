import { c as create_ssr_component, d as add_attribute, f as escape, e as each } from "../../../chunks/ssr.js";
const rabbi = {
  name: "Rabbi Kyle Savitch",
  bio: "Rabbi Savitch received semikha from Yeshivat Chovevei Torah in 2021. He has been active in the Harlem Jewish community since 2016 and helped to found the Harlem Moishe House in 2018. Kyle and his wife, Liran, live in Central Harlem where they enjoy having guests for Shabbat meals. In his free time, Kyle enjoys cooking and rock climbing.",
  image: "https://eliauf23.github.io/kh-website/rabbi-kyle.jpeg"
};
const trustees = [
  {
    name: "Elizabeth Aufzien",
    image: "https://eliauf23.github.io/kh-website/elizabeth-aufzien.jpg"
  },
  {
    name: "Mark Eckstein",
    image: "https://eliauf23.github.io/kh-website/mark-eckstein.png"
  },
  {
    name: "Arielle Flax",
    image: "https://eliauf23.github.io/kh-website/arielle-flax.jpg"
  },
  {
    name: "Marisa Laks",
    image: "https://eliauf23.github.io/kh-website/marisa-laks.jpg"
  },
  {
    name: "Adam Rosenberg",
    image: "https://eliauf23.github.io/kh-website/adam-rosenberg.png"
  },
  {
    name: "Jonathan Schachter",
    image: "https://eliauf23.github.io/kh-website/jonathan-schachter.png"
  },
  {
    name: "Jay Worenklein",
    image: "https://eliauf23.github.io/kh-website/jay-worenklein.png"
  }
];
const leadershipCommittee = [
  "Arielle Flax",
  "Liran Messinger",
  "Zachary Carruthers-Rothberg",
  "Ariel Kaye",
  "Chesed Leon",
  "Sam Lipschitz",
  "Michel Liv",
  "Sarah Schecker",
  "Jonathan Zuckerman"
];
const getInvolved = {
  title: "Get Involved",
  description: "Interested in contributing to our community? We're always looking for volunteers and committee members.",
  buttonText: "Contact Us",
  buttonLink: "/contact"
};
const content = {
  rabbi,
  trustees,
  leadershipCommittee,
  getInvolved
};
const css = {
  code: ".container.svelte-1ngc2ab{margin-left:auto;margin-right:auto;max-width:80rem;padding-left:1rem;padding-right:1rem\n}@media(min-width: 640px){.container.svelte-1ngc2ab{padding-left:1.5rem;padding-right:1.5rem\n    }}@media(min-width: 1024px){.container.svelte-1ngc2ab{padding-left:2rem;padding-right:2rem\n    }}.btn-secondary.svelte-1ngc2ab{display:inline-block;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));padding-left:1.5rem;padding-right:1.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-weight:600;--tw-text-opacity:1;color:rgb(255 107 107 / var(--tw-text-opacity, 1));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}.btn-secondary.svelte-1ngc2ab:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))\n}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import content from '$content/team.json';\\n<\/script>\\n\\n<div class=\\"container mx-auto px-4 py-8 max-w-4xl\\">\\n  <!-- Rabbi Section -->\\n  <div class=\\"flex flex-col md:flex-row gap-8 mb-16\\">\\n    <div class=\\"md:w-1/3\\">\\n      <img src={content.rabbi.image} alt={content.rabbi.name} class=\\"w-full rounded-lg\\" />\\n    </div>\\n    <div class=\\"md:w-2/3\\">\\n      <h1 class=\\"text-3xl font-bold mb-4\\">{content.rabbi.name}</h1>\\n      <p class=\\"text-gray-700 leading-relaxed\\">\\n        {content.rabbi.bio}\\n      </p>\\n    </div>\\n  </div>\\n\\n  <!-- Trustees Section -->\\n  <h2 class=\\"text-3xl font-bold mb-8 text-center\\">Trustees</h2>\\n  <div class=\\"space-y-8 mb-16\\">\\n    {#each content.trustees as trustee}\\n      <div class=\\"flex items-center gap-6\\">\\n        <img\\n          src={trustee.image}\\n          alt={trustee.name}\\n          class=\\"w-32 h-32 object-cover rounded-lg\\"\\n        />\\n        <h3 class=\\"text-xl\\">{trustee.name}</h3>\\n      </div>\\n    {/each}\\n  </div>\\n\\n  <!-- Leadership Committee Section -->\\n  <h2 class=\\"text-3xl font-bold mb-8 text-center\\">Leadership Committee</h2>\\n  <div class=\\"mb-16\\">\\n    <div class=\\"text-center\\">\\n      <p class=\\"text-lg leading-relaxed mb-4\\">\\n        {content.leadershipCommittee.join(\\" | \\")}\\n      </p>\\n    </div>\\n  </div>\\n\\n  <!-- Get Involved -->\\n  <div class=\\"py-16 bg-primary text-white rounded-lg\\">\\n    <div class=\\"text-center px-8\\">\\n      <h2 class=\\"text-3xl font-bold mb-6\\">{content.getInvolved.title}</h2>\\n      <p class=\\"text-xl mb-8 max-w-2xl mx-auto\\">\\n        {content.getInvolved.description}\\n      </p>\\n      <a href={content.getInvolved.buttonLink} class=\\"btn-secondary\\">\\n        {content.getInvolved.buttonText}\\n      </a>\\n    </div>\\n  </div>\\n</div>\\n\\n<style lang=\\"postcss\\">\\n  .container {\\n\\n    margin-left: auto;\\n\\n    margin-right: auto;\\n\\n    max-width: 80rem;\\n\\n    padding-left: 1rem;\\n\\n    padding-right: 1rem\\n}\\n\\n@media (min-width: 640px) {\\n\\n    .container {\\n\\n        padding-left: 1.5rem;\\n\\n        padding-right: 1.5rem\\n    }\\n}\\n\\n@media (min-width: 1024px) {\\n\\n    .container {\\n\\n        padding-left: 2rem;\\n\\n        padding-right: 2rem\\n    }\\n}\\n\\n  .btn-secondary {\\n\\n    display: inline-block;\\n\\n    border-radius: 0.5rem;\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\\n\\n    padding-left: 1.5rem;\\n\\n    padding-right: 1.5rem;\\n\\n    padding-top: 0.75rem;\\n\\n    padding-bottom: 0.75rem;\\n\\n    font-weight: 600;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(255 107 107 / var(--tw-text-opacity, 1));\\n\\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\\n\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\n    transition-duration: 200ms\\n}\\n\\n  .btn-secondary:hover {\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1))\\n}\\n</style>\\n"],"names":[],"mappings":"AA0DE,yBAAW,CAET,WAAW,CAAE,IAAI,CAEjB,YAAY,CAAE,IAAI,CAElB,SAAS,CAAE,KAAK,CAEhB,YAAY,CAAE,IAAI,CAElB,aAAa,CAAE;AACnB,CAEA,MAAO,YAAY,KAAK,CAAE,CAEtB,yBAAW,CAEP,YAAY,CAAE,MAAM,CAEpB,aAAa,CAAE;AACvB,IAAI,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CAEvB,yBAAW,CAEP,YAAY,CAAE,IAAI,CAElB,aAAa,CAAE;AACvB,IAAI,CACJ,CAEE,6BAAe,CAEb,OAAO,CAAE,YAAY,CAErB,aAAa,CAAE,MAAM,CAErB,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAE5D,YAAY,CAAE,MAAM,CAEpB,aAAa,CAAE,MAAM,CAErB,WAAW,CAAE,OAAO,CAEpB,cAAc,CAAE,OAAO,CAEvB,WAAW,CAAE,GAAG,CAEhB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CAEnD,mBAAmB,CAAE,KAAK,CAAC,CAAC,gBAAgB,CAAC,CAAC,YAAY,CAAC,CAAC,qBAAqB,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAE/F,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAExD,mBAAmB,CAAE;AACzB,CAEE,6BAAc,MAAO,CAEnB,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC;AAC/D"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container mx-auto px-4 py-8 max-w-4xl svelte-1ngc2ab"> <div class="flex flex-col md:flex-row gap-8 mb-16"><div class="md:w-1/3" data-svelte-h="svelte-sht5zl"><img${add_attribute("src", content.rabbi.image, 0)}${add_attribute("alt", content.rabbi.name, 0)} class="w-full rounded-lg"></div> <div class="md:w-2/3"><h1 class="text-3xl font-bold mb-4">${escape(content.rabbi.name)}</h1> <p class="text-gray-700 leading-relaxed">${escape(content.rabbi.bio)}</p></div></div>  <h2 class="text-3xl font-bold mb-8 text-center" data-svelte-h="svelte-8shaf5">Trustees</h2> <div class="space-y-8 mb-16">${each(content.trustees, (trustee) => {
    return `<div class="flex items-center gap-6"><img${add_attribute("src", trustee.image, 0)}${add_attribute("alt", trustee.name, 0)} class="w-32 h-32 object-cover rounded-lg"> <h3 class="text-xl">${escape(trustee.name)}</h3> </div>`;
  })}</div>  <h2 class="text-3xl font-bold mb-8 text-center" data-svelte-h="svelte-12zfya6">Leadership Committee</h2> <div class="mb-16"><div class="text-center"><p class="text-lg leading-relaxed mb-4">${escape(content.leadershipCommittee.join(" | "))}</p></div></div>  <div class="py-16 bg-primary text-white rounded-lg"><div class="text-center px-8"><h2 class="text-3xl font-bold mb-6">${escape(content.getInvolved.title)}</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">${escape(content.getInvolved.description)}</p> <a${add_attribute("href", content.getInvolved.buttonLink, 0)} class="btn-secondary svelte-1ngc2ab">${escape(content.getInvolved.buttonText)}</a></div></div> </div>`;
});
export {
  Page as default
};
